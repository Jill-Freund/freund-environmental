import {CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CredentialsSection from "@/components/CredentialsSection";
import MarqueeText from "@/components/MarqueeText";
import Testimonials from "@/components/Testimonials";
import AboutHero from "./AboutHero";

export const metadata = {
  title: 'About Our Firm',
  description: 'Discover the expertise behind Freund Environmental. Our mission is to provide high-quality environmental consulting with integrity and precision.',
};

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* --- HERO SECTION --- */}
        <AboutHero />

        {/* --- FOUNDER STORY SECTION --- */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-8 tracking-tight">
                Honesty, Integrity, and <br/>Local Expertise.
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Growing up in Central Oregon, Jeff pursued his passion for the natural environment by attending 
                  <span className="text-[var(--color-text-dark)] font-semibold"> Oregon State University</span>, where he graduated with degrees in 
                  Biology and Natural Resource Management.
                </p>
                <p>
                  Following a <span className="text-[var(--color-text-dark)] font-semibold">30-year career</span> in public health and regulation, 
                  Freund Environmental Consulting was born from a simple realization: homeowners and small businesses often 
                  lack the technical support needed for essential water and wastewater projects.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  Whether it&apos;s sampling well water for a real estate transaction or navigating complex regulatory requirements 
                  for your septic system, we provide the clarity you need.
                </p>
              </div>

              {/* Bio Highlights */}
              <div className="mt-12 grid sm:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <GraduationCap className="w-6 h-6 text-[var(--color-text-dark)] mt-1" />
                    <div>
                        <p className="font-bold text-[var(--color-text-dark)] text-sm uppercase">Education</p>
                        <p className="text-sm text-slate-500">BS Biology & Natural Resource Mgmt, OSU</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <MapPin className="w-6 h-6 text-[var(--color-text-dark)] mt-1" />
                    <div>
                        <p className="font-bold text-[var(--color-text-dark)] text-sm uppercase">Focus Area</p>
                        <p className="text-sm text-slate-500">Serving Central & Statewide Oregon</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Side: Services Focus */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 bg-[var(--color-text-dark)] rounded-[2.5rem] p-10 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6">Our Core Specializations</h3>
                <div className="space-y-4">
                  {[
                    'Private Well Water Assurance',
                    'Real Estate Water Sampling',
                    'Septic System Permitting',
                    'Wastewater Compliance',
                    'Regulatory Liaison Services',
                    'Food Safety Audits'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-2 border-b border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-bg-light)]" />
                      <span className="font-medium text-white/90 text-sm tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-sm italic text-white/70 leading-relaxed">
                    &quot;Recognizing that homeowners often need help with small water and wastewater projects, 
                    we offer personalized consulting built on honesty.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MarqueeText
          text="Freund Environmental Consulting &nbsp; Freund Environmental Consulting &nbsp;"
          className="bg-bg-dark text-text-light font-figtree-semibold text-[6vw] lg:text-6xl uppercase py-4 px-4 pointer-events-none"
          pauseOnHover={false}
        />

        <Testimonials />

        <CredentialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;