
export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
  image: string;
  challenges: string[];
  improvements: string[];
  status: string;
};

export const projects: Project[] = [
  {
    slug: 'bazar-dor',
    name: 'BazarDor',
    category: 'E-commerce',
    tagline: 'A Bengali-first online shopping experience',
    description:
      'BazarDor is an e-commerce project designed around a familiar, accessible shopping experience for Bangladeshi users. The project explores product browsing, category-based discovery, authentication, and a localized interface.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'DaisyUI',
      'MongoDB',
      'Better Auth',
    ],
    live: 'https://bazar-dor-seven.vercel.app',
    github: 'https://github.com/halima-chowdhury-mahima/BazarDor',
    image: '/images/bazardor.png',
    challenges: [
      'Configuring authentication and trusted origins across local and deployed environments.',
      'Connecting product data and categories to a consistent, localized shopping UI.',
      'Handling third-party sign-in and account-linking edge cases.',
    ],
    improvements: [
      'Add order history and a complete checkout flow.',
      'Improve product search, filtering, and accessibility.',
      'Add automated tests and stronger production monitoring.',
    ],
    status: 'Live demo',
  },
  {
    slug: 'news-24',
    name: 'NEWS 24',
    category: 'News platform',
    tagline: 'A premium editorial news experience',
    description:
      'NEWS 24 is a modern editorial website focused on clear reading, category navigation, latest headlines, and a premium newsroom-style visual identity. It uses a publishing-oriented architecture with Supabase integration.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'News API',
    ],
    live: 'https://news-24-gw42.vercel.app/',
    github: 'https://github.com/halima-chowdhury-mahima/News-24',
    image: '/images/news24.png',
    challenges: [
      'Building a polished editorial layout that remains readable on small screens.',
      'Connecting headline data and published articles to reusable content components.',
      'Managing environment variables for hosted data services.',
    ],
    improvements: [
      'Deploy the current version and add the live URL here.',
      'Add editor roles, article search, and pagination.',
      'Add SEO metadata, structured data, and automated content checks.',
    ],
    status: 'In development',
  },
  {
    slug: 'fitlog',
    name: 'FitLog',
    category: 'Fitness & wellness',
    tagline: 'Track your fitness journey, one day at a time',
    description:
      'FitLog is a fitness tracking web application built to help users organize their fitness journey through a clean, user-friendly interface. The project integrates a REST API and focuses on responsive design, data handling, and a structured user experience.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'REST API',
    ],
    live: 'https://fit-log-chi.vercel.app/',
    github: 'https://github.com/halima-chowdhury-mahima/Fit-log',
    image: '/images/fitlog.png',
    challenges: [
      'Integrating the frontend with the fitness tracking REST API.',
      'Managing asynchronous data fetching and API response states.',
      'Creating a responsive interface for a consistent experience across screen sizes.',
    ],
    improvements: [
      'Add the deployed live URL when available.',
      'Expand fitness tracking features and progress visualization.',
      'Improve validation, error handling, accessibility, and automated testing.',
    ],
    status: 'Add live URL',
  },
];

export const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 82 },
      { name: 'TypeScript', level: 78 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML & CSS', level: 88 },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'Node.js', level: 70 },
      { name: 'REST API Integration', level: 82 },
      { name: 'MongoDB', level: 75 },
      { name: 'Supabase', level: 70 },
    ],
  },
  {
    title: 'Tools & Design',
    items: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'Vercel', level: 82 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Figma', level: 65 },
    ],
  },
];
