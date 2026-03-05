"use client";
import { motion } from "motion/react";
import {
  Settings2,
  ClipboardCheck,
  ShieldAlert,
  CheckCircle2,
  Gavel,
} from "lucide-react";
import Image from "next/image";

const Services = () => {
  const scrollFade = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };
  return (
    <>
      {/* BLOCK 1: PRIVATE WELLS */}
      <section className="py-24 px-6" id="private-wells">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            {...scrollFade}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/service-1.jpg"
              alt="Private Well Testing"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div {...scrollFade} transition={{ delay: 0.2 }}>
            <h2 className="text-4xl font-bold text-[var(--color-text-dark)] mb-6">
              Private Wells & Water Systems
            </h2>

            {/* Added Content Excerpt */}
            <div className="prose prose-slate mb-8">
              <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-[var(--color-bg-light)] pl-6">
                &quot;There are no requirements to test private wells in Oregon
                except at the sale of the property. As a result many wells
                rarely, if ever, are sampled to ensure water quality.&quot;
              </p>
              <div className="mt-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-[var(--color-text-dark)] font-bold mb-3 text-sm">
                  <Gavel size={18} className="text-[var(--color-bg-light)]" />
                  REGULATORY NOTE: ORS 448.271
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  ORS 448.271 requires that groundwater wells used for domestic
                  purposes be tested for arsenic, nitrates and total coliform
                  bacteria at the sale of the property. Only persons who have
                  knowledge of the appropriate procedures and experience
                  including Registered Sanitarians, certified operators, and lab
                  technicians shall collect the samples.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {[
                "Testing & monitoring",
                "Troubleshooting",
                "Real estate sampling",
                "Cistern disinfection",
                "Results interpretation",
                "Treatment referrals",
                "Flow testing",
                "Static water levels",
                "Lender surveys",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-slate-600 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-bg-light)]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-[var(--color-text-dark)] p-8 rounded-3xl shadow-xl">
              <h4 className="flex items-center gap-2 font-bold text-white mb-4 uppercase text-xs tracking-widest">
                <ShieldAlert className="w-4 h-4 text-[var(--color-bg-light)]" />{" "}
                Critical Well Stats
              </h4>
              <div className="grid grid-cols-1 gap-4 text-sm text-white/70">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Positive for coliform bacteria</span>
                  <span className="text-[var(--color-bg-light)] font-bold">
                    20%
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Unsampled in last 10 years</span>
                  <span className="text-[var(--color-bg-light)] font-bold">
                    50%+
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 2: SEPTIC SYSTEMS */}
      <section className="py-24 px-6 bg-slate-50" id="septic-systems">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...scrollFade} className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-[var(--color-text-dark)] mb-6">
              On-site Septic Systems
            </h2>

            {/* Added Content Excerpt */}
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Wastewater disposal (septic systems) can be a daunting
              consideration for many homeowners. Whether it&apos;s new
              construction or adding an ADU we can help you through the process.
              We can assist with design and permitting or authorizations and
              repairs.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Site evaluations",
                "Septic system design",
                "Permit planning",
                "DEQ Variances",
                "Permit coordination",
                "Authorizations/repairs",
                "Technical assistance",
                "Limited space systems",
                "Lender evaluations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[var(--color-bg-light)] transition-all hover:shadow-md"
                >
                  <Settings2 className="w-5 h-5 text-[var(--color-bg-light)]" />
                  <span className="text-sm font-bold text-[var(--color-text-dark)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...scrollFade}
            className="order-1 lg:order-2 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/service-3.png"
              alt="Septic System Planning"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* BLOCK 3: PUBLIC WATER */}
      <section className="py-24 px-6" id="public-water">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            {...scrollFade}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/service-2.jpg"
              alt="Public Water Management"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div {...scrollFade}>
            <h2 className="text-4xl font-bold text-[var(--color-text-dark)] mb-6">
              Public Water Systems
            </h2>

            {/* Added Content Excerpt */}
            <div className="bg-[var(--color-bg-light)]/10 border-l-4 border-[var(--color-bg-light)] p-8 rounded-r-3xl mb-8">
              <p className="text-[var(--color-text-dark)] font-medium leading-relaxed">
                We offer regulatory assistance to public water systems. From
                developing written plans or correcting survey deficiencies to
                addressing coliform and E.coli events, we can help simplify
                these often stressful requirements and act as liaison with your
                regulatory agency.
              </p>
            </div>

            <ul className="grid sm:grid-cols-1 gap-4">
              {[
                "Sanitary Survey preparation and audits",
                "Small water system operations",
                "Government liaison services",
                "Water quality sampling & alert response",
                "Consumer Confidence Reports",
                "Written Plan development",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-100"
                >
                  <ClipboardCheck className="w-5 h-5 text-[var(--color-bg-light)] shrink-0" />
                  <span className="text-slate-700 font-semibold text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
