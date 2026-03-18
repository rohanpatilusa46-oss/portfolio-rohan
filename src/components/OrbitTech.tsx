"use client";

import { useEffect, useRef } from "react";
import {
  SiApachekafka,
  SiApachespark,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiRedis,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

// 🔥 MORE SKILLS (denser sphere)
const tech = [
  <SiPython />,
  <SiPytorch />,
  <SiTensorflow />,
  <SiNumpy />,
  <SiPandas />,
  <SiScikitlearn />,
  <SiFastapi />,
  <SiPostgresql />,
  <SiMongodb />,
  <SiApachekafka />,
  <SiApachespark />,
  <SiRedis />,
  <SiDocker />,
  <SiKubernetes />,
];

export default function OrbitTech() {
  const containerRef = useRef<HTMLDivElement>(null);

  let rotationX = 0;
  let rotationY = 0;
  let velocityX = 0;
  let velocityY = 0;

  let isDragging = false;
  let lastX = 0;
  let lastY = 0;

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      velocityY = dx * 0.005;
      velocityX = dy * 0.005;

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const animate = () => {
      rotationX += velocityX;
      rotationY += velocityY;

      // friction (smooth slow down)
      velocityX *= 0.95;
      velocityY *= 0.95;

      const nodes = containerRef.current?.children;
      if (!nodes) return;

      const radius = 200; // 🔥 bigger sphere

      tech.forEach((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / tech.length);
        const theta = Math.sqrt(tech.length * Math.PI) * phi;

        let x = radius * Math.cos(theta) * Math.sin(phi);
        let y = radius * Math.sin(theta) * Math.sin(phi);
        let z = radius * Math.cos(phi);

        // rotate X
        let y1 = y * Math.cos(rotationX) - z * Math.sin(rotationX);
        let z1 = y * Math.sin(rotationX) + z * Math.cos(rotationX);

        // rotate Y
        let x2 = x * Math.cos(rotationY) + z1 * Math.sin(rotationY);
        let z2 = -x * Math.sin(rotationY) + z1 * Math.cos(rotationY);

        const scale = 0.7 + (z2 + radius) / (2 * radius);
        const opacity = 0.5 + (z2 + radius) / (2 * radius);

        const el = nodes[i] as HTMLElement;

        el.style.transform = `translate(${x2}px, ${y1}px) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${Math.round(scale * 100)}`;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[500px] h-[500px] flex items-center justify-center"
    >
      {tech.map((icon, i) => (
        <div
          key={i}
          className="absolute text-6xl text-blue-400 hover:text-white hover:scale-125 transition-all duration-200"
        >
          {icon}
        </div>
      ))}
    </div>
  );
}