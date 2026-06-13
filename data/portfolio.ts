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
    title: "Real-Time Credit Card Fraud Detection",
    category: "Streaming ML",
    problem: "Detect suspicious card transactions quickly while keeping false positives manageable.",
    approach: "Combined Kafka event streams, XGBoost classification, Isolation Forest anomaly detection, FastAPI serving, and SHAP explainability.",
    impact: "Designed a recruiter-ready architecture for fraud triage, risk scoring, and analyst explanation workflows.",
    stack: ["Kafka", "XGBoost", "Isolation Forest", "FastAPI", "SHAP"],
    github: "https://github.com/",
    demo: "#contact"
  },
  {
    title: "Predicting Breast Cancer Risk",
    category: "Healthcare MLOps",
    problem: "Estimate diagnostic risk from clinical features with reliable monitoring and alerting.",
    approach: "Built an end-to-end MLOps pipeline with model training, evaluation, monitoring checks, and alert concepts.",
    impact: "Showcases responsible ML practices for healthcare-style prediction and operational readiness.",
    stack: ["Python", "Scikit-Learn", "MLflow", "Monitoring", "Alerts"],
    github: "https://github.com/",
    demo: "#contact"
  },
  {
    title: "StayFit AI Wellness Companion",
    category: "Personalization",
    problem: "Help users receive more relevant wellness recommendations based on habits and goals.",
    approach: "Used multiple ML models to segment users, predict preferences, and recommend personalized plans.",
    impact: "Demonstrates customer-centric ML that blends predictive analytics with product experience.",
    stack: ["Python", "Recommendation Systems", "Clustering", "FastAPI"],
    github: "https://github.com/",
    demo: "#contact"
  },
  {
    title: "Event Management Designs via AI",
    category: "Generative AI",
    problem: "Reduce manual effort in planning event concepts, themes, layouts, and vendor ideas.",
    approach: "Designed an AI-driven event planning workflow that turns requirements into structured creative outputs.",
    impact: "Highlights AI-assisted productivity for service businesses and client-facing planning teams.",
    stack: ["AI Planning", "Prompt Design", "Analytics", "Workflow Design"],
    github: "https://github.com/",
    demo: "#contact"
  },
  {
    title: "Walmart Spending Analysis",
    category: "Retail Analytics",
    problem: "Understand customer spending behavior and identify actionable retail performance patterns.",
    approach: "Explored transaction data, segmented spend trends, and built visual summaries for decision support.",
    impact: "Turns raw retail data into clear opportunities around inventory, promotion, and customer targeting.",
    stack: ["Python", "SQL", "Power BI", "EDA"],
    github: "https://github.com/",
    demo: "#contact"
  },
  {
    title: "Netflix Content Analytics",
    category: "Media Analytics",
    problem: "Analyze content catalog patterns across genres, release years, countries, and formats.",
    approach: "Cleaned catalog data, built exploratory visuals, and surfaced content strategy observations.",
    impact: "Shows analytics storytelling for media strategy and audience understanding.",
    stack: ["Python", "Tableau", "Pandas", "Visualization"],
    github: "https://github.com/",
    demo: "#contact"
  },
  {
    title: "Target Brazil Market SQL Analysis",
    category: "SQL Case Study",
    problem: "Answer market, logistics, payment, and customer behavior questions from relational data.",
    approach: "Wrote analytical SQL queries across orders, customers, sellers, payments, and geographies.",
    impact: "Demonstrates strong SQL reasoning for business intelligence and marketplace operations.",
    stack: ["SQL", "PostgreSQL", "Business Analytics", "Data Modeling"],
    github: "https://github.com/",
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
