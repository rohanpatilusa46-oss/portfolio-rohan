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

  tagline:
    "Sequence modeling system using 2D pose estimation and LSTM networks for efficient activity classification.",

  tech: ["TensorFlow", "LSTM", "OpenPose", "Flask"],

  description:
    "Built a lightweight human activity recognition system using 2D pose keypoints instead of raw video, enabling efficient sequence modeling with high accuracy. The system leverages temporal patterns using LSTM networks while significantly reducing computational overhead compared to RGB-based approaches.",

  problem:
    "Traditional activity recognition systems rely on raw RGB video or 3D pose data, which are computationally expensive and require large datasets. This makes them unsuitable for real-time or resource-constrained environments.",

  solution: [
    "Extracted 2D pose keypoints using OpenPose to reduce input dimensionality",
    "Constructed temporal sequences using sliding window approach (32 frames)",
    "Applied stacked LSTM networks for sequence classification",
    "Optimized model architecture to balance accuracy and computational efficiency",
  ],

  architecture:
    "Video Input → OpenPose Keypoint Extraction → Sequence Windowing → LSTM (2-layer) → Softmax Classification → Activity Output",

  challenges:
    "Maintaining high accuracy with reduced feature representation was challenging due to loss of spatial information in 2D pose. Additionally, handling temporal dependencies required careful sequence design and tuning of LSTM parameters to avoid overfitting.",

  metrics:
    "Achieved >90% classification accuracy with ~7 minutes training time, demonstrating strong performance with lightweight input representation.",

  improvements: [
    "Upgrade to Transformer-based sequence models for better temporal learning",
    "Enable real-time streaming inference using optimized pipelines",
    "Extend to multi-person and multi-activity detection scenarios",
  ],

  github:
    "https://github.com/rohanpatilusa46-oss/Human-Activity-Detection",
  demo: "",
  image: "/projects/har.png",
},

{
  slug: "drowsiness-detection",
  title: "Driver Drowsiness Detection System",

  tagline:
    "Real-time computer vision system for detecting driver fatigue using CNN and eye-state analysis.",

  tech: ["OpenCV", "CNN", "Keras", "Pygame"],

  description:
    "Developed a real-time driver drowsiness detection system that monitors eye states using computer vision and deep learning. The system processes webcam input, detects facial regions, and classifies eye states to trigger alerts when fatigue is detected.",

  problem:
    "Driver fatigue is a major cause of road accidents, but detecting drowsiness in real time using lightweight systems remains challenging, especially under varying lighting and head pose conditions.",

  solution: [
    "Used Haar cascade classifiers for real-time face and eye detection",
    "Trained a CNN model to classify eye states (open vs closed)",
    "Implemented score-based temporal logic to detect sustained eye closure",
    "Integrated audio alert system to notify driver in real time",
  ],

  architecture:
    "Webcam Stream → Face Detection → Eye Region Extraction → CNN Classification → Score Tracking → Alert Trigger",

  challenges:
    "Ensuring robustness under varying lighting conditions and head movements was difficult. Additionally, reducing false positives while maintaining sensitivity required careful tuning of threshold-based alert logic.",

  metrics:
    "Achieved real-time inference with reliable fatigue detection and low latency on standard hardware.",

  improvements: [
    "Incorporate facial landmark detection for higher accuracy",
    "Add yawn detection and head pose estimation",
    "Deploy on edge devices for in-car embedded systems",
  ],

  github:
    "https://github.com/rohanpatilusa46-oss/Drowsiness-Detection",
  demo: "",
  image: "/projects/drowsiness.png",
},

  {
  slug: "location-intelligence",
  title: "Location Intelligence & Clustering System",

  tagline:
    "Data-driven geospatial analysis system using clustering for intelligent location recommendations.",

  tech: ["KMeans", "Pandas", "Scikit-learn", "Geospatial Analysis"],

  description:
    "Built a location intelligence system that analyzes geospatial and venue data to identify optimal neighborhoods. The system applies clustering techniques to group similar areas and provide insights for decision-making based on data patterns.",

  problem:
    "Selecting optimal locations based on multiple factors like venues, accessibility, and preferences is complex and subjective without structured data analysis.",

  solution: [
    "Collected and processed geospatial and venue data",
    "Engineered features representing location characteristics",
    "Applied KMeans clustering to group similar neighborhoods",
    "Generated insights and recommendations based on cluster patterns",
  ],

  architecture:
    "Data Collection → Data Cleaning → Feature Engineering → KMeans Clustering → Cluster Analysis → Recommendations",

  challenges:
    "Handling sparse and noisy real-world location data required careful preprocessing. Choosing the optimal number of clusters and ensuring meaningful segmentation was also a key challenge.",

  metrics:
    "Successfully segmented neighborhoods into meaningful clusters enabling data-driven location recommendations.",

  improvements: [
    "Incorporate dynamic user preferences into recommendation engine",
    "Use advanced clustering (DBSCAN, hierarchical)",
    "Integrate real-time data sources for adaptive insights",
  ],

  github:
    "https://github.com/rohanpatilusa46-oss/BattleOfNeighbourhood",
  demo: "",
  image: "/projects/location.png",
},
];