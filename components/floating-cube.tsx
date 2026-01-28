"use client"

import { useRef, useCallback, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { useRouter } from "next/navigation"
import * as THREE from "three"

interface FloatingCubeMeshProps {
  href?: string
  color?: string
  emissiveColor?: string
}

function FloatingCubeMesh({ href, color = "#C3D534", emissiveColor = "#C3D534" }: FloatingCubeMeshProps) {
  const cubeRef = useRef<THREE.Mesh>(null)
  const router = useRouter()

  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.5
      cubeRef.current.rotation.y += delta * 0.4
    }
  })

  const navigate = useCallback(() => {
    if (href) {
      router.push(href)
    }
  }, [href, router])

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh
        ref={cubeRef}
        castShadow
        onClick={(e) => {
          e.stopPropagation()
          navigate()
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          document.body.style.cursor = ""
        }}
      >
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial
          color={color}
          emissive={emissiveColor}
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>
    </Float>
  )
}

interface FloatingCubeProps {
  href?: string
  label?: string
  color?: string
  emissiveColor?: string
  className?: string
}

export function FloatingCube({
  href = "/reframe",
  label = "Explore",
  color = "#C3D534",
  emissiveColor = "#C3D534",
  className = "",
}: FloatingCubeProps) {
  return (
    <div className={`relative h-[280px] sm:h-[320px] lg:h-[360px] ${className}`}>
      <Canvas
        style={{ position: "absolute", inset: 0 }}
        shadows
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-3, -4, -2]} intensity={0.4} color="#00B5AD" />
        <Suspense fallback={null}>
          <FloatingCubeMesh href={href} color={color} emissiveColor={emissiveColor} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      {label && (
        <div className="absolute inset-x-0 bottom-4 text-center pointer-events-auto">
          <a
            href={href}
            className="inline-block rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            {label}
          </a>
        </div>
      )}
    </div>
  )
}
