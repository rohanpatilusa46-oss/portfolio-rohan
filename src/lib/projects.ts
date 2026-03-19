export const projects = [
   {
  slug: "adaptive-rag",
  title: "Adaptive RAG Chatbot",

    tagline:
      "An intelligent retrieval system that dynamically adapts query processing to reduce hallucination and improve response quality in LLMs.",
    tech: ["GPT-4o Vision", "Multimodal AI", "Computer Vision", "Next.js"],
    description:
      "Built an adaptive Retrieval-Augmented Generation (RAG) system that improves LLM reliability by dynamically selecting retrieval strategies based on query complexity. The system balances latency and accuracy by routing simple queries through lightweight retrieval while applying deeper contextual search and re-ranking for complex queries.",

    problem:
      "Large Language Models often generate confident but incorrect responses when relevant context is missing. Traditional RAG systems rely on static retrieval pipelines, which treat all queries equally — leading to unnecessary latency for simple queries and insufficient context for complex ones.",

    solution: [
      "Designed a query routing mechanism to classify incoming queries and dynamically select the appropriate retrieval strategy",
      "Implemented hybrid retrieval combining vector search (Qdrant) with contextual filtering for improved relevance",
      "Added a re-ranking layer to prioritize high-signal documents and remove noisy results",
      "Optimized prompt construction to enforce grounded responses and reduce hallucination",
    ],

    architecture:
      "User Query → Query Classifier → Adaptive Router → Hybrid Retriever (Vector + Filtered Search) → Re-ranking → LLM → Response",

    challenges:
      "A key challenge was balancing latency and accuracy — deeper retrieval improves answer quality but increases response time. This was addressed through adaptive routing, ensuring complex pipelines are only triggered when necessary. Additionally, reducing hallucination required careful prompt design and strict context injection to ensure the model stays grounded in retrieved data.",

    metrics:
      "Reduced latency by ~40% while improving response accuracy by ~25%, with noticeable reduction in hallucinated outputs during evaluation.",

    improvements: [
      "Introduce learning-to-rank models for more advanced re-ranking",
      "Add user feedback loop for continuous system improvement",
      "Optimize ANN indexing (HNSW tuning) for faster retrieval at scale",
    ],
  github: "https://github.com/rohanpatilusa46-oss/adaptive-rag-chatbot",

    image: "/projects/rag-v3.png",

  // 🔥 ADD THIS
  demo: "https://therohanpatil.com/projects/chatbot",},
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