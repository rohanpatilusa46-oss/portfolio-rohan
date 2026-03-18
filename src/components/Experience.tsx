export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>

      <div className="space-y-12">
        {/* Perplexity */}
        <div className="card">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              AI/ML Engineer — Perplexity
            </h3>
            <span className="text-sm text-gray-400">
              2024 – Present
            </span>
          </div>

          <p className="text-gray-400 mt-2">
            Working on AI-native browsing and LLM-powered systems at scale.
          </p>

          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              • Built RAG pipelines integrating semantic search + web indexing
            </li>
            <li>
              • Reduced latency by ~25% using Triton batching
            </li>
            <li>
              • Designed hybrid retrieval (FAISS + Redis)
            </li>
            <li>
              • Improved factual accuracy with citation pipelines
            </li>
          </ul>
        </div>

        {/* Amazon */}
        <div className="card">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              AI/ML Engineer — Amazon
            </h3>
            <span className="text-sm text-gray-400">
              2019 – 2023
            </span>
          </div>

          <p className="text-gray-400 mt-2">
            Built large-scale ML data pipelines and real-time systems.
          </p>

          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              • Designed batch + streaming pipelines (S3, Spark, Redshift)
            </li>
            <li>
              • Improved data retrieval by ~30%
            </li>
            <li>
              • Built Kafka-based real-time ingestion systems
            </li>
            <li>
              • Reduced failures by ~20% with workflow orchestration
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}