"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function NeuralParticles() {
  const ref = useRef<THREE.Points>(null!);

  const count = 2000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state, delta) => {
    if (!ref.current) return;

    // 🔥 slow rotation
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;

    // 🔥 mouse interaction (this is the BIG difference)
    ref.current.rotation.y += state.mouse.x * 0.1;
    ref.current.rotation.x += state.mouse.y * 0.1;

    // 🔥 floating motion
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6, 6, 33, 0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_0%)]" />

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <NeuralParticles />
      </Canvas>
    </div>
  );
}