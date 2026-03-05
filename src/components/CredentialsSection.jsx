"use client"
import { motion } from "motion/react";
import React from 'react';

const expertiseData = [
  {
    id: "01",
    title: "30+ Years of Expertise",
    desc: "Extensive experience in the environmental regulatory industry, including drinking water, wastewater disposal, food safety, and inspection. This depth of knowledge allows us to confidently navigate complex compliance requirements.",
  },
  {
    id: "02",
    title: "RS/REHS Certified",
    desc: "Registered Sanitarian & Registered Environmental Health Specialist, providing professional insight into water systems, wastewater management, food safety audits, and regulatory inspections.",
  },
  {
    id: "03",
    title: "Small Water System Operator",
    desc: "Qualified to operate, evaluate, and support small public water systems, offering technical assistance, sanitary surveys, and water quality sampling with industry-standard accuracy.",
  },
  {
    id: "04",
    title: "90% DEQ Variance Approval",
    desc: "40+ DEQ variances with an exceptional 90% approval rate, demonstrating expertise in permitting strategy, site evaluations, and complex regulatory pathways.",
  },
];

const CredentialsSection = () => {
  return (
    <section className='bg-white px-6 lg:px-16 py-20'>
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className='flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 mb-12'>
          <div className="max-w-xs">
             <span className="text-[var(--color-text-dark)]/50 font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">
               Our Credentials
             </span>
             <h2 className='text-xl font-bold text-[var(--color-text-dark)] uppercase tracking-tight'>
               Expertise You Can Trust
             </h2>
          </div>
          <p className="text-slate-400 text-sm font-medium mt-4 md:mt-0">
            Professional Water & Wastewater Consulting
          </p>
        </div>

        {/* --- MAIN DESCRIPTION --- */}
        <div className='max-w-5xl mb-24'>
           <h3 className='text-3xl md:text-5xl leading-[1.15] text-[var(--color-text-dark)] tracking-tight'>
            We work with health departments, ODEQ, OHA, and the EPA to 
            <span className="italic font-serif text-[var(--color-bg-light)] bg-[var(--color-text-dark)] px-4 py-1 mx-2 rounded-sm inline-block transform -rotate-1"> act as an effective liaison </span> 
            between you and regulatory agencies.
          </h3>
        </div>

        {/* --- ACCORDION-STYLE LIST --- */}
        <div className="mt-10 border-t border-slate-200">
          {expertiseData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="group relative border-b border-slate-200 py-12 px-4 cursor-default overflow-hidden transition-all duration-500"
            >
              {/* Background Slide Effect on Hover */}
              <div className="absolute inset-0 bg-[var(--color-text-dark)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                
                {/* Number and Title */}
                <div className="flex gap-8 md:gap-16 items-start lg:w-1/2">
                  <span className="font-mono text-sm text-slate-400 group-hover:text-[var(--color-bg-light)] transition-colors mt-2">
                    {item.id}
                  </span>
                  <div className="flex flex-col">
                    <h4 className="text-2xl md:text-4xl font-bold text-[var(--color-text-dark)] group-hover:text-white transition-colors tracking-tighter leading-none mb-2">
                      {item.title}
                    </h4>
                    {/* Subtle decorative line that grows on hover */}
                    <div className="w-0 h-0.5 bg-[var(--color-bg-light)] group-hover:w-full transition-all duration-700 delay-100" />
                  </div>
                </div>

                {/* Description and Action Icon */}
                <div className="lg:w-1/3 flex justify-between items-end gap-6">
                  <p className="text-slate-600 group-hover:text-slate-300 transition-colors text-base md:text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  {/* <ArrowUpRight className="w-6 h-6 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-[var(--color-bg-light)] transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shrink-0" /> */}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;