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
  Gift, 
  Video, 
  Play, 
  Smartphone,
  Apple,
  Image,
  Car,
  Award,
  Headphones,
  Film,
  ListChecks,
  LineChart,
  Calendar
} from 'lucide-react';
import { AppData } from './types';

export const APPS: AppData[] = [
  {
    id: 'homecal',
    name: 'HomeCal',
    tagline: 'Everything you need to stay organized.',
    description: 'HomeCal is an AI-powered calendar and scheduling assistant designed to help you manage your appointments, dictate your agenda, and seamlessly organize your life using natural language and voice commands.',
    fullDescription: [
      "HomeCal is an AI-powered calendar and scheduling assistant designed to help you manage your appointments, dictate your agenda, and seamlessly organize your life using natural language and voice commands.",
      "Voice-Activated Agenda & Smart Event Extraction: Interact with your calendar hands-free. Ask about your upcoming appointments, dictate new events, or upload documents and images to let our AI automatically extract dates, times, and details.",
      "Top Features: Seamless Integrations with Google/Apple/Microsoft, Biometric Security with Face ID, Persistent Alerts via Background Logout, and Collaborative Scheduling to share events effortlessly."
    ],
    url: 'https://homecal-a9vn.onrender.com',
    icon: Calendar,
    features: ['Voice-Activated Agenda', 'Smart Event Extraction', 'Seamless Integrations', 'Biometric Security'],
    color: 'bg-teal-600',
    imageUrl: 'https://picsum.photos/seed/homecal/800/600'
  },
  {
    id: 'custom-amortize',
    name: 'Custom Amortize',
    tagline: 'Take control of your loan payoff schedule.',
    description: 'Create custom amortization schedules with extra payments to see how much interest and time you can save.',
    fullDescription: [
      "Custom Amortize is a powerful financial tool that lets you visualize and plan your loan payoff strategy. Whether it's a mortgage, auto loan, or personal debt, this app helps you understand the impact of extra payments.",
      "How to use: Enter your loan amount, interest rate, and term. Then, add custom extra payments—either as a one-time lump sum, recurring monthly additions, or annual bumps. The app will instantly recalculate your amortization schedule.",
      "Top 3 Features: 1. Custom Extra Payments: Model complex payment scenarios easily. 2. Interactive Amortization Table: View a detailed breakdown of every payment. 3. Savings Visualizer: Instantly see the total interest saved and your new payoff date."
    ],
    url: 'https://custom-amortize.onrender.com',
    icon: LineChart,
    features: ['Extra Payment Modeling', 'Detailed Amortization Table', 'Interest Savings Calculator', 'Visual Payoff Graphs'],
    color: 'bg-indigo-500',
    imageUrl: 'https://picsum.photos/seed/amortize/800/600'
  },
  {
    id: 'next-steps',
    name: 'Next Steps',
    tagline: 'Prepare your loved ones for the future financially.',
    description: 'A secure family financial records app for spouses to organize assets, debts, and insurance for peace of mind.',
    fullDescription: [
      "Next Steps is a vital Family Financial Records app designed for spouses and significant others. It addresses the critical need for preparedness, ensuring that if a loved one passes away, the living partner has immediate, organized access to all financial matters.",
      "How to use: Securely log details of your Assets, Debts, Life Insurance, and other accounts. Grant your partner shared access so they have a clear roadmap of the family's financial standing, eliminating confusion during difficult times.",
      "Top 3 Features: 1. Shared Financial Vault: Securely store and share access to critical asset and debt records. 2. Life Insurance Organizer: Keep policy details and beneficiary info instantly accessible. 3. Legacy Readiness Check: Ensure your partner is fully prepared for 'what happens next'."
    ],
    url: 'https://next-steps-7lnf.onrender.com',
    icon: ListChecks,
    features: ['Shared Financial Records', 'Asset & Debt Tracking', 'Life Insurance Log', 'Legacy Planning'],
    color: 'bg-teal-500',
    imageUrl: 'https://picsum.photos/seed/nextsteps/800/600'
  },
  {
    id: 'certificate-makers',
    name: 'Certificate Makers',
    tagline: 'Professional recognition, automated.',
    description: 'Create, customize, and bulk-generate stunning certificates for any occasion in minutes.',
    fullDescription: [
      "Certificate Makers is the ultimate solution for educators, event organizers, and HR professionals. Say goodbye to manual mail merges and design struggles. Our platform allows you to produce hundreds of high-quality, personalized certificates with minimal effort.",
      "How to use: Choose from our library of AI-enhanced professional templates or upload your own design. Simply import your recipient list via CSV, map the fields (like Name, Date, Award Title), and preview your batch.",
      "With a single click, generate PDF or image files ready for printing or digital distribution. We ensure every certificate looks pixel-perfect and conveys the prestige your recipients deserve."
    ],
    url: 'https://certificate-makers.onrender.com/',
    icon: Award,
    features: ['Bulk CSV Processing', 'Customizable Templates', 'High-Res PDF Export', 'Instant Preview'],
    color: 'bg-teal-600',
    imageUrl: 'https://picsum.photos/seed/certificate/800/600'
  },
  {
    id: 'my-mileages',
    name: 'My MileAges',
    tagline: 'Precision mileage tracking for professionals.',
    description: 'Effortlessly track, categorize, and report your vehicle mileage for taxes and reimbursement.',
    fullDescription: [
      "My MileAges is the essential tool for gig economy workers, sales representatives, and small business owners. It removes the guesswork from mileage deduction by providing precise, map-based distance calculations and organizing your travel history.",
      "How to use: Simply enter your start and end points to instantly generate accurate trip data. Assign trips to specific categories like Business, Charity, or Medical, and link them to clients or projects for detailed cost allocation.",
      "Stop leaving money on the table during tax season. My MileAges helps you generate IRS-compliant reports in seconds, ensuring you maximize your deductions and streamline your reimbursement process."
    ],
    url: 'https://my-mileages-app.onrender.com/',
    icon: Car,
    features: ['Smart Route Estimation', 'One-Tap Categorization', 'Tax-Ready Exports', 'Client Allocation'],
    color: 'bg-amber-600',
    imageUrl: 'https://picsum.photos/seed/mileages/800/600'
  },
  {
    id: 'pixelperfect-pro',
    name: 'PixelPerfect Pro',
    tagline: 'Upscale, enhance, and transform images with surgical precision.',
    description: 'An advanced AI-powered image processing suite for designers, photographers, and content creators.',
    fullDescription: [
      "PixelPerfect Pro is our flagship image enhancement tool, utilizing state-of-the-art neural networks to reconstruct missing detail in low-resolution photos. Whether you are restoring archival family photos or preparing digital assets for large-scale printing, PixelPerfect Pro delivers results that were previously considered impossible.",
      "How to use: Begin by dragging and dropping your source image into the workspace. Select your desired processing mode—AI Upscale for resolution, Neural Denoise for low-light shots, or Smart Lighting for exposure correction. Use the split-view comparison tool to preview the enhancements in real-time.",
      "Once you are satisfied with the result, export your enhanced image in professional formats like PNG or high-fidelity WebP. Our batch processing engine also allows you to apply your favorite enhancement profiles to entire albums simultaneously, saving hours of manual editing."
    ],
    url: 'https://pixelperfect-pro-761653955507.us-west1.run.app/',
    icon: Image,
    features: ['4K AI Neural Upscaling', 'Neural Denoising & Deblurring', 'Intelligent Color Reconstruction', 'One-Click Object Removal'],
    color: 'bg-cyan-600',
    imageUrl: 'https://picsum.photos/seed/pixel/800/600'
  },
  {
    id: 'tourgenie',
    name: 'TourGenie: 90sec App Tour Creator',
    tagline: 'Cinematic app tours in under 90 seconds.',
    description: 'Transform your software UI into a high-impact, AI-powered cinematic guided tour.',
    fullDescription: [
      "TourGenie is the ultimate marketing tool for developers and product managers. It takes the friction out of creating product demos by using Gemini AI to analyze your application's user interface and generate a professional, 90-second narrative flow.",
      "How to use: Start by uploading screenshots or a brief screen recording of your app. Define your target audience and the core problem your app solves. TourGenie then synthesizes this data to create a storyboard, a compelling script, and a timed sequence that highlights your best features.",
      "In just a few clicks, you have a polished video ready for landing pages, social media, or investor pitches. It's like having a professional video production team in your pocket."
    ],
    url: 'https://tourgenie-90s-app-tour-creator-761653955507.us-west1.run.app/',
    icon: Video,
    features: ['AI Script Synthesis', '90-Second Optimization', 'Cinematic Transitions', 'Voiceover Integration'],
    color: 'bg-violet-600',
    imageUrl: 'https://picsum.photos/seed/tour/800/600'
  },
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
    id: 'audibites',
    name: 'AudiBites',
    tagline: 'Consume content faster with AI-powered audio summaries.',
    description: 'Instantly convert web articles, documents, and reports into bite-sized, AI-narrated audio summaries.',
    fullDescription: [
      "AudiBites is designed for knowledge seekers who are short on time. It leverages Generative AI to analyze text content—whether it's a blog post, a research paper, or a news article—and converts it into a succinct, spoken summary.",
      "How to use: Simply paste a URL or text block into the AudiBites dashboard. Customize your experience by choosing the summary length (Brief, Standard, Detailed) and selecting from a variety of lifelike AI voices that suit your listening preference.",
      "Listen directly in the browser or download the MP3 file to take with you. It's the perfect way to turn your daily commute, gym session, or coffee break into a productive learning opportunity."
    ],
    url: 'https://audibites.onrender.com',
    icon: Headphones,
    features: ['Instant Audio Summarization', 'Natural Neural Voices', 'Personalized Playlists', 'Offline MP3 Downloads'],
    color: 'bg-orange-500',
    imageUrl: 'https://picsum.photos/seed/audibites/800/600'
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
  },
  {
    id: 're-image2vidz',
    name: 'R.E.-Image2Vidz',
    tagline: 'Find existing video tours for any property instantly.',
    description: 'Locate existing video content for properties by combining address data, MLS numbers, and AI visual recognition.',
    fullDescription: [
      "R.E.-Image2Vidz is a powerful discovery tool for Real Estate professionals. Instead of creating new content from scratch, it helps you leverage existing digital assets. By combining address data, MLS numbers, and visual recognition from uploaded photos, it scours the web for matching video tours on platforms like YouTube, Vimeo, and agency sites.",
      "How to use: Enter the property address or MLS number, or simply upload a photo of the property facade. Our AI-driven search engine analyzes the visual fingerprints and metadata to locate video content across the internet.",
      "Save hours of manual searching. Instantly access a curated list of video links that you can embed in your listings, share with clients, or use for market research."
    ],
    url: 'https://r-e-image2vids.onrender.com/',
    icon: Film,
    features: ['Visual Recognition Search', 'Multi-Platform Scraping', 'MLS & Address Matching', 'Video Asset Discovery'],
    color: 'bg-sky-600',
    imageUrl: 'https://picsum.photos/seed/realestate/800/600'
  },
  {
    id: 'heloc-velocity-calculator',
    name: 'HELOC Velocity Calculator',
    tagline: 'Accelerate your mortgage payoff with smart banking.',
    description: 'Calculate how quickly you can pay off your mortgage using a Home Equity Line of Credit (HELOC) and velocity banking strategies.',
    fullDescription: [
      "The HELOC Velocity Calculator is a sophisticated financial planning tool designed to empower homeowners with the velocity banking strategy. By strategically utilizing a Home Equity Line of Credit (HELOC), this app demonstrates how to significantly reduce mortgage interest and shorten payoff terms without changing your lifestyle.",
      "How to use: Start by inputting your current mortgage details, including balance, rate, and term. Next, add your monthly income and expenses to calculate your 'cash flow'. The app then simulates using this cash flow via a HELOC to make lump-sum principal payments, showing you the accelerated payoff date and total interest saved.",
      "Top 3 Features: 1. Smart Amortization Engine: Instantly compares traditional vs. velocity payoff schedules. 2. Cash Flow Analyzer: Identifies exactly how much 'velocity' you can apply to your debt each month. 3. Interactive Savings Visualizer: See your debt curve crash in real-time as you adjust your strategy parameters."
    ],
    url: 'https://heloc-velocity-calculator-762702816387.us-west1.run.app/',
    icon: Calculator,
    features: ['Mortgage Payoff Simulation', 'Interest Savings Tracker', 'Velocity Banking Strategy', 'Interactive Charts'],
    color: 'bg-green-600',
    imageUrl: 'https://picsum.photos/seed/heloc/800/600'
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
    id: 'web-into-app',
    name: 'WebIntoApp',
    url: 'https://www.webintoapp.com/',
    icon: Smartphone,
    color: 'bg-orange-600',
    details: {
      purpose: 'A specialized tool for converting web applications into professional native mobile apps.',
      functionality: 'Simplifies mobile development by wrapping URLs into Android (APK) and iOS (IPA) packages.',
      features: [
        'Automated build process for multi-platform delivery',
        'Custom branding for splash screens and app icons',
        'Integrated push notification support for engagement',
        'Easy AdMob integration for instant monetization'
      ]
    }
  },
  {
    id: 'google-play-console',
    name: 'Google Play Console',
    url: 'https://play.google.com/console/developers',
    icon: Play,
    color: 'bg-emerald-600',
    details: {
      purpose: 'Official management platform for Android developers to publish and track app performance.',
      functionality: 'Provides a robust suite of tools for app release management, testing, and distribution.',
      features: [
        'Google Play Protect for comprehensive user security',
        'Advanced App Vitals for performance monitoring',
        'Flexible release tracks for Alpha/Beta testing',
        'Strategic A/B testing for store listing optimization'
      ]
    }
  },
  {
    id: 'apple-developer',
    name: 'Apple Developer',
    url: 'https://developer.apple.com/',
    icon: Apple,
    color: 'bg-slate-900',
    details: {
      purpose: 'The official platform for developing and distributing applications within the Apple ecosystem.',
      functionality: 'Provides tools, documentation, and cloud services required to build apps for iOS, macOS, watchOS, and tvOS.',
      features: [
        'App Store Connect for submission and analytics',
        'TestFlight for seamless beta testing with users',
        'Access to advanced technologies like iCloud and Apple Pay',
        'Xcode integration for high-performance native development'
      ]
    }
  }
];