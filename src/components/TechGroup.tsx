"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TechGroupProps {
  title: string;
  icons: ReactNode[];
}

export default function TechGroup({ title, icons }: TechGroupProps) {
  const radius = 80;

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        initial="collapsed"
        whileHover="expanded"
        className="relative w-28 h-28 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
      >
        {icons.map((icon, i) => {
          const angle = (i / icons.length) * 2 * Math.PI;

          return (
            <motion.div
              key={i}
              variants={{
                collapsed: {
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                },
                expanded: {
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  scale: 1.2,
                  opacity: 1,
                },
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="absolute text-2xl text-white/70 hover:text-white"
            >
              {icon}
            </motion.div>
          );
        })}

        {/* Center label */}
        <span className="text-xs text-white/50 absolute bottom-2">
          {title}
        </span>
      </motion.div>
    </div>
  );
}