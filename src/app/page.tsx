import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-10">

      {/* HERO */}
      <Hero />

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 mt-32">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ProjectCard
            title="Adaptive RAG Chatbot"
            description="Dynamic retrieval + query routing system for grounded LLM responses."
            tags={["LangGraph", "FastAPI", "Qdrant", "OpenAI"]}
            metrics="↓ Latency 40% | ↑ Accuracy 25%"
            link="/projects/adaptive-rag"
          />

          <ProjectCard
            title="Resume → Job Matching Agent"
            description="Agentic AI system for matching resumes to job descriptions using embeddings."
            tags={["LangGraph", "Embeddings", "Vector DB"]}
            metrics="↑ Match Precision 30%"
            link="/projects/resume-agent"
          />

          <ProjectCard
            title="Real-Time ML Pipeline"
            description="Kafka + Spark streaming pipeline for low-latency feature engineering."
            tags={["Kafka", "Spark", "AWS"]}
            metrics="1M+ events/day processed"
            link="/projects/ml-pipeline"
          />

          {/* 🔥 Added 3 more projects */}
          <ProjectCard
            title="LLM Evaluation Dashboard"
            description="Tracking model performance, latency, and hallucination metrics."
            tags={["Python", "LLMs", "Evaluation"]}
            metrics="Improved evaluation accuracy"
            link="/projects/llm-eval"
          />

          <ProjectCard
            title="Vector Search Engine"
            description="Hybrid FAISS + Redis retrieval system for semantic search."
            tags={["FAISS", "Redis", "Embeddings"]}
            metrics="Recall ↑ 20%"
            link="/projects/vector-search"
          />

          <ProjectCard
            title="Inference Optimization System"
            description="Optimized GPU inference using batching and Triton."
            tags={["Triton", "GPU", "Kubernetes"]}
            metrics="Throughput ↑ 25%"
            link="/projects/inference"
          />

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24 mt-32">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Experience
        </h2>

        <div className="space-y-6">

          <div className="p-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold">
              AI/ML Engineer — Perplexity
            </h3>
            <p className="text-gray-400 mt-2">
              Built RAG pipelines, optimized inference latency, and scaled AI systems for high-concurrency environments.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold">
              Software Engineer — Amazon
            </h3>
            <p className="text-gray-400 mt-2">
              Designed scalable backend systems and improved performance for large-scale distributed applications.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 mb-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rohan Patil — Built with Next.js 🚀
      </footer>

    </main>
  );
}