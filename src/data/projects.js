export const projects = [
  {
    id: "ai-video-assistant",
    title: "AI Video Assistant",
    category: "LLMOps / Multi-Modal RAG",
    subtitle: "Multi-modal RAG assistant with Qdrant vector retrieval and LangGraph multi-agent orchestration",
    date: "2024",
    featured: true,
    tags: ["Python", "LangChain", "LangGraph", "FastAPI", "Qdrant", "RAG", "LLMs"],
    description: "Engineered a multi-modal RAG video assistant using LangChain and Qdrant, optimizing transcript context retrieval and cutting query latency by 35% across 50+ video transcripts with multi-agent orchestration.",
    overview: "A sophisticated LLMOps platform designed to process long-form video content, perform semantic vector indexing in Qdrant, and orchestrate complex multi-step reasoning using LangGraph agent graphs.",
    problem: "Querying dense technical lecture videos or multi-hour webinars is hindered by high retrieval latency, context dilution, and single-prompt hallucination issues.",
    solution: "Built a production RAG architecture utilizing overlapping semantic chunking, Qdrant vector search, and a stateful LangGraph agent graph where specialized tools handle multi-step user queries with automated critique.",
    features: [
      "Cut transcript context retrieval latency by 35% across 50+ video transcripts using Qdrant vector indexing",
      "Implemented multi-agent orchestrations using LangGraph and LangChain to handle custom tool execution",
      "Modular FastAPI backend delivering sub-second response streaming to client endpoints",
      "Multi-step query decomposition for handling complex comparative reasoning across video catalogs",
      "Automated prompt evaluation and semantic similarity benchmarks"
    ],
    architecture: [
      { step: "Video Transcript", detail: "Audio Ingestion & Chunking" },
      { step: "Qdrant Vector DB", detail: "Dense Semantic Embeddings" },
      { step: "LangGraph Agents", detail: "Multi-Agent Planning & Tools" },
      { step: "FastAPI Gateway", detail: "Async Context Streaming" },
      { step: "Synthesized Output", detail: "Cited Response with Timestamps" }
    ],
    challenges: "Minimizing token costs and latency while orchestrating iterative reasoning loops across large multi-transcript context windows.",
    impact: "Achieved a 35% reduction in query latency and zero-hallucination factual grounding for multi-hour video libraries.",
    github: "https://github.com/ykansh",
    live: null
  },
  {
    id: "sentiment-analysis-mlops",
    title: "Capstone Project: Sentiment Analysis Pipeline",
    category: "MLOps / Cloud Infrastructure",
    subtitle: "Full-lifecycle ML pipeline deployed on AWS EKS with Kubernetes, MLflow, DVC, and Prometheus/Grafana",
    date: "2024",
    featured: true,
    tags: ["Kubernetes", "AWS (EKS)", "MLflow", "DVC", "Docker", "Prometheus", "Grafana", "GitHub Actions", "CI/CD"],
    description: "Architected a full-lifecycle Machine Learning pipeline with MLflow & DVC tracking, automated end-to-end deployment on AWS EKS with Docker and Kubernetes, and Prometheus/Grafana latency monitoring.",
    overview: "A production-grade MLOps reference implementation built from scratch to embody enterprise operational excellence: automated data versioning, reproducible experiments, containerized orchestration, and real-time observability.",
    problem: "Machine learning workflows frequently fail in production due to manual data handoffs, unversioned datasets, environment drift, and complete absence of real-time latency or drift monitoring in production clusters.",
    solution: "Established automated data versioning using DVC, unified experiment tracking with MLflow, containerized microservices via Docker, automated CI/CD with GitHub Actions, and deployed to an AWS EKS Kubernetes cluster with live Prometheus metrics and Grafana dashboards.",
    features: [
      "Full-lifecycle pipeline: end-to-end data preprocessing, model training, evaluation, and experiment tracking via MLflow & DVC",
      "Automated end-to-end ML deployment on AWS EKS using Docker and Kubernetes pods",
      "Production Prometheus & Grafana monitoring tracking model latency, throughput, memory consumption, and uptime",
      "Continuous Integration & Continuous Deployment (CI/CD) pipelines powered by GitHub Actions",
      "Automated model registry and stage transitions (Staging → Production)"
    ],
    architecture: [
      { step: "Data & DVC", detail: "Versioned Ingestion & Preprocessing" },
      { step: "MLflow Registry", detail: "Experiment & Metric Tracking" },
      { step: "Docker Packaging", detail: "Multi-Stage Container Build" },
      { step: "AWS EKS / K8s", detail: "Automated Pod Orchestration" },
      { step: "Prometheus / Grafana", detail: "Real-Time Latency & Uptime" }
    ],
    challenges: "Configuring Kubernetes persistent volumes for model weights, setting up ingress controllers, and creating reliable Prometheus scrape configs for FastAPI metrics.",
    impact: "Established a scalable, cloud-native ML deployment foundation with 99.9% uptime and instant alerting on inference latency spikes.",
    github: "https://github.com/ykansh",
    live: null
  },
  {
    id: "student-360",
    title: "Student 360 Hackathon Project",
    category: "AI / Analytics Platform",
    subtitle: "Integrated student performance metrics, predictive analytics, and modular FastAPI ML endpoints",
    date: "2024",
    featured: true,
    tags: ["Python", "FastAPI", "Scikit-learn", "LangChain", "Docker", "Git"],
    description: "Built an integrated analytics & management platform delivering 360-degree student performance metrics and AI-driven personalized insights backed by modular FastAPI endpoints and ML evaluation models.",
    overview: "An award-winning hackathon platform combining predictive machine learning and LLM synthesis to provide holistic 360-degree telemetry on academic progress and distraction patterns.",
    problem: "Educational institutions and students struggle with disjointed data across disparate portals, lacking early-warning systems for academic drift.",
    solution: "Designed and built modular FastAPI microservices backed by Scikit-learn evaluation models and LangChain summarization to generate actionable individual learning paths.",
    features: [
      "Built an integrated analytics & management platform delivering 360-degree student performance metrics",
      "Designed modular FastAPI endpoints backed by ML evaluation models",
      "Containerized microservice architecture using Docker for rapid hackathon deployment",
      "AI-driven personalized insights and tailored recommendation engine using LangChain",
      "Collaborative Git version control and team sprint management"
    ],
    architecture: [
      { step: "Student Telemetry", detail: "Performance & Activity Data" },
      { step: "FastAPI Backend", detail: "Modular REST Endpoints" },
      { step: "Scikit-learn Models", detail: "Predictive Evaluation Scoring" },
      { step: "LangChain Engine", detail: "Personalized Insight Synthesis" },
      { step: "Analytics Portal", detail: "Actionable 360° Metrics" }
    ],
    challenges: "Building and testing a complete end-to-end multi-service architecture under strict 36-hour hackathon deadlines.",
    impact: "Delivered a fully working prototype that showcased practical AI evaluation and predictive analytics.",
    github: "https://github.com/ykansh",
    live: null
  },
  {
    id: "cvq",
    title: "CVQ — Civic Voice & Quick Resolution",
    category: "Civic Technology / AI",
    subtitle: "AI-assisted citizen grievance redressal and municipal dispatch platform",
    date: "2024",
    featured: true,
    tags: ["FastAPI", "Computer Vision", "Supabase", "PostgreSQL", "Docker"],
    description: "A civic complaint platform designed to make reporting local infrastructure problems actionable, automatically validating citizen issue photos and routing them into municipal worker queues.",
    overview: "CVQ bridges the gap between citizens encountering civic infrastructure issues (potholes, garbage, broken streetlights) and municipal departments via automated validation and zonal dispatch.",
    problem: "Traditional municipal helplines suffer from vague citizen reports, duplicate submissions, and lack of visual proof.",
    solution: "Citizens submit geo-tagged photo evidence. An AI vision model validates issue authenticity, triggering automated ticket generation in Supabase/PostgreSQL and dispatching tasks to field workers.",
    features: [
      "Image-based automated grievance validation and severity triage",
      "Geolocation tagging with anti-duplicate clustering",
      "Department-level ticket dispatch for zonal field teams",
      "FastAPI backend with Supabase database integrations"
    ],
    architecture: [
      { step: "Citizen App", detail: "Photo & GPS Capture" },
      { step: "FastAPI Backend", detail: "Validation & Triage" },
      { step: "Supabase DB", detail: "Ticket Storage & Queue" },
      { step: "Municipal Portal", detail: "Worker Allocation & Status" }
    ],
    challenges: "Handling varied camera qualities and low-light image submissions in urban environments.",
    impact: "Accelerated complaint triage from days to seconds with transparent status tracking.",
    github: "https://github.com/ykansh",
    live: null
  },
  {
    id: "trash-detection",
    title: "AI Trash & Waste Detection",
    category: "Computer Vision",
    subtitle: "Real-time municipal waste classification and contamination detector",
    date: "2024",
    featured: true,
    tags: ["YOLO", "Roboflow", "Python", "FastAPI", "OpenCV"],
    description: "A computer vision system that detects trash from uploaded images, identifies waste categories (organic, plastic, recyclable), and generates structured reports for municipal recycling facilities.",
    overview: "An automated visual inspection system leveraging state-of-the-art object detection to streamline recycling sortation lines.",
    problem: "Manual waste sorting is hazardous, prone to contamination errors, and expensive to scale.",
    solution: "Trained custom YOLO bounding-box detection models on curated waste datasets via Roboflow, deploying the pipeline via an asynchronous FastAPI service.",
    features: [
      "Multi-class object detection identifying plastics, paper, metals, and organics",
      "FastAPI endpoint supporting batch stream inference",
      "Automated contamination alert generation for recycling facilities"
    ],
    architecture: [
      { step: "Camera Feed", detail: "Frame Upload" },
      { step: "YOLO Inference", detail: "Bounding Box & Class" },
      { step: "FastAPI Service", detail: "Payload Serialization" },
      { step: "Facility Alert", detail: "Contamination Report" }
    ],
    challenges: "Distinguishing crushed or occluded recyclable plastic bottles from non-recyclable composite packaging.",
    impact: "Demonstrates 89%+ mAP on diverse waste imagery for automated municipal recycling sortation.",
    github: "https://github.com/ykansh",
    live: null
  },
  {
    id: "car-price-prediction",
    title: "Used-Car Price Prediction Engine",
    category: "Data Science / FastAPI",
    subtitle: "Production valuation model with feature engineering and serialized FastAPI API",
    date: "2024",
    featured: true,
    tags: ["XGBoost", "Scikit-Learn", "FastAPI", "Pandas", "Serialization"],
    description: "A machine learning pipeline estimating fair market vehicle selling prices from multidimensional attributes with comprehensive preprocessing and a live FastAPI prediction API.",
    overview: "An end-to-end regression system designed to deliver trustworthy vehicle valuation estimates based on historical transaction parameters, mileage, and depreciation curves.",
    problem: "Second-hand car pricing is plagued by extreme volatility and inconsistent dealer markups.",
    solution: "Constructed an automated data cleaning pipeline in Pandas, trained fine-tuned gradient-boosted trees (XGBoost), and packaged the artifact into a low-latency FastAPI microservice.",
    features: [
      "Exploratory data analysis with skew correction and outlier removal",
      "High-performance XGBoost regression model achieving superior R² metrics",
      "Serialized model packaging for sub-15ms inference latency via FastAPI"
    ],
    architecture: [
      { step: "Vehicle Data", detail: "Specs, Mileage, Year" },
      { step: "Data Pipeline", detail: "Imputation & Scaling" },
      { step: "XGBoost Regressor", detail: "Nonlinear Valuation" },
      { step: "FastAPI Endpoint", detail: "Instant Valuation Output" }
    ],
    challenges: "Managing high cardinality in vehicle make/model categoricals.",
    impact: "Yields reliable predictive valuation with high R² scores and sub-15ms latency.",
    github: "https://github.com/ykansh",
    live: null
  }
];
