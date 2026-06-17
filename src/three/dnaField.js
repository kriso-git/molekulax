// dnaField.js — framework-agnostic Three.js "floating DNA helices" background.
//
// Renders many small, detailed, glossy double-helix strands drifting in depth,
// with bloom glow. Designed as a site background: transparent canvas (the page
// background shows through), pointer-events handled by the host element, paused
// when the tab is hidden, reduced on mobile / prefers-reduced-motion.
//
// Public API:
//   const field = createDnaField(canvas, params)
//   field.setParams(partial)   // live-tune; rebuilds geometry only when count/size/palette change
//   field.dispose()            // full teardown (GL context, geometries, materials, listeners)
//
// params: { count, size, glow, rough, speed, palette }
//   palette ∈ 'mixed' | 'green' | 'cool'

import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'

const PALETTES = {
  mixed: [[0x64b2c0, 0x9480b9, 0x00ff99], [0x00ff99, 0x39d3a0, 0x64b2c0], [0x9480b9, 0x7fb0ff, 0x00ff99]],
  green: [[0x00ff99, 0x39d3a0, 0x7fffd4], [0x10b981, 0x00ff99, 0x39d3a0]],
  cool: [[0x64b2c0, 0x9480b9, 0x7fb0ff], [0x7fe9ff, 0x9480b9, 0x64b2c0]],
}

const DEFAULTS = { count: 7, size: 0.55, glow: 0.7, rough: 0.2, speed: 1.0, palette: 'mixed' }

export function createDnaField(canvas, params = {}) {
  const state = { ...DEFAULTS, ...params }

  const mqMobile = window.matchMedia('(max-width: 767px)')
  const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  const isMobile = mqMobile.matches
  const reduce = mqReduce.matches

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: true, powerPreference: 'high-performance' })
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x05050b, 0.03)

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200)
  camera.position.set(0, 0, 26)

  scene.add(new THREE.AmbientLight(0x3a4263, 1.0))
  const l1 = new THREE.PointLight(0x64b2c0, 200, 90); l1.position.set(14, 10, 18); scene.add(l1)
  const l2 = new THREE.PointLight(0x9480b9, 200, 90); l2.position.set(-16, -8, 12); scene.add(l2)
  const l3 = new THREE.PointLight(0x00ff99, 120, 80); l3.position.set(0, 14, -10); scene.add(l3)

  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), state.glow, 0.5, 0.08)
  composer.addPass(bloom)
  composer.addPass(new OutputPass())
  composer.setSize(window.innerWidth, window.innerHeight)

  // shared geometry (re-used across every instance)
  const sphereGeo = new THREE.SphereGeometry(1, 16, 16)
  const rungGeo = new THREE.CylinderGeometry(1, 1, 1, 8)
  const up = new THREE.Vector3(0, 1, 0)
  const q = new THREE.Quaternion()
  const tmp = new THREE.Object3D()

  let field = []         // { grp, spin, drift, baseY }
  let ownedMats = []     // materials to dispose / live-update
  let ownedGeos = []     // per-build tube geometries to dispose

  function effectiveCount() {
    return isMobile ? Math.min(state.count, 4) : state.count
  }

  function buildHelix(colors, scale) {
    const g = new THREE.Group()
    const BP = 14, R = 2.2, rise = 0.5, twist = 0.6, H = BP * rise, yOff = -H / 2

    const matA = new THREE.MeshStandardMaterial({ color: colors[0], roughness: state.rough, metalness: 0.65, emissive: colors[0], emissiveIntensity: 0.6 })
    const matB = new THREE.MeshStandardMaterial({ color: colors[1], roughness: state.rough, metalness: 0.65, emissive: colors[1], emissiveIntensity: 0.6 })
    ownedMats.push(matA, matB)

    const ptsA = [], ptsB = [], S = 6
    for (let i = 0; i <= BP * S; i++) {
      const t = i / S, a = t * twist, y = t * rise + yOff
      ptsA.push(new THREE.Vector3(Math.cos(a) * R, y, Math.sin(a) * R))
      ptsB.push(new THREE.Vector3(Math.cos(a + Math.PI) * R, y, Math.sin(a + Math.PI) * R))
    }
    const geoA = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(ptsA), BP * S, 0.14, 7, false)
    const geoB = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(ptsB), BP * S, 0.14, 7, false)
    ownedGeos.push(geoA, geoB)
    g.add(new THREE.Mesh(geoA, matA), new THREE.Mesh(geoB, matB))

    const nucMat = new THREE.MeshStandardMaterial({ roughness: state.rough, metalness: 0.6, emissiveIntensity: 0.7 })
    ownedMats.push(nucMat)
    const nuc = new THREE.InstancedMesh(sphereGeo, nucMat, BP * 2)
    nuc.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(BP * 2 * 3), 3)

    const rungMat = new THREE.MeshStandardMaterial({ roughness: state.rough, metalness: 0.4, emissiveIntensity: 0.45 })
    ownedMats.push(rungMat)
    const rung = new THREE.InstancedMesh(rungGeo, rungMat, BP * 2)
    rung.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(BP * 2 * 3), 3)

    const c = new THREE.Color()
    let n = 0, r = 0
    for (let i = 0; i < BP; i++) {
      const a = i * twist, y = i * rise + yOff
      const sa = new THREE.Vector3(Math.cos(a) * R, y, Math.sin(a) * R)
      const sb = new THREE.Vector3(Math.cos(a + Math.PI) * R, y, Math.sin(a + Math.PI) * R)
      const acc = i % 4 === 0
      tmp.position.copy(sa); tmp.scale.setScalar(acc ? 0.4 : 0.3); tmp.rotation.set(0, 0, 0); tmp.updateMatrix()
      nuc.setMatrixAt(n, tmp.matrix); nuc.setColorAt(n, c.setHex(acc ? colors[2] : colors[0])); n++
      tmp.position.copy(sb); tmp.scale.setScalar(acc ? 0.4 : 0.3); tmp.updateMatrix()
      nuc.setMatrixAt(n, tmp.matrix); nuc.setColorAt(n, c.setHex(acc ? colors[2] : colors[1])); n++
      const mid = new THREE.Vector3().copy(sa).add(sb).multiplyScalar(0.5)
      r = placeRung(rung, r, sa, mid, acc ? colors[2] : colors[0], c)
      r = placeRung(rung, r, sb, mid, acc ? colors[2] : colors[1], c)
    }
    nuc.instanceMatrix.needsUpdate = true; nuc.instanceColor.needsUpdate = true
    rung.instanceMatrix.needsUpdate = true; rung.instanceColor.needsUpdate = true
    g.add(nuc, rung)
    g.scale.setScalar(scale)
    return g
  }

  function placeRung(mesh, idx, from, to, colorHex, c) {
    const dir = new THREE.Vector3().copy(to).sub(from)
    const len = dir.length() - 0.12
    dir.normalize()
    const pos = new THREE.Vector3().copy(from).addScaledVector(dir, len / 2)
    q.setFromUnitVectors(up, dir)
    tmp.position.copy(pos); tmp.quaternion.copy(q); tmp.scale.set(0.06, len, 0.06); tmp.updateMatrix()
    mesh.setMatrixAt(idx, tmp.matrix)
    mesh.setColorAt(idx, c.setHex(colorHex))
    return idx + 1
  }

  // deterministic pseudo-random so layout is stable across rebuilds within a session
  let seed = 1337
  const rnd = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296 }

  function clearField() {
    field.forEach((h) => scene.remove(h.grp))
    field = []
    ownedMats.forEach((m) => m.dispose())
    ownedGeos.forEach((g) => g.dispose())
    ownedMats = []
    ownedGeos = []
  }

  function rebuild() {
    clearField()
    seed = 1337
    const pals = PALETTES[state.palette] || PALETTES.mixed
    const n = effectiveCount()
    for (let i = 0; i < n; i++) {
      const colors = pals[i % pals.length]
      const sc = state.size * (0.6 + rnd() * 0.9)
      const grp = buildHelix(colors, sc)
      grp.position.set((rnd() - 0.5) * 34, (rnd() - 0.5) * 22, (rnd() - 0.5) * 22 - 4)
      grp.rotation.set(rnd() * 0.8 - 0.4, rnd() * Math.PI, rnd() * 0.6 - 0.3)
      scene.add(grp)
      field.push({ grp, spin: (0.1 + rnd() * 0.4) * (rnd() < 0.5 ? -1 : 1), drift: rnd() * Math.PI * 2, baseY: grp.position.y })
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

  let raf = 0
  let running = true
  let t = 0
  function animate() {
    if (!running) return
    raf = requestAnimationFrame(animate)
    const spd = reduce ? 0 : state.speed
    t += 0.016
    camera.position.x += (targetX - camera.position.x) * 0.03
    camera.position.y += (-targetY - camera.position.y) * 0.03
    camera.lookAt(0, 0, 0)
    field.forEach((h) => {
      h.grp.rotation.y += 0.004 * h.spin * spd
      h.grp.position.y = h.baseY + Math.sin(t * 0.4 + h.drift) * 0.6 * (reduce ? 0 : 1)
    })
    composer.render()
  }

  function onVisibility() {
    running = !document.hidden
    if (running && !raf) animate()
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
    if (p.rough !== undefined) ownedMats.forEach((m) => { m.roughness = state.rough; m.needsUpdate = true })
    if (needRebuild) rebuild()
  }

  function dispose() {
    running = false
    cancelAnimationFrame(raf); raf = 0
    window.removeEventListener('pointermove', onPointer)
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
    clearField()
    sphereGeo.dispose(); rungGeo.dispose()
    composer.dispose()
    renderer.dispose()
  }

  return { setParams, dispose }
}
