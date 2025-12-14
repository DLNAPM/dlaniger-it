import { 
  Calculator, 
  Home, 
  Music, 
  CreditCard, 
  Briefcase, 
  LayoutDashboard 
} from 'lucide-react';
import { AppData } from './types';

export const APPS: AppData[] = [
  {
    id: 'alumni-bookkeeping',
    name: 'Alumni Class Reunion Bookkeeping',
    tagline: 'Transparent financial management for your events.',
    description: 'Streamline the financial tracking for your class reunions with automated bookkeeping tools.',
    fullDescription: [
      "Planning a class reunion involves complex financial logistics. The Alumni Class Reunion Bookkeeping app simplifies this process by providing a centralized platform for tracking ticket sales, donations, and expenses.",
      "Ensure complete transparency for your committee and attendees. Generate real-time reports, manage budgets, and handle attendee data securely.",
      "Perfect for class treasurers and reunion planning committees looking to modernize their workflow."
    ],
    url: 'https://alumni-class-reunion-bookkeeping.onrender.com/',
    icon: Calculator,
    features: ['Budget Tracking', 'Expense Categorization', 'Donation Management', 'Real-time Reporting'],
    color: 'bg-emerald-500',
    imageUrl: 'https://picsum.photos/seed/alumni/800/600'
  },
  {
    id: 'architect-3d',
    name: 'Architect 3D Home Modeler Gemini',
    tagline: 'Visualize your dream home with AI-powered modeling.',
    description: 'Create stunning 3D home models using the power of Google Gemini AI and intuitive design tools.',
    fullDescription: [
      "Bring your architectural visions to life with Architect 3D Home Modeler. Leveraging the advanced capabilities of Gemini AI, this tool assists in generating layout ideas and 3D visualizations from text descriptions.",
      "Whether you are a professional architect or a DIY home renovator, our tools help you iterate on designs faster than ever before.",
      "Explore textures, lighting, and spatial arrangements in a user-friendly 3D environment."
    ],
    url: 'https://architect-3d-home-modeler-gemini.onrender.com/',
    icon: Home,
    features: ['AI-Assisted Design', '3D Rendering', 'Floor Plan Generation', 'Material Selection'],
    color: 'bg-blue-600',
    imageUrl: 'https://picsum.photos/seed/arch/800/600'
  },
  {
    id: 'muziq-slides',
    name: 'Muziq Slides',
    tagline: 'Turn your photos into rhythmic video masterpieces.',
    description: 'Automatically sync your photo slideshows to the beat of your favorite music tracks.',
    fullDescription: [
      "Muziq Slides is the ultimate tool for content creators and memory keepers. Upload your photo collection and choose a track; our engine analyzes the beat and transitions images in perfect harmony.",
      "Create engaging content for social media or heartwarming visualizers for family gatherings without complex video editing software.",
      "Supports various audio formats and offers multiple transition styles to match the mood of your music."
    ],
    url: 'https://muziq-slides.onrender.com/',
    icon: Music,
    features: ['Beat Detection', 'Auto-Sync Transitions', 'Music Library Integration', 'HD Export'],
    color: 'bg-purple-600',
    imageUrl: 'https://picsum.photos/seed/music/800/600'
  },
  {
    id: 'credit-worth',
    name: "What's My Credit Worth",
    tagline: 'Unlock the potential of your credit score.',
    description: 'Analyze your credit health and discover personalized financial opportunities.',
    fullDescription: [
      "Understanding your credit score is the first step toward financial freedom. 'What's My Credit Worth' goes beyond the number, offering deep insights into how lenders view your profile.",
      "Simulate credit scenarios to see how paying off debt or opening new lines affects your standing.",
      "Get tailored recommendations for loans and credit cards that match your unique financial footprint."
    ],
    url: 'https://whats-my-credit-worth.onrender.com/',
    icon: CreditCard,
    features: ['Credit Analysis', 'Scenario Simulator', 'Financial Insights', 'Secure Data Handling'],
    color: 'bg-indigo-600',
    imageUrl: 'https://picsum.photos/seed/credit/800/600'
  },
  {
    id: 'pmpr-app',
    name: 'PMPR App',
    tagline: 'Streamline property management with precision and ease.',
    description: 'The ultimate tool for property managers to handle payment tracking, financial analytics, and maintenance requests.',
    fullDescription: [
      "PMPR App revolutionizes how you manage your real estate assets. It provides a robust platform for end-to-end property oversight, ensuring no detail is overlooked.",
      "Take control of your cash flow with comprehensive Payment Tracking and Financial Analytics. Visualize income trends, track expenses, and generate detailed financial reports to maximize your portfolio's profitability.",
      "Simplify the upkeep of your properties with our Maintenance & Repairs module. Efficiently coordinate service requests, track repair progress, and manage vendor costs, all from a single dashboard."
    ],
    url: 'https://pmpr-app.onrender.com/',
    icon: Briefcase,
    features: ['Payment Tracking', 'Financial Analytics', 'Maintenance & Repairs', 'Tenant Management'],
    color: 'bg-rose-500',
    imageUrl: 'https://picsum.photos/seed/pmpr/800/600'
  }
];