import {
  // Languages
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiRust,
  SiDart,
  // Frameworks & Libraries
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFlutter,
  SiBun,
  SiAngular,
  // Tools & Platforms
  SiDocker,
  SiPostman,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiStrapi,
  SiVite,
  SiKaggle,
  SiArduino,
  SiRoboflow,
  // Design & UI
  SiFigma,
  SiTailwindcss,
  SiMui,
  SiBlender,
  SiUnity,
  SiShadcnui,
  // Markup & Styling
  SiHtml5,
  SiCss3,
  // Data / AI / ML
  SiPandas,
  SiStreamlit,
  SiOpencv,
  SiHuggingface,
  SiGooglecolab,
  SiGithub,
  SiLine,
} from "react-icons/si";

import { ScanEye, ScanText, Network } from "lucide-react";

import { SiSharp as CSharpIcon } from "react-icons/si";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// รวม Skill ทั้งหมดไว้ใน array เดียวเพื่อให้เรียกใช้ง่าย (ตามรูปที่ส่งมา)
export const SKILLS = [
  { name: "Bun", icon: SiBun, color: "#FBF0DF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Golang", icon: SiGo, color: "#00ADD8" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Rust", icon: SiRust, color: "#000000" }, // Black/White
  { name: "C#", icon: CSharpIcon, color: "#239120" }, // ใช้ตัวแปรที่เราแก้ชื่อไว้
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "Elysia.js", icon: SiBun, color: "#FBF0DF" }, // ใช้ Bun icon แทน

  // --- Row 2 ---
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },

  // --- Row 3 ---
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "Shadcn/ui", icon: SiShadcnui, color: "#000000" }, // Fallback logic ด้านล่าง
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },

  // --- Row 4 ---
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Strapi", icon: SiStrapi, color: "#4945FF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Blender", icon: SiBlender, color: "#E87D0D" },
  { name: "Kaggle", icon: SiKaggle, color: "#20BEFF" },
  { name: "Roboflow", icon: SiRoboflow, color: "#6706CE" },

  // --- Row 5 ---
  { name: "Unity", icon: SiUnity, color: "#000000" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },

  // --- Row 6 (เพิ่มจาก Resume) ---
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },

  // --- Row 7 : AI / ML & Data ---
  { name: "pandas", icon: SiPandas, color: "#150458" },
  { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
  { name: "YOLO", icon: ScanEye, color: "#00C2A8" },
  { name: "Tesseract OCR", icon: ScanText, color: "#4285F4" },
  { name: "RAG", icon: Network, color: "#A78BFA" },
  { name: "Gradio", icon: SiHuggingface, color: "#FFD21E" },

  // --- Row 8 : LINE Platform ---
  { name: "LINE LIFF SDK", icon: SiLine, color: "#06C755" },
];

export const PROJECTS = [
  {
    title: "I'NINE – Smart Farming LINE Chatbot",
    category: "AI / Chatbot",
    description:
      "End-to-end smart farming LINE chatbot: YOLO disease detection plus a RAG pipeline that answers from verified agricultural knowledge bases.",
    tags: ["Python", "YOLO", "LINE API", "RAG"],
    image: "bg-gradient-to-br from-emerald-900 to-teal-900",
    githubUrl: "",
    viewUrl: "",
  },
  {
    title: "Thai Financial Statement Extraction & Validation",
    category: "Data Engineering / AI",
    description:
      "Extracts 4 statement types from 13 Thai listed companies' PDF filings into one comparable table — 100% accuracy on 2,705 verified cells, self-validated by accounting identities.",
    tags: ["Python", "pandas", "Streamlit", "Poppler", "Testing"],
    image: "bg-gradient-to-br from-sky-900 to-cyan-900",
    githubUrl: "https://github.com/Toonagugaga/ground-truth-Financial",
    viewUrl: "https://github.com/Toonagugaga/ground-truth-Financial",
  },
  {
    title: "Tinner Web App",
    category: "Full Stack Web",
    description:
      "A real-time chat with other people and find matching to other person",
    tags: ["Elysia", "Angular", "Node.js", "MongoDB"],
    image: "bg-gradient-to-br from-purple-900 to-indigo-900",
    githubUrl: "https://github.com/Toonagugaga/tinnerapp2",
    viewUrl: "https://github.com/Toonagugaga/tinnerapp2",
  },
  {
    title: "KnighT-Rex",
    category: "Game",
    description:
      "Master the momentum of a physics-driven blade, evolving through cycles of defeat to wield the Crystal Sword.",
    tags: ["Unity", "C#"],
    image: "/images/t-rex.png",
    githubUrl: "", // ปล่อยว่างไว้เพื่อให้ปุ่มกดไม่ได้
    viewUrl: "https://www.youtube.com/watch?v=6ePYNMXO0l0&t=218s",
  },
  {
    title: "Medical-Id and Emergency",
    category: "App",
    description:
      "Always located. Forever protected. Your ultimate tracking and medical ID companion.",
    tags: ["Flutter", "Notification"],
    image: "bg-gradient-to-br from-pink-900 to-rose-900",
    githubUrl: "https://github.com/Toonagugaga/Medical-id-and-emergency", // ไปที่ Github
    viewUrl:
      "https://drive.google.com/file/d/1TK9AcRMpMZD50ytKbgd-feNWLYfUcgA9/view?usp=sharing", // ไปที่ Google Drive
  },
];
