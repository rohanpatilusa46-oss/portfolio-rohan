"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectClient({ project }: any) {
  const router = useRouter();
console.log("PROJECT:", project);
console.log("IMAGE:", project.image);
  return (
    
    <div className="section max-w-5xl mx-auto">

      {/* 🔙 BACK */}
      <button
        onClick={() => {
          if (window.history.length > 1) router.back();
          else router.push("/");
        }}
        className="text-gray-400 hover:text-white mb-8"
      >
        ← Back
      </button>

      {/* 🔥 HERO (2 COLUMN) */}
      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            {project.tagline || project.description}
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition text-white text-sm"
              >
                🚀 Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="px-5 py-2 rounded-lg border border-white/20 hover:border-white/40 transition text-sm"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        {/* RIGHT (IMAGE) */}
        {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={250}
              className="rounded-2xl border border-white/10 shadow-xl brightness-110 contrast-125"
            />
        )}
      </div>

      {/* ⚡ PROBLEM */}
      {project.problem && (
        <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            {project.problem}
          </p>
        </div>
      )}

      {/* 🧠 SOLUTION */}
      {project.solution && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Solution</h2>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {project.solution.map((item: string, i: number) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ⚙️ TECH STACK */}
      {project.tech?.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>

          <div className="flex flex-wrap gap-3 mt-4">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="bg-white/10 px-3 py-1 rounded text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 🏗️ ARCHITECTURE */}
      {project.architecture && (
        <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">Architecture</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            {project.architecture}
          </p>
        </div>
      )}

      {/* ⚠️ CHALLENGES */}
      {project.challenges && (
        <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">Challenges</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            {project.challenges}
          </p>
        </div>
      )}

      {/* 📊 IMPACT */}
      {project.metrics && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Impact</h2>

          <p className="mt-4 text-green-400 text-lg">
            {project.metrics}
          </p>
        </div>
      )}

      {/* 🚀 IMPROVEMENTS */}
      {project.improvements && (
        <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">
            What I’d Improve Next
          </h2>

          <ul className="mt-4 space-y-2 text-gray-400">
            {project.improvements.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}