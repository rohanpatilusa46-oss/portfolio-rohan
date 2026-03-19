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
    slug: "har-system",
    title: "Human Activity Recognition System",
    tagline: "Sequence modeling using 2D pose + LSTM",

    description:
      "LSTM-based sequence model leveraging 2D pose keypoints for lightweight and accurate activity classification.",

    tech: ["TensorFlow", "LSTM", "OpenPose", "Flask"],

    metrics: ">90% Accuracy | Real-time inference",

    github:
      "https://github.com/rohanpatilusa46-oss/Human-Activity-Detection",

    problem:
      "Traditional activity recognition using RGB or 3D pose is computationally expensive and data-heavy.",

    solution: [
      "Extracted 2D pose keypoints from video frames",
      "Applied sequence modeling using stacked LSTM",
      "Optimized feature representation for lightweight inference",
    ],

    architecture: [
      "Video → OpenPose keypoints",
      "Sequence windowing (32 frames)",
      "2-layer LSTM",
      "Softmax classification",
    ],

    results: [
      ">90% classification accuracy",
      "7-minute training time",
      "Lightweight model suitable for edge devices",
    ],
  },

  {
    slug: "drowsiness-detection",
    title: "Driver Drowsiness Detection System",
    tagline: "Real-time CV pipeline for fatigue detection",

    description:
      "Computer vision system combining Haar cascades and CNN-based eye-state classification to detect driver fatigue in real time.",

    tech: ["OpenCV", "CNN", "Keras", "Realtime Vision"],

    metrics: "Real-time detection | Alert system",

    github:
      "https://github.com/rohanpatilusa46-oss/Drowsiness-Detection",

    problem:
      "Drowsy driving leads to accidents, but detecting fatigue in real time using lightweight systems is challenging.",

    solution: [
      "Detected face and eyes using Haar cascades",
      "Classified eye state using CNN model",
      "Used score-based thresholding to trigger alerts",
    ],

    architecture: [
      "Webcam stream → Face detection (Haar)",
      "Eye region extraction",
      "CNN classification (Open/Closed)",
      "Score threshold → Alarm trigger",
    ],

    results: [
      "Real-time performance on webcam",
      "Lightweight CNN for fast inference",
      "Reliable alert mechanism for fatigue detection",
    ],
  },

  {
    slug: "location-intelligence",
    title: "Location Intelligence & Clustering System",
    tagline: "Geospatial clustering for smart recommendations",

    description:
      "Unsupervised learning system using clustering techniques to analyze and recommend optimal neighborhoods based on venue data.",

    tech: ["KMeans", "Clustering", "Pandas", "Geospatial Data"],

    metrics: "Data-driven recommendations",

    github:
      "https://github.com/rohanpatilusa46-oss/BattleOfNeighbourhood",

    problem:
      "Choosing optimal locations based on multiple features like venues and accessibility is complex and subjective.",

    solution: [
      "Collected geospatial and venue data",
      "Engineered features for clustering",
      "Applied KMeans to group similar neighborhoods",
    ],

    architecture: [
      "Data collection (venues, locations)",
      "Feature engineering",
      "KMeans clustering",
      "Cluster analysis → Recommendations",
    ],

    results: [
      "Clear segmentation of neighborhoods",
      "Improved decision-making using data",
      "Scalable to different cities and datasets",
    ],
  },
];