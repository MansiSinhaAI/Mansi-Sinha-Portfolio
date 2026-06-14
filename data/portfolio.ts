export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Technologies", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const experiences = [
  {
    role: "Freelance Data Science Projects",
    organization: "Independent / Remote",
    duration: "Apr 2024 - Dec 2025 | Remote",
    achievements: [
      "Worked on independent machine learning and data analysis projects while pursuing MSc in AI & ML.",
      "Built predictive models using Python and Scikit-learn for classification and regression tasks.",
      "Performed data cleaning, feature engineering, and exploratory data analysis on real-world datasets."
    ],
    technologies: ["Python", "Scikit-Learn", "Machine Learning", "EDA", "Feature Engineering"]
  },
  {
    role: "Data Analytics Intern",
    organization: "Alfido Tech",
    duration: "Oct 2023 - Jan 2024 | Remote",
    achievements: [
      "Performed data analysis tasks using SQL to extract, clean, and manipulate datasets.",
      "Generated comprehensive reports and Tableau dashboards, improving data visualization for stakeholders.",
      "Worked extensively with SQL joins to integrate and analyze data from multiple sources, ensuring data consistency and accuracy."
    ],
    technologies: ["SQL", "SQL Joins", "Tableau", "Data Cleaning", "Reporting"]
  },
  {
    role: "Data Science Intern",
    organization: "Solar Secure Solutions",
    duration: "Jul 2023 - Sept 2023 | Remote",
    achievements: [
      "Analyzed and interpreted complex datasets, providing actionable insights that improved outcomes by 20%.",
      "Developed statistical models and machine learning algorithms, including regression, classification, and decision trees, to extract meaningful patterns.",
      "Enhanced predictive accuracy by 15% through model experimentation, evaluation, and refinement."
    ],
    technologies: ["Statistics", "Machine Learning", "Regression", "Classification", "Decision Trees"]
  }
];

export const skills = [
  {
    category: "Languages/Libraries",
    items: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 88 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "Matplotlib", level: 84 },
      { name: "Seaborn", level: 84 }
    ]
  },
  {
    category: "ML/AI",
    items: [
      { name: "Scikit-Learn", level: 90 },
      { name: "TensorFlow", level: 78 },
      { name: "Keras", level: 78 },
      { name: "LangChain", level: 82 },
      { name: "CrewAI", level: 76 }
    ]
  },
  {
    category: "LLMs/Gen AI",
    items: [
      { name: "Gemini 2.5", level: 84 },
      { name: "OpenAI API", level: 84 },
      { name: "RAG Pipelines", level: 82 },
      { name: "Prompt Engineering", level: 88 }
    ]
  },
  {
    category: "MLOps/Cloud",
    items: [
      { name: "MLflow", level: 78 },
      { name: "Docker", level: 80 },
      { name: "Git/GitHub", level: 88 },
      { name: "FastAPI", level: 86 },
      { name: "CI/CD", level: 76 },
      { name: "Jupyter", level: 90 },
      { name: "AWS", level: 76 }
    ]
  },
  {
    category: "Techniques",
    items: [
      { name: "Deep Learning", level: 82 },
      { name: "Autoencoders", level: 74 },
      { name: "Recommendation Systems", level: 80 },
      { name: "Multi-Agent Systems", level: 76 }
    ]
  }
];

export const projects = [
  {
    title: "SHE - AI Women's Health Platform",
    category: "Founder & Developer | Ongoing",
    problem: "Women need clearer, more personalized interpretation of blood reports and health indicators.",
    approach: "Building OCR and NLP pipelines to extract biomarkers from lab reports, convert PDFs/images into structured health data, and power conversational health assistance through FastAPI services.",
    impact: "Creates a secure end-to-end AI workflow for report storage, historical health tracking, personalized insight generation, and user-friendly health interpretation.",
    stack: ["Python", "FastAPI", "OCR", "NLP", "PostgreSQL", "OpenAI API", "Git", "Next.js"],
    github: "#contact",
    demo: "#contact"
  },
  {
    title: "Real-Time Fraud Detection",
    category: "Imbalanced Classification",
    problem: "Detect fraudulent transactions in a highly imbalanced dataset with only a small fraud rate.",
    approach: "Worked with the IEEE-CIS dataset of 590k transactions and 434 features, using an XGBoost and Isolation Forest ensemble with engineered transaction velocity, time-based, and amount z-score features.",
    impact: "Designed a FastAPI prediction service with Kafka stream simulation and SHAP-based explainability for fraud risk interpretation.",
    stack: ["XGBoost", "Isolation Forest", "FastAPI", "Kafka", "SHAP", "Feature Engineering"],
    github: "#contact",
    demo: "#contact"
  },
  {
    title: "Financial Document Analyzer",
    category: "Multi-Agent AI",
    problem: "Financial documents require structured analysis, risk assessment, and investment recommendation workflows.",
    approach: "Developed a multi-agent AI system with CrewAI and FastAPI, using a sequential Verifier, Analyst, Risk Assessor, and Advisor pipeline.",
    impact: "Stabilized the system architecture by resolving LangChain, OpenAI, and ChromaDB dependency conflicts while preserving contextual information flow across tasks.",
    stack: ["CrewAI", "FastAPI", "LangChain", "OpenAI", "ChromaDB", "Multi-Agent Systems"],
    github: "#contact",
    demo: "#contact"
  }
];

export const certifications = [
  "Microsoft Power BI Desktop for Business Intelligence",
  "Statistics for Data Science and Business Analysis",
  "Python for Data Science"
];

export const achievements = [
  { label: "Projects Completed", value: 18 },
  { label: "Certifications Earned", value: 3 },
  { label: "SQL Problems Solved", value: 120 },
  { label: "Machine Learning Models Built", value: 28 },
  { label: "Dashboard Projects", value: 10 },
  { label: "Research Studies", value: 3 }
];

export const education = [
  {
    degree: "B.Tech in Electronics & Communication",
    school: "Bharati Vidyapeeth's College of Engineering, GSSIPU",
    duration: "Jul 2023",
    score: "CGPA: 9.17/10.0",
    link: "https://www.ipuranklist.com/student/35111507320",
    coursework: ["Embedded Systems", "Database Management System", "Project Management", "DSA in C"]
  },
  {
    degree: "MSc in Computer Science (AI & ML)",
    school: "Scaler Neovarsity (Woolf University)",
    duration: "Dec 2025",
    score: "GPA: 3.9/4.0",
    link: "https://woolf.university/id/3381287221?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM5OGE1OTM1LTBkODktNDI0NC04ZjM5LTAxOTI2NGRiZDJmMyIsImlzcyI6InVybjpXb29sZlVuaXZlcnNpdHk6c2VydmVyL3NlcnZpY2UvYWNjZXNzIiwiaXNWZXJpZmllZCI6dHJ1ZSwia2luZCI6Im9hdXRoIiwib3JnIjp7Imdyb3VwcyI6W10sImlkIjoiOWIxN2Y1Y2UtMTA3OC00ZmRmLWFlYzAtMDJiZjRlY2ZiMGE2In0sInNjb3BlIjoiKiJ9.f5zDJSqKGwfISeV7it4eZ_pc0ueFTBEIBtXOk3ncYVE",
    coursework: ["Machine Learning", "Neural Networks", "NLP", "MLOps", "Product Analytics"]
  }
];

export const research = [
  {
    title: "BNPL Research",
    summary: "Explored the Buy Now Pay Later ecosystem through customer behavior, credit risk, adoption patterns, and regulatory considerations."
  },
  {
    title: "Startup Financial Strategy Research",
    summary: "Studied financial planning, runway management, pricing, and growth tradeoffs for early-stage business strategy."
  },
  {
    title: "Lognormal Analytics Case Study",
    summary: "Analyzed analytics consulting scenarios with structured problem solving, data interpretation, and executive-style recommendations."
  }
];
