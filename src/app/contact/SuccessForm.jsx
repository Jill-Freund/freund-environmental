"use client";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const SuccessForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="h-full flex flex-col items-center justify-center text-center py-12"
    >
      <div className="w-20 h-20 bg-[var(--color-bg-light)] rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-[var(--color-text-dark)]" />
      </div>
      <h3 className="text-3xl font-bold text-[var(--color-text-dark)] uppercase tracking-tighter">
        Success!
      </h3>
      <p className="text-slate-500 mt-4 max-w-sm">
        Your inquiry has been received. Jeff will review the details and contact
        you shortly.
      </p>
      <button
        onClick={() => setIsSuccess(false)}
        className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-dark)] border-b-2 border-[var(--color-bg-light)] pb-1 hover:border-[var(--color-text-dark)] transition-all"
      >
        Send another message
      </button>
    </motion.div>
  );
};

export default SuccessForm;
