// src/app/services/[slug]/page.tsx
import { HeaderWithMegaMenu } from "@/components/Header/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";
import { ServiceDetailClient } from "@/components/ServiceDetailsClient";
import { getServiceBySlug, services } from "@/data/services"; // Add services to import

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  // Get service from local data file
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-8">The service you're looking for doesn't exist.</p>
          <a
            href="/services"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all"
          >
            Back to Services
          </a>
        </div>
      </div>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://ahtsham.me/services/${service.slug}#service`,
    "name": service.title,
    "description": service.description,
    "provider": {
      "@id": "https://ahtsham.me/#organization"
    },
    "serviceType": service.category || "Web Development Service",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://ahtsham.me/services/${service.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeaderWithMegaMenu />
      <ServiceDetailClient service={service} services={services} />
      <Footer />
    </>
  );
}