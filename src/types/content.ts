export type ProjectStatus = "complete" | "in_progress" | "planned";
export type ProjectCategory = "networking" | "lab" | "automation" | "ai & ml" | "software engineering";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tools: string[];
  summary: string;
  bullets: string[];
  links: {
    github: string | null;
    demo: string | null;
  };
  featured: boolean;
}

export interface EducationEntry {
  id: string;
  degree: string;
  school: string;
  period: string;
  highlights: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export type CcnaStatus = "candidate" | "scheduled" | "passed";

export interface Profile {
  name: string;
  displayName: string;
  headline: string;
  tagline: string;
  bio: string;
  aboutTitle: string;
  ccnaStatus: CcnaStatus;
  ccnaStatusLabel: string;
  ccnaDetail: string;
  educationSummary: string;
  educationYear: string;
  terminalBanner: string;
  heroStatusLine: string;
  email: string;
  resumePath: string;
  links: {
    linkedin: string;
    github: string;
    instagram: string;
  };
  contactBlurb: string;
  footerBuild: string;
}

export type SkillLevel = "full" | "strong" | "learning";

export interface Skill {
  id: string;
  code: string;
  label: string;
  level: SkillLevel;
}

export type CcnaProgressStatus = "IN_PROGRESS" | "COMPLETE" | "PLANNED";

export interface CcnaProgressItem {
  id: string;
  title: string;
  status: CcnaProgressStatus;
  progress: number;
  description: string;
}
