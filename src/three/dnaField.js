// dnaField.js – framework-agnostic Three.js "DNA data-network" background.
//
// Renders many small DNA double-helices styled as glowing data networks:
// glassy/iridescent nucleotide NODES connected by additive network EDGES
// (backbone + base-pair rungs + sparse cross-links). Scattered across the whole
// viewport on a jittered grid, drifting + slowly rotating, with bloom glow.
//
// Designed as a site background: transparent canvas (page bg shows through),
// paused when the tab is hidden, reduced on mobile, full dispose() teardown.
//
// Public API:
//   const field = createDnaField(canvas, params)
//   field.setParams(partial)   // live-tune; rebuilds only on count/size/palette
//   field.dispose()            // full teardown (GL, geometries, materials, listeners)
//
// params: { count, size, glow, rough, speed, palette }   palette ∈ 'mixed'|'green'|'cool'

import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

// Site base palette: teal + violet dominant (same as the live MoleculeBackground),
// Chemical-Green (#00ff99) only as the accent "hub" colour.
const TEAL = 0x64b2c0, VIOLET = 0x9480b9, GREEN = 0x00ff99, BLUE = 0x7fb0ff
const PALETTES = {
  mixed: [[TEAL, VIOLET, GREEN], [VIOLET, TEAL, GREEN], [TEAL, BLUE, GREEN]],
  green: [[GREEN, 0x39d3a0, 0x7fffd4], [0x10b981, GREEN, 0x39d3a0]],
  cool: [[TEAL, VIOLET, BLUE], [0x4fb8cc, VIOLET, TEAL]], // no near-white node colour
}

const SITE_BG = 0x07071e
const DEFAULTS = { count: 16, size: 0.72, glow: 0.34, rough: 0.6, speed: 2.0, palette: 'cool' }

export function createDnaField(canvas, params = {}) {
  const state = { ...DEFAULTS, ...params }

  const isMobile = window.matchMedia('(max-width: 767px)').matches
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Feature-detect WebGL2 BEFORE constructing the renderer, so a no-GPU / headless
  // environment (the render-smoke runner) or a browser without WebGL degrades
  // gracefully (caller's try/catch) instead of three.js emitting a console.error
  // – which would otherwise fail the smoke gate and flash an error to real users.
  const gl = canvas.getContext('webgl2', { alpha: true, antialias: !isMobile, powerPreference: 'high-performance' })
  if (!gl) throw new Error('WebGL2 unavailable')

  const renderer = new THREE.WebGLRenderer({ canvas, context: gl, alpha: true })
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.15 // a touch brighter / lighter nodes

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(SITE_BG, 0.045) // a touch hazier / softer depth

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200)
  camera.position.set(0, 0, 26)

  scene.add(new THREE.AmbientLight(0x3a4263, 1.0))
  const l1 = new THREE.PointLight(TEAL, 200, 90); l1.position.set(14, 10, 18); scene.add(l1)
  const l2 = new THREE.PointLight(VIOLET, 200, 90); l2.position.set(-16, -8, 12); scene.add(l2)
  const l3 = new THREE.PointLight(GREEN, 120, 80); l3.position.set(0, 14, -10); scene.add(l3)

  // PMREM studio environment → high-quality reflections for the physical nodes.
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04)
  scene.environment = envRT.texture

  const composer = new EffectComposer(renderer)
  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), state.glow, 0.5, 0.08)
  composer.addPass(bloom)
  const outputPass = new OutputPass()
  composer.addPass(outputPass)
  composer.setSize(window.innerWidth, window.innerHeight)

  const sphereGeo = new THREE.SphereGeometry(1, 16, 16) // shared node geometry
  const tmp = new THREE.Object3D()

  let field = []         // { grp, spin, drift, baseY }
  let ownedMeshes = []   // InstancedMeshes – dispose to free instance buffers
  let ownedMats = []     // materials to dispose / live-update
  let ownedGeos = []     // per-build BufferGeometries (network edges) to dispose

  function effectiveCount() {
    return isMobile ? Math.min(state.count, 5) : state.count
  }

  // One helix = glowing nodes + an additive line-network (backbone, rungs, cross-links).
  function buildHelix(colors, scale) {
    const g = new THREE.Group()
    const BP = 14, R = 2.2, rise = 0.5, twist = 0.6, H = BP * rise, yOff = -H / 2

    const A = [], B = []
    for (let i = 0; i < BP; i++) {
      const a = i * twist, y = i * rise + yOff
      A.push(new THREE.Vector3(Math.cos(a) * R, y, Math.sin(a) * R))
      B.push(new THREE.Vector3(Math.cos(a + Math.PI) * R, y, Math.sin(a + Math.PI) * R))
    }

    // --- network edges (additive glowing lines) ---
    const ePos = [], eCol = []
    const cA = new THREE.Color(colors[0]), cB = new THREE.Color(colors[1])
    const edge = (p, qy, c1, c2) => { ePos.push(p.x, p.y, p.z, qy.x, qy.y, qy.z); eCol.push(c1.r, c1.g, c1.b, c2.r, c2.g, c2.b) }
    for (let i = 0; i < BP; i++) {
      if (i < BP - 1) { edge(A[i], A[i + 1], cA, cA); edge(B[i], B[i + 1], cB, cB) } // backbone
      edge(A[i], B[i], cA, cB)                                                       // base-pair rung
      if (i < BP - 2 && i % 2 === 0) edge(A[i], B[i + 2], cA, cB)                    // sparse cross-link
    }
    const edgeGeo = new THREE.BufferGeometry()
    edgeGeo.setAttribute('position', new THREE.Float32BufferAttribute(ePos, 3))
    edgeGeo.setAttribute('color', new THREE.Float32BufferAttribute(eCol, 3))
    ownedGeos.push(edgeGeo)
    const edgeMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false })
    ownedMats.push(edgeMat)
    g.add(new THREE.LineSegments(edgeGeo, edgeMat))

    // --- nodes (glassy / iridescent instanced spheres) ---
    const nodeMat = new THREE.MeshPhysicalMaterial({ roughness: state.rough, metalness: 0.9, clearcoat: 1, clearcoatRoughness: 0.2, iridescence: 0.5, iridescenceIOR: 1.3, envMapIntensity: 1.2, transparent: true, opacity: 0.9 })
    ownedMats.push(nodeMat)
    const nodes = new THREE.InstancedMesh(sphereGeo, nodeMat, BP * 2)
    nodes.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(BP * 2 * 3), 3)
    const c = new THREE.Color()
    let n = 0
    for (let i = 0; i < BP; i++) {
      const acc = i % 4 === 0 // green "hub" nodes
      tmp.position.copy(A[i]); tmp.scale.setScalar(acc ? 0.26 : 0.16); tmp.rotation.set(0, 0, 0); tmp.updateMatrix()
      nodes.setMatrixAt(n, tmp.matrix); nodes.setColorAt(n, c.setHex(acc ? colors[2] : colors[0])); n++
      tmp.position.copy(B[i]); tmp.scale.setScalar(acc ? 0.26 : 0.16); tmp.updateMatrix()
      nodes.setMatrixAt(n, tmp.matrix); nodes.setColorAt(n, c.setHex(acc ? colors[2] : colors[1])); n++
    }
    nodes.instanceMatrix.needsUpdate = true; nodes.instanceColor.needsUpdate = true
    g.add(nodes); ownedMeshes.push(nodes)

    g.scale.setScalar(scale)
    return g
  }

  // deterministic pseudo-random so layout is stable across rebuilds within a session
  let seed = 1337
  const rnd = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296 }

  function clearField() {
    field.forEach((h) => scene.remove(h.grp))
    ownedMeshes.forEach((m) => m.dispose()) // frees instanceMatrix/instanceColor
    ownedMats.forEach((m) => m.dispose())
    ownedGeos.forEach((g) => g.dispose())
    field = []; ownedMeshes = []; ownedMats = []; ownedGeos = []
  }

  function rebuild() {
    clearField()
    seed = 1337
    const pals = PALETTES[state.palette] || PALETTES.mixed
    const n = effectiveCount()
    // jittered grid → even coverage across the whole viewport (no clustering)
    const cols = Math.max(1, Math.ceil(Math.sqrt(n * 1.6)))
    const rows = Math.max(1, Math.ceil(n / cols))
    for (let i = 0; i < n; i++) {
      const colors = pals[i % pals.length]
      const sc = state.size * (0.5 + rnd() * 0.55)
      const grp = buildHelix(colors, sc)
      const col = i % cols, row = Math.floor(i / cols)
      const gx = ((col + 0.5) / cols - 0.5) * 54 + (rnd() - 0.5) * 10
      const gy = ((row + 0.5) / rows - 0.5) * 36 + (rnd() - 0.5) * 9
      const gz = -6 - rnd() * 13 // always behind the origin → never looms close to the camera
      grp.position.set(gx, gy, gz)
      grp.rotation.set(rnd() * 0.8 - 0.4, rnd() * Math.PI, rnd() * 0.6 - 0.3)
      scene.add(grp)
      field.push({ grp, spin: (0.3 + rnd() * 0.5) * (rnd() < 0.5 ? -1 : 1), drift: rnd() * Math.PI * 2, baseY: gy })
    }
  }

  // subtle mouse parallax
  let targetX = 0, targetY = 0
  function onPointer(e) {
    targetX = (e.clientX / window.innerWidth - 0.5) * 1.6
    targetY = (e.clientY / window.innerHeight - 0.5) * 1.0
  }
  window.addEventListener('pointermove', onPointer, { passive: true })

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    composer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)

  let raf = 0, running = true, t = 0, last = 0
  function animate(now) {
    if (!running) return
    raf = requestAnimationFrame(animate)
    let dt = ((now || 0) - last) / 1000
    last = now || 0
    if (!(dt > 0) || dt > 0.1) dt = 0.016 // clamp first frame / refocus / hitches
    const f = dt * 60
    // rotation is the requested core behavior → always on; only drift respects reduced-motion
    t = (t + dt) % 10000
    camera.position.x += (targetX - camera.position.x) * 0.03 * f
    camera.position.y += (-targetY - camera.position.y) * 0.03 * f
    camera.lookAt(0, 0, 0)
    field.forEach((h) => {
      h.grp.rotation.y += 0.006 * h.spin * state.speed * f
      h.grp.position.y = h.baseY + Math.sin(t * 0.4 + h.drift) * 0.6 * (reduce ? 0 : 1)
    })
    composer.render()
  }

  function onVisibility() {
    running = !document.hidden
    if (running && !raf) { last = 0; animate() }
    if (!running) { cancelAnimationFrame(raf); raf = 0 }
  }
  document.addEventListener('visibilitychange', onVisibility)

  rebuild()
  animate()

  function setParams(p = {}) {
    const needRebuild =
      (p.count !== undefined && p.count !== state.count) ||
      (p.size !== undefined && p.size !== state.size) ||
      (p.palette !== undefined && p.palette !== state.palette)
    Object.assign(state, p)
    if (p.glow !== undefined) bloom.strength = state.glow
    if (p.rough !== undefined) ownedMats.forEach((m) => { if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) { m.roughness = state.rough; m.needsUpdate = true } })
    if (needRebuild) rebuild()
  }

  function dispose() {
    running = false
    cancelAnimationFrame(raf); raf = 0
    window.removeEventListener('pointermove', onPointer)
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
    clearField()
    sphereGeo.dispose()
    // EffectComposer.dispose() doesn't dispose its passes → free them explicitly.
    bloom.dispose(); outputPass.dispose(); renderPass.dispose(); composer.dispose()
    scene.environment = null; envRT.dispose(); pmrem.dispose()
    renderer.forceContextLoss() // deterministic GL context release (don't wait for GC)
    renderer.dispose()
  }

  return { setParams, dispose }
}
