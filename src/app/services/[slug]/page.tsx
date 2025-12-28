import { HeaderWithMegaMenu } from "@/components/Header/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";
import { ServiceDetailClient, Service } from "@/components/ServiceDetailsClient";

interface PageProps {
  params: { slug: string };
}

export default async function ServicePage(props: PageProps) {
  const { params } = await props; // ✅ await props to access params
  const { slug } = params;

  // fetch service
  const { data: service, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !service) {
    return <div>Service not found</div>;
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
      <ServiceDetailClient service={service as Service} />
      <Footer />
    </>
  );
}
