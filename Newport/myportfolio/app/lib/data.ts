// Shared data constants

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Python", "Go"],
  Frameworks: ["React", "Next.js", "Vue", "Node.js"],
  Tools: ["Git", "Docker", "AWS", "Postman"],
  Design: ["Figma", "Tailwind CSS", "Adobe XD", "Framer Motion"]
};

export const PROJECTS = [
  {
    title: "Nebula Dashboard",
    category: "Full Stack",
    description: "A real-time analytics dashboard for visualizing cosmic data using D3.js and Next.js.",
    tags: ["React", "D3.js", "Node.js"],
    image: "bg-gradient-to-br from-purple-900 to-indigo-900" 
  },
  {
    title: "Stellar E-Commerce",
    category: "Frontend",
    description: "High-performance headless e-commerce storefront with smooth page transitions.",
    tags: ["Next.js", "Shopify API", "Tailwind"],
    image: "bg-gradient-to-br from-blue-900 to-cyan-900"
  },
  {
    title: "Orbit Task Manager",
    category: "Productivity",
    description: "A gamified task management app that turns to-dos into planetary missions.",
    tags: ["Vue", "Firebase", "Pinia"],
    image: "bg-gradient-to-br from-pink-900 to-rose-900"
  }
];
