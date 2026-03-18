"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }: any) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* MODAL CARD */}
        <motion.div
          className="bg-[#0b0f1a] border border-white/10 rounded-2xl p-8 max-w-3xl w-full relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white"
          >
            ✕
          </button>

          {/* TITLE */}
          <h1 className="text-3xl font-bold mb-4">
            {project.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mb-6">
            {project.description}
          </p>

          {/* ARCHITECTURE */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Architecture</h2>
            <p className="text-gray-300 text-sm">
              {project.architecture}
            </p>
          </div>

          {/* TECH */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t: string) => (
                <span
                  key={t}
                  className="bg-white/10 px-3 py-1 rounded text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CHALLENGES */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Challenges</h2>
            <p className="text-gray-300 text-sm">
              {project.challenges}
            </p>
          </div>

          {/* METRICS */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Impact</h2>
            <p className="text-green-400">
              {project.metrics}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}