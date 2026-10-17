import type { Metadata, Viewport } from "next";
import "./studio.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prodhosh.me"),
  title: "Prodhosh V S — Full-stack developer & AI engineer",
  description: "Prodhosh V S: freelance full-stack developer, product builder and SDE aspirant from Chennai. Next.js, AI/RAG, Supabase.",
  icons: { icon: "/me.webp" },
  openGraph: { title: "Prodhosh V S — Full-stack developer & AI engineer", description: "Full-stack products, AI features and animated websites.", images: ["/me.webp"] },
};
export const viewport: Viewport = { themeColor: "#f9e2e1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
