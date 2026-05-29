import { IconType } from "react-icons";
import {
  SiTypescript, SiJavascript, SiPhp, SiPython,
  SiHono, SiExpress, SiPrisma, SiLaravel, SiDrizzle,
  SiDocker, SiGit, SiGithubactions, SiCloudflare,
  SiPostgresql, SiSupabase, SiMysql, SiJsonwebtokens,
  SiNodedotjs, SiGo, SiGooglecloud,
} from "react-icons/si";

export type SkillConfig = { icon: IconType; color: string };

export const SKILL_ICONS: Record<string, SkillConfig> = {
  "TypeScript":         { icon: SiTypescript,    color: "#3178C6" },
  "JavaScript":         { icon: SiJavascript,    color: "#D4A017" },
  "PHP":                { icon: SiPhp,           color: "#777BB4" },
  "Python":             { icon: SiPython,        color: "#3776AB" },
  "Hono":               { icon: SiHono,          color: "#E36002" },
  "Express":            { icon: SiExpress,       color: "#404040" },
  "Prisma":             { icon: SiPrisma,        color: "#0C344B" },
  "Laravel":            { icon: SiLaravel,       color: "#FF2D20" },
  "DrizzleORM":         { icon: SiDrizzle,       color: "#C5F74F" },
  "Docker":             { icon: SiDocker,        color: "#2496ED" },
  "Git":                { icon: SiGit,           color: "#F05032" },
  "GitHub Actions":     { icon: SiGithubactions, color: "#2088FF" },
  "Cloudflare Workers": { icon: SiCloudflare,    color: "#F38020" },
  "PostgreSQL":         { icon: SiPostgresql,    color: "#336791" },
  "Supabase":           { icon: SiSupabase,      color: "#3ECF8E" },
  "MySQL":              { icon: SiMysql,         color: "#4479A1" },
  "JWT":                { icon: SiJsonwebtokens, color: "#D63AFF" },
  "Node.js":            { icon: SiNodedotjs,    color: "#339933" },
  "Go":                 { icon: SiGo,           color: "#00ADD8" },
  "GCP":                { icon: SiGooglecloud,  color: "#4285F4" },
  "Cloudflare D1":      { icon: SiCloudflare,   color: "#F38020" },
};
