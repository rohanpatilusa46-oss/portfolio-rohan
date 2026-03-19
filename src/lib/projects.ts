export const projects = [
  {
    slug: "adaptive-rag",
    title: "Adaptive RAG Chatbot",
    description:
      "Adaptive query routing, hybrid retrieval (vector + context-aware search), and LLM orchestration to minimize hallucinations and optimize response accuracy and latency.",
    tech: ["LangGraph", "FastAPI", "Qdrant", "OpenAI"],
    metrics: "↓ Latency 40% | ↑ Accuracy 25%",
    github: "https://github.com/rohanpatilusa46-oss/adaptive-rag-chatbot",
    demo: "/projects/chatbot",
    architecture:
      "User → Query Router → Retriever (FAISS/Qdrant) → LLM → Response",
    challenges:
      "Handled latency optimization, hallucination reduction, and retrieval accuracy tuning using hybrid search.",
  },
  {
    slug: "lens-ai",
    title: "LENS — AI Image Intelligence",
    description:
      "Multi-modal AI vision system that analyzes images and generates contextual outputs including storytelling, humor, and semantic interpretation.",
    tech: ["GPT-4o Vision", "Multimodal AI", "Computer Vision", "Next.js"],
    metrics: "↑ Engagement 30%",
    github: "https://github.com/rohanpatilusa46-oss/Lens-app",
    demo: "/projects/lensapp",
    architecture:
      "Image → Vision Encoder → Multimodal LLM → Contextual Output",
    challenges:
      "Handled multimodal reasoning, prompt design, and latency optimization.",
  },
  {
    slug: "second-brain",
    title: "Second Brain — Knowledge Graph",
    description:
      "Transform notes and research into an interactive force-directed knowledge graph powered by GPT-4o.",
    tech: ["GPT-4o", "D3.js", "Next.js", "Knowledge Graph"],
    metrics: "↑ Knowledge retrieval speed",
    github: "https://github.com/rohanpatilusa46-oss/second_brain",
    demo: "/projects/secondbrain",
    architecture:
      "User Input → Embeddings → Graph Builder → D3 Visualization",
    challenges:
      "Handled graph relationships, layout rendering, and interactive UX.",
  },
  {
    slug: "llm-eval",
    title: "LLM Evaluation Dashboard",
    description:
      "System for tracking model performance, latency, hallucination rates, and evaluation metrics.",
    tech: ["Python", "LLMs", "Evaluation"],
    metrics: "Improved evaluation accuracy",
    github: "#",
    demo: "/projects/llm-eval",
    architecture:
      "LLM Outputs → Evaluation Metrics → Dashboard Visualization",
    challenges:
      "Designed reliable evaluation pipelines and metric tracking.",
  },
  {
    slug: "vector-search",
    title: "Vector Search Engine",
    description:
      "Hybrid FAISS + Redis retrieval system for efficient semantic search and ranking.",
    tech: ["FAISS", "Redis", "Embeddings"],
    metrics: "Recall ↑ 20%",
    github: "#",
    demo: "/projects/vector-search",
    architecture:
      "Query → Embedding → FAISS/Redis → Ranked Results",
    challenges:
      "Balanced recall vs precision and optimized retrieval latency.",
  },
  {
    slug: "inference-opt",
    title: "Inference Optimization System",
    description:
      "Optimized GPU inference using batching, Triton inference server, and Kubernetes scaling.",
    tech: ["Triton", "GPU", "Kubernetes"],
    metrics: "Throughput ↑ 25%",
    github: "#",
    demo: "/projects/inference",
    architecture:
      "Requests → Batcher → Triton → GPU → Optimized Output",
    challenges:
      "Handled batching strategies and GPU utilization efficiency.",
  },
];