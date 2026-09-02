import { 
  SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVite, 
  SiHtml5, SiCss, SiTailwindcss, SiFastapi, SiPostgresql, SiMysql, SiSupabase, SiPrisma, 
  SiNumpy, SiPandas, SiScikitlearn, SiCloudflare, SiDigitalocean, SiDocker
} from "react-icons/si";
import { FaJava, FaAws, FaGoogle } from "react-icons/fa";
import { IconType } from "react-icons";

export type Skill = {
  name: string;
  color: string;
  icon: IconType;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const techSkills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", color: "#3776AB", icon: SiPython },
      { name: "C", color: "#A8B9CC", icon: SiC },
      { name: "C++", color: "#00599C", icon: SiCplusplus },
      { name: "Java", color: "#007396", icon: FaJava },
      { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
      { name: "TypeScript", color: "#3178C6", icon: SiTypescript }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "Next.js", color: "#ffffff", icon: SiNextdotjs },
      { name: "Vite", color: "#646CFF", icon: SiVite },
      { name: "HTML5", color: "#E34F26", icon: SiHtml5 },
      { name: "CSS3", color: "#1572B6", icon: SiCss },
      { name: "Tailwind", color: "#06B6D4", icon: SiTailwindcss }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "FastAPI", color: "#009688", icon: SiFastapi },
      { name: "PostgreSQL", color: "#4169E1", icon: SiPostgresql },
      { name: "MySQL", color: "#4479A1", icon: SiMysql },
      { name: "Supabase", color: "#3ECF8E", icon: SiSupabase },
      { name: "Prisma", color: "#2D3748", icon: SiPrisma }
    ]
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "NumPy", color: "#013243", icon: SiNumpy },
      { name: "Pandas", color: "#150458", icon: SiPandas },
      { name: "Scikit-Learn", color: "#F7931E", icon: SiScikitlearn }
    ]
  },
  {
    category: "Cloud & Infra",
    skills: [
      { name: "AWS", color: "#FF9900", icon: FaAws },
      { name: "Google Cloud", color: "#4285F4", icon: FaGoogle },
      { name: "Cloudflare", color: "#F38020", icon: SiCloudflare },
      { name: "DigitalOcean", color: "#0080FF", icon: SiDigitalocean },
      { name: "Docker", color: "#2496ED", icon: SiDocker }
    ]
  }
];

export const flatSkills = techSkills.flatMap(c => c.skills);
