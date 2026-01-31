// src/data/services.ts

export interface Package {
  name: string;
  price: number;
  description: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  notIncluded?: string[];
  badge?: string;
  isRecommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
  country?: string;
  platform?: 'google' | 'fiverr' | 'linkedin' | 'facebook' | 'upwork';
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  tags: string[];
  images: string[];
  included: Array<{ name: string }>;
  notIncluded?: Array<{ name: string }>;
  packages: Package[];
  faqs: Array<{ question: string; answer: string }>;
  testimonials?: Testimonial[];
  customWorkNote?: string;
  relatedServices?: string[]; // Add related service IDs
}

export const services: Service[] = [
  // WordPress Maintenance Plans
  {
    id: "wordpress-maintenance",
    slug: "wordpress-maintenance",
    title: "WordPress Maintenance & Support",
    shortDescription: "Professional WordPress maintenance to keep your site secure, updated, and running smoothly.",
    description: "Ongoing WordPress maintenance, updates, security checks, and technical support. Keep your site running smoothly with regular updates, backups, and professional monitoring.",
    category: "Maintenance & Support",
    rating: 5.0,
    reviews: 67,
    tags: ["WordPress", "Maintenance", "Support", "Updates", "Security"],
    images: [
      "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    included: [
      { name: "WordPress core updates" },
      { name: "Plugin & theme updates" },
      { name: "Regular site checks" },
      { name: "Basic security monitoring" },
      { name: "Priority support" },
    ],
    notIncluded: [
      { name: "New page creation" },
      { name: "Major design changes" },
      { name: "Custom feature development" },
    ],
    packages: [
      {
        name: "Basic",
        price: 80,
        description: "Best for stable sites with minimal changes",
        deliveryTime: "Monthly",
        revisions: "N/A",
        features: [
          "WordPress core updates (monthly)",
          "Plugin & theme updates (monthly)",
          "Basic uptime check",
          "Minor bug fixes (update-related only)",
          "Email support (48-72 hrs)",
        ],
        notIncluded: [
          "Emergency fixes",
          "Design changes",
          "New pages",
          "Custom code",
        ],
      },
      {
        name: "Standard",
        price: 100,
        description: "Most balanced - Recommended default",
        deliveryTime: "Monthly",
        revisions: "N/A",
        badge: "Most Balanced",
        isRecommended: true,
        features: [
          "Core updates",
          "Plugin/theme updates",
          "Weekly site check",
          "Emergency bug fixes (update-related)",
          "Basic security checks",
          "Priority email/WhatsApp (24-48 hrs)",
        ],
        notIncluded: [
          "New sections",
          "New pages",
          "Custom feature development",
        ],
      },
      {
        name: "Premium",
        price: 150,
        description: "Complete care with priority support",
        deliveryTime: "Monthly",
        revisions: "N/A",
        badge: "Premium",
        features: [
          "Everything in Standard",
          "Emergency fixes (any time)",
          "Priority support (same / next day)",
          "Monthly health report",
          "Small layout/content changes (up to 1-2 hrs)",
        ],
        notIncluded: [
          "New landing pages",
          "Major redesigns",
          "New features or integrations",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between maintenance and development?",
        answer: "Maintenance keeps your site running smoothly with updates and fixes. Development involves creating new features, pages, or customizations. Custom work is always quoted separately.",
      },
      {
        question: "What if I need a new page or section?",
        answer: "New pages, sections, or custom features fall outside maintenance scope and will be quoted separately based on complexity.",
      },
      {
        question: "How quickly do you respond to issues?",
        answer: "Response times vary by plan: Basic (48-72hrs), Standard (24-48hrs), Premium (same/next day).",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can change plans at any time. Changes take effect from the next billing cycle.",
      },
      {
        question: "What happens if my site goes down?",
        answer: "Premium plan includes emergency fixes. For Basic/Standard, emergency support is available at additional hourly rates.",
      },
    ],
    customWorkNote: "⚠️ Important: New pages, sections, or custom features are NOT included in maintenance plans. These will be quoted separately at $20-30/hour or fixed project rates.",
    testimonials: [
      {
        name: "Karen Miller",
        role: "Founder & CEO, KMW",
        avatar: "KM",
        rating: 5,
        review: "Seller went above and beyond to help me with my Wordpress website, including teaching me some basics. Thank you!",
        date: "August 2023",
        country: "USA",
        platform: "fiverr",
      },
      {
        name: "Alex Johnson",
        role: "Founder, iPhone Repair Store",
        avatar: "AJ",
        rating: 5,
        review: "Very good experience and used him twice for my website never disappointed professional approach and quick response will recommend and will use him again Happy with final product Thanks",
        date: "August 2023",
        country: "USA",
        platform: "google",
      },
      {
        name: "Malik Mustafa",
        role: "Founder of Jilani & Sons",
        avatar: "MM",
        rating: 5,
        review: "We love working with Ahtsham. We're repeat customers and we'll hire him again in a few weeks to make some updates to the website he built. I recommend Ahtsham without reservation.",
        date: "August 2023",
        country: "Pakistan",
        platform: "linkedin",
      },
    ],
  },

  // Shopify Maintenance Plans
  {
    id: "shopify-maintenance",
    slug: "shopify-maintenance",
    title: "Shopify Store Maintenance & Support",
    shortDescription: "Keep your Shopify store optimized, secure, and up-to-date with professional maintenance.",
    description: "Professional Shopify maintenance including theme updates, app management, performance optimization, and ongoing support for your e-commerce store.",
    category: "Maintenance & Support",
    rating: 4.8,
    reviews: 45,
    tags: ["Shopify", "E-commerce", "Maintenance", "Support", "Optimization"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    included: [
      { name: "Theme updates" },
      { name: "App management" },
      { name: "Performance monitoring" },
      { name: "Product updates" },
      { name: "Priority support" },
    ],
    packages: [
      {
        name: "Basic",
        price: 80,
        description: "Essential maintenance for stable stores",
        deliveryTime: "Monthly",
        revisions: "N/A",
        features: [
          "Theme updates (monthly)",
          "App updates (monthly)",
          "Basic performance check",
          "Minor bug fixes (update-related)",
          "Email support (48-72 hrs)",
        ],
      },
      {
        name: "Standard",
        price: 100,
        description: "Comprehensive store maintenance",
        deliveryTime: "Monthly",
        revisions: "N/A",
        badge: "Most Balanced",
        isRecommended: true,
        features: [
          "Theme & app updates",
          "Weekly store check",
          "Performance optimization",
          "Product listing support",
          "Priority WhatsApp support (24-48 hrs)",
        ],
      },
      {
        name: "Premium",
        price: 150,
        description: "Full-service store management",
        deliveryTime: "Monthly",
        revisions: "N/A",
        badge: "Premium",
        features: [
          "Everything in Standard",
          "Emergency support (any time)",
          "Conversion optimization review",
          "Monthly analytics report",
          "Small customizations (1-2 hrs)",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you handle product uploads?",
        answer: "Basic product updates are included in Standard and Premium plans. Bulk uploads or catalog management is quoted separately.",
      },
      {
        question: "Can you customize my Shopify theme?",
        answer: "Small customizations (1-2 hours) are included in Premium plan. Larger customizations are quoted as separate projects.",
      },
      {
        question: "What about app integrations?",
        answer: "App updates and basic configuration are included. New app setup and custom integrations are quoted separately.",
      },
    ],
    customWorkNote: "⚠️ Custom theme modifications, new sections, and app integrations are quoted separately at $30-50/hour or fixed rates.",
    testimonials: [
      {
        name: "Shahzaib Aslam",
        role: "CEO of YA Techsol",
        avatar: "SA",
        rating: 5,
        review: "I had the pleasure of working with Ahtsham for multiple Shopify store developments. He is an extremely dedicated and professional web developer and designer. Ahtsham approaches every project with full commitment and demonstrates excellent professionalism in his work.",
        date: "August 2023",
        country: "Pakistan",
        platform: "linkedin",
      },
      {
        name: "Bruce Delphine",
        role: "Founder of Artistic Designs",
        avatar: "BD",
        rating: 5,
        review: "Thx you for you working I am very happy ! I recommend Mirza he takes his time to understand and does a good job. Thx thx you",
        date: "August 2023",
        country: "Canada",
        platform: "fiverr",
      },
    ],
  },

  // Custom Landing Page Design
  {
    id: "custom-landing-page",
    slug: "custom-landing-page",
    title: "Custom Landing Page Design",
    shortDescription: "High-converting landing pages designed and developed for your marketing campaigns.",
    description: "Professional landing page design and development optimized for conversions. Perfect for product launches, marketing campaigns, and lead generation.",
    category: "Web Development",
    rating: 5.0,
    reviews: 89,
    tags: ["Landing Page", "Conversion", "Marketing", "Design", "Development"],
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    included: [
      { name: "Custom design" },
      { name: "Responsive layout" },
      { name: "SEO optimization" },
      { name: "Contact form" },
      { name: "Performance optimization" },
    ],
    packages: [
      {
        name: "Single Page",
        price: 80,
        description: "One landing page with essential features",
        deliveryTime: "3-5 days",
        revisions: "2 Revisions",
        features: [
          "1 custom landing page",
          "Responsive design",
          "Contact form integration",
          "Basic SEO setup",
          "2 revision rounds",
        ],
      },
      {
        name: "Professional",
        price: 150,
        description: "Enhanced landing page with advanced features",
        deliveryTime: "5-7 days",
        revisions: "3 Revisions",
        badge: "Best Value",
        isRecommended: true,
        features: [
          "Custom design & development",
          "Advanced animations",
          "Lead capture form",
          "Email integration",
          "Analytics setup",
          "3 revision rounds",
        ],
      },
      {
        name: "Premium Campaign",
        price: 300,
        description: "Complete campaign with multiple variations",
        deliveryTime: "7-10 days",
        revisions: "Unlimited",
        features: [
          "2-3 landing page variants",
          "A/B testing ready",
          "Advanced integrations",
          "CRM connection",
          "Marketing automation",
          "1 month support",
        ],
      },
    ],
    faqs: [
      {
        question: "What platforms do you build landing pages on?",
        answer: "I can build on WordPress, Shopify, custom HTML/React, or popular landing page builders like Webflow.",
      },
      {
        question: "Do you provide copywriting?",
        answer: "Basic content structuring is included. Professional copywriting can be added for $50-100 depending on length.",
      },
      {
        question: "Can you integrate with my email marketing tool?",
        answer: "Yes! I can integrate with Mailchimp, ConvertKit, ActiveCampaign, and most major email platforms.",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Marketing Director",
        avatar: "SJ",
        rating: 5,
        review: "Outstanding landing page design! Our conversion rate increased by 45% after launch. Highly recommended!",
        date: "September 2023",
        country: "USA",
        platform: "google",
      },
      {
        name: "Mohammed Al-Rashid",
        role: "Business Owner",
        avatar: "MA",
        rating: 5,
        review: "Professional work and great communication. The landing page looks amazing and loads super fast!",
        date: "September 2023",
        country: "UAE",
        platform: "upwork",
      },
    ],
  },

  // Section Customization
  {
    id: "section-customization",
    slug: "section-customization",
    title: "Website Section Customization",
    shortDescription: "Custom sections and blocks for your existing website - WordPress, Shopify, or custom sites.",
    description: "Add custom sections to your existing website. Perfect for hero sections, testimonials, pricing tables, feature showcases, and more.",
    category: "Web Development",
    rating: 4.9,
    reviews: 124,
    tags: ["Customization", "Sections", "WordPress", "Shopify", "Design"],
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    included: [
      { name: "Custom section design" },
      { name: "Responsive coding" },
      { name: "Browser compatibility" },
      { name: "2 revision rounds" },
    ],
    packages: [
      {
        name: "Single Section",
        price: 30,
        description: "One custom section/block",
        deliveryTime: "1-2 days",
        revisions: "2 Revisions",
        features: [
          "1 custom section",
          "Responsive design",
          "Browser testing",
          "Source code delivery",
        ],
      },
      {
        name: "Multiple Sections",
        price: 60,
        description: "3-5 custom sections",
        deliveryTime: "3-4 days",
        revisions: "3 Revisions",
        badge: "Most Popular",
        isRecommended: true,
        features: [
          "3-5 custom sections",
          "Advanced animations",
          "Mobile optimization",
          "Cross-browser testing",
        ],
      },
      {
        name: "Page Overhaul",
        price: 120,
        description: "Complete page redesign",
        deliveryTime: "5-7 days",
        revisions: "Unlimited",
        features: [
          "Full page customization",
          "10+ sections",
          "Advanced interactions",
          "Performance optimization",
          "1 month support",
        ],
      },
    ],
    faqs: [
      {
        question: "What types of sections can you create?",
        answer: "Hero sections, testimonials, pricing tables, features, galleries, CTAs, team sections, and more - basically any custom design you need.",
      },
      {
        question: "Will it work with my existing theme?",
        answer: "Yes! I ensure all customizations integrate seamlessly with your existing theme and design system.",
      },
    ],
    testimonials: [
      {
        name: "Saleha Zulfiqar Ali",
        role: "Social Media Executive",
        avatar: "SZ",
        rating: 5,
        review: "Mirza delivered exceptional work on our web platform. His attention to detail and technical expertise exceeded our expectations.",
        date: "August 2023",
        country: "Pakistan",
        platform: "facebook",
      },
      {
        name: "Reyan Iqbal",
        role: "Google Ads Specialist",
        avatar: "RI",
        rating: 5,
        review: "Working with Mirza was a game-changer for our project. His creative solutions and professional approach made all the difference.",
        date: "August 2023",
        country: "Pakistan",
        platform: "google",
      },
    ],
  },

  // Forms & Plugin Integration
  {
    id: "forms-plugin-integration",
    slug: "forms-plugin-integration",
    title: "Forms & Plugin Integration",
    shortDescription: "Custom forms, plugin setup, and third-party integrations for your website.",
    description: "Professional form creation and plugin integration services. Connect your website with CRMs, payment gateways, email marketing tools, and more.",
    category: "Integrations",
    rating: 4.8,
    reviews: 78,
    tags: ["Forms", "Integration", "Plugins", "API", "Automation"],
    images: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    included: [
      { name: "Form creation" },
      { name: "Plugin setup" },
      { name: "Testing & debugging" },
      { name: "Documentation" },
    ],
    packages: [
      {
        name: "Basic Form",
        price: 40,
        description: "Simple contact or lead form",
        deliveryTime: "1-2 days",
        revisions: "2 Revisions",
        features: [
          "Contact/lead form",
          "Email notifications",
          "Spam protection",
          "Mobile responsive",
        ],
      },
      {
        name: "Advanced Integration",
        price: 100,
        description: "Complex forms with integrations",
        deliveryTime: "3-5 days",
        revisions: "3 Revisions",
        badge: "Most Popular",
        isRecommended: true,
        features: [
          "Multi-step forms",
          "CRM integration",
          "Email marketing connection",
          "Conditional logic",
          "Custom validation",
        ],
      },
      {
        name: "Enterprise Setup",
        price: 200,
        description: "Multiple integrations & automation",
        deliveryTime: "7-10 days",
        revisions: "Unlimited",
        features: [
          "Multiple form types",
          "Payment gateway integration",
          "Marketing automation",
          "Custom API connections",
          "Advanced workflows",
          "1 month support",
        ],
      },
    ],
    faqs: [
      {
        question: "What platforms do you integrate with?",
        answer: "I work with most major platforms including Zapier, Mailchimp, HubSpot, Salesforce, Stripe, PayPal, and many more.",
      },
      {
        question: "Can you create custom form fields?",
        answer: "Yes! I can create any type of custom field including file uploads, date pickers, conditional fields, and more.",
      },
    ],
    testimonials: [
      {
        name: "Ali Haider",
        role: "Student",
        avatar: "AH",
        rating: 5,
        review: "Outstanding full-stack developer. Mirza's code is clean, efficient, and scalable. Highly recommended for any project.",
        date: "August 2023",
        country: "Pakistan",
        platform: "linkedin",
      },
      {
        name: "Sumaira Khan",
        role: "Youtube Content Creator",
        avatar: "SK",
        rating: 5,
        review: "He provide best services I had good experience with him I will definitely contact with him again for digital services for my business",
        date: "August 2023",
        country: "Pakistan",
        platform: "google",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  if (category === "All Categories") return services;
  return services.filter(service => service.category === category);
}