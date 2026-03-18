"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tags: string[];
  metrics: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  metrics,
  link,
}: Props) {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ y: -5 }}
        className="p-6 rounded-xl border border-gray-800 bg-white/5 backdrop-blur cursor-pointer hover:border-blue-500/50 transition"
      >
        {/* Title */}
        <h3 className="text-xl font-semibold tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mt-2 text-sm">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-800 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <p className="text-blue-400 mt-4 text-sm">
          {metrics}
        </p>

        {/* CTA */}
        <p className="mt-4 text-sm text-gray-300">
          View Details →
        </p>
      </motion.div>
    </Link>
  );
}