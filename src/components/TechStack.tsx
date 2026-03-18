"use client";

import { useState } from "react";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiOpenai,
  SiApachekafka,
  SiApachespark,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiFastapi,
} from "react-icons/si";

export default function TechStack() {
  const [active, setActive] = useState<number | null>(null);

  const groups = [
    {
      title: "AI / ML",
      color: "text-purple-400",
      skills: [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiPytorch />, name: "PyTorch" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiScikitlearn />, name: "Scikit-learn" },
        { icon: <SiNumpy />, name: "NumPy" },
        { icon: <SiPandas />, name: "Pandas" },
      ],
    },
    {
      title: "LLM / GenAI",
      color: "text-pink-400",
      skills: [
        { icon: <SiOpenai />, name: "OpenAI" },
        { icon: <SiPython />, name: "LangChain" },
        { icon: <SiPython />, name: "LangGraph" },
        { icon: <SiPython />, name: "RAG Systems" },
        { icon: <SiPython />, name: "Embeddings" },
      ],
    },
    {
      title: "Data / Streaming",
      color: "text-cyan-400",
      skills: [
        { icon: <SiApachekafka />, name: "Kafka" },
        { icon: <SiApachespark />, name: "Spark" },
        { icon: <SiRedis />, name: "Redis" },
      ],
    },
    {
      title: "Backend",
      color: "text-green-400",
      skills: [
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <SiPython />, name: "APIs" },
        { icon: <SiPython />, name: "Microservices" },
      ],
    },
    {
      title: "Infra",
      color: "text-orange-400",
      skills: [
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
      ],
    },
    {
      title: "Databases",
      color: "text-yellow-400",
      skills: [
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiRedis />, name: "Redis Cache" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-12">

      {groups.map((group, i) => (
        <div
          key={i}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          className="relative"
        >

          {/* TILE */}
          <div className="w-44 h-36 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all">

            {/* ICON PREVIEW */}
            <div className="flex gap-3 mb-2">
              {group.skills.slice(0, 3).map((skill, idx) => (
                <div
                  key={idx}
                  className={`text-xl ${group.color} opacity-80`}
                >
                  {skill.icon}
                </div>
              ))}
            </div>

            {/* TITLE */}
            <span className="text-xs text-white/60">
              {group.title}
            </span>
          </div>

          {/* DROPDOWN */}
          <div
            className={`
              absolute left-1/2 -translate-x-1/2 mt-3 w-64
              rounded-xl bg-black/80 border border-white/10 backdrop-blur-lg p-4
              transition-all duration-300 z-50
              ${
                active === i
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }
            `}
          >

            {/* Arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rotate-45 border-l border-t border-white/10"></div>

            <div className="grid grid-cols-2 gap-3">
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
                >
                  <span className={`${group.color}`}>
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>

          </div>

        </div>
      ))}

    </div>
  );
}