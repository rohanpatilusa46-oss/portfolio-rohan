"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({
  title,
  description,
  tags,
  metrics,
}: any) {
  const [open, setOpen] = useState(false);

  const project = {
    title,
    description,
    tags,
    metrics,
    architecture:
      "User → Query Router → Retriever (FAISS/Qdrant) → LLM → Response",
    challenges:
      "Handled latency optimization, hallucination reduction, and retrieval accuracy tuning using hybrid search.",
  };

  return (
    <>
      {/* CARD */}
      <div className="p-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 transition">
        
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-gray-400 mt-2">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((t: string) => (
            <span key={t} className="bg-white/10 px-3 py-1 rounded text-sm">
              {t}
            </span>
          ))}
        </div>

        <p className="text-blue-400 mt-4">{metrics}</p>

        {/* BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="mt-4 text-sm text-white/70 hover:text-white transition"
        >
          View Details →
        </button>
      </div>

      {/* MODAL */}
      {open && (
        <ProjectModal
          project={project}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}