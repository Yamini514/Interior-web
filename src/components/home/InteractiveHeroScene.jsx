import { useEffect, useRef } from 'react'
import {
  AmbientLight,
  BoxGeometry,
  CircleGeometry,
  Clock,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  Group,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  TorusGeometry,
  Vector3,
  WebGLRenderer,
} from 'three'

export function InteractiveHeroScene() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new Scene()
    const camera = new PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 1.3, 6.4)

    const renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.outputColorSpace = SRGBColorSpace
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7))

    const roomGroup = new Group()
    scene.add(roomGroup)

    const ambientLight = new AmbientLight('#f4efe8', 1.1)
    const directionalLight = new DirectionalLight('#fef3c7', 1.8)
    directionalLight.position.set(4, 7, 5)
    const rimLight = new PointLight('#67e8f9', 1.1, 18)
    rimLight.position.set(-4, 3, 2)
    const accentLight = new PointLight('#f59e0b', 1.1, 16)
    accentLight.position.set(3.5, 2.5, 4)

    scene.add(ambientLight, directionalLight, rimLight, accentLight)

    const floor = new Mesh(
      new CircleGeometry(4.2, 64),
      new MeshStandardMaterial({
        color: '#6b7280',
        roughness: 0.9,
        metalness: 0.08,
      }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -1.55
    floor.scale.set(1.55, 1.2, 1)
    roomGroup.add(floor)

    const floorRing = new Mesh(
      new TorusGeometry(3.9, 0.03, 20, 100),
      new MeshStandardMaterial({ color: '#f8fafc', emissive: '#f8fafc', emissiveIntensity: 0.4 }),
    )
    floorRing.rotation.x = Math.PI / 2
    floorRing.position.y = -1.46
    roomGroup.add(floorRing)

    const backWall = new Mesh(
      new PlaneGeometry(8.5, 4.8),
      new MeshStandardMaterial({
        color: '#1f2937',
        roughness: 0.85,
        metalness: 0.06,
      }),
    )
    backWall.position.set(0, 0.5, -2.5)
    roomGroup.add(backWall)

    const leftWall = new Mesh(
      new PlaneGeometry(5.8, 4.5),
      new MeshStandardMaterial({ color: '#111827', roughness: 0.9 }),
    )
    leftWall.position.set(-2.8, 0.5, -0.35)
    leftWall.rotation.y = Math.PI / 3.1
    roomGroup.add(leftWall)

    const artFrame = new Mesh(
      new BoxGeometry(1.45, 1.05, 0.08),
      new MeshStandardMaterial({ color: '#f5d0a8', roughness: 0.4 }),
    )
    artFrame.position.set(0, 0.95, -2.2)
    roomGroup.add(artFrame)

    const artInset = new Mesh(
      new PlaneGeometry(1.15, 0.78),
      new MeshStandardMaterial({
        color: '#14b8a6',
        emissive: '#0f766e',
        emissiveIntensity: 0.18,
      }),
    )
    artInset.position.set(0, 0.95, -2.14)
    roomGroup.add(artInset)

    const sofaGroup = new Group()
    const sofaMaterial = new MeshStandardMaterial({
      color: '#e7d8c7',
      roughness: 0.75,
      metalness: 0.05,
    })

    const sofaBase = new Mesh(new BoxGeometry(2.35, 0.55, 1.1), sofaMaterial)
    sofaBase.position.y = -0.9
    sofaGroup.add(sofaBase)

    const sofaBack = new Mesh(new BoxGeometry(2.35, 0.95, 0.34), sofaMaterial)
    sofaBack.position.set(0, -0.42, -0.4)
    sofaGroup.add(sofaBack)

    const leftArm = new Mesh(new BoxGeometry(0.28, 0.72, 1.05), sofaMaterial)
    leftArm.position.set(-1.02, -0.72, 0)
    const rightArm = leftArm.clone()
    rightArm.position.x = 1.02
    sofaGroup.add(leftArm, rightArm)

    const pillowMaterial = new MeshStandardMaterial({ color: '#9ca3af', roughness: 0.82 })
    const pillowOne = new Mesh(new BoxGeometry(0.42, 0.42, 0.18), pillowMaterial)
    pillowOne.position.set(-0.48, -0.54, 0.18)
    const pillowTwo = pillowOne.clone()
    pillowTwo.position.x = 0.42
    sofaGroup.add(pillowOne, pillowTwo)

    roomGroup.add(sofaGroup)

    const tableTop = new Mesh(
      new CylinderGeometry(0.72, 0.78, 0.1, 48),
      new MeshStandardMaterial({ color: '#f8fafc', roughness: 0.35, metalness: 0.08 }),
    )
    tableTop.position.set(0.25, -1.08, 1.45)
    roomGroup.add(tableTop)

    const tableLeg = new Mesh(
      new CylinderGeometry(0.12, 0.12, 0.78, 24),
      new MeshStandardMaterial({ color: '#f5d0a8', roughness: 0.35, metalness: 0.1 }),
    )
    tableLeg.position.set(0.25, -1.45, 1.45)
    roomGroup.add(tableLeg)

    const sideLamp = new Group()
    const lampStand = new Mesh(
      new CylinderGeometry(0.04, 0.04, 1.55, 16),
      new MeshStandardMaterial({ color: '#d4d4d8', roughness: 0.35, metalness: 0.25 }),
    )
    lampStand.position.y = -0.55
    const lampHead = new Mesh(
      new ConeGeometry(0.36, 0.52, 28),
      new MeshStandardMaterial({
        color: '#fde68a',
        emissive: '#f59e0b',
        emissiveIntensity: 0.32,
        roughness: 0.4,
      }),
    )
    lampHead.position.set(1.9, 0.25, 0.1)
    lampHead.rotation.z = Math.PI / 12
    sideLamp.add(lampStand, lampHead)
    sideLamp.position.set(1.9, -0.3, 0.25)
    roomGroup.add(sideLamp)

    const glassPanel = new Mesh(
      new BoxGeometry(1.15, 1.75, 0.08),
      new MeshPhysicalMaterial({
        color: '#c4b5fd',
        transparent: true,
        opacity: 0.12,
        roughness: 0,
        transmission: 0.9,
        thickness: 0.4,
      }),
    )
    glassPanel.position.set(-2.05, -0.3, 1.15)
    glassPanel.rotation.y = Math.PI / 8
    roomGroup.add(glassPanel)

    const decoSphereGeometry = new SphereGeometry(0.11, 22, 22)
    const orbMaterial = new MeshStandardMaterial({
      color: '#67e8f9',
      emissive: '#22d3ee',
      emissiveIntensity: 0.8,
    })
    const warmMaterial = new MeshStandardMaterial({
      color: '#fdba74',
      emissive: '#f59e0b',
      emissiveIntensity: 0.7,
    })

    const orbs = [
      { mesh: new Mesh(decoSphereGeometry, orbMaterial), base: new Vector3(-1.45, 1.05, 0.8), speed: 0.9 },
      { mesh: new Mesh(decoSphereGeometry, warmMaterial), base: new Vector3(1.2, 1.45, 0.55), speed: 0.7 },
      { mesh: new Mesh(decoSphereGeometry, orbMaterial), base: new Vector3(0.15, 1.8, 1.25), speed: 1.1 },
    ]

    orbs.forEach(({ mesh, base }) => {
      mesh.position.copy(base)
      roomGroup.add(mesh)
    })

    const targetRotation = { x: 0.08, y: -0.2 }
    const currentRotation = { x: 0.08, y: -0.2 }
    const targetCamera = { x: 0, y: 1.3 }
    const currentCamera = { x: 0, y: 1.3 }

    const handleMouseMove = (event) => {
      if (prefersReducedMotion) {
        return
      }

      const bounds = container.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5

      targetRotation.y = -0.2 + x * 0.45
      targetRotation.x = 0.08 + y * 0.18
      targetCamera.x = x * 0.4
      targetCamera.y = 1.3 - y * 0.3
    }

    const handleResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight

      if (!width || !height) {
        return
      }

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    container.addEventListener('mousemove', handleMouseMove)

    let frameId = 0
    const clock = new Clock()

    const animateScene = () => {
      frameId = window.requestAnimationFrame(animateScene)
      const elapsed = clock.getElapsedTime()

      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05
      roomGroup.rotation.x = currentRotation.x
      roomGroup.rotation.y = currentRotation.y

      currentCamera.x += (targetCamera.x - currentCamera.x) * 0.04
      currentCamera.y += (targetCamera.y - currentCamera.y) * 0.04
      camera.position.x = currentCamera.x
      camera.position.y = currentCamera.y
      camera.lookAt(0, -0.15, 0)

      if (!prefersReducedMotion) {
        floorRing.rotation.z = elapsed * 0.1
        artInset.rotation.z = Math.sin(elapsed * 0.35) * 0.03
        orbs.forEach(({ mesh, base, speed }, index) => {
          mesh.position.y = base.y + Math.sin(elapsed * speed + index) * 0.18
          mesh.position.x = base.x + Math.cos(elapsed * speed * 0.8 + index) * 0.1
        })
      }

      renderer.render(scene, camera)
    }

    animateScene()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', handleMouseMove)

      scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.geometry.dispose()

          if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose())
          } else {
            child.material.dispose()
          }
        }
      })

      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  )
}
