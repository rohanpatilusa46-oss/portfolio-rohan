import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12">

      {/* HERO */}
      <Hero />

      {/* PROJECTS */}
      <section id="projects" className="mt-32">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ProjectCard
            title="Adaptive RAG Chatbot"
            description="Dynamic retrieval + query routing system for grounded LLM responses."
            tags={["LangGraph", "FastAPI", "Qdrant", "OpenAI"]}
            metrics="↓ Latency 40% | ↑ Accuracy 25%"
            link="#"
          />

          <ProjectCard
            title="Resume → Job Matching Agent"
            description="Agentic AI system for matching resumes to job descriptions using embeddings."
            tags={["LangGraph", "Embeddings", "Vector DB"]}
            metrics="↑ Match Precision 30%"
            link="#"
          />

          <ProjectCard
            title="Real-Time ML Pipeline"
            description="Kafka + Spark streaming pipeline for low-latency feature engineering."
            tags={["Kafka", "Spark", "AWS"]}
            metrics="1M+ events/day processed"
            link="#"
          />

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-32">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Experience
        </h2>

        <div className="space-y-6">

          <div className="p-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur">
            <h3 className="text-xl font-semibold">
              AI/ML Engineer — Perplexity
            </h3>
            <p className="text-gray-400 mt-2">
              Built RAG pipelines, optimized inference latency, and scaled AI systems for high-concurrency environments.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur">
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