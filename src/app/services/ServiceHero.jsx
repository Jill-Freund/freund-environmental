"use client"
import {motion} from "motion/react"

const ServiceHero = () => {
    const scrollFade = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
      };
  return (
    <section className="relative pt-40 pb-24 px-6 bg-[var(--color-text-dark)] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-bg-light)] opacity-5 blur-[120px] rounded-full -mr-32 -mt-32" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...scrollFade} className="max-w-4xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-bg-light)] font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
              Expert Environmental Consulting
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              Technical Excellence in <br />
              <span className="text-[var(--color-bg-light)]">Environmental Safety.</span>
            </h1>
            <p className="mt-8 text-xl text-white/60 max-w-2xl leading-relaxed">
              Comprehensive water, septic, and regulatory solutions tailored for Oregon homeowners, 
              small businesses, and public systems.
            </p>
          </motion.div>
        </div>
      </section>
  )
}

export default ServiceHero