import { services } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="mt-[25vh] text-center">
        <div className="[&_h1]:font-figtree-regular [&_span]:font-playfair-italic text-text-light text-5xl [&_h1]:tracking-tight [&_h1]:md:text-[6.8vw] [&_h1]:lg:text-[6.5vw] [&_h1]:xl:text-[6vw]">
          <h1>
           <span>Drinking Water </span>and <span>Wastewater Consultants</span>
          </h1>
        </div>
        <div className="text-white mt-8">
          <p>specializing in projects for</p>
          <p>homeowners and small businesses.</p>
        </div>
        <h2 className="hidden lg:block mt-25 uppercase text-text-light font-figtree-bold text-sm">
          (Our Core Services)
        </h2>
      </div>

      {/* This section will be only visible on Larger screens */}
      <div className="hidden mt-6 lg:flex flex-col justify-center items-center gap-16">
        <div className="flex justify-center flex-col lg:px-8 xl:px-10 lg:flex-row lg:justify-between lg:w-full  gap-16">
          <div className={`w-[95vw] lg:w-[35vw] group`}>
            <div className={`relative w-full h-[80vw] lg:h-[38vw]`}>
              <div className="relative size-full opacity-90">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1660579024528-9815f6be43ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={"Private Wells & Water Systems"}
                  className="object-cover"
                  fill
                />
              </div>
              <div
                className="absolute inset-0 bg-[#00343380] 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
              >
                <div className="size-full flex justify-center items-center flex-col">
                  <h1 className="text-text-light font-figtree-bold text-2xl text-center w-70">
                    Private Wells & Water Systems
                  </h1>

                  <Link
                    href={`/services/private-wells-water-systems`}
                    className="bg-white/30 backdrop-blur-md px-4 py-3 rounded-3xl 
                 text-text-light uppercase font-figtree-semibold 
                 flex items-center absolute bottom-10"
                  >
                    View
                    <ArrowUpRight className="ml-6 size-4 text-text-light" />
                  </Link>
                </div>
              </div>
            </div>
            <Link href={`/services/private-wells-water-systems`}>
              <div className="mt-4 uppercase text-white font-figtree-bold text-sm flex items-center justify-center hover:underline cursor-pointer">
                Private Wells & Water Systems
                <ArrowUpRight className="ml-2 size-4 text-text-light" />
              </div>
            </Link>
          </div>
          <div className={`w-[95vw] lg:w-[35vw] group`}>
            <div className={`relative w-full h-[80vw] lg:h-[38vw]`}>
              <div className="relative size-full opacity-90">
                <Image
                  src={"/assets/septic-system.webp"}
                  alt={"On-Site Septic Systems"}
                  className="object-cover"
                  fill
                />
              </div>
              <div
                className="absolute inset-0 bg-[#00343380] 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
              >
                <div className="size-full flex justify-center items-center flex-col">
                  <h1 className="text-text-light font-figtree-bold text-2xl text-center w-70">
                    On-Site Septic Systems
                  </h1>

                  <Link
                    href={`/services/on-site-septic-systems`}
                    className="bg-white/30 backdrop-blur-md px-4 py-3 rounded-3xl 
                 text-text-light uppercase font-figtree-semibold 
                 flex items-center absolute bottom-10"
                  >
                    View
                    <ArrowUpRight className="ml-6 size-4 text-text-light" />
                  </Link>
                </div>
              </div>
            </div>
            <Link href={`/services/on-site-septic-systems`}>
              <div className="mt-4 uppercase text-white font-figtree-bold text-sm flex items-center justify-center hover:underline cursor-pointer">
                On-Site Septic Systems
                <ArrowUpRight className="ml-2 size-4 text-text-light" />
              </div>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center  lg:w-full">
          <div className={`w-[95vw] lg:w-[35vw] group`}>
            <div className={`relative w-full h-[80vw] lg:h-[38vw]`}>
              <div className="relative size-full opacity-90">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1764470559742-4da3b17e7e7e?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={"Public Water Systems"}
                  className="object-cover"
                  fill
                />
              </div>
              <div
                className="absolute inset-0 bg-[#00343380] 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
              >
                <div className="size-full flex justify-center items-center flex-col">
                  <h1 className="text-text-light font-figtree-bold text-2xl text-center w-70">
                    Public Water Systems
                  </h1>

                  <Link
                    href={`/services/public-water-systems`}
                    className="bg-white/30 backdrop-blur-md px-4 py-3 rounded-3xl 
                 text-text-light uppercase font-figtree-semibold 
                 flex items-center absolute bottom-10"
                  >
                    View
                    <ArrowUpRight className="ml-6 size-4 text-text-light" />
                  </Link>
                </div>
              </div>
            </div>
            <Link href={`/services/public-water-systems`}>
              <div className="mt-4 uppercase text-white font-figtree-bold text-sm flex items-center justify-center hover:underline cursor-pointer">
                Public Water Systems
                <ArrowUpRight className="ml-2 size-4 text-text-light" />
              </div>
            </Link>
          </div>
          <div className="relative lg:absolute lg:w-fit lg:right-[2vw] h-full w-full flex flex-col justify-center items-center">
            <div className="text-white my-20 text-4xl lg:text-5xl [&_span]:font-playfair-italic w-70 lg:w-80 text-center flex flex-col items-center gap-6">
              <h1>
                Want to <span>explore more</span> services?
              </h1>
              <Link href={"/services"}>
                  <div className="text-text-light border border-text-light size-9 rounded-full flex justify-center items-center">
                <ArrowUpRight className="size-5.5" />
              </div>
              </Link>
            </div>
            </div>
        </div>
      </div>

      {/* This section will only be visible on smaller screens */}
      <div className="lg:hidden mt-25 w-full flex items-center justify-center">
        <div className="relative flex flex-col justify-center items-center  lg:w-full">
          <div className={`w-[95vw] lg:w-[35vw] group`}>
              <div className="relative w-full h-[80vw] lg:h-[38vw] opacity-90 rounded-2xl overflow-hidden">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1764470559742-4da3b17e7e7e?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={"Public Water Systems"}
                  className="object-cover"
                  fill
                />
              </div>
            <Link href={`/services/public-water-systems`}>
              <div className="mt-4 uppercase text-white font-figtree-bold text-sm flex items-center justify-center hover:underline cursor-pointer">
                Public Water Systems
                <ArrowUpRight className="ml-2 size-4 text-text-light" />
              </div>
            </Link>
          </div>
          <div className="relative lg:absolute lg:w-fit lg:right-[2vw] h-full w-full flex flex-col justify-center items-center">
            <div className="text-white mt-5 py-10 text-4xl lg:text-5xl [&_span]:font-playfair-italic w-70 lg:w-80 text-center flex flex-col items-center gap-6">
              <h1>
                Want to <span>explore more</span> services?
              </h1>
              <Link href={"/services"}>
                  <div className="text-text-light border border-text-light size-9 rounded-full flex justify-center items-center">
                <ArrowUpRight className="size-5.5" />
              </div>
              </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
