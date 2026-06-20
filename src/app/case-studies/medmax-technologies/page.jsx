import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Medmax Technologies WordPress Redesign Case Study | Ahtsham Web Mentor",
  description:
    "A WordPress website redesign case study for Medmax Technologies by Mirza Ahtsham, covering Elementor Pro development, technical SEO setup, hosting migration, tracking integrations and performance optimization.",
};

const imageBase = "/case-studies/medmax";

const projectStats = [
  { label: "Mobile Score", value: "45+ → 75+/80" },
  { label: "Desktop Score", value: "65+ → 90+" },
  { label: "Mobile Speed Index", value: "13s → ~3s" },
  { label: "Desktop Speed Index", value: "8s → <1s" },
];

const challenges = [
  "Slow website performance",
  "Indexing and SEO audit issues",
  "Plugin and custom-code conflicts",
  "Hosting limitations",
  "Tracking tools not properly configured",
  "Mobile responsiveness issues",
];

const solutions = [
  "Custom WordPress redesign",
  "Elementor Pro development",
  "Demo-to-live website migration",
  "Cloudflare cache and security setup",
  "Technical SEO and tracking setup",
  "Website speed optimization",
];

const tools = [
  "WordPress",
  "Elementor Pro",
  "MediClinic Theme",
  "Cloudflare",
  "WP Rocket",
  "LiteSpeed Cache",
  "Google Search Console",
  "GA4",
  "Google Tag Manager",
  "Matomo Analytics",
  "Microsoft Clarity",
  "Bing Webmaster",
  "All in One SEO",
  "Tawk.to",
  "WP SMTP",
  "Cloudflare Turnstile",
  "Contact Form 7",
  "Namecheap",
  "Zoho Mail",
];

export default function MedmaxCaseStudyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-cyan-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                WordPress Case Study
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Medmax Technologies Website Redesign
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                WordPress redesign, Elementor Pro development, technical SEO
                setup, hosting migration, tracking integrations, and
                performance optimization for a medical billing company.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["WordPress", "Elementor Pro", "Technical SEO", "Performance", "Migration"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://medmaxtechnologiesllc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-yellow-500"
                >
                  View Live Website
                </a>

                <Link
                  href="/"
                  className="rounded-full border border-purple-400/50 bg-purple-500/10 px-6 py-3 font-semibold text-white transition hover:bg-purple-600"
                >
                  Back to Portfolio
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-purple-950/40">
              <Image
                src={`${imageBase}/medmax-case-study-hero.webp`}
                alt="Medmax Technologies website redesign case study hero mockup"
                width={1200}
                height={900}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Client", "Medmax Technologies"],
            ["Industry", "Medical Billing"],
            ["Platform", "WordPress + Elementor Pro"],
            ["Role", "Sr. Website Designer & Developer"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm text-slate-400">{label}</p>
              <h3 className="mt-2 text-xl font-semibold">{value}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">The Challenge</h2>
            <p className="mt-4 text-slate-300">
              The previous website had performance, indexing, plugin dependency
              and custom-code conflicts that affected scalability, SEO
              visibility and user experience.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {challenges.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">The Solution</h2>
            <p className="mt-4 text-slate-300">
              I rebuilt the website from scratch using WordPress and Elementor
              Pro, migrated it from demo to live domain, configured hosting,
              DNS, tracking tools and performance optimization.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {solutions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Design Showcase
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Website Pages Designed & Developed
          </h2>
          <p className="mt-4 text-slate-300">
            The project included custom landing page development, services
            pages, specialities pages, near-me/local pages, responsive layouts,
            contact forms and conversion-focused CTA sections.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
          <Image
            src={`${imageBase}/medmax-page-showcase-mockup.webp`}
            alt="Medmax Technologies pages designed and developed showcase"
            width={1600}
            height={1000}
            className="rounded-2xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
              Performance Results
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Speed & Core Web Vitals Optimization
            </h2>
            <p className="mt-4 text-slate-300">
              The website performance was improved through caching, Cloudflare
              configuration, image optimization and front-end optimization.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {projectStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5"
                >
                  <p className="text-sm text-yellow-200">{stat.label}</p>
                  <h3 className="mt-2 text-2xl font-bold">{stat.value}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src={`${imageBase}/medmax-performance-results.webp`}
              alt="Medmax Technologies performance optimization results"
              width={1200}
              height={900}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src={`${imageBase}/medmax-technical-seo-tracking.webp`}
              alt="Medmax Technologies technical SEO and tracking setup"
              width={1200}
              height={900}
              className="rounded-2xl"
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Technical SEO
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Tracking, Indexing & Analytics Setup
            </h2>
            <p className="mt-4 text-slate-300">
              I configured SEO and tracking tools to support indexing,
              analytics, visitor behavior tracking and performance monitoring.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Google Search Console",
                "GA4",
                "Google Tag Manager",
                "Microsoft Clarity",
                "Bing Webmaster",
                "Matomo Analytics",
                "All in One SEO",
                "Cloudflare",
              ].map((item) => (
                <li key={item} className="rounded-2xl bg-white/5 p-3 text-sm">
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-pink-300">
              Hosting & DNS
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Migration, DNS & Email Configuration
            </h2>
            <p className="mt-4 text-slate-300">
              The website infrastructure was improved through hosting migration,
              DNS setup, Cloudflare configuration and email continuity support.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Bluehost to Namecheap",
                "VPS setup",
                "Cloudflare DNS",
                "Zoho Mail MX records",
                "SSL configuration",
                "A/CNAME records",
                "Email deliverability",
                "Security setup",
              ].map((item) => (
                <li key={item} className="rounded-2xl bg-white/5 p-3 text-sm">
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src={`${imageBase}/medmax-hosting-dns-configuration.webp`}
              alt="Medmax Technologies hosting migration and DNS configuration"
              width={1200}
              height={900}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
            Tools Used
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technology Stack & Integrations
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-10">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Need a WordPress website like this?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            I help businesses build fast, SEO-friendly and conversion-focused
            WordPress and Shopify websites with proper tracking, hosting and
            technical SEO setup.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/connect"
              className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-yellow-500"
            >
              Hire Me / Consult
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}