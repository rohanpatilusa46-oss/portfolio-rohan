export default function SystemDesignPage() {
  return (
    <div className="section">
      <h1 className="text-4xl font-bold">
        System Design & AI Architecture
      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl">
        A collection of real-world system design patterns and architectures
        I’ve built or worked with in production AI systems.
      </p>

      {/* Article 1 */}
      <div className="mt-12 card">
        <h2 className="text-2xl font-semibold">
          Designing a Scalable RAG System
        </h2>

        <p className="text-gray-400 mt-3">
          Retrieval-Augmented Generation systems combine vector search,
          LLM inference, and real-time query routing to deliver grounded answers.
        </p>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>• Hybrid retrieval (FAISS + Redis caching)</li>
          <li>• Query classification for dynamic routing</li>
          <li>• Context window optimization</li>
          <li>• Citation grounding for factual responses</li>
        </ul>

        <p className="mt-4 text-green-400">
          ↓ Latency 40% | ↑ Answer accuracy 25%
        </p>
      </div>

      {/* Article 2 */}
      <div className="mt-8 card">
        <h2 className="text-2xl font-semibold">
          Low-Latency LLM Inference at Scale
        </h2>

        <p className="text-gray-400 mt-3">
          Optimizing inference performance using batching, routing,
          and GPU orchestration strategies.
        </p>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>• Triton inference server batching</li>
          <li>• Model routing (local vs cloud LLMs)</li>
          <li>• GPU utilization optimization</li>
          <li>• Latency vs accuracy trade-offs</li>
        </ul>

        <p className="mt-4 text-green-400">
          ↑ Throughput 25% | ↓ GPU cost
        </p>
      </div>

      {/* Article 3 */}
      <div className="mt-8 card">
        <h2 className="text-2xl font-semibold">
          Real-Time ML Pipeline Architecture
        </h2>

        <p className="text-gray-400 mt-3">
          Designing streaming pipelines for real-time feature engineering
          and inference.
        </p>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>• Kafka event ingestion</li>
          <li>• Spark Structured Streaming</li>
          <li>• Feature store consistency</li>
          <li>• Data drift monitoring</li>
        </ul>

        <p className="mt-4 text-green-400">
          1M+ events/day processed
        </p>
      </div>
    </div>
  );
}