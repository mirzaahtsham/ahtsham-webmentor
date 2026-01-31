import { HeaderWithMegaMenu } from "@/components/Header/HeaderWithMegaMenu";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import HomeClientSections from "@/components/HomeClientSections";
import { getGeneralFaqs } from "@/lib/getGeneralFaqs";
import { Footer } from "@/components/Footer";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ahtsham.me/#webpage",
  name: "Ahtsham Web Designer & Developer",
  url: "https://ahtsham.me/",
  description:
    "Professional Web Designer & Developer offering Next.js, WordPress, Shopify, UI/UX, SEO Optimization, Cloudflare Integration, Hosting Management, Website Migration and Modern Web Solutions.",
  isPartOf: { "@id": "https://ahtsham.me/#website" },
  mainEntity: { "@id": "https://ahtsham.me/#person" },
};

export default async function Home() {
  const faqs = await getGeneralFaqs();
  
  // 🔍 DEBUG: Check what we're getting
  console.log('📊 FAQs fetched in page.tsx:', faqs);
  console.log('📊 Number of FAQs:', faqs?.length);
  console.log('📊 First FAQ:', faqs?.[0]);
  
  return (
    <>
      {/* ✅ SEO schema (server-rendered, zero JS cost) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <HeaderWithMegaMenu />

        <main>
          {/* ✅ Above-the-fold (FAST SSR, improves LCP) */}
          <Hero />
          <About />
        
          {/* ✅ Below-the-fold (lazy, client-only, optimized) */}
          <HomeClientSections faqs={faqs} />
        </main>

        <Footer />
      </div>
    </>
  );
}
