"use client"
import { motion } from "motion/react";
import { AlertCircle, HelpCircle, History, ArrowRight } from "lucide-react";
import Link from "next/link";

const WaterTestSection = () => {
  const stats = [
    {
      value: "20%",
      label: "Contamination Risk",
      description: "of private wells test positive for coliform bacteria",
      icon: <AlertCircle className="w-6 h-6 text-(--color-text-dark)" />,
    },
    {
      value: "67%",
      label: "False Security",
      description: "of homeowners believe their water is safe without any evidence",
      icon: <HelpCircle className="w-6 h-6 text-(--color-text-dark)" />,
    },
    {
      value: "50%+",
      label: "Lack of Oversight",
      description: "of private wells have not been tested in the last 10 years",
      icon: <History className="w-6 h-6 text-(--color-text-dark)" />,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-(--color-text-dark)/60 mb-4">
              Critical Awareness
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-(--color-text-dark) leading-tight">
              Why Water Testing Matters
            </h3>
            <p className="mt-6 text-xl text-(--color-text-dark)/80 leading-relaxed italic border-l-4 border-(--color-bg-light) pl-6">
              &quot;In Oregon, testing of private wells is only required when selling the property.&quot;
            </p>
          </div>
        </div>

        {/* Stats Container (Dark Background) */}
        <div className="relative bg-bg-dark rounded-4xl p-8 md:p-14 overflow-hidden shadow-2xl">
          {/* Subtle Decorative Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-(--color-bg-light) opacity-[0.03] rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="relative z-10">
            <div className="mb-12">
              <h4 className="text-text-white text-2xl font-bold flex items-center gap-4">
                Did you know?
                <span className="h-px w-24 bg-(--color-bg-light)/40" />
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-lg group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="p-3 bg-(--color-bg-light) rounded-xl group-hover:bg-(--color-bg-light) transition-colors shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-4xl font-black text-(--color-text-dark) tracking-tighter">
                      {item.value}
                    </span>
                  </div>
                  
                  <h5 className="text-(--color-text-dark) font-bold text-lg mb-3 uppercase tracking-wide">
                    {item.label}
                  </h5>
                  <p className="text-(--color-text-dark)/70 text-sm leading-relaxed grow">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Footer Section */}
            <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
               <p className="text-text-white/60 text-sm font-medium">
                 Regular testing protects your health and property value.
               </p>
               <Link href={"/contact"}>
                <button className="group flex items-center gap-3 text-(--color-bg-light) font-bold uppercase tracking-widest text-xs hover:text-text-white transition-colors cursor-pointer">
                 Schedule a professional test 
                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </button>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterTestSection;