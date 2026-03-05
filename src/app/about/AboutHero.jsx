"use client"
import { motion } from "motion/react";
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative py-20 lg:py-32 px-6 bg-[var(--color-text-dark)] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30-30-30z' fill='%23e2ffc2'/%3E%3C/svg%3E")` }} 
          />
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-[var(--color-bg-light)]/10 border border-[var(--color-bg-light)]/20 mb-6">
                <span className="text-[var(--color-bg-light)] font-bold uppercase tracking-[0.2em] text-[10px]">
                  Based in Oregon
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Personal Service. <br />
                <span className="text-[var(--color-bg-light)]">Proven Results.</span>
              </h1>
              <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl font-medium">
                Rooted in Central Oregon with over 30 years of public health and regulatory experience. 
                We bridge the gap between homeowners and complex environmental requirements.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] lg:aspect-square max-w-md mx-auto lg:ml-auto rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl"
            >
              {/* Profile Photo Placeholder: Update 'src' with your actual image path */}
              <Image 
                src="/assets/jeff-profile.png" 
                alt="Jeff Freund - Founder of Freund Environmental"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-text-dark)] to-transparent p-8">
                <p className="text-white font-bold text-xl">Jeff Freund</p>
                <p className="text-[var(--color-bg-light)] text-sm font-bold uppercase tracking-widest">Founder & Principal Consultant</p>
              </div>
            </motion.div>
          </div>
        </section>
  )
}

export default AboutHero