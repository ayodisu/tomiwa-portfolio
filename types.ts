import { LucideIcon } from 'lucide-react';

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  fullText: string;
  tags: string[];
  accolade?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Interest {
  name: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  category: 'core' | 'genre';
}