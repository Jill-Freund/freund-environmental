import { Toaster } from "sonner";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://freundenvironmental.com"),
  title: {
    default: "Freund Environmental | Professional Environmental Consulting",
    template: "%s | Freund Environmental",
  },
  description:
    "Expert environmental consulting services in the US. Specializing in compliance, site assessments, and sustainable engineering solutions.",
  openGraph: {
    title: "Freund Environmental",
    description: "Expert environmental consulting and sustainability services.",
    url: "https://freundenvironmental.com",
    siteName: "Freund Environmental",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Freund Environmental Consulting",
    url: "https://freundenvironmental.com",
    telephone: "+1-541-480-1657",
    email: "jeff@freundenvironmental.com",
    areaServed: "Oregon, United States",
    founder: {
      "@type": "Person",
      name: "Jeff Freund",
    },
  };
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Freund" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
