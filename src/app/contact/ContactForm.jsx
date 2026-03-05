"use client"
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"; // Import Sonner
import { Send } from "lucide-react";
import { Loader2 } from "lucide-react";
import SuccessForm from "./SuccessForm";

const ContactForm = () => {
    const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // 1. Critical Check: Ensure variables aren't undefined
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Configuration error. Please check environment variables.");
      console.error("Missing EmailJS Env Vars:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      return;
    }

    setIsSubmitting(true);

    toast.promise(
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY),
      {
        loading: "Sending your inquiry...",
        success: () => {
          setIsSubmitting(false);
          setIsSuccess(true);
          return "Message sent successfully!";
        },
        error: (err) => {
          setIsSubmitting(false);
          // 2. Log the actual error from EmailJS to debug
          console.error("EmailJS Error details:", err);
          return `Error: ${err.text || "Failed to send message"}`;
        },
      },
    );
  };
  return (
    <>
        {isSuccess ? (
                <SuccessForm />
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField label="First Name" name="first_name" required />
                    <FormField label="Last Name" name="last_name" required />
                  </div>

                  <FormField
                    label="Physical Address"
                    name="address"
                    placeholder="Property street address"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      label="City, State, Zip"
                      name="location"
                      placeholder="City, OR 97000"
                    />
                    <FormField label="Phone" name="phone" type="tel" />
                  </div>

                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                  />

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                      Inquiry / Question
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:border-[var(--color-bg-light)] focus:bg-white transition-all resize-none font-medium text-[var(--color-text-dark)]"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-text-dark)] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:bg-black disabled:bg-slate-300 transition-all group shadow-xl"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin text-[var(--color-bg-light)]" />
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[var(--color-bg-light)]" />
                      </>
                    )}
                  </button>
                </form>
              )}
    </>
  )
}

// Helper component for cleaner code
const FormField = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
      {label}
    </label>
    <input
      type={type}
      {...props}
      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-bg-light)] focus:bg-white transition-all font-medium text-[var(--color-text-dark)]"
    />
  </div>
);

export default ContactForm