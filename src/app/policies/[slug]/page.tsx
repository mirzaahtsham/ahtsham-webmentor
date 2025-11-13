import type { Metadata } from "next";
import { policyData } from "../policyData";
import PolicyClientPage from "./PolicyClientPage"; // ✅ make sure this exists

interface Props {
  params: Promise<{ slug: string }>;
}

// ✅ Properly await params for metadata generation
export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const policy = policyData[slug];

  if (!policy) return { title: "Policy" };

  const title = policy.title;
  const description = policy.description || "Read our policy details.";
  const url = `https://ahtsham.me/policies/${slug}`;
  const image = policy.image || "https://ahtsham.me/default-og.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// ✅ Generate static paths
export async function generateStaticParams() {
  return Object.keys(policyData).map((slug) => ({ slug }));
}

// ✅ Default export — required for Next.js route
export default async function PolicyPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const policy = policyData[slug];

  if (!policy) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-400">
        <h1 className="text-2xl font-semibold">Policy Not Found</h1>
      </div>
    );
  }

  // ✅ Use your client-side UI component
  return <PolicyClientPage params={{ slug }} />
;
}
