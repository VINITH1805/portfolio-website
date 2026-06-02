export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: {
    start: string;
    end: string;
  };
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  number: string;
  domain: string;
  name: string;
  description: string;
  technologies: string[];
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
  type: 'email' | 'phone' | 'social';
}