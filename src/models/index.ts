import type { ComponentType } from 'react';

export interface Skill {
  name: string;
  icon: ComponentType<{ className?: string; size?: number | string }>;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  description: string[];
}
