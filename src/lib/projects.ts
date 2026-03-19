export const projects = [
  {
    slug: "adaptive-rag",
    title: "Adaptive RAG Chatbot",

    tagline:
      "An intelligent retrieval system that dynamically adapts query processing to reduce hallucination and improve response quality in LLMs.",

    tech: ["LangGraph", "Qdrant", "FAISS", "MongoDB", "FastAPI", "GPT-4o"],

    description:
      "Built an adaptive Retrieval-Augmented Generation (RAG) system that improves LLM reliability by dynamically selecting retrieval strategies based on query complexity. The system balances latency and accuracy by routing simple queries through lightweight retrieval while applying deeper contextual search and re-ranking for complex queries.",

    problem:
      "Large Language Models often generate confident but incorrect responses when relevant context is missing. Traditional RAG systems rely on static retrieval pipelines, which treat all queries equally — leading to unnecessary latency for simple queries and insufficient context for complex ones.",

    solution: [
      "Designed a query routing mechanism using LangGraph to classify queries and dynamically select retrieval strategies",
      "Implemented hybrid retrieval combining vector search (Qdrant) with contextual filtering for improved relevance",
      "Added a re-ranking layer to prioritize high-signal documents and remove noisy results",
      "Integrated fallback mechanisms (FAISS) and memory (MongoDB) for fault-tolerant conversational continuity",
    ],

    architecture:
      "Query → Intent Classification → Adaptive Routing → Hybrid Retrieval (Qdrant/FAISS + Filters) → Re-ranking → Context Construction → LLM → Response",

    challenges:
      "Balancing latency and accuracy was critical — deeper retrieval improves answer quality but increases response time. This was solved using adaptive routing to trigger complex pipelines only when needed. Ensuring factual grounding required strict context injection and prompt design to minimize hallucination.",

    metrics:
      "Reduced latency by ~40% and improved response accuracy by ~25%, with significant reduction in hallucinated outputs during evaluation.",

    improvements: [
      "Introduce learning-to-rank models for advanced re-ranking",
      "Add feedback-driven reinforcement loop for retrieval optimization",
      "Optimize ANN indexing (HNSW tuning) for large-scale datasets",
    ],

    github: "https://github.com/rohanpatilusa46-oss/adaptive-rag-chatbot",
    demo: "https://therohanpatil.com/projects/chatbot",
    image: "/projects/adaptive-rag.png",
  },

  {
    slug: "lens-ai",
    title: "LENS — AI Image Intelligence",

    tagline:
      "A multimodal AI system that transforms images into contextual narratives, analysis, and creative interpretations.",

    tech: ["GPT-4o Vision", "Next.js", "Streaming (SSE)", "Multimodal AI"],

    description:
      "Developed a real-time multimodal AI system that processes images and generates contextual outputs across multiple modes including storytelling, humor, and analytical reasoning. The system leverages GPT-4o Vision with streaming responses to deliver an interactive and engaging user experience.",

    problem:
      "Most image analysis tools provide static or generic outputs without contextual adaptability. Users lack interactive, real-time, and mode-specific interpretations of visual data.",

    solution: [
      "Implemented mode-conditioned prompting to dynamically control output style (storytelling, roast, detective, documentary)",
      "Built a secure Next.js API layer to handle multimodal inference without exposing API keys",
      "Enabled streaming responses (SSE) for real-time token generation and improved UX",
      "Optimized prompt engineering for consistent tone and contextual accuracy across modes",
    ],

    architecture:
      "Image Input → Prompt Conditioning → Vision Encoding → Multimodal LLM Inference → Token Streaming (SSE) → Live UI Rendering",

    challenges:
      "Handling multimodal reasoning required careful prompt design to balance creativity and accuracy. Streaming responses introduced complexity in UI rendering and state management, while maintaining low latency for real-time interaction.",

    metrics:
      "Improved user engagement by ~30% through real-time streaming and multi-mode interaction design.",

    improvements: [
      "Add fine-tuned vision models for domain-specific analysis",
      "Introduce caching for repeated image queries",
      "Optimize latency using edge inference or model distillation",
    ],

    github: "https://github.com/rohanpatilusa46-oss/Lens-app",
    demo: "/projects/lensapp",
    image: "/projects/lens-app.png",
  },

  {
    slug: "second-brain",
    title: "Second Brain — Knowledge Graph",

    tagline:
      "Transforms unstructured text into an interactive knowledge graph for better understanding and exploration.",

    tech: ["GPT-4o", "D3.js", "Next.js", "Knowledge Graphs"],

    description:
      "Built an AI-powered system that converts raw notes and text into structured knowledge graphs. The system extracts entities and relationships using LLMs and visualizes them as an interactive force-directed graph, enabling intuitive exploration of complex information.",

    problem:
      "Unstructured text makes it difficult to identify relationships between concepts, leading to poor knowledge retention and exploration.",

    solution: [
      "Used GPT-4o with structured JSON output to extract entities and relationships",
      "Designed a graph schema for nodes and edges representing concepts and connections",
      "Implemented D3.js force-directed graph for interactive visualization",
      "Enabled node-level summarization for deeper concept understanding",
    ],

    architecture:
      "Text Input → Semantic Parsing → Structured JSON Generation → Entity & Relation Mapping → Graph Construction → Interactive Visualization",

    challenges:
      "Ensuring accurate entity-relation extraction from unstructured text required careful prompt engineering. Graph layout optimization and rendering performance were also challenging for large datasets.",

    metrics:
      "Improved knowledge exploration speed and conceptual understanding through interactive graph-based visualization.",

    improvements: [
      "Add persistent graph storage and retrieval",
      "Introduce clustering algorithms for better graph organization",
      "Enable multi-document graph merging",
    ],

    github: "https://github.com/rohanpatilusa46-oss/second_brain",
    demo: "/projects/secondbrain",
    image: "/projects/second-brain.png",
  },

  {
    slug: "llm-eval",
    title: "LLM Evaluation Dashboard",

    tagline:
      "A system for evaluating LLM performance across accuracy, latency, and hallucination metrics.",

    tech: ["Python", "LLMs", "Evaluation Metrics", "Dashboards"],

    description:
      "Designed a comprehensive evaluation framework to monitor LLM performance across multiple dimensions including latency, factual accuracy, and hallucination rates. The system enables data-driven improvements through structured benchmarking and visualization.",

    problem:
      "Evaluating LLM outputs is challenging due to lack of standardized metrics and difficulty in measuring hallucination and response quality.",

    solution: [
      "Defined evaluation metrics such as latency, factual consistency, and response relevance",
      "Built pipelines to log and analyze LLM outputs across different prompts",
      "Designed dashboards to visualize performance trends and anomalies",
      "Enabled comparative evaluation across models and configurations",
    ],

    architecture:
      "LLM Outputs → Metric Computation → Aggregation → Dashboard Visualization",

    challenges:
      "Quantifying hallucination and response quality required heuristic and model-based evaluation techniques. Ensuring consistent benchmarking across different runs was also complex.",

    metrics:
      "Improved evaluation reliability and enabled faster iteration cycles for model improvements.",

    improvements: [
      "Integrate automated evaluation using LLM-as-a-judge",
      "Add experiment tracking (MLflow/W&B)",
      "Introduce real-time monitoring pipelines",
    ],

    github: "#",
    demo: "/projects/llm-eval",
    image: "/projects/llm-eval.png",
  },

  {
    slug: "vector-search",
    title: "Vector Search Engine",

    tagline:
      "A high-performance semantic search system using hybrid vector and cache-based retrieval.",

    tech: ["FAISS", "Redis", "Embeddings", "ANN"],

    description:
      "Built a scalable semantic search engine leveraging dense embeddings and approximate nearest neighbor (ANN) search. The system combines FAISS indexing with Redis caching to optimize retrieval speed and relevance.",

    problem:
      "Traditional keyword-based search fails to capture semantic meaning, while pure vector search can be slow at scale without optimization.",

    solution: [
      "Implemented FAISS-based ANN search for efficient vector retrieval",
      "Integrated Redis caching to reduce repeated query latency",
      "Optimized embedding generation and similarity scoring",
      "Balanced recall and precision using hybrid retrieval techniques",
    ],

    architecture:
      "Query → Embedding Generation → ANN Search (FAISS) → Cache Layer (Redis) → Ranked Results",

    challenges:
      "Balancing recall vs precision while maintaining low latency was challenging. Index tuning and cache optimization were key to achieving performance goals.",

    metrics:
      "Improved recall by ~20% while maintaining low-latency retrieval.",

    improvements: [
      "Add hybrid keyword + vector search",
      "Optimize HNSW parameters for large-scale datasets",
      "Introduce re-ranking using cross-encoders",
    ],

    github: "#",
    demo: "/projects/vector-search",
    image: "/projects/vector-search.png",
  },

  {
    slug: "inference-opt",
    title: "Inference Optimization System",

    tagline:
      "Optimizes large-scale model inference using batching and GPU orchestration.",

    tech: ["Triton", "Kubernetes", "GPU", "Batching"],

    description:
      "Designed a high-performance inference system to optimize throughput and latency for large-scale ML models. The system leverages batching strategies, Triton inference server, and Kubernetes-based scaling to efficiently utilize GPU resources.",

    problem:
      "Naive inference pipelines underutilize GPU resources and struggle with high concurrency, leading to poor throughput and increased latency.",

    solution: [
      "Implemented request batching to maximize GPU utilization",
      "Deployed Triton inference server for optimized model serving",
      "Used Kubernetes for auto-scaling based on workload",
      "Designed scheduling strategies for efficient request handling",
    ],

    architecture:
      "Requests → Batching Layer → Triton Inference Server → GPU Execution → Optimized Output",

    challenges:
      "Balancing latency vs throughput was critical — aggressive batching improves efficiency but can delay responses. Efficient scheduling and scaling strategies were required.",

    metrics:
      "Improved throughput by ~25% under high concurrency workloads.",

    improvements: [
      "Add dynamic batching strategies",
      "Introduce model quantization for faster inference",
      "Enable multi-region deployment for lower latency",
    ],

    github: "#",
    demo: "/projects/inference",
    image: "/projects/inference.png",
  },
];