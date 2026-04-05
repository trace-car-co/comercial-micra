import { useEffect, useRef } from 'react'
import './Grainient.css'

const vertexSrc = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragmentSrc = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform float uWarpStrength;
  uniform float uWarpFrequency;
  uniform float uWarpSpeed;
  uniform float uWarpAmplitude;
  uniform float uBlendAngle;
  uniform float uRotationAmount;
  uniform float uContrast;
  uniform float uGamma;
  uniform float uSaturation;
  uniform float uGrainAmount;
  uniform float uGrainScale;
  uniform float uZoom;

  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  float taylorInvSqrt(float r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec3 p = permute(permute(permute(
      i.z + vec3(0.0, i1.z, i2.z))
      + i.y + vec3(0.0, i1.y, i2.y))
      + i.x + vec3(0.0, i1.x, i2.x));
    vec3 ns = 0.142857142857 * D.wyz - D.xzx;
    vec3 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec3 x_ = floor(j * ns.z);
    vec3 y_ = floor(j - 7.0 * x_);
    vec3 x4 = x_ * ns.x + ns.yyyy;
    vec3 y4 = y_ * ns.x + ns.yyyy;
    vec3 h = 1.0 - abs(x4) - abs(y4);
    vec4 b0 = vec4(x4.xy, y4.xy);
    vec4 b1 = vec4(x4.z, y4.z, 0.0, 0.0);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec2 a1 = b1.xy + s1.xy * vec2(sh.z);
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 norm = taylorInvSqrt(vec3(dot(p0,p0), dot(p1,p1), dot(p2,p2)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p0,x3)));
  }

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  vec3 hsv2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0);
    return c.z * mix(vec3(1.0), rgb, c.y);
  }

  void main() {
    vec2 uv = (vUv - 0.5) * uZoom + 0.5;
    float aspect = uResolution.x / uResolution.y;
    uv.x *= aspect;

    float n1 = snoise(vec3(uv * uWarpFrequency, uTime * uWarpSpeed * 0.1));
    float n2 = snoise(vec3(uv * uWarpFrequency + 100.0, uTime * uWarpSpeed * 0.1 + 50.0));
    uv += vec2(sin(n1 * uWarpAmplitude), cos(n2 * uWarpAmplitude)) * uWarpStrength * 0.01;

    float angle = atan(uv.y - 0.5, uv.x - 0.5 * aspect) + uBlendAngle;
    angle += snoise(vec3(uv * 2.0, uTime * 0.05)) * uRotationAmount * 0.01;

    float blend1 = smoothstep(-0.5, 0.5, sin(angle));
    float blend2 = smoothstep(-0.5, 0.5, sin(angle + 2.094));
    float blend3 = smoothstep(-0.5, 0.5, sin(angle + 4.189));

    vec3 color = uColor1 * blend1 + uColor2 * blend2 + uColor3 * blend3;
    color /= (blend1 + blend2 + blend3 + 0.001);

    float cn = snoise(vec3(uv * 3.0, uTime * 0.08));
    color += cn * 0.06;

    float grain = snoise(vec3(vUv * uResolution / uGrainScale, uTime * 3.0));
    color += grain * uGrainAmount;

    vec3 hsv = rgb2hsv(color);
    hsv.y *= uSaturation;
    color = hsv2rgb(hsv);

    color = pow(color, vec3(1.0 / uGamma));
    color = (color - 0.5) * uContrast + 0.5;

    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
  }
`

function createShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function hexToRGB(hex) {
  return [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  ]
}

export default function Grainient({
  color1 = '#143570',
  color2 = '#2059A5',
  color3 = '#0D0D0F',
  timeSpeed = 0.15,
  warpStrength = 1.0,
  warpFrequency = 4,
  warpSpeed = 1.5,
  warpAmplitude = 60.0,
  blendAngle = 0,
  rotationAmount = 400,
  contrast = 1.3,
  gamma = 1.0,
  saturation = 1.1,
  grainAmount = 0.08,
  grainScale = 2.0,
  zoom = 0.9,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const canvas = document.createElement('canvas')
    el.appendChild(canvas)
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false })
    if (!gl) return

    const vs = createShader(gl, gl.VERTEX_SHADER, vertexSrc)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentSrc)
    if (!vs || !fs) return

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }
    gl.useProgram(program)

    // Full-screen triangle
    const vertices = new Float32Array([-1, -1, 3, -1, -1, 3])
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    const posLoc = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    // Uniform locations
    const u = {}
    const names = [
      'uTime', 'uResolution', 'uColor1', 'uColor2', 'uColor3',
      'uWarpStrength', 'uWarpFrequency', 'uWarpSpeed', 'uWarpAmplitude',
      'uBlendAngle', 'uRotationAmount', 'uContrast', 'uGamma',
      'uSaturation', 'uGrainAmount', 'uGrainScale', 'uZoom',
    ]
    names.forEach((n) => { u[n] = gl.getUniformLocation(program, n) })

    // Set static uniforms
    const c1 = hexToRGB(color1), c2 = hexToRGB(color2), c3 = hexToRGB(color3)
    gl.uniform3f(u.uColor1, c1[0], c1[1], c1[2])
    gl.uniform3f(u.uColor2, c2[0], c2[1], c2[2])
    gl.uniform3f(u.uColor3, c3[0], c3[1], c3[2])
    gl.uniform1f(u.uWarpStrength, warpStrength)
    gl.uniform1f(u.uWarpFrequency, warpFrequency)
    gl.uniform1f(u.uWarpSpeed, warpSpeed)
    gl.uniform1f(u.uWarpAmplitude, warpAmplitude)
    gl.uniform1f(u.uBlendAngle, blendAngle)
    gl.uniform1f(u.uRotationAmount, rotationAmount)
    gl.uniform1f(u.uContrast, contrast)
    gl.uniform1f(u.uGamma, gamma)
    gl.uniform1f(u.uSaturation, saturation)
    gl.uniform1f(u.uGrainAmount, grainAmount)
    gl.uniform1f(u.uGrainScale, grainScale)
    gl.uniform1f(u.uZoom, zoom)

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const w = el.offsetWidth
      const h = el.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(u.uResolution, canvas.width, canvas.height)
    }
    window.addEventListener('resize', resize)
    resize()

    let raf
    const start = performance.now()
    function loop() {
      raf = requestAnimationFrame(loop)
      gl.uniform1f(u.uTime, (performance.now() - start) * 0.001 * timeSpeed)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buffer)
      el.removeChild(canvas)
    }
  }, [color1, color2, color3, timeSpeed, warpStrength, warpFrequency, warpSpeed, warpAmplitude, blendAngle, rotationAmount, contrast, gamma, saturation, grainAmount, grainScale, zoom])

  return <div ref={containerRef} className="grainient-container" />
}
