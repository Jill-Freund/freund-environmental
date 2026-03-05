"use client"
import { motion } from 'motion/react';
import { ExternalLink, BookOpen, ShieldCheck, FileText, Droplets } from 'lucide-react';

const resources = [
  {
    title: "Oregon Drinking Water Services",
    description: "State information and resources for drinking water safety.",
    link: "https://www.oregon.gov/oha/ph/healthyenvironments/drinkingwater/pages/index.aspx",
    icon: <Droplets className="w-5 h-5" />
  },
  {
    title: "Oregon Domestic Well Safety Program",
    description: "Resources and guidelines for private well owners.",
    link: "https://www.oregon.gov/oha/ph/HealthyEnvironments/DrinkingWater/SourceWater/DomesticWellSafety/Pages/index.aspx",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "Private Well Testing Rules",
    description: "Oregon Department of Environmental Quality standards for well testing.",
    link: "https://www.oregon.gov/oha/ph/HEALTHYENVIRONMENTS/DRINKINGWATER/SOURCEWATER/DOMESTICWELLSAFETY/Pages/Testing-Regulations.aspx#requirements",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "DEQ On-Site Wastewater Rules",
    description: "Regulations and requirements for septic systems.",
    link: "https://www.oregon.gov/deq/residential/pages/onsite-rules.aspx",
    icon: <BookOpen className="w-5 h-5" />
  }
];

const ResourceSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-(--color-text-dark) mb-4">
            Resource Links
          </h2>
          <p className="text-(--color-text-dark)/60 max-w-2xl mx-auto">
            Important information and regulatory resources to help you stay compliant and ensure water safety.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, idx) => (
            <motion.a
              key={idx}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-(--color-bg-light) transition-all flex items-start justify-between"
            >
              <div className="flex gap-4">
                <div className="mt-1 p-2 rounded-lg bg-(--color-bg-light)/20 text-(--color-text-dark) group-hover:bg-(--color-bg-light) transition-colors">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-bold text-(--color-text-dark) group-hover:text-black transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-(--color-text-dark)/60 mt-1 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
              
              <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-(--color-text-dark) transition-colors shrink-0 mt-1" />
            </motion.a>
          ))}
        </div>

        {/* Optional Disclaimer Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
            Regulatory Guidance & Compliance
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;