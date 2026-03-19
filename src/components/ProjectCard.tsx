"use client";

import Link from "next/link";

export default function ProjectCard({
  slug,
  title,
  description,
  tags,
  metrics,
  github,
  demo,
}: any) {
  return (
    <div className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/10 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]">

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-gray-400 mt-2">{description}</p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags?.map((t: string) => (
          <span key={t} className="bg-white/10 px-3 py-1 rounded text-sm">
            {t}
          </span>
        ))}
      </div>

      {/* METRICS */}

      {/* ACTIONS */}
      <div className="mt-5 flex gap-3 flex-wrap">

        {/* View Details */}
        <Link
          href={`/projects/${slug}`}
          className="text-sm text-white/70 hover:text-white transition"
        >
          View Details →
        </Link>

        {/* GitHub */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            GitHub ↗
          </a>
        )}

        {/* Live Demo */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-400 hover:text-purple-300 transition"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}