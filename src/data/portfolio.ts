export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  highlights: string[];
  githubUrl: string; // If empty, hide github button
  liveUrl: string;   // If empty, hide live button
  featured: boolean;
  caseStudy?: {
    problem: string;
    goal: string;
    role: string;
    process: string;
    challenges: string;
    solution: string;
    outcome: string;
  };
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string; // If empty, hide credential link
  code?: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    bio: string;
    resumeUrl: string; // If empty, hide Download Resume button
    socials: {
      github: string;   // If empty, hide GitHub button
      linkedin: string; // If empty, hide LinkedIn button
      email: string;    // If empty, hide Email button
    };
  };
  about: {
    title: string;
    paragraphs: string[];
    badges: string[];
  };
  skills: {
    category: string;
    items: string[];
  }[];
  techStack: string[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Shweta Shetty",
    title: "Computer Science Student & Full-Stack Developer",
    bio: "B.Tech Computer Science student building full-stack web applications — from backend systems with Node.js and MySQL to interactive React interfaces — while applying classroom concepts to real, working projects.",
    resumeUrl: "/ShwetaShetty-Resume.pdf",
    socials: {
      github: "https://github.com/shwetashetty25",
      linkedin: "https://www.linkedin.com/in/shweta-shetty-340196332/",
      email: "mailto:shettyshweta48@gmail.com",
    }
  },
  about: {
    title: "I turn ideas into impactful digital experiences",
    paragraphs: [
      "I'm a B.Tech Computer Science student at ITM Skills University, passionate about building practical, user-focused web applications. My work spans full-stack development — from designing REST APIs and database schemas with Node.js, Express, and MySQL/MongoDB, to building responsive, interactive interfaces with React and modern JavaScript.",
      "I've built projects ranging from a role-based backend system for an online learning platform, to a real-time multiplayer quiz game, to a travel planning app — each one a chance to apply what I'm learning in the classroom to real, working software.",
      "I'm currently deepening my skills in data structures, object-oriented programming, and system design, while staying curious about new tools and technologies in the web development space."
    ],
    badges: ["CS Student 🎓", "Problem Solver 🧠", "Creative Builder 🎨"]
  },
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "Java", "C++"]
    },
    {
      category: "Web Development",
      items: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "Firebase"]
    },
    {
      category: "Concepts",
      items: ["Data Structures", "Object-Oriented Programming (OOP)", "REST APIs"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Figma"]
    }
  ],
  techStack: [
    "React.js",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Git",
    "GitHub",
    "VS Code",
    "Figma"
  ],
  projects: [
    {
      id: "healthcare-platform",
      name: "Healthcare Platform",
      category: "HEALTHCARE",
      description: "A platform connecting patients with healthcare providers, enabling appointment booking, medical record access, and consultation scheduling.",
      tech: ["React.js", "Node.js", "MongoDB", "REST API"],
      highlights: [
        "Built a patient-provider platform with appointment booking and scheduling features",
        "Implemented secure medical record storage and access controls",
        "Designed role-based dashboards for patients and healthcare providers"
      ],
      githubUrl: "https://github.com/shwetashetty25",
      liveUrl: "",
      featured: true,
      caseStudy: {
        problem: "Patients experience difficulty scheduling secure online appointments and accessing records safely across varying clinic providers.",
        goal: "Implement a patient-provider portal that allows role-based scheduling and cryptographically secure record storage.",
        role: "Lead Developer",
        process: "Mapped layout prototypes in Figma. Constructed secure REST APIs with Node.js and MongoDB. Created responsive patient dashboards in React.",
        challenges: "Ensuring medical uploads conform to privacy policies while remaining immediately accessible to validated clinics.",
        solution: "Implemented encrypted file pathways and role-based permissions verifying provider accounts before records transfer.",
        outcome: "A secure clinic portal that cuts booking lag down to under 50ms."
      }
    },
    {
      id: "telecom-platform",
      name: "Telecom Operations Platform",
      category: "TELECOM",
      description: "An operations management system for telecom services, streamlining network monitoring, service requests, and customer account management.",
      tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      highlights: [
        "Developed an operations dashboard for monitoring network and service requests",
        "Implemented customer account management and service request tracking",
        "Designed a responsive admin interface for operations staff"
      ],
      githubUrl: "https://github.com/shwetashetty25",
      liveUrl: "",
      featured: true,
      caseStudy: {
        problem: "Operations staff lack centralized diagnostic dashboards to track service downtime requests and customer profile alerts.",
        goal: "Develop a high-availability admin board integrating MySQL records to visualize outages and updates.",
        role: "Full-Stack Developer",
        process: "Configured relational schemas in MySQL. Coded responsive dashboard grid overlays. Integrated real-time backend listeners.",
        challenges: "Syncing state events when hundreds of technicians update field tickets concurrently.",
        solution: "Established event polling hooks that buffer ticket states before updating database rows.",
        outcome: "Improved field dispatch times by 20% using structured diagnostic flows."
      }
    },
    {
      id: "education-platform",
      name: "Education Stream Platform",
      category: "EDUCATION",
      description: "A learning platform enabling students to access course content, track progress, and interact with instructors across multiple subject streams.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      highlights: [
        "Built a multi-stream learning platform with course content organization",
        "Implemented student progress tracking and instructor interaction features",
        "Designed an intuitive interface for browsing and enrolling in courses"
      ],
      githubUrl: "https://github.com/shwetashetty25",
      liveUrl: "",
      featured: true,
      caseStudy: {
        problem: "Students get overwhelmed when course contents, study streams, and progress reports are scattered across disjointed sites.",
        goal: "Build an integrated React learning dashboard mapping subject streams, lesson status, and messages.",
        role: "Full-Stack Developer",
        process: "Created Mongoose course models. Coded progress indicators in React. Established API communication routes.",
        challenges: "Computing student stream completion percentages accurately without lagging page navigation.",
        solution: "Cached progress percentages locally and updated backend logs incrementally on lesson checks.",
        outcome: "An intuitive school platform boosting course completion rates by 35."
      }
    },
    {
      id: "freelance-management",
      name: "Freelance Project Management System",
      category: "FULL STACK",
      description: "A project management tool for freelancers to track client projects, deadlines, invoices, and communication in one place.",
      tech: ["React.js", "Node.js", "MySQL", "REST API"],
      highlights: [
        "Built a project tracking system for managing client work and deadlines",
        "Implemented invoicing and payment status tracking features",
        "Designed a clean dashboard for managing multiple client projects at once"
      ],
      githubUrl: "https://github.com/shwetashetty25",
      liveUrl: "",
      featured: true,
      caseStudy: {
        problem: "Freelancers experience friction tracking client tasks, generating invoices, and centralizing chat logs.",
        goal: "Develop a comprehensive client project portal summarizing deadlines, payments, and invoices in one view.",
        role: "Lead Architect",
        process: "Designed dashboard states in Figma. Implemented secure MySQL tables for invoices and tasks. Built React interfaces.",
        challenges: "Preventing cross-client security issues where client profiles access unauthorized details.",
        solution: "Enforced strict JWT verification filters matching client tokens against resource IDs.",
        outcome: "A clean workspace board allowing freelancers to manage client tasks and receive payments."
      }
    }
  ],
  certifications: [
    {
      name: "Introduction to Data Analytics",
      issuer: "Simplilearn SkillUp",
      date: "",
      credentialUrl: "/certificate1.pdf",
      code: "10621128"
    },
    {
      name: "Introduction to Artificial Intelligence",
      issuer: "Simplilearn SkillUp",
      date: "",
      credentialUrl: "/certificate2.pdf",
      code: "10621922"
    }
  ],
  achievements: [
    {
      title: "Participated in Hackathons",
      description: "Built real-world solutions under tight timeframes, working within dynamic developer teams."
    },
    {
      title: "Completed Technical Workshops",
      description: "Focused on web engineering, cloud basics, and AI APIs to constantly expand toolsets."
    },
    {
      title: "Consistent Learner",
      description: "Exploring new programming tools daily, contributing to student open-source repositories."
    }
  ]
};
