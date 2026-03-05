import AboutSection2 from "@/components/AboutSection2";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import ResourceSection from "@/components/ResourceSection";
import ServiceSection from "@/components/ServiceSection";
import WaterTestSection from "@/components/WaterTestSection";

export const metadata = {
  title: 'Environmental Consulting & Compliance Services',
  description: 'Freund Environmental provides comprehensive environmental site assessments, regulatory compliance, and sustainability consulting for businesses across the US.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* <Hero /> */}
        <Hero2 />
        {/* About FEC */}
        <AboutSection2 />
        {/* Our Services */}
        <ServiceSection />
        <WaterTestSection />
        <ResourceSection />
        {/* <CredentialsSection /> */}
      </main>
      <Footer />
    </>
  );
}
