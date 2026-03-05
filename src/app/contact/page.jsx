import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";

export const metadata = {
  title: 'Contact Us | Get a Consultation',
  description: 'Get in touch with Freund Environmental for your next project. We provide expert advice on environmental risk and regulatory requirements.',
};

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* --- HERO SECTION --- */}
        <ContactHero />

        {/* --- CONTACT INTERFACE --- */}
        <section className="py-24 px-4 relative -mt-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-0 shadow-2xl rounded-4xl overflow-hidden border border-slate-100">
            {/* LEFT SIDE: CONTACT INFO */}
            <div className="lg:col-span-5 bg-[var(--color-text-dark)] p-5 py-8 md:p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-8 tracking-tight">
                  Contact Details
                </h2>
                <p className="text-white/60 mb-12 text-lg leading-relaxed">
                  Submit your inquiry and our team will get back to you within
                  24 hours. We look forward to discussing how we can support
                  your project.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: Phone, label: "Call Us", val: "541-480-1657" },
                    {
                      icon: Mail,
                      label: "Email Us",
                      val: "jeff@freundenvironmental.com",
                    },
                    {
                      icon: MapPin,
                      label: "Headquarters",
                      val: "Oregon, United States",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-bg-light)] transition-all duration-300">
                        <item.icon className="w-6 h-6 text-[var(--color-bg-light)] group-hover:text-[var(--color-text-dark)]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                          {item.label}
                        </p>
                        <p className="text-lg font-medium group-hover:text-[var(--color-bg-light)] transition-colors cursor-default">
                          {item.val}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 italic uppercase tracking-wider font-medium">
                  Professional Consulting • RS/REHS Certified
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <div className="lg:col-span-7 bg-white p-5 py-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
