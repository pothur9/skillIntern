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
    id: "COMBO-001",
    image: "/aiml_course.png",
    title: "Complete Tech Mastery Package — Data Science, Web Dev & AI/ML",
    description:
      "One all-in-one career package bundling three flagship tracks — Full Stack Web Development, Data Science, and Artificial Intelligence (AI/ML). Master React 19, Next.js, Node.js, Python, Pandas, Machine Learning, Deep Learning, PyTorch, and Computer Vision in a single bundled program at one combo price.",
    price: "₹8,000",
    originalPrice: "₹1,80,000",
    rating: 4.9,
    students: "750+",
    duration: "360 hours",
    lessons: 180,
    level: "Beginner to Advanced",
    category: "Complete Tech Package",
    gradient: "from-indigo-600 to-purple-700",
    lastUpdated: "2026-11-23",
    language: "English",
    bestseller: true,
    badge: "Best Value Combo",
    salaryPackage: "₹6 - ₹24 LPA",
    keyTools: [
      "React 19",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Python",
      "Pandas",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "FastAPI"
    ],
    pdf: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf2/main/Smart%20Developer%20Program%20-%20CodeEmy!.pdf",
    modules: [
      // --- Full Stack Web Development Track ---
      { title: "HTML5, Modern CSS3 & Responsive Design", topics: ["DOM & Semantic Markup", "Flexbox & CSS Grid Layouts", "Mobile-First Responsive Engineering"] },
      { title: "Modern JavaScript Engine (ES6+)", topics: ["Async/Await & Promises", "Functional Programming & Closures", "DOM Manipulation & Fetch API"] },
      { title: "Frontend Mastery with React 19 & Next.js", topics: ["Component Lifecycle & Custom Hooks", "Server Components (RSC) & SSR", "Global State Management with Redux/Zustand"] },
      { title: "Backend Architecture with Node.js & Express", topics: ["RESTful API & GraphQL Design", "JWT Authentication & Security", "Middleware & Error Handling"] },
      { title: "Database Systems & Production Deployment", topics: ["MongoDB Mongoose Data Schemas", "PostgreSQL & SQL Query Optimization", "Vercel, Render & Docker Basics"] },
      // --- Data Science Track ---
      { title: "Python Programming & Mathematics for Data Science", topics: ["Python Data Structures & OOP", "Linear Algebra & Matrix Computation", "Probability Distributions & Hypothesis Testing"] },
      { title: "Data Cleaning, Wrangling & EDA", topics: ["Pandas & NumPy Deep Dive", "Data Imputation & Outlier Removal", "Exploratory Visualizations with Seaborn"] },
      { title: "Supervised & Unsupervised Machine Learning", topics: ["Linear/Logistic Regression & Decision Trees", "Random Forests, XGBoost & Gradient Boosting", "K-Means & Hierarchical Clustering"] },
      { title: "Deep Learning Foundations & Neural Networks", topics: ["TensorFlow & Keras Architecture", "Artificial Neural Networks (ANN)", "Hyperparameter Tuning & Regularization"] },
      { title: "Production Data Pipelines & Model Deployment", topics: ["FastAPI ML Model Endpoints", "Model Tracking with MLflow", "Cloud Deployment on AWS/GCP"] },
      // --- Artificial Intelligence (AI/ML) Track ---
      { title: "Foundations of AI & Neural Network Math", topics: ["Tensors, Vectors & Matrix Operations", "Gradient Descent & Backpropagation", "PyTorch Core Building Blocks"] },
      { title: "Machine Learning & Pattern Recognition", topics: ["Supervised Learning & Classifiers", "Support Vector Machines & KNN", "Model Evaluation & Confusion Matrix"] },
      { title: "Computer Vision & Image Processing", topics: ["Convolutional Neural Networks (CNNs)", "OpenCV Real-Time Video Analysis", "YOLO Object Detection & Segmentation"] },
      { title: "Natural Language Processing (NLP)", topics: ["Text Preprocessing & Word Embeddings", "RNNs, LSTMs & Sequence Models", "Transformer Architectures & Attention"] },
      { title: "AI Deployment & Production Systems", topics: ["FastAPI Model Serving", "Docker for AI Applications", "Cloud GPU Deployment on AWS/GCP"] }
    ]
  }
];
