// src/lib/schema.ts
export const SITE = {
  url: "https://ahtsham.me/",
  name: "Ahtsham Web Mentor",
  description:
    "Expert Web Developer offering Next.js, React, UI/UX, SEO Optimization & Business Automation services.",
  logo: "https://ahtsham.me/og-image.jpg",
  telephone: "+92-346-4784039", // replace with your number
  email: "hello@ahtsham.me", // replace with your email
  sameAs: [
    "https://github.com/mirzaahtsham",
    "https://www.linkedin.com/in/mirzaahtsham",
    "https://www.instagram.com/WebsiteDesignGenius/",
    "https://www.tiktok.com/@webdesigngenius",
    "https://www.facebook.com/ahtshamwebdesigngenius/",
    "https://twitter.com/webmentorAhtsham",
  ],
  address: {
    street: "Gulberg II",
    locality: "Lahore",
    region: "Pujab",
    postalCode: "54660",
    country: "PK",
  },
};

/* ---------- Types ---------- */
export type ServiceSchemaInput = {
  id: string;
  name: string;
  description: string;
  url?: string;
  providerType?: "Person" | "Organization";
  priceRange?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type ReviewInput = {
  author: string;
  text: string;
  rating: number;
  platform?: string;
  datePublished?: string;
};

/* ---------- Builders ---------- */

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    sameAs: SITE.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.telephone,
        contactType: "Customer Service",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/?search={query}`,
      "query-input": "required name=query",
    },
  };
}

export function buildWebPageSchema({
  url,
  title,
  description,
  breadcrumbName,
}: {
  url: string;
  title: string;
  description: string;
  breadcrumbName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: title,
    description,
    breadcrumb: breadcrumbName
      ? {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: breadcrumbName,
              item: url,
            },
          ],
        }
      : undefined,
  };
}

export function buildServiceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": service.providerType || "Person",
      name: SITE.name,
      url: SITE.url,
    },
    serviceType: service.name,
    url: service.url,
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Businesses and Individuals",
    },
    ...(service.priceRange ? { priceRange: service.priceRange } : {}),
  };
}

export function buildServiceListSchema(services: ServiceSchemaInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE.name} Services`,
    url: `${SITE.url}/services`,
    itemListElement: services.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: s.url,
      },
    })),
  };
}

export function buildFaqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function buildContactSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    telephone: SITE.telephone,
    contactType: "Customer Service",
    email: SITE.email,
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  };
}

export function buildAggregateReviewSchema(reviews: ReviewInput[]) {
  const avg =
    reviews.length === 0
      ? 5
      : reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return {
    "@context": "https://schema.org",
    "@type": "Product", // Using Product for services/products combined
    name: `${SITE.name} Services`,
    description: SITE.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(avg.toFixed(1)),
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
      datePublished: r.datePublished,
      publisher: { "@type": "Organization", name: r.platform || SITE.name },
    })),
  };
}
