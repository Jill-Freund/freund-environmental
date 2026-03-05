"use client"
import React from 'react';
import { motion } from 'motion/react';

const AboutSection2 = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Accent */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-(--color-text-dark)/60 mb-4">
              Our Legacy
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-(--color-text-dark)">
              Professional Water <br /> 
              & Wastewater <br /> 
              Consulting.
            </h3>
            {/* Using the light lime brand color for the accent bar */}
            <div className="w-20 h-1.5 bg-(--color-bg-light) mt-8 rounded-full border border-(--color-text-dark)/10" />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-lg md:text-xl leading-relaxed font-medium text-(--color-text-dark)">
              <p>
                Freund Environmental Consulting provides specialized consulting services to homeowners, water systems, and small businesses. 
                Our private practice is built on the philosophy that <span className="italic opacity-80">small projects deserve expert attention</span>.
              </p>

              <p className="text-base md:text-lg text-(--color-text-dark)/70 leading-relaxed">
                Our scope focuses on drinking water, private wells, and on-site wastewater disposal. 
                From water quality sampling and troubleshooting to complex regulatory permitting, we bridge 
                the gap between technical needs and successful outcomes.
              </p>

              {/* Callout box using the light brand background and dark text */}
              <div className="bg-(--color-bg-light) border-l-4 border-(--color-text-dark) p-6 rounded-r-xl shadow-sm">
                <p className="text-base font-bold text-(--color-text-dark)">
                  30 Years of Industry Expertise
                </p>
                <p className="text-sm text-(--color-text-dark)/70 mt-2 leading-snug">
                  Our deep-rooted experience in environmental regulation allows us to navigate complex 
                  requirements, helping you solve obstacles with insight that only decades in the field can provide.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection2;