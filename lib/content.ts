export const profile = {
  name: "Charan Mogulla",
  title: "AI Engineer",
  tagline: "Building scalable AI systems that deliver real business impact",
  initials: "CM",
  location: "Kansas City, KS",
  email: "charanmogulla0@gmail.com",
  phone: "+1 (913) 488-0588",
  linkedin: "https://www.linkedin.com/in/charanmogulla",
  github: "https://github.com/charanmogulla0-gith",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40%", label: "Accuracy Improvement" },
  { value: "11+", label: "LLM Production Systems" },
];

export const about = {
  heading: "Who I Am",
  paragraph:
    "AI Engineer with 5+ years of experience building scalable data and AI systems, including 3+ years specializing in production-grade LLM applications and Generative AI solutions. Experienced in developing end-to-end AI pipelines including document ingestion, embeddings, vector search, and LLM orchestration using LangChain and Azure OpenAI.",
  bullets: [
    "Expertise in designing RAG architectures, multi-agent workflows, and LLM fine-tuning (LoRA/QLoRA/PEFT).",
    "Proven ability to deploy containerized AI microservices on Azure using Docker, Kubernetes, and CI/CD pipelines.",
    "Focused on improving response accuracy, reducing hallucinations, and enabling scalable AI-driven automation.",
  ],
};

export const capabilities = [
  { icon: "Brain", title: "LLM & GenAI", desc: "RAG, fine-tuning, agents" },
  { icon: "Cog", title: "MLOps", desc: "Docker, K8s, CI/CD" },
  { icon: "Cloud", title: "Cloud", desc: "Azure, AWS, GCP" },
  { icon: "Database", title: "Data Eng", desc: "Kafka, Spark, ETL" },
];

export const skillGroups = [
  {
    icon: "Brain",
    title: "AI & LLM Engineering",
    color: "violet",
    skills: [
      "LLM Applications",
      "RAG Architectures",
      "Prompt Engineering",
      "LangChain / LlamaIndex",
      "LLM Fine-tuning (LoRA/QLoRA/PEFT)",
      "Agentic AI Systems",
      "Azure OpenAI",
      "Embeddings & Semantic Search",
      "Generative AI",
    ],
  },
  {
    icon: "Code2",
    title: "ML & Deep Learning",
    color: "sky",
    skills: [
      "PyTorch",
      "Transformers",
      "HuggingFace",
      "NLP",
      "Fine-Tuning",
      "Model Training & Evaluation",
      "Deep Learning",
      "Machine Learning",
    ],
  },
  {
    icon: "Database",
    title: "Vector DBs & Search",
    color: "teal",
    skills: [
      "FAISS",
      "Vector Databases",
      "Embedding-Based Retrieval",
      "Azure Cognitive Search",
      "Semantic Search",
      "Qdrant",
    ],
  },
  {
    icon: "Cloud",
    title: "Cloud Platforms",
    color: "blue",
    skills: [
      "Microsoft Azure",
      "Azure ML",
      "Azure OpenAI Service",
      "Azure Kubernetes Service (AKS)",
      "Azure App Services",
      "AWS",
      "Databricks",
    ],
  },
  {
    icon: "GitBranch",
    title: "Data & Streaming",
    color: "orange",
    skills: [
      "Apache Kafka",
      "Apache Spark",
      "Spark Streaming",
      "ETL Pipelines",
      "SQL",
      "Large-Scale Data Processing",
    ],
  },
  {
    icon: "Wrench",
    title: "MLOps & Backend",
    color: "emerald",
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Python",
      "C++",
      "Git",
      "Model Deployment",
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Staffingtree Inc",
    location: "Overland Park, KS",
    period: "Aug 2023 — Present",
    summary:
      "Architecting and productionizing enterprise-grade LLM applications with LangChain, RAG, and multi-agent systems.",
    bullets: [
      "Architected and productionized enterprise-grade LLM applications using LangChain and OpenAI, serving real-time customer workflows with scalable API infrastructure and robust monitoring.",
      "Designed and implemented end-to-end enterprise RAG architecture including document ingestion, chunking, embedding generation, vector indexing, and LLM retrieval pipelines, improving contextual response accuracy by 40% and significantly reducing hallucinations in production systems.",
      "Built multi-agent orchestration systems to automate complex customer operations, translating business logic into reliable AI-driven workflows.",
      "Implemented LoRA and QLoRA fine-tuning pipelines for domain adaptation, improving task-specific performance while optimizing GPU utilization and inference cost.",
      "Established automated evaluation pipelines including prompt benchmarking and human-in-the-loop validation to continuously improve LLM response quality.",
      "Containerized AI services with Docker and deployed them through CI/CD pipelines, enabling reproducible and scalable production deployments.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Infosys",
    location: "Hyderabad, India",
    period: "Jul 2022 — Jul 2023",
    summary:
      "Architected LLM-powered conversational AI systems on Microsoft Azure serving 100K+ users.",
    bullets: [
      "Built Azure OpenAI–powered conversational AI assistants integrated with enterprise knowledge bases, serving 100K+ end users.",
      "Designed semantic search pipelines using Azure Cognitive Search and embedding models, raising answer relevance and reducing escalations.",
      "Productionized models on Azure Kubernetes Service (AKS) with autoscaling, blue/green deploys, and observability via App Insights.",
      "Partnered with product and platform teams to define safety guardrails, prompt patterns, and evaluation rubrics.",
    ],
  },
  {
    role: "Data Engineer",
    company: "HCL Technologies",
    location: "Hyderabad, India",
    period: "Dec 2020 — Jun 2022",
    summary:
      "Built scalable data pipelines and real-time streaming systems for enterprise AI model consumption.",
    bullets: [
      "Built Kafka + Spark Streaming pipelines processing high-throughput event streams feeding downstream ML inference services.",
      "Designed ETL workflows on Databricks for petabyte-scale data lakes; implemented incremental processing and partition pruning for cost efficiency.",
      "Authored SQL transforms and dbt-style models powering BI and feature stores used by data science teams.",
      "Hardened pipelines with schema evolution checks, alerting, and lineage so downstream AI/ML systems received clean, trusted data.",
    ],
  },
];

export const projects = [
  {
    title: "Checkmate — AI Code Review GitHub App",
    blurb:
      "Production GitHub App that reviews PRs with Claude Sonnet 4.6, posts inline comments, uses RAG over the repo, and is fully evaluated + observable.",
    tags: ["FastAPI", "Claude API", "RAG", "Qdrant", "Langfuse", "Fly.io"],
    badge: "Live",
    liveUrl: "https://checkmate-ai.fly.dev",
    repoUrl: "https://github.com/charanmogulla0-gith/checkmateai",
    accent: "violet",
  },
  {
    title: "AI-Powered Chatbot with LangChain & RAG",
    blurb:
      "End-to-end RAG pipeline powering a context-aware enterprise chatbot for large document repositories.",
    tags: ["LangChain", "FAISS", "OpenAI", "Vector Embeddings"],
    badge: "LangChain · RAG",
    accent: "sky",
  },
  {
    title: "LLM Fine-Tuning for Domain-Specific Chatbot",
    blurb:
      "Fine-tuned open-source LLMs for enterprise AI assistants with domain-specific knowledge.",
    tags: ["Mistral", "LoRA", "GPT-J", "NVIDIA"],
    badge: "Model Optimization",
    accent: "emerald",
  },
  {
    title: "AI-Powered Search Engine with LLM Summarization",
    blurb:
      "Intelligent search engine with AI-generated concise summaries using GPT-4 and T5.",
    tags: ["GPT-4", "T5", "LangChain", "Embeddings"],
    badge: "LLM Summarization",
    accent: "amber",
  },
];

export const education = [
  {
    degree: "Master of Science",
    field: "Computer Science in AI & ML",
    school: "University of Central Missouri",
    location: "Lee's Summit, Missouri",
    period: "Aug 2023 — May 2025",
    gpa: "3.6/4.0",
    coursework: ["AI Ethics", "Machine Learning", "NLP", "Deep Learning", "Data Analytics"],
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Science, Engineering",
    school: "Bharat Institute of Engineering and Technology",
    location: "Hyderabad, India",
    period: "Jun 2017 — Jul 2021",
    gpa: "8.3/10",
    coursework: ["AI", "Machine Learning", "Computer Vision", "Networking"],
  },
];

export const certifications = [
  { title: "LangChain for Developers", issuer: "LangChain Official", year: "2024" },
  { title: "Generative AI with Large Language Models", issuer: "Coursera", year: "2024" },
  { title: "Deep Learning Specialization", issuer: "Andrew Ng", year: "2023" },
];

export const interests = [
  "AI Engineering roles",
  "LLM & RAG projects",
  "Consulting & collaboration",
  "Multi-agent AI systems",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
