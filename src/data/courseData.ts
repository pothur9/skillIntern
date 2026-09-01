export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  rating: number;
  students: string;
  duration: string;
  lessons: number;
  level: string;
  category: string;
  gradient: string;
  lastUpdated: string;
  language: string;
  bestseller: boolean;
  pdf: string;
  image?: string;
  badge?: string;
  salaryPackage?: string;
  keyTools?: string[];
  modules?: CourseModule[];
}

export const COURSES: Course[] = [
  {
    id: "FULLSTACK-001",
    image: "/fullstack_course.png",
    title: "Full Stack Web Development",
    description: "Master end-to-end web development from frontend UI to backend microservices. Build dynamic, high-performance web applications using HTML5, CSS3, JavaScript ES6+, React 19, Next.js, Node.js, Express, and MongoDB.",
    price: "₹60,000",
    originalPrice: "₹90,000",
    rating: 4.9,
    students: "250+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Full Stack Web Development",
    gradient: "from-indigo-600 to-blue-800",
    lastUpdated: "2026-08-20",
    language: "English",
    bestseller: true,
    badge: "Most Popular",
    salaryPackage: "₹6 - ₹16 LPA",
    keyTools: ["React 19", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    pdf: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf2/main/Smart%20Developer%20Program%20-%20CodeEmy!.pdf",
    modules: [
      { title: "HTML5, Modern CSS3 & Responsive Design", topics: ["DOM & Semantic Markup", "Flexbox & CSS Grid Layouts", "Mobile-First Responsive Engineering"] },
      { title: "Modern JavaScript Engine (ES6+)", topics: ["Async/Await & Promises", "Functional Programming & Closures", "DOM Manipulation & Fetch API"] },
      { title: "Frontend Mastery with React 19 & Next.js", topics: ["Component Lifecycle & Custom Hooks", "Server Components (RSC) & SSR", "Global State Management with Redux/Zustand"] },
      { title: "Backend Architecture with Node.js & Express", topics: ["RESTful API & GraphQL Design", "JWT Authentication & Security", "Middleware & Error Handling"] },
      { title: "Database Systems & Production Deployment", topics: ["MongoDB Mongoose Data Schemas", "PostgreSQL & SQL Query Optimization", "Vercel, Render & Docker Basics"] }
    ]
  },
  {
    id: "DATASCI-002",
    image: "/datascience_course.png",
    title: "Data Science",
    description: "Transform raw data into strategic business intelligence. Master Python programming, statistical modeling, machine learning algorithms, data wrangling with Pandas, predictive analytics, and deep learning neural networks.",
    price: "₹60,000",
    originalPrice: "₹90,000",
    rating: 4.9,
    students: "220+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Data Science",
    gradient: "from-purple-600 to-indigo-800",
    lastUpdated: "2026-08-20",
    language: "English",
    bestseller: true,
    badge: "High Demand",
    salaryPackage: "₹8 - ₹18 LPA",
    keyTools: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Jupyter"],
    pdf: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf2/main/Applied%20Machine%20Intelligence%20Mastery%20Program%20-%20CodeEmy!.pdf",
    modules: [
      { title: "Python Programming & Mathematics for Data Science", topics: ["Python Data Structures & OOP", "Linear Algebra & Matrix Computation", "Probability Distributions & Hypothesis Testing"] },
      { title: "Data Cleaning, Wrangling & EDA", topics: ["Pandas & NumPy Deep Dive", "Data Imputation & Outlier Removal", "Exploratory Visualizations with Seaborn"] },
      { title: "Supervised & Unsupervised Machine Learning", topics: ["Linear/Logistic Regression & Decision Trees", "Random Forests, XGBoost & Gradient Boosting", "K-Means & Hierarchical Clustering"] },
      { title: "Deep Learning Foundations & Neural Networks", topics: ["TensorFlow & Keras Architecture", "Artificial Neural Networks (ANN)", "Hyperparameter Tuning & Regularization"] },
      { title: "Production Data Pipelines & Model Deployment", topics: ["FastAPI ML Model Endpoints", "Model Tracking with MLflow", "Cloud Deployment on AWS/GCP"] }
    ]
  },
  {
    id: "DATAANALYTICS-003",
    image: "/dataanalytics_course.png",
    title: "Data Analytics",
    description: "Extract, visualize, and communicate insights from complex corporate datasets. Master Advanced Microsoft Excel, SQL database querying, interactive Power BI dashboards, Tableau storytelling, and Python analytical tools.",
    price: "₹60,000",
    originalPrice: "₹90,000",
    rating: 4.8,
    students: "240+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Data Analytics",
    gradient: "from-pink-600 to-purple-800",
    lastUpdated: "2026-08-20",
    language: "English",
    bestseller: false,
    badge: "Career Starter",
    salaryPackage: "₹5 - ₹12 LPA",
    keyTools: ["SQL", "Power BI", "Tableau", "Excel", "Python", "Google Looker"],
    pdf: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf2/main/Data%20Intelligence%20%26%20Analytics%20Program%20-%20CodeEmy!.pdf",
    modules: [
      { title: "Advanced Microsoft Excel for Data Analysts", topics: ["VLOOKUP, INDEX/MATCH & XLOOKUP", "PivotTables & Slicers", "Financial Modeling & Automation Macros"] },
      { title: "SQL Database Querying & Data Warehousing", topics: ["Joins, Subqueries & Aggregations", "Window Functions (RANK, LEAD, LAG)", "Database Schema Design & Indexes"] },
      { title: "Interactive Business Intelligence with Power BI", topics: ["Data Transformation with Power Query", "DAX Formulas & Measures", "Real-Time KPI Dashboard Design"] },
      { title: "Data Visualization & Storytelling with Tableau", topics: ["Custom Charts & Interactive Filters", "Geographic Mapping & Dashboards", "Executive Presentation Techniques"] },
      { title: "Python for Analytical Reporting", topics: ["Pandas Data Manipulation", "Matplotlib & Plotly Dashboards", "Automated Excel & PDF Report Generation"] }
    ]
  },
  {
    id: "AI-004",
    image: "/aiml_course.png",
    title: "Artificial Intelligence",
    description: "Build cutting-edge artificial intelligence systems, computer vision models, and neural networks. Master Deep Learning, PyTorch, Natural Language Processing (NLP), Convolutional Networks, and Autonomous AI architecture.",
    price: "₹60,000",
    originalPrice: "₹90,000",
    rating: 4.9,
    students: "280+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Artificial Intelligence",
    gradient: "from-purple-600 to-pink-700",
    lastUpdated: "2026-08-20",
    language: "English",
    bestseller: true,
    badge: "Next-Gen Tech",
    salaryPackage: "₹9 - ₹22 LPA",
    keyTools: ["PyTorch", "TensorFlow", "OpenCV", "Scikit-Learn", "FastAPI", "Python"],
    pdf: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf2/main/AI%20Developer%20Program%20-%20CodeEmy!.pdf",
    modules: [
      { title: "Foundations of AI & Neural Network Math", topics: ["Tensors, Vectors & Matrix Operations", "Gradient Descent & Backpropagation", "PyTorch Core Building Blocks"] },
      { title: "Machine Learning & Pattern Recognition", topics: ["Supervised Learning & Classifiers", "Support Vector Machines & KNN", "Model Evaluation & Confusion Matrix"] },
      { title: "Computer Vision & Image Processing", topics: ["Convolutional Neural Networks (CNNs)", "OpenCV Real-Time Video Analysis", "YOLO Object Detection & Segmentation"] },
      { title: "Natural Language Processing (NLP)", topics: ["Text Preprocessing & Word Embeddings", "RNNs, LSTMs & Sequence Models", "Transformer Architectures & Attention"] },
      { title: "AI Deployment & Production Systems", topics: ["FastAPI Model Serving", "Docker for AI Applications", "Cloud GPU Deployment on AWS/GCP"] }
    ]
  },
  {
    id: "GENAI-005",
    image: "/Design.png",
    title: "Generative AI (Gen AI)",
    description: "Master Large Language Models (LLMs), RAG systems, Prompt Engineering, Diffusion models, and AI agent frameworks. Build enterprise-grade Gen AI applications using LangChain, OpenAI APIs, Vector DBs, and Llama Index.",
    price: "₹60,000",
    originalPrice: "₹90,000",
    rating: 4.9,
    students: "290+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Generative AI",
    gradient: "from-pink-600 to-rose-700",
    lastUpdated: "2026-08-20",
    language: "English",
    bestseller: true,
    badge: "Trending #1",
    salaryPackage: "₹10 - ₹24 LPA",
    keyTools: ["LangChain", "OpenAI API", "HuggingFace", "Pinecone", "LlamaIndex", "Python"],
    pdf: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf2/main/AI%20Developer%20Program%20-%20CodeEmy!.pdf",
    modules: [
      { title: "Introduction to Large Language Models (LLMs)", topics: ["Transformer Architecture & Attention Mechanisms", "GPT, Llama, Claude & Open Source LLMs", "Tokenization, Context Windows & Embeddings"] },
      { title: "Advanced Prompt Engineering & Chain-of-Thought", topics: ["Few-Shot & Zero-Shot Prompting", "System Prompts & Structured JSON Outputs", "Prompt Security & Injection Defense"] },
      { title: "Retrieval-Augmented Generation (RAG) Architecture", topics: ["Vector Databases (Pinecone, Chroma, Qdrant)", "Semantic Search & Hybrid Retrieval", "Document Processing & Chunking Strategies"] },
      { title: "Autonomous AI Agents & Multi-Agent Frameworks", topics: ["LangChain & LangGraph Orchestration", "Function Calling & Tool Integration", "CrewAI & AutoGen Agent Systems"] },
      { title: "Fine-Tuning & Custom Gen AI Deployment", topics: ["LoRA & QLoRA Fine-Tuning", "Model Evaluation & LLM Benchmarking", "Deploying Gen AI Microservices"] }
    ]
  },
  {
    id: "DIGITALMKTG-006",
    image: "/digitalmarketing_course.png",
    title: "Digital Marketing",
    description: "Accelerate brand revenue and user growth through data-driven digital channels. Master Search Engine Optimization (SEO), Meta & Google Performance Ads, Content Strategy, Social Media Funnels, and GA4 Analytics.",
    price: "₹40,000",
    originalPrice: "₹60,000",
    rating: 4.8,
    students: "210+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Digital Marketing",
    gradient: "from-teal-600 to-emerald-800",
    lastUpdated: "2026-08-20",
    language: "English",
    bestseller: false,
    badge: "High Growth",
    salaryPackage: "₹5 - ₹14 LPA",
    keyTools: ["Google Ads", "Meta Ads", "SEO Tools", "Google Analytics 4", "Semrush", "HubSpot"],
    pdf: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf2/main/Digital%20Marketing%20%26%20Growth%20Strategy%20Program%20-%20CodeEmy!.pdf",
    modules: [
      { title: "Search Engine Optimization (SEO) Masterclass", topics: ["On-Page, Technical & Off-Page SEO", "Keyword Research & Competitor Analysis", "Local SEO & Site Auditing Tools"] },
      { title: "Paid Performance Advertising (PPC & Meta)", topics: ["Google Search, Display & Shopping Ads", "Meta Ads Manager & Custom Audiences", "Retargeting & ROI Optimization"] },
      { title: "Content Marketing & Social Media Strategy", topics: ["Viral Content Creation & Copywriting", "Short-Form Video Strategy (Reels/TikTok)", "Community Management & Influencer Outreach"] },
      { title: "Email Marketing & Lead Generation Funnels", topics: ["Lead Magnets & Opt-in Funnels", "Automated Drip Email Campaigns", "Conversion Rate Optimization (CRO)"] },
      { title: "Marketing Analytics & Data Attribution", topics: ["Google Analytics 4 (GA4) Configuration", "UTM Tracking & Custom Dashboards", "Data-Driven Budget Allocation"] }
    ]
  }
];
