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
} from "react-icons/si";

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
];

export const PROJECTS = [
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
