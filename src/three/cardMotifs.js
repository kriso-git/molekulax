// cardMotifs.js — framework-agnostic Three.js "category motif" mini-scenes for
// the educational effect-cards. Each motif is parameterised by the category's
// accent colour. Used by the hidden /card-preview demo now, and will back the
// offline pre-render pipeline for the production cards.
//
//   const m = createCardMotif(canvas, 'neural', '#fbbf24')
//   m.dispose()
//
// Motifs: neural | plasma | molecule | dna | atom

import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

const SNOISE = `vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`

function fib(n, rx, ry, rz) {
  const a = [], ga = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) { const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i; a.push(new THREE.Vector3(Math.cos(th) * r * rx, y * ry, Math.sin(th) * r * rz)) }
  return a
}
const halo = (hex, r, op) => new THREE.Mesh(new THREE.SphereGeometry(r, 20, 20), new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: op, blending: THREE.AdditiveBlending, depthWrite: false }))

const MOTIFS = {
  neural(scene, col, hex) {
    const g = new THREE.Group(); scene.add(g)
    const N = 30, pts = fib(N, 4, 2.2, 2.3).map(v => v.add(new THREE.Vector3((Math.random() - .5) * 1.1, (Math.random() - .5) * 1.1, (Math.random() - .5) * 1.1)))
    const nodes = new THREE.InstancedMesh(new THREE.SphereGeometry(0.12, 12, 12), new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: 1.1, roughness: 0.35, metalness: 0.4 }), N), o = new THREE.Object3D()
    for (let i = 0; i < N; i++) { o.position.copy(pts[i]); o.scale.setScalar(0.5 + Math.random()); o.updateMatrix(); nodes.setMatrixAt(i, o.matrix) }
    nodes.instanceMatrix.needsUpdate = true; g.add(nodes)
    const pairs = [], lp = []
    for (let i = 0; i < N; i++) { const d = []; for (let j = 0; j < N; j++) if (j !== i) d.push([j, pts[i].distanceTo(pts[j])]); d.sort((a, b) => a[1] - b[1]); for (let k = 0; k < 3; k++) if (d[k] && i < d[k][0]) { pairs.push([pts[i], pts[d[k][0]]]); lp.push(pts[i].x, pts[i].y, pts[i].z, pts[d[k][0]].x, pts[d[k][0]].y, pts[d[k][0]].z) } }
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3))
    g.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: hex, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false })))
    const pu = [], pm = new THREE.MeshBasicMaterial({ color: 0xffffff })
    for (let k = 0; k < 9; k++) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), pm); m.userData = { s: Math.floor(Math.random() * pairs.length), f: Math.random(), sp: 0.012 + Math.random() * 0.02 }; g.add(m); pu.push(m) }
    return (t) => { g.rotation.y = t * 0.2; g.rotation.x = Math.sin(t * 0.22) * 0.1; pu.forEach(m => { const s = pairs[m.userData.s % pairs.length]; if (s) { m.position.lerpVectors(s[0], s[1], m.userData.f); m.userData.f += m.userData.sp; if (m.userData.f > 1) { m.userData.f = 0; m.userData.s = Math.floor(Math.random() * pairs.length) } } }) }
  },
  plasma(scene, col, hex) {
    const g = new THREE.Group(); scene.add(g)
    const mat = new THREE.ShaderMaterial({ uniforms: { uColor: { value: col }, uColor2: { value: new THREE.Color(0xffffff) }, uTime: { value: 0 } }, transparent: true,
      vertexShader: SNOISE + `uniform float uTime;varying vec3 vN;varying vec3 vP;varying float vNoise;void main(){float n=snoise(normal*1.8+uTime*0.25)*0.5+snoise(normal*4.0-uTime*0.4)*0.25;vNoise=n;vec3 p=position+normal*n*0.45;vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(p,1.0);vP=mv.xyz;gl_Position=projectionMatrix*mv;}`,
      fragmentShader: `uniform vec3 uColor;uniform vec3 uColor2;varying vec3 vN;varying vec3 vP;varying float vNoise;void main(){vec3 v=normalize(-vP);float fres=pow(1.0-max(dot(vN,v),0.0),2.0);vec3 base=mix(uColor*0.55,uColor2,smoothstep(-0.1,0.5,vNoise)*0.7);gl_FragColor=vec4(base*(0.55+vNoise*0.7)+vec3(fres*1.1),0.93);}` })
    g.add(new THREE.Mesh(new THREE.SphereGeometry(1.15, 72, 72), mat))
    const shells = []
    for (let s = 0; s < 3; s++) { const sh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6 + s * 0.4, 1), new THREE.MeshBasicMaterial({ color: hex, wireframe: true, transparent: true, opacity: 0.2 - s * 0.05, blending: THREE.AdditiveBlending })); sh.userData = { sp: (0.18 + s * 0.1) * (s % 2 ? -1 : 1) }; g.add(sh); shells.push(sh) }
    const an = 400, ap = new Float32Array(an * 3); for (let i = 0; i < an; i++) { const v = new THREE.Vector3().randomDirection().multiplyScalar(1.7 + Math.random() * 1.3); ap.set([v.x, v.y, v.z], i * 3) }
    const ag = new THREE.BufferGeometry(); ag.setAttribute('position', new THREE.Float32BufferAttribute(ap, 3))
    g.add(new THREE.Points(ag, new THREE.PointsMaterial({ color: hex, size: 0.05, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false })))
    return (t) => { mat.uniforms.uTime.value = t; g.rotation.y = t * 0.12; shells.forEach(sh => { sh.rotation.y = t * sh.userData.sp; sh.rotation.x = t * sh.userData.sp * 0.6 }) }
  },
  molecule(scene, col, hex, renderer) {
    const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    const g = new THREE.Group(); scene.add(g)
    const A = 34, pts = fib(A, 2.3, 2.3, 2.3)
    const glass = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.08, metalness: 0.5, clearcoat: 1, clearcoatRoughness: 0.1, iridescence: 0.85, iridescenceIOR: 1.4, envMapIntensity: 1.7 })
    const at = new THREE.InstancedMesh(new THREE.SphereGeometry(0.2, 16, 16), glass, A), o = new THREE.Object3D()
    for (let i = 0; i < A; i++) { o.position.copy(pts[i]); o.scale.setScalar(0.85 + Math.random() * 0.4); o.updateMatrix(); at.setMatrixAt(i, o.matrix) }
    at.instanceMatrix.needsUpdate = true; g.add(at)
    const bm = new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: 0.7, roughness: 0.4, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending })
    const up = new THREE.Vector3(0, 1, 0), q = new THREE.Quaternion(), seen = new Set()
    for (let i = 0; i < A; i++) { const d = []; for (let j = 0; j < A; j++) if (j !== i) d.push([j, pts[i].distanceTo(pts[j])]); d.sort((a, b) => a[1] - b[1]); for (let k = 0; k < 3; k++) { const j = d[k][0], key = Math.min(i, j) + '-' + Math.max(i, j); if (seen.has(key)) continue; seen.add(key); const dir = pts[j].clone().sub(pts[i]), len = dir.length(); dir.normalize(); const b = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, len, 7), bm); q.setFromUnitVectors(up, dir); b.quaternion.copy(q); b.position.copy(pts[i].clone().add(pts[j]).multiplyScalar(0.5)); g.add(b) } }
    g.add(halo(hex, 0.85, 0.22))
    return (t) => { g.rotation.y = t * 0.4; g.rotation.x = 0.25 + Math.sin(t * 0.3) * 0.15 }
  },
  dna(scene, col, hex) {
    const g = new THREE.Group(); scene.add(g)
    const BP = 26, R = 1.5, rise = 0.32, tw = 0.45, H = BP * rise, y0 = -H / 2
    const sm = new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: 0.7, roughness: 0.3, metalness: 0.4 })
    const sm2 = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: hex, emissiveIntensity: 0.4, roughness: 0.3, metalness: 0.4 })
    const rm = new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending })
    const sg = new THREE.SphereGeometry(0.13, 12, 12), up = new THREE.Vector3(0, 1, 0), q = new THREE.Quaternion()
    for (let i = 0; i < BP; i++) { const a = i * tw, y = i * rise + y0; const A = new THREE.Vector3(Math.cos(a) * R, y, Math.sin(a) * R), B = new THREE.Vector3(Math.cos(a + Math.PI) * R, y, Math.sin(a + Math.PI) * R); const ma = new THREE.Mesh(sg, sm); ma.position.copy(A); g.add(ma); const mb = new THREE.Mesh(sg, sm2); mb.position.copy(B); g.add(mb); const dir = B.clone().sub(A), len = dir.length(); dir.normalize(); const r = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, len, 6), rm); q.setFromUnitVectors(up, dir); r.quaternion.copy(q); r.position.copy(A.clone().add(B).multiplyScalar(0.5)); g.add(r) }
    g.rotation.z = 0.25
    return (t) => { g.rotation.y = t * 0.6 }
  },
  atom(scene, col, hex) {
    const g = new THREE.Group(); scene.add(g)
    const nm = new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: 1.0, roughness: 0.3, metalness: 0.5 })
    for (let i = 0; i < 5; i++) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), nm); m.position.copy(new THREE.Vector3().randomDirection().multiplyScalar(0.25)); g.add(m) }
    g.add(halo(hex, 0.7, 0.3))
    const rings = new THREE.Group(); g.add(rings)
    const rm = new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending }), em = new THREE.MeshBasicMaterial({ color: 0xffffff }), els = []
    const orient = [[0, 0], [Math.PI / 2.3, 0.4], [-Math.PI / 2.6, 1.1]]
    orient.forEach((or, k) => { const ring = new THREE.Mesh(new THREE.TorusGeometry(2 + k * 0.15, 0.015, 8, 80), rm); ring.rotation.set(or[0], or[1], 0); rings.add(ring); const e = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 10), em); e.userData = { ring: k, a: Math.random() * 6.28, or }; rings.add(e); els.push(e) })
    return (t) => { rings.rotation.y = t * 0.25; els.forEach(e => { const Rr = 2 + e.userData.ring * 0.15, a = e.userData.a + t * (1.4 - e.userData.ring * 0.25); const v = new THREE.Vector3(Math.cos(a) * Rr, Math.sin(a) * Rr, 0); v.applyEuler(new THREE.Euler(e.userData.or[0], e.userData.or[1], 0)); e.position.copy(v) }) }
  },
}

export const MOTIF_NAMES = Object.keys(MOTIFS)

export function createCardMotif(canvas, motif, hex) {
  const build = MOTIFS[motif] || MOTIFS.neural
  // feature-detect WebGL2 first so no-GPU/headless degrades gracefully (caller try/catch)
  const gl = canvas.getContext('webgl2', { alpha: true, antialias: true })
  if (!gl) throw new Error('WebGL2 unavailable')
  const renderer = new THREE.WebGLRenderer({ canvas, context: gl, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
  renderer.setClearColor(0x000000, 0)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.18

  const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x05060e, 0.05)
  const cam = new THREE.PerspectiveCamera(50, 1.8, 0.1, 100); cam.position.set(0, 0, 7.2)
  scene.add(new THREE.AmbientLight(0x3a4263, 1.0))
  const pa = new THREE.PointLight(hex, 110, 60); pa.position.set(5, 5, 7); scene.add(pa)
  const pb = new THREE.PointLight(0xffffff, 40, 60); pb.position.set(-6, -4, 4); scene.add(pb)

  const update = build(scene, new THREE.Color(hex), hex, renderer)

  const resize = () => { const w = canvas.clientWidth || 2, h = canvas.clientHeight || 2; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix() }
  resize()
  const ro = new ResizeObserver(resize); ro.observe(canvas)

  let raf = 0, running = true, t = 0
  const loop = () => { if (!running) return; raf = requestAnimationFrame(loop); t += 0.016; update(t); renderer.render(scene, cam) }
  const onVis = () => { running = !document.hidden; if (running && !raf) loop(); if (!running) { cancelAnimationFrame(raf); raf = 0 } }
  document.addEventListener('visibilitychange', onVis)
  loop()

  function dispose() {
    running = false; cancelAnimationFrame(raf); raf = 0
    ro.disconnect(); document.removeEventListener('visibilitychange', onVis)
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose()
      if (obj.material) { const mats = Array.isArray(obj.material) ? obj.material : [obj.material]; mats.forEach(m => m.dispose()) }
    })
    if (scene.environment) scene.environment.dispose()
    renderer.forceContextLoss()
    renderer.dispose()
  }
  return { dispose }
}
