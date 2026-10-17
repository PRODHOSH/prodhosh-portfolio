import type { Metadata, Viewport } from "next";
import "./studio.css";

const SITE = "https://prodhosh.me";
const TITLE = "Prodhosh V S — Freelance full-stack developer & designer";
const DESC =
  "Freelance full-stack developer and designer from Chennai. I build websites, web apps, mobile apps, AI features, automations and logos for founders, agencies and teams. Next.js, React, Supabase, LLMs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: "%s | Prodhosh V S" },
  description: DESC,
  applicationName: "Prodhosh V S",
  authors: [{ name: "Prodhosh V S", url: SITE }],
  creator: "Prodhosh V S",
  keywords: [
    "Prodhosh", "Prodhosh V S", "freelance full-stack developer", "freelance web developer India", "Next.js developer Chennai",
    "web app development", "mobile app development", "AI developer", "RAG chatbot developer", "automation developer", "logo design", "portfolio",
  ],
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Prodhosh V S",
    title: TITLE,
    description: DESC,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, creator: "@prodhosh3" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#f9e2e1", width: "device-width", initialScale: 1 };

// Structured data so search engines understand who this is and what is on offer.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Prodhosh V S",
      alternateName: "thecodeguy",
      url: SITE,
      image: `${SITE}/opengraph-image.png`,
      email: "mailto:hello@prodhosh.me",
      jobTitle: "Freelance Full-Stack Developer & Designer",
      address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Vellore Institute of Technology, Chennai" },
        { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Madras" },
      ],
      knowsAbout: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "LLMs", "RAG", "React Native", "Automation", "UI/UX design", "Logo design"],
      sameAs: [
        "https://github.com/prodhosh",
        "https://www.linkedin.com/in/prodhoshvs",
        "https://x.com/prodhosh3",
        "https://links.prodhosh.me",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#service`,
      name: "Prodhosh V S — freelance development & design",
      url: SITE,
      provider: { "@id": `${SITE}/#person` },
      areaServed: "Worldwide",
      description: DESC,
      serviceType: ["Web development", "Web app development", "Mobile app development", "AI integration", "Business automation", "Logo & brand design", "SEO"],
    },
    { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: "Prodhosh V S", inLanguage: "en", publisher: { "@id": `${SITE}/#person` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
