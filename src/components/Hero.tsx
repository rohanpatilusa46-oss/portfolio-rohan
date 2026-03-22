"use client";
import Pipeline from "@/components/Pipeline";
import { motion } from "framer-motion";
import Link from "next/link";
import TechStack from "./TechStack";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center -mt-20">
      
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      {/* CONTAINER (IMPORTANT FOR ALIGNMENT) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT */}
          <div className="z-10">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-gray-400 mb-4"
            >
              👋 Hello, I’m
            </motion.p>

            <motion.h1
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text animate-gradient"
                >
                Rohan Patil
                </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-4xl md:text-5xl font-semibold leading-tight"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text animate-gradient">
                AI Systems
                </span> <br />
              That Scale 🚀
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              AI/ML Engineer with experience at Perplexity and Amazon, building
              production-grade LLM pipelines, RAG systems, and distributed ML
              infrastructure for real-world high-scale environments.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <button
                onClick={() => {
                    const section = document.getElementById("projects");
                    section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:scale-105 transition"
                >
                View Projects
               </button>

              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 border border-gray-600 rounded-lg hover:border-white hover:scale-105 transition"
              >
                Resume
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-1 flex gap-10 text-sm"
            >
             

              {/* Replace stats with pipeline */}
              <div className="mt-1">
                <div className="mt-2 w-full max-w-xl">
                <div className="mt-1">
                  <Pipeline />
                </div>
              </div>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block">
            <TechStack />
          </div>

        </div>
      </div>
    </section>
  );
}