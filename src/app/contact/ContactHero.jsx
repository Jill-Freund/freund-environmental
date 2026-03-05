"use client"
import {motion} from "motion/react"

const ContactHero = () => {
  return (
    <section className="bg-[var(--color-text-dark)] py-20 px-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-bg-light)] opacity-5 blur-[100px] rounded-full" />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[var(--color-bg-light)] font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-5xl md:text-6xl font-bold text-white tracking-tight"
            >
              Let’s Solve Your <br />{" "}
              <span className="text-[var(--color-bg-light)]">
                Compliance Challenges.
              </span>
            </motion.h1>
          </div>
        </section>
  )
}

export default ContactHero