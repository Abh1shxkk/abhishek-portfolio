export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Skill {
  name: string;
  icon: string; // URL or simple string for placeholder
}

export interface EducationItem {
  id: number;
  degree: string;
  school: string;
  year: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
}

export enum RevealEffect {
  FADE = 'fade',
  SLIDE = 'slide',
  BLUR = 'blur',
  SCALE = 'scale'
}
