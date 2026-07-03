export const profile = {
  name: "Lakshay Kathpalia",
  firstName: "Lakshay",
  lastName: "Kathpalia",
  role: "AI / ML Engineer & Full-Stack Developer",
  tagline: "B.Tech Computer Science (AI & ML), Class of 2027",
  location: "Gurgaon, India",
  email: "lakshay.kathpalia1305@gmail.com",
  phone: "+91 7065801360",
  about:
    "I'm a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning, with hands-on experience shipping full-stack products. From building CRM platforms with Flask, React & MySQL to designing reinforcement-learning traffic systems and OCR-powered document pipelines, I love turning messy real-world problems into clean, intelligent software.",
  roles: [
    "AI / ML Engineer",
    "Full-Stack Developer",
    "Python Enthusiast",
    "Problem Solver",
  ],
  socials: [
    { label: "Email", href: "mailto:lakshay.kathpalia1305@gmail.com", handle: "lakshay.kathpalia1305@gmail.com" },
    { label: "GitHub", href: "https://github.com/", handle: "github.com/lakshay" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", handle: "linkedin.com/in/lakshay" },
    { label: "Phone", href: "tel:+917065801360", handle: "+91 70658 01360" },
  ],
};

export const stats = [
  { value: "3+", label: "Full-stack projects shipped" },
  { value: "2", label: "Month AI/ML internship" },
  { value: "10+", label: "Technologies mastered" },
  { value: "2027", label: "Graduating class" },
];

export const experience = [
  {
    company: "Fuinno Technologies LLP",
    role: "AI / ML Intern",
    location: "Gurgaon",
    period: "June 2025 – July 2025",
    summary:
      "Built a full-stack CRM platform and automated document-processing pipelines end to end.",
    highlights: [
      "Developed a CRM web application using Flask, React & MySQL for managing Purchase Orders, Order Tracking, and Reports.",
      "Implemented REST APIs with full CRUD operations and an OCR-based invoice upload system to extract key details from PDFs.",
      "Automated Vendor-wise, Account Manager-wise & Customer-wise report generation with real-time data handling and CSV export.",
      "Designed frontend forms, validation, and integrated backend modules for seamless workflow automation.",
    ],
    tech: ["Flask", "React", "MySQL", "REST APIs", "OCR", "Python"],
  },
];

export const projects = [
  {
    title: "TrafficIQ",
    subtitle: "Smart Traffic Control System",
    description:
      "An intelligent traffic control system that uses reinforcement learning to optimize signal timings, analyze traffic flow from sensor data, and reduce congestion through adaptive signal management.",
    highlights: [
      "Reinforcement-learning engine for real-time signal optimization",
      "Sensor & vehicle-detection data fused for traffic-density analysis",
      "OpenCV + OCR pipeline for vehicle detection and flow efficiency",
    ],
    tech: ["Python", "Reinforcement Learning", "OpenCV", "OCR"],
    accent: "from-violet-500 to-fuchsia-500",
    emoji: "🚦",
  },
  {
    title: "Checkify",
    subtitle: "Academic Authentication Validator",
    description:
      "A secure academic document verification system to validate certificates, transcripts and mark sheets — preventing fraud and unauthorized modifications through robust authentication workflows.",
    highlights: [
      "Python + MySQL backend for document validation & storage",
      "Secure authentication layer for verified access",
      "End-to-end verification workflows for academic records",
    ],
    tech: ["Python", "MySQL", "Authentication", "Security"],
    accent: "from-cyan-500 to-blue-500",
    emoji: "🛡️",
  },
  {
    title: "CRM Platform",
    subtitle: "Full-Stack Business Suite",
    description:
      "A production CRM built during my internship — managing purchase orders, order tracking and automated reporting with an OCR-driven invoice pipeline and real-time CSV exports.",
    highlights: [
      "React frontend fully integrated with a Flask backend",
      "OCR-based invoice & purchase-order extraction from PDFs",
      "Automated Vendor / Customer / Account-Manager reporting",
    ],
    tech: ["React", "Flask", "MySQL", "OCR", "REST APIs"],
    accent: "from-emerald-500 to-teal-500",
    emoji: "📊",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C", "SQL", "JavaScript", "HTML / CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Flask", "React", "Pandas", "NumPy", "Bootstrap", "RESTful APIs"],
  },
  {
    title: "Data & AI",
    items: ["Machine Learning", "Data Analysis", "OpenCV", "OCR", "Reinforcement Learning"],
  },
  {
    title: "Tools & Databases",
    items: ["Git", "GitHub", "MySQL", "SQLite", "Web Development", "Database Management"],
  },
];

export const marqueeSkills = [
  "Python", "Java", "C", "SQL", "JavaScript", "React", "Flask", "Pandas",
  "NumPy", "Bootstrap", "MySQL", "SQLite", "Git", "GitHub", "REST APIs",
  "Machine Learning", "OpenCV", "OCR", "Data Analysis",
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    institute: "The NorthCap University, Gurgaon",
    period: "2023 – 2027 (Pursuing)",
    score: "CGPA 6.72 / 10",
  },
  {
    degree: "Class XII — CBSE",
    institute: "Amity International School, Pushp Vihar, Delhi",
    period: "2023",
    score: "81.0%",
  },
  {
    degree: "Class X — CBSE",
    institute: "Blue Bells Model School, Gurgaon",
    period: "2021",
    score: "CGPA 9.1 / 10",
  },
];

export const extras = {
  certifications: [
    { title: "Minor Certification — VLSI Physical Design", org: "The NorthCap University", year: "2025–26" },
  ],
  positions: [
    { title: "Class Representative", org: "The NorthCap University", year: "2023–24", note: "Liaison between students and faculty ensuring smooth academic coordination." },
  ],
  interests: ["Badminton", "Golf"],
};
