export const projects = [
  {
    id: "cvq",
    title: "CVQ — Civic Voice & Quick Resolution",
    category: "Civic Technology / AI",
    subtitle: "AI-assisted citizen grievance redressal and municipal dispatch platform",
    date: "2024",
    featured: true,
    tags: ["FastAPI", "Computer Vision", "React", "PostgreSQL", "Municipal Workflows"],
    description: "A civic complaint platform designed to make reporting local infrastructure problems easier and actionable, automatically routing verified citizen complaints into municipal worker assignment queues.",
    overview: "CVQ bridges the communication gap between citizens encountering civic infrastructure issues (potholes, water leaks, broken streetlights) and local urban governance departments through automated image verification and intelligent dispatch.",
    problem: "Traditional municipal helpline systems suffer from vague citizen reports, duplicate submissions, zero location verification, and sluggish manual triage, leaving citizens in the dark and municipal workers inefficiently deployed.",
    solution: "CVQ introduces an intuitive mobile-first reporting interface where citizens submit photo evidence and geolocation. An AI vision model automatically validates issue authenticity and category, triggering automated ticket generation and dispatch to assigned municipal zonal teams.",
    features: [
      "Image-based automated grievance validation and severity scoring",
      "Accurate geolocation tagging with anti-duplicate report clustering",
      "Department-level ticket dispatch for zonal field workers",
      "Real-time citizen status tracking and resolution photo verification",
      "Transparent resolution metrics dashboard for city administration"
    ],
    architecture: [
      { step: "Citizen App", detail: "Photo & GPS Capture" },
      { step: "API Gateway", detail: "FastAPI Authentication" },
      { step: "Vision Classifier", detail: "Issue Verification & Triage" },
      { step: "Dispatch Engine", detail: "Zonal Queue & Worker Allocation" },
      { step: "Resolution Portal", detail: "Proof Verification & Citizen Update" }
    ],
    challenges: "Handling varied camera qualities, low-light image submissions, and preventing duplicate submissions for the same road fault within a 50-meter radius.",
    impact: "Dramatically streamlines complaint verification time from days to seconds, establishing transparent tracking for urban civic problems.",
    github: "https://github.com/Ne0Blaze",
    live: null
  },
  {
    id: "student-360",
    title: "Student 360",
    category: "AI / Productivity",
    subtitle: "Intelligent distraction detection and study focus companion ecosystem",
    date: "2024",
    featured: true,
    tags: ["Browser Extension", "Python", "FastAPI", "ML Analytics", "React"],
    description: "A student-focused productivity suite addressing screen-time distraction and fragmented study habits through a lightweight browser extension and intelligent habit analytics backend.",
    overview: "Student 360 is built specifically for university students struggling with digital multi-tasking and cognitive overload. It combines unobtrusive browser-level activity monitoring with ML-driven focus trend detection.",
    problem: "Students frequently lose hours to unintended context-switching between academic tabs and social feeds, lacking actionable insights into when and why their attention fades.",
    solution: "A dual-component architecture: an ultra-lightweight browser extension that maps browsing context without logging private data, paired with a FastAPI backend that analyzes attention drift and suggests targeted pomodoro focus intervals.",
    features: [
      "Browser extension for active tab categorization and context drift detection",
      "Non-intrusive focus session enforcement with custom distraction blocklists",
      "Machine learning focus score reflecting active engagement versus passive scrolling",
      "Weekly productivity telemetry with cognitive peak-hour recommendations",
      "Seamless data sync to a clean student web dashboard"
    ],
    architecture: [
      { step: "Browser Client", detail: "Activity Telemetry Hook" },
      { step: "Edge Filter", detail: "Client-Side Privacy Anonymizer" },
      { step: "FastAPI Backend", detail: "Session Analysis & Scoring" },
      { step: "Analytics DB", detail: "Productivity Patterns Storage" },
      { step: "Dashboard UI", detail: "Actionable Student Insights" }
    ],
    challenges: "Ensuring zero performance overhead on the user's browser while strictly preserving user privacy through local client-side URL sanitization.",
    impact: "Empowers students with transparent visibility into digital habits, resulting in measurable improvements in focused study session completion.",
    github: "https://github.com/Ne0Blaze",
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
    overview: "An automated visual inspection system leveraging state-of-the-art object detection to streamline recycling sortation lines and public cleanliness inspections.",
    problem: "Manual waste sorting is hazardous, prone to contamination errors, and expensive to scale. Contaminated recyclable bins often force entire truckloads into landfills.",
    solution: "Trained custom YOLO bounding-box detection models on curated waste datasets via Roboflow, deploying the pipeline via an asynchronous FastAPI service for rapid batch and video frame evaluation.",
    features: [
      "Multi-class object detection identifying plastics, paper, metals, and organics",
      "Confidence thresholding and bounding-box overlay with localized coordinates",
      "FastAPI endpoint supporting single-image and batch stream inference",
      "Automated contamination alert generation for recycling facilities",
      "Exportable CSV and JSON reports for civic environmental metrics"
    ],
    architecture: [
      { step: "Input Feed", detail: "Camera Frame / Photo Upload" },
      { step: "Preprocessor", detail: "Resizing & Color Normalization" },
      { step: "YOLO Inference", detail: "Bounding Box & Class Prediction" },
      { step: "FastAPI Service", detail: "Payload Serialization & Filters" },
      { step: "Facility Alert", detail: "Contamination Report & Sort Guide" }
    ],
    challenges: "Distinguishing crushed or occluded recyclable plastic bottles from non-recyclable composite packaging under variable industrial lighting conditions.",
    impact: "Demonstrates 89%+ mAP on diverse waste imagery, providing a reproducible foundation for automated smart-city waste management.",
    github: "https://github.com/Ne0Blaze",
    live: null
  },
  {
    id: "car-price-prediction",
    title: "Used-Car Price Prediction Engine",
    category: "Machine Learning / FastAPI",
    subtitle: "Production valuation model with feature engineering and serialized API",
    date: "2024",
    featured: true,
    tags: ["XGBoost", "Scikit-Learn", "FastAPI", "Pandas", "Serialization"],
    description: "A machine learning pipeline estimating fair market vehicle selling prices from multidimensional attributes with comprehensive preprocessing and a live prediction API.",
    overview: "An end-to-end regression system designed to deliver trustworthy vehicle valuation estimates based on historical transaction parameters, mileage, depreciation curves, and brand retention.",
    problem: "Second-hand car pricing is plagued by extreme volatility, inconsistent dealer markups, and complex non-linear depreciation across brand tiers.",
    solution: "Constructed an automated data cleaning and outlier elimination pipeline in Pandas, trained fine-tuned gradient-boosted trees (XGBoost) with cross-validation, and packaged the artifact into a low-latency FastAPI prediction microservice.",
    features: [
      "Rigorous exploratory data analysis with skew correction and outlier removal",
      "One-hot and target encoding for categorical vehicle attributes",
      "High-performance XGBoost regression model achieving superior R² metrics",
      "Serialized model packaging with Joblib for sub-15ms inference latency",
      "Interactive Swagger/OpenAPI documentation for developer integration"
    ],
    architecture: [
      { step: "Raw Vehicle Data", detail: "Specs, Mileage, Ownership, Year" },
      { step: "Data Pipeline", detail: "Imputation & Feature Scaling" },
      { step: "XGBoost Regressor", detail: "Nonlinear Pricing Function" },
      { step: "FastAPI Endpoint", detail: "Schema Validation (Pydantic)" },
      { step: "Client App", detail: "Instant Fair Valuation Output" }
    ],
    challenges: "Managing high cardinality in vehicle make/model categoricals and preventing overfitting on rare vintage vehicle listings.",
    impact: "Yields reliable predictive valuation with high R² scores, proving a clean blueprint for financial and automotive ML microservices.",
    github: "https://github.com/Ne0Blaze",
    live: null
  },
  {
    id: "vehicle-insurance-mlops",
    title: "Vehicle Insurance MLOps Pipeline",
    category: "MLOps & Cloud",
    subtitle: "Production-grade ML pipeline with Docker, CI/CD, MongoDB, and artifact tracking",
    date: "2024",
    featured: true,
    tags: ["MLflow", "Docker", "MongoDB", "FastAPI", "CI/CD", "AWS/Cloud"],
    description: "An end-to-end machine learning system engineered around production operations: automated data ingestion, model registry, containerized deployment, and continuous monitoring.",
    overview: "Built to demonstrate how machine learning moves beyond Jupyter notebooks into enterprise reliability, integrating automated pipelines from database ingestion to cloud container runtime.",
    problem: "Most machine learning prototypes fail in production due to manual data handoffs, unversioned model artifacts, environment drift, and lack of automated validation gates.",
    solution: "Engineered a modular architecture: MongoDB for raw policy telemetry, automated ingestion scripts, experiment tracking with MLflow, Dockerized microservice packaging, and GitHub Actions CI/CD pipeline.",
    features: [
      "Automated data extraction and validation from MongoDB replica sets",
      "Experiment logging, metric comparisons, and artifact storage via MLflow",
      "Containerized microservice packaging with multi-stage Docker builds",
      "Automated continuous integration and smoke testing via GitHub Actions",
      "Robust prediction API with schema validation and health telemetry"
    ],
    architecture: [
      { step: "MongoDB Store", detail: "Raw Policy Data Ingestion" },
      { step: "ETL & Validation", detail: "Data Drift & Integrity Checks" },
      { step: "Training & MLflow", detail: "Hyperparameter Run Logging" },
      { step: "Docker Container", detail: "FastAPI Microservice Build" },
      { step: "CI/CD Deployment", detail: "Automated Cloud Deploy & Monitor" }
    ],
    challenges: "Configuring seamless artifact handoffs between isolated Docker build stages and establishing reproducible training environments.",
    impact: "Provides a complete enterprise-grade reference architecture for reliable, repeatable machine learning deployment.",
    github: "https://github.com/Ne0Blaze",
    live: null
  },
  {
    id: "multi-agent-news",
    title: "Multi-Agent News Intelligence",
    category: "Generative AI / Agents",
    subtitle: "Autonomous collaborative AI agents for news synthesis and editorial critique",
    date: "2024",
    featured: true,
    tags: ["LangGraph", "LangChain", "Gemini API", "Multi-Agent Systems", "Python"],
    description: "An autonomous multi-agent workflow where specialized researcher, summarizer, and critic agents collaborate to ingest, synthesize, cross-verify, and format comprehensive news dossiers.",
    overview: "A state-of-the-art agentic workflow orchestrating multiple LLM agents with distinct roles to produce balanced, hallucination-resistant briefing documents on complex topics.",
    problem: "Single-prompt LLM generation frequently suffers from superficial analysis, unchecked factual hallucinations, and inability to critique its own editorial outputs.",
    solution: "Utilized LangGraph to construct a stateful directed graph: an Ingestion Agent extracts multi-source articles, a Synthesis Agent drafts analytical sections, and an adversarial Critic Agent checks citations and tone before final compilation.",
    features: [
      "Role-based agent division: Ingestion, Synthesis, Fact-Checker, and Critic",
      "Stateful cycle loops allowing the Critic to request revisions until quality gates pass",
      "Integration with live search endpoints and Gemini language models",
      "Structured Markdown output generation with source attribution tables",
      "Adjustable temperature and critique strictness parameters"
    ],
    architecture: [
      { step: "Topic Trigger", detail: "User Research Topic" },
      { step: "Search & Ingest", detail: "Multi-Source Article Collection" },
      { step: "Synthesizer Agent", detail: "First-Draft Synthesis" },
      { step: "Adversarial Critic", detail: "Fact-Check & Bias Review Loop" },
      { step: "Final Dossier", detail: "Structured Executive Briefing" }
    ],
    challenges: "Preventing infinite feedback loops between the synthesizer and critic while preserving natural nuance and synthesis depth.",
    impact: "Reduces human desk research time from hours to minutes while producing higher fact-checked accuracy than standard single-prompt LLM wrappers.",
    github: "https://github.com/Ne0Blaze",
    live: null
  },
  {
    id: "ai-video-assistant",
    title: "AI Video Assistant & Summarizer",
    category: "Generative AI / RAG",
    subtitle: "Multimodal video comprehension, transcript indexing, and interactive Q&A",
    date: "2024",
    featured: false,
    tags: ["LangChain", "RAG", "Vector DB", "FastAPI", "Python"],
    description: "A GenAI application that processes long-form YouTube videos, transcribes audio, builds vector embeddings, and enables conversational question-answering with timestamp citations.",
    overview: "Turns passive video viewing into an active research experience by allowing researchers, students, and engineers to query hour-long lectures and tutorials in seconds.",
    problem: "Navigating long technical videos to locate specific formulas or explanations requires tedious scrubbing and skimming.",
    solution: "Combines automated transcript extraction, chunking, semantic vector embeddings, and RAG retrieval to return precise timestamped answers and structured summaries.",
    features: [
      "Automated video audio extraction and timestamped transcription",
      "Semantic chunking with overlapping windows for conceptual coherence",
      "Vector store retrieval for contextual question-answering",
      "Executive summary generation with key takeaway bullet points",
      "Clickable timestamp citations linking directly to relevant video segments"
    ],
    architecture: [
      { step: "Video URL", detail: "Audio Stream Extraction" },
      { step: "Whisper/Transcriber", detail: "Timestamped Transcript" },
      { step: "Embedding Engine", detail: "Chunk Vectorization" },
      { step: "Vector Search", detail: "Top-K Context Retrieval" },
      { step: "LLM Response", detail: "Cited Answer & Key Takeaways" }
    ],
    challenges: "Maintaining contextual continuity across transcript chunks where technical concepts span several minutes.",
    impact: "Enables instantaneous retrieval of core insights from lengthy educational and technical conference videos.",
    github: "https://github.com/Ne0Blaze",
    live: null
  },
  {
    id: "restaurant-rating-prediction",
    title: "Restaurant Aggregate Rating Prediction",
    category: "Machine Learning",
    subtitle: "Customer perception and rating prediction using tabular restaurant analytics",
    date: "2024",
    featured: false,
    tags: ["Scikit-Learn", "Pandas", "Matplotlib", "Python", "Feature Engineering"],
    description: "A machine learning model predicting aggregate restaurant ratings using structured tabular features, pricing tiers, location clusters, and service indicators.",
    overview: "An empirical machine learning exploration identifying the pivotal determinants of culinary business ratings across urban dining ecosystems.",
    problem: "Restaurant entrepreneurs often struggle to prioritize which factors—cost, online delivery, table booking, or cuisine variety—most heavily influence positive ratings.",
    solution: "Engineered a predictive regression model utilizing multi-variate exploratory data analysis, interaction terms, and tree-based ensembles to isolate high-impact features.",
    features: [
      "In-depth correlation analysis and feature importance ranking",
      "Geographic clustering and cuisine-type vectorization",
      "Evaluation across Random Forest and Gradient Boosting algorithms",
      "Clear visual error distribution and residual diagnostics",
      "Interpretable feature contribution plots for business decision-makers"
    ],
    architecture: [
      { step: "Tabular Dataset", detail: "Cuisines, Pricing, Votes, Services" },
      { step: "Feature Processing", detail: "Encoding & Missing Data Handling" },
      { step: "Model Training", detail: "Cross-Validated Ensemble Regressor" },
      { step: "Evaluation Suite", detail: "RMSE, MAE & Residual Diagnostics" },
      { step: "Insights Output", detail: "Key Driver Ranking & Rating Prediction" }
    ],
    challenges: "Handling imbalanced voting distributions where high-volume popular restaurants skew baseline rating distributions.",
    impact: "Uncovered key feature sensitivities that guide operational priorities for dining establishments.",
    github: "https://github.com/Ne0Blaze",
    live: null
  }
];
