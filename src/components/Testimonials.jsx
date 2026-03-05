"use client"
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Thank you Jeff. Job well done!! We feel much better about our water now. Have a good weekend.",
    author: "Bud O.",
    date: "11/24/2024"
  },
  {
    quote: "Thank you for all you've done, and for your knowledge and expertise. I learned a LOT from you over the past several months!",
    author: "Judy M.",
    date: "02/03/2025"
  },
  {
    quote: "I have always admired how you have provided such a helpful and trustworthy relationship with the public. Thank you again for all the wisdom and knowledge you have provided me over the years.",
    author: "Michelle A.",
    date: "08/25/2025"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">
            Client Success
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] tracking-tight">
            Trusted by the Community
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-8 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={32} className="text-[var(--color-text-dark)]" />
              </div>
              
              <div className="relative z-10">
                <p className="text-slate-600 leading-relaxed italic text-lg mb-8">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-50">
                <p className="font-bold text-[var(--color-text-dark)] uppercase tracking-wider text-sm">
                  {t.author}
                </p>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {t.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;