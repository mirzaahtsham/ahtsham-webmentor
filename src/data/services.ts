export interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  tags: string[];
  images: string[];
  packages: {
    name: string;
    price: number;
    description: string;
    deliveryTime: string;
    revisions: string;
    features: string[];
  }[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "react-website",
    title: "Modern React Website Development",
    category: "Web Development",
    description:
      "I will design a professional React website with modern UI, animations, and responsive design.",
    rating: 4.9,
    reviews: 142,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    images: [
      "https://images.unsplash.com/photo-1565229284535-2cbbe3049123",
      "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89",
    ],
    packages: [
      {
        name: "Basic",
        price: 500,
        description: "Simple landing page",
        deliveryTime: "7 days",
        revisions: "3 Revisions",
        features: ["Responsive Design", "1 Page", "Basic SEO"],
      },
      {
        name: "Pro",
        price: 1200,
        description: "Multi-page business site",
        deliveryTime: "14 days",
        revisions: "5 Revisions",
        features: [
          "CMS Integration",
          "Animations",
          "Contact Form",
          "Advanced SEO",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "ui-ux-design",
    title: "UI/UX Design for Web & Mobile",
    category: "Design",
    description:
      "Beautiful and user-focused UI/UX design using Figma and modern design systems.",
    rating: 4.8,
    reviews: 98,
    tags: ["Figma", "UI/UX", "Prototyping", "Wireframes"],
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657",
    ],
    packages: [
      {
        name: "Starter",
        price: 300,
        description: "Single page design",
        deliveryTime: "5 days",
        revisions: "2 Revisions",
        features: ["UI Mockup", "Figma File", "Basic Prototype"],
      },
    ],
  },
];
