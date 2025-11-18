// src/components/JsonLd.tsx
export function JsonLd({ data }: { data: any }) {
  // Server and client safe
  return (
    <script
      key={JSON.stringify(data).slice(0, 110)}
      type="application/ld+json"
      // dangerouslySetInnerHTML is required for JSON-LD injection
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
