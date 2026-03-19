
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Hero from "@/components/Hero";
import { projects } from "@/lib/projects";
export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-1 pt-10">

      {/* HERO */}
      <Hero />

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 mt-32">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          

        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            description={p.description}
            tags={p.tech}
            metrics={p.metrics}
            github={p.github}
            demo={p.demo}
          />
        ))}

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24 mt-32">
  <h2 className="text-3xl md:text-4xl font-semibold mb-16">
    Experience
  </h2>

  <div className="relative">

    {/* LINE */}
    <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10"></div>

    <div className="space-y-12">

      {/* PERPLEXITY */}
      <div className="relative flex items-start gap-6">
        
        {/* DOT */}
        <div className="w-8 flex justify-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.7)]"></div>
        </div>

        {/* CARD */}
        <div className="flex-1 p-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 transition hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
          
          {/* HEADER */}
          <div className="flex items-center gap-4">
            <img
              src="/logos/perplexity.png"
              alt="Perplexity"
              className="w-10 h-10 object-contain bg-white rounded-md p-1 shadow"
            />

            <div>
              <h3 className="text-xl font-semibold">
                AI/ML Engineer — Perplexity
              </h3>
              <p className="text-sm text-gray-500">
                June 2024 – Present · San Francisco, CA
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <ul className="mt-4 text-gray-300 space-y-2 text-sm leading-relaxed">
            <li>• Architected RAG pipelines integrating vector search + web indexing.</li>
            <li>• Built FAISS + Redis hybrid retrieval improving recall/precision tradeoff.</li>
            <li>• Optimized Triton GPU inference → +25% throughput.</li>
            <li>• Designed LLM routing (on-device + cloud) for sub-second latency.</li>
            <li>• Improved factual consistency via ranking + citation pipelines.</li>
            <li>• Built evaluation systems tracking latency, accuracy, UX metrics.</li>
            <li>• Led 0→1 agentic AI features → +18% engagement.</li>
          </ul>
        </div>
      </div>

      {/* AMAZON */}
      <div className="relative flex items-start gap-6">
        
        {/* DOT */}
        <div className="w-8 flex justify-center">
          <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.7)]"></div>
        </div>

        {/* CARD */}
        <div className="flex-1 p-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur hover:bg-white/10 transition hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          
          {/* HEADER */}
          <div className="flex items-center gap-4">
            <img
              src="/logos/amazon.png"
              alt="Amazon"
              className="w-10 h-10 object-contain bg-white rounded-md p-1 shadow"
            />

            <div>
              <h3 className="text-xl font-semibold">
                AI/ML Engineer — Amazon
              </h3>
              <p className="text-sm text-gray-500">
                Oct 2019 – June 2023 · India
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <ul className="mt-4 text-gray-300 space-y-2 text-sm leading-relaxed">
            <li>• Built batch + streaming pipelines using AWS, Spark, Kafka.</li>
            <li>• Designed feature systems → +30% faster data access.</li>
            <li>• Prevented training-serving skew in real-time ML systems.</li>
            <li>• Built Kafka + Spark streaming pipelines for low latency updates.</li>
            <li>• Orchestrated ML workflows with Airflow + SageMaker.</li>
            <li>• Built drift detection + monitoring datasets.</li>
            <li>• Reduced infra cost by ~15% via optimization.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

      <section id="tools" className="scroll-mt-24 mt-32">
  <h2 className="text-3xl md:text-4xl font-semibold mb-12">
    Tools & Technologies
  </h2>

  <div className="space-y-8">

    {/* AI / ML */}
    <div>
      <h3 className="text-sm text-white/50 mb-3">AI / ML</h3>
      <div className="flex flex-wrap gap-2">
        {[
          "PyTorch",
          "TensorFlow",
          "Scikit-learn",
          "NumPy",
          "Pandas",
          "Time Series",
          "Model Evaluation",
        ].map((item, i) => (
          <span
            key={i}
            className="px-5 py-2 text-s rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/20 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* LLM / GenAI */}
    <div>
      <h3 className="text-sm text-white/50 mb-3">LLM / GenAI</h3>
      <div className="flex flex-wrap gap-2">
        {[
          "RAG",
          "LangChain",
          "LangGraph",
          "OpenAI APIs",
          "Embeddings",
          "Prompt Engineering",
          "Semantic Search",
          "LLM Evaluation",
        ].map((item, i) => (
          <span
            key={i}
            className="px-5 py-2 text-s rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Data Engineering */}
    <div>
      <h3 className="text-sm text-white/50 mb-3">Data Engineering</h3>
      <div className="flex flex-wrap gap-2">
        {[
          "Apache Spark",
          "Kafka",
          "Airflow",
          "ETL Pipelines",
          "Parquet",
          "Streaming Systems",
          "Feature Engineering",
        ].map((item, i) => (
          <span
            key={i}
            className="px-5 py-2 text-s rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Infra / Cloud */}
    <div>
      <h3 className="text-sm text-white/50 mb-3">Infrastructure & Cloud</h3>
      <div className="flex flex-wrap gap-2">
        {[
          "AWS",
          "Kubernetes",
          "Docker",
          "SageMaker",
          "Redshift",
          "GPU Inference",
          "Triton Server",
          "CI/CD",
          "Prometheus",
          "Grafana",
        ].map((item, i) => (
          <span
            key={i}
            className="px-5 py-2 text-s rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 hover:bg-orange-500/20 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

        <section id="contact" className="scroll-mt-24 mt-32 mb-20">
  <div className="text-center max-w-2xl mx-auto">

    {/* TITLE */}
    <h2 className="text-3xl md:text-4xl font-semibold">
      Let’s Build Something Great 🚀
    </h2>

    {/* SUBTEXT */}
    <p className="text-gray-400 mt-4">
      I’m open to AI/ML Engineering roles, collaborations, and interesting problems.
      Feel free to reach out — I’d love to connect.
    </p>

    {/* BUTTONS */}
    <div className="mt-8 flex flex-wrap justify-center gap-4">

      {/* EMAIL */}
      <a
        href="mailto:rohanpatil.usa46@gmail.com"
        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
      >
        Email Me
      </a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/rohanpatil46/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
      >
        LinkedIn
      </a>

      {/* GITHUB */}
      <a
        href="https://github.com/rohanpatilusa46-oss"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
      >
        GitHub
      </a>

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