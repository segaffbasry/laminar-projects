import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import { posthogSnippet } from "@/lib/posthog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  robots: { index: false, follow: false },
  icons: {
    icon: "/brand/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={outfit.variable}>
      <head>
        {/* PostHog EU — private demo instrumentation, no visible UI */}
        <script dangerouslySetInnerHTML={{ __html: posthogSnippet }} />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        <ScrollProgress />
        <span className="grain" aria-hidden />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
