export interface GalleryItem {
  title: string;
  description: string;
  coverImage: string;
  link?: string;
  featured?: boolean;
  tech?: string[];
  images?: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    title: 'Analytics Dashboard',
    description:
      'Interactive analytics environment that aggregates product telemetry, customer feedback, and revenue insights into a single executive-ready workspace. Features role-based views, scenario forecasting, and automated weekly briefing exports for leadership.',
    coverImage:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80',
    link: '#',
    featured: true,
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    images: [
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1800&q=80',
    ],
  },
  {
    title: 'Mobile Banking UI',
    description:
      'Concept-to-prototype mobile banking journey covering onboarding, account management, and goal-based savings flows. Prioritized WCAG-compliant patterns, biometric authentication, and personalized insights that adapt to user behavior.',
    coverImage:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    link: '#',
    featured: false,
    tech: ['Figma', 'Design System', 'Micro-interactions'],
    images: [
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    title: 'E-commerce Redesign',
    description:
      'Data-informed redesign of a multi-brand storefront emphasizing modular product storytelling, intelligent recommendations, and a frictionless checkout optimized for mobile conversion. Delivered uplift in add-to-cart rate and dwell time.',
    coverImage:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80',
    link: '#',
    featured: false,
    tech: ['React', 'Tailwind', 'A/B Testing'],
    images: [
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1523475472560-2130a5e42814?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    title: 'Portfolio Template',
    description:
      'Lightweight React starter tailored for freelancers with configurable theming, modular section blocks, and CMS-ready data structures. Includes motion presets, testimonial carousel, and deployment pipeline for rapid customization.',
    coverImage:
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1600&q=80',
    link: '#',
    featured: true,
    tech: ['React', 'Styled Components', 'Netlify'],
    images: [
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80',
    ],
  },
];

