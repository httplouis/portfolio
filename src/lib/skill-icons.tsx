import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiVite,
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiDjango, 
  SiFastapi, 
  SiLaravel, 
  SiPhp, 
  SiJava, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql,
  SiKotlin,
  SiSwift,
  SiGit,
  SiGithub,
  SiFirebase,
  SiSupabase,
  SiOracle,
  SiFigma,
  SiPowerbi,
  SiJira,
  SiNotion
} from "react-icons/si";
import { ReactNode } from "react";

export const skillIcons: Record<string, ReactNode> = {
  // Frontend
  "React.js": <SiReact className="w-4 h-4" />,
  "React": <SiReact className="w-4 h-4" />,
  "Next.js": <SiNextdotjs className="w-4 h-4" />,
  "React Native": <SiReact className="w-4 h-4" />,
  "TypeScript": <SiTypescript className="w-4 h-4" />,
  "JavaScript": <SiJavascript className="w-4 h-4" />,
  "HTML/CSS": <SiHtml5 className="w-4 h-4" />,
  "HTML": <SiHtml5 className="w-4 h-4" />,
  "CSS": <SiCss3 className="w-4 h-4" />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
  "Vite": <SiVite className="w-4 h-4" />,
  
  // Backend
  "Node.js": <SiNodedotjs className="w-4 h-4" />,
  "Express.js": <SiExpress className="w-4 h-4" />,
  "Python": <SiPython className="w-4 h-4" />,
  "Django": <SiDjango className="w-4 h-4" />,
  "FastAPI": <SiFastapi className="w-4 h-4" />,
  "Laravel": <SiLaravel className="w-4 h-4" />,
  "PHP": <SiPhp className="w-4 h-4" />,
  "Java": <SiJava className="w-4 h-4" />,
  "MongoDB": <SiMongodb className="w-4 h-4" />,
  "PostgreSQL": <SiPostgresql className="w-4 h-4" />,
  "MySQL": <SiMysql className="w-4 h-4" />,
  
  // Mobile
  "Kotlin": <SiKotlin className="w-4 h-4" />,
  "Swift": <SiSwift className="w-4 h-4" />,
  
  // Tools
  "Git/Github": <SiGithub className="w-4 h-4" />,
  "Git": <SiGit className="w-4 h-4" />,
  "Github": <SiGithub className="w-4 h-4" />,
  "Firebase": <SiFirebase className="w-4 h-4" />,
  "Supabase": <SiSupabase className="w-4 h-4" />,
  "Oracle": <SiOracle className="w-4 h-4" />,
  "Figma": <SiFigma className="w-4 h-4" />,
  "PowerBI": <SiPowerbi className="w-4 h-4" />,
  "Jira": <SiJira className="w-4 h-4" />,
  "Notion": <SiNotion className="w-4 h-4" />,
};

export function getSkillIcon(skillName: string) {
  return skillIcons[skillName] || null;
}

