"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface ParticlesProps {
  count?: number
  color?: string
}

function Particles({ count = 100, color = "#ffffff" }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 // z
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={color}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

interface ParticleFieldProps {
  className?: string
  count?: number
  color?: string
}

export function ParticleField({ 
  className = "", 
  count = 100, 
  color = "#ffffff" 
}: ParticleFieldProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <Particles count={count} color={color} />
      </Canvas>
    </div>
  )
}
