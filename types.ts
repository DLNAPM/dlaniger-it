import { LucideIcon } from 'lucide-react';

export interface AppData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  url: string;
  icon: LucideIcon;
  features: string[];
  color: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface AppGroup {
  title: string;
  description: string;
  appIds: string[];
}
