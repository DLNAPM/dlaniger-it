import { 
  Calculator, 
  Home, 
  Music, 
  CreditCard, 
  Briefcase, 
  Code2, 
  Github, 
  Cloud, 
  Flame,
  Zap,
  Gift
} from 'lucide-react';
import { AppData } from './types';

export const APPS: AppData[] = [
  {
    id: 'egreetz',
    name: 'eGreetz',
    tagline: 'Personalized AI greetings for every occasion.',
    description: 'Create and send heartwarming, AI-personalized digital greeting cards in seconds.',
    fullDescription: [
      "eGreetz is the modern answer to digital connection. Whether it's a birthday, a promotion, or just a 'thinking of you' moment, our AI-powered engine helps you craft the perfect message when words fail you.",
      "How to use: Simply select your occasion, provide a few key details about the recipient and your relationship, and let our AI generate a selection of unique, emotionally resonant messages and visual themes. You can then fine-tune the content to add your personal touch.",
      "Once perfected, your eGreet is ready to be shared instantly across the globe via a secure link, ensuring your loved ones feel special no matter where they are."
    ],
    url: 'https://egreetz.onrender.com/',
    icon: Gift,
    features: ['AI Message Personalization', 'Smart Visual Templates', 'Multi-Channel Delivery', 'Scheduling & Reminders'],
    color: 'bg-pink-500',
    imageUrl: 'https://picsum.photos/seed/greet/800/600'
  },
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

export const DEPLOYMENT_APPS = [
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    url: 'https://aistudio.google.com',
    icon: Zap,
    color: 'bg-blue-500',
    details: {
      purpose: 'Rapid prototyping and experimentation with Google\'s most advanced AI models.',
      functionality: 'A web-based interface for developers to build, test, and tune prompts for Gemini.',
      features: [
        'System Instruction configuration for persona tuning',
        'Direct API key management for seamless integration',
        'One-click code export to Python, JavaScript, and cURL',
        'Granular control over model temperature, Top-K, and Top-P'
      ]
    }
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/',
    icon: Github,
    color: 'bg-slate-800',
    details: {
      purpose: 'The world\'s leading AI-powered developer platform for version control and collaboration.',
      functionality: 'Hosts Git repositories, allowing teams to track code changes and manage projects.',
      features: [
        'Pull Requests with integrated automated testing',
        'GitHub Actions for powerful CI/CD automation',
        'GitHub Pages for simple static site hosting',
        'Built-in security scanning for dependencies and secrets'
      ]
    }
  },
  {
    id: 'render',
    name: 'Render',
    url: 'https://dashboard.render.com/',
    icon: Cloud,
    color: 'bg-indigo-500',
    details: {
      purpose: 'Modern cloud platform for building and running all your apps and websites.',
      functionality: 'Simplifies deployment of static sites, web services, and background workers.',
      features: [
        'Zero-downtime deployments via automatic Git integration',
        'Managed PostgreSQL and Redis databases',
        'Free automated SSL certificates',
        'Auto-scaling based on CPU and memory usage'
      ]
    }
  },
  {
    id: 'firebase',
    name: 'Firebase',
    url: 'https://console.firebase.google.com/',
    icon: Flame,
    color: 'bg-orange-500',
    details: {
      purpose: 'Comprehensive app development platform backed by Google.',
      functionality: 'Provides a complete backend-as-a-service (BaaS) ecosystem.',
      features: [
        'Realtime Database and Cloud Firestore for live data',
        'Secure user authentication with social login support',
        'Fast and secure web hosting with Global CDN',
        'Crashlytics and Analytics for app performance monitoring'
      ]
    }
  }
];