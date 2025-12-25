import { NextResponse } from "next/server";

const baseUrl = "https://ahtsham.me";

// List of pages you want to include dynamically
const pages = [
  "/",
  "/ahtsham-connect",
  "/trainings",
  "/schedule",
  "/services",
  "/projects",
  "/policies",
  "/contact",
  "/sitemap-html",
];

export async function GET() {
  const urls = pages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
