"use client"
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Private Wells & Water Systems",
    image: "https://images.unsplash.com/photo-1660579024528-9815f6be43ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/services/#private-wells",
    items: ["Water Quality Sampling", "Well Flow Testing", "Real Estate Testing", "Diagnostics", "Safety Guidance"],
  },
  {
    title: "Public Water Systems",
    image: "/assets/pws.png",
    link: "/services/#public-water",
    items: ["Regulatory Compliance", "Sampling Plans", "Technical Assistance", "Operator Support", "Emergency Planning"],
  },
  {
    title: "On-site Septic Systems",
    image: "/assets/osss.jpg",
    link: "/services/#septic-systems",
    items: ["Site Evaluations", "Permitting", "Compliance Inspections", "Troubleshooting", "DEQ Guidance"],
  },
];

const ServiceSection = () => {
  return (
    <section className="relative py-16 px-6 bg-(--color-text-dark) overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18v4m-2-2h4' stroke='%23e2ffc2' stroke-width='1'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header */}
        <div className="mb-12 border-l-4 border-(--color-bg-light) pl-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">Our Core Services</h2>
          <p className="text-(--color-bg-light)/60 text-sm uppercase tracking-widest mt-1 font-bold">Specialized expertise</p>
        </div>

        {/* Condensed Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-(--color-text-dark) mb-4">{service.title}</h3>
                
                <ul className="space-y-2 mb-6 grow">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-(--color-bg-light) fill-(--color-text-dark)" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href={service.link} className="group/btn flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase text-(--color-text-dark)">Details</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover/btn:bg-(--color-bg-light) transition-colors flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-(--color-text-dark)" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;