"use client";

import Head from "next/head";

export default function SeoSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahtsham.me";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mirza Ahtsham",
    "alternateName": "Ahtsham Web Mentor",
    "url": `${siteUrl}/ahtsham-connect`,
    "image": `${siteUrl}/og-image.jpg`,
    "jobTitle": "Web Designer, Developer & Trainer",
    "worksFor": {
      "@type": "Organization",
      "name": "Ahtsham Web Mentor",
      "url": siteUrl
    },
    "brand": {
      "@type": "Brand",
      "name": "Ahtsham Web Mentor"
    },
    "description": "Explore all official links of Mirza Ahtsham (Ahtsham Web Mentor) - Web Developer, Trainer & Designer. Access portfolio, tutorials, Medium articles, LinkedIn posts, YouTube videos, and web development communities.",
    "knowsAbout": [
      "Web Design",
      "WordPress Development",
      "Shopify Development",
      "Elementor Tutorials",
      "Frontend Development",
      "Ahtsham Web Mentor"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/mirzaahtsham",
      "https://www.youtube.com/@mirzaahtsham",
      "https://medium.com/@mirzaahtsham",
      "https://facebook.com/mirzaahtsham",
      "https://twitter.com/mirzaahtsham"
    ],
  };

  return (
    <Head>
      <title>
        Mirza Ahtsham (Ahtsham Web Mentor) - Official Links | Portfolio, Tutorials & Communities
      </title>
      <meta
        name="description"
        content="Official link hub of Mirza Ahtsham - also known as Ahtsham Web Mentor. Access portfolio, tutorials, Medium and LinkedIn articles, YouTube lessons, and social communities."
      />
      <meta
        name="keywords"
        content="Ahtsham Web Mentor, Mirza Ahtsham, Web Developer, Trainer, Portfolio, Tutorials, Web Design, Shopify, WordPress"
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="profile" />
      <meta
        property="og:title"
        content="Mirza Ahtsham (Ahtsham Web Mentor) - Official Links | Portfolio, Tutorials & Communities"
      />
      <meta
        property="og:description"
        content="Explore all official links of Ahtsham Web Mentor - web developer, trainer & designer. Discover tutorials, portfolio, and community links."
      />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:url" content={`${siteUrl}/ahtsham-connect`} />
      <meta property="og:site_name" content="Ahtsham Web Mentor" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Ahtsham Web Mentor - Official Links | Portfolio, Tutorials & Communities"
      />
      <meta
        name="twitter:description"
        content="Discover all official profiles and tutorials by Ahtsham Web Mentor - Web Developer & Trainer."
      />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
}