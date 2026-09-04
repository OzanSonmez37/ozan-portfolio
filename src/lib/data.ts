export const profile = {
  name: "Ozan Sönmez",
  firstName: "Ozan",
  role: "Computer Engineering Student & Full-Stack Developer",
  location: "Istanbul, Turkey",
  email: "ozansonmez373@gmail.com",
  github: "https://github.com/OzanSonmez37",
  linkedin: "https://www.linkedin.com/in/ozan-s%C3%B6nmez-275484358/",
  cvUrl: "/Ozan-Sonmez-CV.pdf",
  summary:
    "I'm a 3rd-year Computer Engineering student. I build end-to-end web apps with Next.js, NestJS, and ASP.NET, and mobile interfaces with Flutter. I've worked on real projects across frontend, backend, and mobile during my internships, and I'm currently building a mobile product with Flutter as part of a team.",
};

export const experience = [
  {
    role: "Mobile Developer Intern",
    company: "KaraLabs Yazılım",
    location: "Remote",
    period: "Jul 2026 — Present",
    current: true,
    points: [
      "Designing modern, user-friendly mobile interfaces in Figma",
      "Building Android/iOS mobile apps with Flutter",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Software Persona",
    location: "Remote",
    period: "Apr 2026 — May 2026",
    current: false,
    points: [
      "Hands-on experience with database management and SQL queries",
      "Web development with JavaScript, UI/UX design in Figma",
      "Mobile app development for Android and iOS platforms",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Dijicrea",
    location: "Istanbul — On-site",
    period: "Sep 2025 — Oct 2025",
    current: false,
    points: [
      "Built responsive web interfaces with Bootstrap, HTML, CSS, and JavaScript",
      "Developed UI components and collaborated with the team on a consistent design",
    ],
    link: { label: "uannesfrontend.dijicrea.net", href: "https://uannesfrontend.dijicrea.net/" },
  },
];

export const education = {
  school: "Doğuş University",
  degree: "Computer Engineering",
  period: "2022 — Present",
  note: "3rd-Year Student",
};

export const certifications = [
  {
    title: "Software Professional Development Program",
    issuer: "Software Persona",
    year: "2026",
  },
  {
    title: "The Complete Full-Stack Web Development",
    issuer: "Udemy",
    year: "2025",
  },
  {
    title: "Java Data Structures and Algorithms",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "AI Algorithms",
    issuer: "BTK Akademi",
    year: "2024",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "ClientFlow",
    description:
      "A client and project management panel for software agencies. Track project status, monitor budgets, and visualize key metrics.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    repo: "https://github.com/OzanSonmez37/Client-Flow",
    featured: true,
  },
  {
    title: "Vocab Loop",
    description:
      "A vocabulary learning app based on spaced repetition. Add words, review them on a schedule, and track your progress.",
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
    repo: "https://github.com/OzanSonmez37/vocab-loop",
    featured: true,
  },
  {
    title: "Coffee Corner",
    description:
      "A modern café website with dynamic menu management and user-friendly navigation.",
    tags: ["Node.js", "MongoDB", "Handlebars"],
    repo: "https://github.com/OzanSonmez37/Coffee_Corner",
    featured: true,
  },
  {
    title: "Car Selling",
    description:
      "A car sales platform where users can register, list cars for sale, and message the administrator.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    repo: "https://github.com/OzanSonmez37/Car_Selling",
  },
  {
    title: "Expenses Tracker",
    description:
      "A modern expense tracker app for categorizing, filtering, and monitoring daily spending.",
    tags: ["React", "JavaScript"],
    repo: "https://github.com/OzanSonmez37/Expenses-Tracker",
  },
  {
    title: "Best Store MVC",
    description:
      "An ASP.NET MVC e-commerce app with product listing, category management, cart, and order handling.",
    tags: ["ASP.NET MVC", "C#"],
    repo: "https://github.com/OzanSonmez37/Best_Store_MVC",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "C#", "C++", "Python"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Express", "ASP.NET", "PostgreSQL", "MongoDB", "SQL Server"],
  },
  {
    category: "Mobile & Design",
    items: ["Flutter", "Figma", "UI/UX Design"],
  },
];
