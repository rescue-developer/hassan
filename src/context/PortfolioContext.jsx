import React, { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [portfolioData] = useState({
    // Personal Information
    personalInfo: {
      name: "Hassan Farid",
      title: "Software Engineer (Next.js & React.js)",
      greeting: "👋 Hello, I'm",
      image: "src/assets/images/hassan.jpeg",
      description: `Next.js and React.js developer with strong experience in building fast,
        scalable, and SEO‑optimized web applications. Skilled in component‑based UI development,
        API integrations, backend basics using Node.js/Express, Python, and .NET, and deploying
        production applications using VPS, Nginx, CI/CD pipelines, and auto‑deployment setups.`,
      resumeUrl: "#",
      whatsappUrl: "#",
      phone: "YOUR_PHONE_NUMBER",
      email: "YOUR_EMAIL@example.com",
    },

    // Social Links
    socialLinks: [
      {
        name: "GitHub",
        icon: "github",
        url: "#",
        color: "from-red-500 to-red-800",
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        url: "#",
        color: "from-red-600 to-red-800",
      },
      {
        name: "Instagram",
        icon: "instagram",
        url: "#",
        color: "from-red-500 to-red-900",
      },
    ],

    // About Cards
    aboutCards: [
      {
        icon: "graduation-cap",
        title: "Education",
        description: "B.E. — Computer Engineering (2021–2025)",
        institution: "Marwadi University",
        details:
          "Core: Software Engineering, Data Structures, Web Dev, Networking, OS, Cybersecurity, DBMS",
        gradient: "from-red-500/20 to-red-700/20",
      },
      {
        icon: "code",
        title: "Experience",
        description: "Multiple Professional Roles",
        institution: "",
        details:
          "Diverse experience across different technologies and industries",
        gradient: "from-red-500/20 to-red-800/20",
      },
      {
        icon: "mountain",
        title: "Interests",
        description: "Mountains & Travel",
        institution: "",
        details: "Finding inspiration in nature and exploring new cultures",
        gradient: "from-red-600/20 to-red-800/20",
      },
      {
        icon: "globe",
        title: "Focus",
        description: "Full-Stack Development",
        institution: "",
        details:
          "End-to-end web application development with modern technologies",
        gradient: "from-red-600/20 to-red-900/20",
      },
    ],

    // Core Values
    coreValues: [
      {
        icon: "lightbulb",
        title: "Innovation",
        description:
          "Always exploring cutting-edge technologies and creative solutions",
      },
      {
        icon: "users",
        title: "Collaboration",
        description: "Believe in the power of teamwork and knowledge sharing",
      },
      {
        icon: "target",
        title: "Excellence",
        description: "Committed to delivering high-quality, scalable solutions",
      },
      {
        icon: "award",
        title: "Growth",
        description: "Continuous learning and adapting to new challenges",
      },
    ],

    // Skills Categories
    skillsCategories: [
      {
        emoji: "🎨",
        title: "Frontend",
        gradient: "from-red-500/5 via-red-600/5 to-red-800/5",
        skills: [
          { name: "Next.js", emoji: "⚛️" },
          { name: "React.js", emoji: "⚛️" },
          { name: "JavaScript (ES6+)", emoji: "🟨" },
          { name: "Redux / Context API", emoji: "🧩" },
          { name: "HTML5", emoji: "🌐" },
          { name: "CSS3", emoji: "🎨" },
          { name: "TailwindCSS", emoji: "🎨" },
        ],
      },
      {
        emoji: "⚙️",
        title: "Backend",
        gradient: "from-red-500/5 via-red-700/5 to-red-900/5",
        skills: [ 
          { name: "Node.js", emoji: "🟢" },
          { name: "Express.js", emoji: "🚏" },
          { name: "REST APIs", emoji: "🔗" },
          { name: "Python (Flask Basics)", emoji: "🐍" },
          { name: ".NET Core (Basic APIs)", emoji: "🔵" },
        ],
      },
      {
        emoji: "🗄️",
        title: "Databases",
        gradient: "from-red-600/5 via-red-700/5 to-red-900/5",
        skills: [
          { name: "MongoDB", emoji: "🍃" },
          { name: "MySQL", emoji: "🐬" },
          { name: "MS SQL Server", emoji: "🗄️" },
        ],
      },
      {
        emoji: "🛠️",
        title: "Tools & Deployment",
        gradient: "from-red-600/5 via-red-700/5 to-red-900/5",
        skills: [
          { name: "Git", emoji: "📝" },
          { name: "GitHub", emoji: "🐙" },
          { name: "VS Code", emoji: "🧰" },
          { name: "Postman", emoji: "📬" },
          { name: "Docker", emoji: "🐳" },
          { name: "Vite", emoji: "⚡" },
          { name: "Figma", emoji: "🎨" },
          { name: "VPS", emoji: "🖥️" },
          { name: "Nginx", emoji: "🌀" },
          { name: "PM2", emoji: "🛠️" },
          { name: "C-Panel", emoji: "🗂️" },
          { name: "DNS", emoji: "🌐" },
          { name: "SSL", emoji: "🔒" },
          { name: "GitHub Actions CI/CD", emoji: "⚙️" },
          { name: "GitHub Webhooks", emoji: "🔔" },
        ],
      },
      {
        emoji: "✨",
        title: "Other",
        gradient: "from-gray-800/5 via-gray-900/5 to-black/5",
        skills: [
          { name: "JWT / OAuth", emoji: "🔑" },
          { name: "Firewalls", emoji: "🛡️" },
          { name: "Bash Scripting", emoji: "🐚" },
          { name: "API Security", emoji: "🔐" },
          { name: "Server Configuration", emoji: "🧭" },
        ],
      },
    ],

    // Experiences
    experiences: [
      {
        company: "Company Name",
        role: "Senior Full Stack Developer",
        icon: "briefcase",
        duration: "Jan 2023 - Present",
        description: `Led the development of multiple full-stack web applications using Next.js and React.js.
          Implemented CI/CD pipelines and managed VPS deployments with Nginx and PM2.`,
        technologies: [
          "Next.js",
          "React",
          "Node.js",
          "MongoDB",
          "Docker",
          "Nginx",
        ],
        gradient: "from-red-500/20 to-red-700/20",
      },
      {
        company: "Previous Company",
        role: "Full Stack Developer",
        icon: "code",
        duration: "Jun 2021 - Dec 2022",
        description: `Developed and maintained e-commerce platforms with payment gateway integrations.
          Built RESTful APIs and admin dashboards for content management.`,
        technologies: ["React", "Node.js", "Express", "MySQL", "Razorpay"],
        gradient: "from-red-600/20 to-red-800/20",
      },
      {
        company: "Internship / Freelance",
        role: "Web Developer",
        icon: "lightbulb",
        duration: "Jan 2020 - May 2021",
        description: `Worked on various client projects building responsive websites and web applications.
          Gained experience in modern web technologies and deployment practices.`,
        technologies: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
        gradient: "from-red-500/20 to-red-900/20",
      },
    ],

    // Projects
    projects: [
      {
        title: "Full Stack Travel Platform",
        subtitle: "AvidExplorers",
        category: "Travel",
        icon: "brain",
        description: `Travel website built using Next.js with SSR, dynamic routing, blog pages,
          trip planner, and rich media UI. Backend with Node.js & MongoDB, JWT authentication,
          and admin panel. Deployed with Nginx + PM2 + GitHub Webhooks.`,
        technologies: [
          "Next.js",
          "Node.js",
          "MongoDB",
          "JWT",
          "TailwindCSS",
          "Nginx",
          "PM2",
        ],
        images: [
          "/images/avid-explorers/Screenshot 2025-11-25 at 12.21.12 AM.png",
          "/images/avid-explorers/Screenshot 2025-11-25 at 12.21.41 AM.png",
          "/images/avid-explorers/Screenshot 2025-11-25 at 12.22.03 AM.png",
          "/images/avid-explorers/Screenshot 2025-11-25 at 12.22.21 AM.png",
        ],
        gradient: "from-red-500/20 to-red-700/20",
      },
      {
        title: "E-commerce Platform",
        subtitle: "happy-feet.in (Ongoing)",
        category: "E-commerce",
        icon: "shopping-cart",
        description: `Full e-commerce platform using Next.js API Routes with Razorpay payment
          integration and secure callbacks. Admin panel for products, orders, users, discounts,
          plus analytics dashboard. CI/CD with GitHub Actions and Auto Pull Webhooks.`,
        technologies: [
          "Next.js",
          "API Routes",
          "Razorpay",
          "MongoDB",
          "Admin Panel",
          "Analytics",
          "CI/CD",
        ],
        images: [
          "/images/happy-feet/Screenshot 2025-12-01 at 1.22.06 AM.png",
          "/images/happy-feet/Screenshot 2025-12-01 at 1.22.38 AM.png",
          "/images/happy-feet/Screenshot 2025-12-01 at 1.23.25 AM.png",
          "/images/happy-feet/Screenshot 2025-12-01 at 1.24.04 AM.png",
          "/images/happy-feet/Screenshot 2025-12-01 at 1.24.22 AM.png",
        ],
        gradient: "from-red-600/20 to-red-800/20",
      },
      {
        title: "PC Build Chatbot",
        subtitle: "CSRBOX / IBM Watson",
        category: "AI/ML",
        icon: "zap",
        description: `Intelligent PC Build chatbot using IBM Watson Assistant with conversation
          flows for component selection, compatibility suggestions, and dynamic pricing estimates.
          Includes dashboard for testing and workflow validation.`,
        technologies: ["IBM Watson", "NLP", "Python", "Flask", "Dashboard"],
        images: ["/images/chatbot-interface.png"],
        gradient: "from-red-600/20 to-red-900/20",
      },
      {
        title: "BDVH – Franchise Management Platform",
        subtitle: "",
        category: "Franchise",
        icon: "database",
        description: `A complete Admin–Teacher platform built with Next.js and MongoDB,
          featuring student enrollments, automated commissions, referral payouts,
          certificate issuing, PDF receipts, background tasks, analytics, and secure
          role-based dashboards.`,
        technologies: [
          "Next.js",
          "MongoDB",
          "Node.js",
          "PDF Generation",
          "Analytics",
          "Role-based Auth",
        ],
        images: ["/images/bdvh/Screenshot 2025-12-08 at 6.33.35 PM.png"],
        gradient: "from-gray-800/20 to-black/20",
      },
    ],
  });

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};
