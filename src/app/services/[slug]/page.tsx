import { HeaderWithMegaMenu } from "@/components/HeaderWithMegaMenu";
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

  return (
    <>
      <HeaderWithMegaMenu />
      <ServiceDetailClient service={service as Service} />
      <Footer />
    </>
  );
}
