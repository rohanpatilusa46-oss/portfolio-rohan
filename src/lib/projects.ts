export const projects = [
  {
    slug: "adaptive-rag",
    title: "Adaptive RAG Chatbot",
    description:
      "Dynamic retrieval + query routing system for grounded LLM responses.",
    tech: ["LangGraph", "FastAPI", "Qdrant", "OpenAI"],
    metrics: "↓ Latency 40% | ↑ Accuracy 25%",
  },
  {
    slug: "resume-matcher",
    title: "Resume → Job Matching Agent",
    description:
      "Agentic AI system for matching resumes to job descriptions using embeddings.",
    tech: ["LangGraph", "Embeddings", "Vector DB"],
    metrics: "↑ Match Precision 30%",
  },
  {
    slug: "ml-pipeline",
    title: "Real-Time ML Pipeline",
    description:
      "Kafka + Spark streaming pipeline for low-latency feature engineering.",
    tech: ["Kafka", "Spark", "AWS"],
    metrics: "1M+ events/day processed",
  },
];