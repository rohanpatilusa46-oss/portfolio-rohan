"use client";

import { useEffect } from "react";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {

  // ✅ HOOK MUST BE INSIDE COMPONENT
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;

      if (!hash) return;

      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    };

    // Run once after load
    handleScroll();

    // Listen for hash changes
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  return (
    <div className="section space-y-24">
      <h1 className="text-4xl font-bold">Projects</h1>

      {projects.map((project) => (
        <div
          key={project.slug}
          id={project.slug}
          className="border border-white/10 rounded-2xl p-8 scroll-mt-28 bg-white/5"
        >
          <h2 className="text-3xl font-semibold">{project.title}</h2>

          <p className="mt-4 text-gray-400">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span key={t} className="bg-white/10 px-3 py-1 rounded text-sm">
                {t}
              </span>
            ))}
          </div>

          <h3 className="mt-6 text-xl font-semibold">Architecture</h3>
          <p className="text-gray-400 mt-2">{project.architecture}</p>

          <h3 className="mt-6 text-xl font-semibold">Challenges</h3>
          <p className="text-gray-400 mt-2">{project.challenges}</p>

          <h3 className="mt-6 text-xl font-semibold">Impact</h3>
          <p className="text-green-400 mt-2">{project.metrics}</p>
        </div>
      ))}
    </div>
  );
}