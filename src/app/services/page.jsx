import {  
  ArrowRight, 
  FileText
} from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from "next/link";
import ServiceHero from "./ServiceHero";
import Services from "./Services";

export const metadata = {
  title: 'Environmental Services | Phase I & II ESA',
  description: 'Our core services include Phase I & II Environmental Site Assessments (ESA), soil testing, groundwater monitoring, and NEPA compliance.',
};

const ServicePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar />
      {/* --- HERO SECTION --- */}
      <ServiceHero />
      <main className="flex-grow">
        <Services />
        {/* BLOCK 4: ADDITIONAL AUDITS */}
        <section className="py-24 px-6 bg-[var(--color-text-dark)] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <span className="text-[var(--color-bg-light)] font-bold uppercase tracking-widest text-[10px] bg-white/5 py-1 px-3 rounded-full border border-white/10">Compliance Audits</span>
                <h2 className="text-4xl font-bold mt-6 leading-tight">Inspection <br/>Readiness</h2>
                <p className="mt-6 text-white/50 leading-relaxed">
                  Our pre-inspection audits help your business identify and mitigate potential 
                  violations before regulatory agents arrive. Professional preparation is the key to seamless licensing.
                </p>
                <Link href={"/contact"}>
                  <button className="mt-8 flex items-center gap-3 bg-[var(--color-bg-light)] text-[var(--color-text-dark)] px-8 py-4 rounded-full font-bold transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(var(--color-bg-light-rgb),0.3)]">
                    Get Prepared <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
              
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {[
                  { title: "Food Service", desc: "Licensing, audits, and inspection support for facilities." },
                  { title: "Childcare", desc: "Specialized safety inspections and audit readiness." },
                  { title: "Contract Services", desc: "Long-term regulatory and technical support contracts." },
                  { title: "Permit Submission", desc: "End-to-end preparation, application, and plan review support." }
                ].map((audit, i) => (
                  <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-light)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <FileText className="text-[var(--color-bg-light)]" size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{audit.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{audit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;