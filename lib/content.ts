export const profile = {
  name: "Charan Mogulla",
  title: "AI Engineer",
  tagline: "Retrieval systems, fine-tuned open-source LLMs, and the boring infra that ships them.",
  initials: "CM",
  location: "Kansas City, KS",
  email: "charanmogulla0@gmail.com",
  phone: "+1 (913) 488-0588",
  linkedin: "https://www.linkedin.com/in/charan-mogulla-808343175/",
  github: "https://github.com/charanmogulla0-gith",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { value: "3+", label: "Years in Production ML" },
  { value: "40%", label: "Inference Cost Reduction" },
  { value: "<2s", label: "Median RAG Response" },
];

export const about = {
  heading: "Who I Am",
  paragraph:
    "AI Engineer with about 3 years of ML experience, including roughly 2 years working on LLM applications. Most of that recent work has been retrieval systems, fine-tuning open-source models with LoRA and QLoRA, and shipping the resulting services on Azure. Earlier background is in Kafka and Spark data pipelines feeding downstream ML.",
  bullets: [
    "Designed RAG document Q&A on LangChain + OpenAI embeddings + FAISS with a FastAPI backend; median response time on production traffic sits a little under 2 seconds.",
    "Fine-tuned Mistral 7B and LLaMA-2 with LoRA/QLoRA and moved the high-volume path off GPT-4 onto the tuned models — ~40% lower per-query inference cost at comparable quality on the eval set.",
    "Built evaluation harnesses (automated prompt benchmarks plus a small reviewer queue) so prompt and model changes have to pass before they go out.",
  ],
};

export const capabilities = [
  { icon: "Brain", title: "LLM & RAG", desc: "LangChain, embeddings, FAISS" },
  { icon: "Cog", title: "Fine-Tuning", desc: "LoRA, QLoRA, Mistral, LLaMA-2" },
  { icon: "Cloud", title: "Azure", desc: "ML, OpenAI, AKS, Functions" },
  { icon: "Database", title: "Streaming", desc: "Kafka, Spark Streaming, ETL" },
];

export const skillGroups = [
  {
    icon: "Brain",
    title: "LLM & GenAI",
    color: "violet",
    skills: [
      "RAG",
      "Prompt Engineering",
      "LoRA",
      "QLoRA",
      "LangChain",
      "OpenAI",
      "Azure OpenAI",
      "Embeddings",
    ],
  },
  {
    icon: "Code2",
    title: "ML & Deep Learning",
    color: "sky",
    skills: [
      "PyTorch",
      "Hugging Face Transformers",
      "scikit-learn",
    ],
  },
  {
    icon: "Database",
    title: "Vector Search",
    color: "teal",
    skills: ["FAISS", "Azure AI Search"],
  },
  {
    icon: "GitBranch",
    title: "Data & Streaming",
    color: "orange",
    skills: [
      "Apache Kafka",
      "Apache Spark",
      "Spark Streaming",
      "SQL",
      "ETL",
    ],
  },
  {
    icon: "Wrench",
    title: "MLOps",
    color: "emerald",
    skills: [
      "Docker",
      "Kubernetes (AKS)",
      "Azure DevOps",
      "Azure Monitor",
      "MLflow",
    ],
  },
  {
    icon: "Cloud",
    title: "Cloud & Backend",
    color: "blue",
    skills: [
      "Azure ML",
      "Azure OpenAI",
      "Azure Functions",
      "Azure App Services",
      "AKS",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Python",
      "SQL",
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Staffingtree Inc.",
    location: "Overland Park, KS",
    period: "Aug 2023 — Present",
    summary:
      "Production RAG systems, LoRA/QLoRA fine-tuning, and multi-agent orchestration with LangChain on Azure.",
    bullets: [
      "Built a RAG document Q&A system with LangChain, OpenAI embeddings, and FAISS behind a FastAPI backend. Median response time on production traffic sits a little under 2 seconds for typical queries.",
      "Wrote the ingestion and chunking pipeline for PDF, HTML, and Markdown sources. Tuned chunk size and overlap by running retrieval evals against a labeled question set — the shipped version had roughly 30% fewer retrieval misses than the first pass.",
      "Fine-tuned Mistral 7B and LLaMA-2 with LoRA and QLoRA on a domain Q&A dataset, then moved the high-volume path off GPT-4 onto the tuned models. Per-query inference cost dropped by around 40% with comparable answer quality on our eval set.",
      "Set up an evaluation harness with automated prompt benchmarks plus a small reviewer queue. Prompt and model changes have to pass it before they can go out.",
      "Added a multi-document agent flow with LangChain tools and Azure Functions for queries that need to pull from more than one source in a single response.",
    ],
  },
  {
    role: "Systems Engineer (ML Engineer track)",
    company: "Infosys",
    location: "Hyderabad, India",
    period: "Jul 2022 — Jul 2023",
    summary:
      "Azure AI Search prototypes, Azure ML pipelines, and call-center retrieval workflows.",
    bullets: [
      "Prototyped a knowledge assistant on Azure AI Search using vector retrieval; moved from internal prototype to pilot before role end.",
      "Built Azure ML pipelines for ingestion, training, eval tracking, and deployment. Release cycles for new model versions went from about three weeks down to roughly one.",
      "Packaged FastAPI microservices in Docker on AKS through Azure DevOps. Versioning was set up so a rollback was one command instead of a redeploy.",
      "Hooked retrieval-based answer suggestions into the call-center workflow for a few intents and saw measurable handle-time reduction on the tracked subset.",
    ],
  },
  {
    role: "Data Engineer",
    company: "HCL Technologies",
    location: "Hyderabad, India",
    period: "Dec 2020 — Jun 2022",
    summary:
      "Real-time Kafka + Spark Streaming pipelines feeding downstream fraud detection and analytics.",
    bullets: [
      "Built and maintained Kafka and Spark Streaming pipelines for real-time logistics and transaction events that fed downstream fraud detection and analytics.",
      "Cut fraud detection latency from a few minutes down to under 30 seconds by reworking the ingestion path and tuning Spark Streaming micro-batch intervals.",
      "Wrote Spark SQL ETL jobs with schema validation, deduplication, and quality checks. Cut down on downstream pipeline failures caused by upstream schema drift.",
    ],
  },
];

export const projects = [
  {
    title: "Checkmate — AI Code Review GitHub App",
    blurb:
      "Reviews pull requests with Claude and posts inline comments scoped to the changed diff lines. Indexes the target repo on first use into Qdrant with BGE-small embeddings so the reviewer sees function-level context, not just the diff. Langfuse traces every call (tokens, latency, cost), and a promptfoo suite of 14 test cases has to pass before any prompt change ships.",
    tags: ["FastAPI", "Claude API", "RAG", "Qdrant", "Langfuse", "promptfoo", "Fly.io"],
    badge: "Live",
    liveUrl: "https://checkmate-ai.fly.dev",
    repoUrl: "https://github.com/charanmogulla0-gith/checkmateai",
    accent: "violet",
  },
  {
    title: "Domain-Specific LLM Fine-Tuning",
    blurb:
      "Fine-tuned Mistral 7B with QLoRA on a curated instruction dataset I assembled (~8K pairs). Compared the tuned model against the base model on a held-out eval set, tracking exact-match plus a small human-rated quality score. Code and write-up on GitHub.",
    tags: ["Mistral 7B", "QLoRA", "PEFT", "Hugging Face", "Evaluation"],
    badge: "Fine-Tuning",
    accent: "emerald",
  },
];

export const education = [
  {
    degree: "Master of Science",
    field: "Computer Science (AI & ML)",
    school: "University of Central Missouri",
    location: "Lee's Summit, Missouri",
    period: "Aug 2023 — May 2025",
    gpa: "3.6/4.0",
    coursework: ["AI Ethics", "Machine Learning", "NLP", "Deep Learning", "Data Analytics"],
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Science",
    school: "Bharat Institute of Engineering and Technology",
    location: "Hyderabad, India",
    period: "Jun 2017 — Jul 2021",
    gpa: "8.3/10",
    coursework: ["AI", "Machine Learning", "Computer Vision", "Networking"],
  },
];

export const certifications = [
  { title: "Generative AI with LLMs", issuer: "DeepLearning.AI", year: "2024" },
  { title: "LangChain for LLM Application Development", issuer: "DeepLearning.AI", year: "2024" },
  { title: "Deep Learning Specialization", issuer: "DeepLearning.AI", year: "2023" },
];

export const interests = [
  "AI Engineering roles",
  "LLM & RAG projects",
  "Fine-tuning & evaluation work",
  "Consulting & collaboration",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
