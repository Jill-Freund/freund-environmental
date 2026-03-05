import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white px-5 lg:px-8 xl:px-10 lg:mt-20">
      {/* Title */}
      <div className="py-8 border-b border-text-dark font-figtree-semibold text-text-dark">
        More Than Just Introduction
      </div>
      {/* Description */}
      <div className="py-10 [&_span]:font-playfair-italic text-3xl">
        Environmental consulting is not just about regulations — it’s about
        protecting <span>health, safety, and water quality</span> through
        expertise and partnership.
      </div>
      {/* Image Container */}
      <div className="pb-10 lg:py-10 lg:flex lg:gap-10">
        <div className="relative w-full h-[110vw] lg:w-1/2 lg:h-[50vw]">
          <Image
            src={
              "https://images.pexels.com/photos/34150312/pexels-photo-34150312.jpeg"
            }
            alt="jeff Freund"
            className="object-cover"
            fill
          />
        </div>
        <div className="py-10 lg:w-1/2 lg:py-0">
          <div className="flex justify-center flex-col gap-6 font-figtree-regular text-text-dark lg:text-2xl">
            <p>
              My name is Jeff Freund, and I’m an environmental health
              professional. For me, every water system, whether a private well,
              septic design, or public water operation, is a responsibility that
              requires accuracy, care, and experience. After decades in the
              regulatory industry, I’ve learned that safe water and proper
              wastewater management depend on clear guidance, reliable sampling,
              and strong communication with state and local agencies. As someone
              wise once said about environmental work: “Good water protection
              begins with good knowledge.”
            </p>
            <p>
              Since beginning my consulting career, supporting homeowners,
              public water systems, and small businesses has become both my
              profession and my passion, something I continue to refine through
              ongoing fieldwork, permitting, and technical assistance.
            </p>
          </div>
          <Link href={"/about"}>
            <button className="bg-[#e2ffc2] text-[#003433] flex justify-center items-center gap-5 text-sm font-figtree-semibold uppercase px-4 py-2.5 rounded-4xl mt-8 lg:my-10">
              <h1>More About Us</h1>
              <ArrowUpRight className="size-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
