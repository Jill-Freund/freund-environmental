import { Toaster } from "sonner";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  metadataBase: new URL('https://freundenvironmental.vercel.app'),
  title: {
    default: 'Freund Environmental | Professional Environmental Consulting',
    template: '%s | Freund Environmental'
  },
  description: 'Expert environmental consulting services in the US. Specializing in compliance, site assessments, and sustainable engineering solutions.',
  openGraph: {
    title: 'Freund Environmental',
    description: 'Expert environmental consulting and sustainability services.',
    url: 'https://freundenvironmental.vercel.app',
    siteName: 'Freund Environmental',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
