export const profile = {
  name: "Ozan Sönmez",
  firstName: "Ozan",
  role: "Computer Engineering Student & Full-Stack Developer",
  location: "İstanbul, Türkiye",
  email: "ozansonmez373@gmail.com",
  github: "https://github.com/OzanSonmez37",
  linkedin: "https://www.linkedin.com/in/ozan-s%C3%B6nmez-275484358/",
  cvUrl: "/Ozan-Sonmez-CV.pdf",
  summary:
    "3. sınıf bilgisayar mühendisliği öğrencisiyim. Next.js, NestJS ve ASP.NET ile uçtan uca web uygulamaları, Flutter ile mobil arayüzler geliştiriyorum. Stajlarda frontend, backend ve mobil tarafında gerçek projelerde çalıştım; şu an ekip içinde Flutter ile mobil ürün geliştirmeye devam ediyorum.",
};

export const experience = [
  {
    role: "Mobile Developer Intern",
    company: "KaraLabs Yazılım",
    location: "Remote",
    period: "Tem 2026 — Devam ediyor",
    current: true,
    points: [
      "Figma ile modern ve kullanıcı dostu mobil arayüz tasarımları",
      "Flutter ile Android/iOS mobil uygulama geliştirme",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Software Persona",
    location: "Remote",
    period: "Nis 2026 — May 2026",
    current: false,
    points: [
      "Veritabanı yönetimi ve SQL sorguları üzerine uygulamalı deneyim",
      "JavaScript ile web geliştirme, Figma ile UI/UX tasarımı",
      "Android ve iOS platformları için mobil uygulama geliştirme",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Dijicrea",
    location: "İstanbul — On-site",
    period: "Eyl 2025 — Eki 2025",
    current: false,
    points: [
      "Bootstrap, HTML, CSS ve JavaScript ile duyarlı (responsive) web arayüzleri",
      "UI bileşenlerinin geliştirilmesi ve tutarlı tasarım için ekip çalışması",
    ],
    link: { label: "uannesfrontend.dijicrea.net", href: "https://uannesfrontend.dijicrea.net/" },
  },
];

export const education = {
  school: "Doğuş Üniversitesi",
  degree: "Bilgisayar Mühendisliği",
  period: "2022 — Devam ediyor",
  note: "3. Sınıf Öğrencisi",
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
      "Yazılım ajansları için müşteri ve proje yönetim paneli. Proje durumu takibi, bütçe izleme ve temel metriklerin görselleştirilmesi.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    repo: "https://github.com/OzanSonmez37/Client-Flow",
    featured: true,
  },
  {
    title: "Vocab Loop",
    description:
      "Aralıklı tekrar (spaced repetition) yöntemiyle kelime öğrenme uygulaması. Kelime ekleme, programlı tekrar ve ilerleme takibi.",
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
    repo: "https://github.com/OzanSonmez37/vocab-loop",
    featured: true,
  },
  {
    title: "Coffee Corner",
    description:
      "Dinamik menü yönetimi ve kullanıcı dostu navigasyona sahip modern bir kafe web sitesi.",
    tags: ["Node.js", "MongoDB", "Handlebars"],
    repo: "https://github.com/OzanSonmez37/Coffee_Corner",
    featured: true,
  },
  {
    title: "Car Selling",
    description:
      "Kullanıcıların kayıt olup araba ilanı verebildiği, yöneticiye mesaj gönderebildiği araç satış platformu.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    repo: "https://github.com/OzanSonmez37/Car_Selling",
  },
  {
    title: "Expenses Tracker",
    description:
      "Günlük harcamaları kategorilere ayırma, filtreleme ve takip etme imkanı sunan modern bir gider takip uygulaması.",
    tags: ["React", "JavaScript"],
    repo: "https://github.com/OzanSonmez37/Expenses-Tracker",
  },
  {
    title: "Best Store MVC",
    description:
      "Ürün listeleme, kategori yönetimi, sepet ve sipariş işlemlerine sahip ASP.NET MVC tabanlı e-ticaret uygulaması.",
    tags: ["ASP.NET MVC", "C#"],
    repo: "https://github.com/OzanSonmez37/Best_Store_MVC",
  },
];

export const skills = [
  {
    category: "Diller",
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
    category: "Mobil & Tasarım",
    items: ["Flutter", "Figma", "UI/UX Design"],
  },
];
