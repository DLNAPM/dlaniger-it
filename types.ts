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
  howToUseSteps?: {
    step: number;
    title: string;
    description: string;
  }[];
  topThreeFeatures?: {
    title: string;
    description: string;
    badge?: string;
  }[];
  launchInstructions?: {
    webLaunch: string[];
    downloadLaunch: string[];
  };
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
