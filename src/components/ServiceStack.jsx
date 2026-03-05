'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

// 1. Mock Data based on the video content
const projects = [
  {
    title: "Design Consultation",
    description: "We help quickly validate existing ideas for developing green spaces or serve as a starting point for creating well-matched designs.",
    src: "https://images.unsplash.com/photo-1598902168968-356a87799425?q=80&w=2070&auto=format&fit=crop", // Replace with your image
    link: "#",
    color: "#BBACAF"
  },
  {
    title: "Concept for Green Area Planning",
    description: "A functional layout reflecting the style (plantings, pond, paths, stones, etc.) with specified plant types.",
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2232&auto=format&fit=crop",
    link: "#",
    color: "#977F6D"
  },
  {
    title: "Plant Composition & Arrangement",
    description: "Arrangement of planting beds, lawns, hedges, planters, etc., as well as indicating the types of plantings (shrubs, trees, perennials).",
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2069&auto=format&fit=crop",
    link: "#",
    color: "#C2491D"
  },
  {
    title: "Supervision Over Implementation",
    description: "Recommending specialists for sourcing local stones and bonsai plants, supervising on-site implementation.",
    src: "https://images.unsplash.com/photo-1621264448270-9ef00e88a935?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "#88A28D"
  }
];

export default function ServiceStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <main ref={container} className="relative mt-[10vh]">
      {projects.map((project, i) => {
        // Calculate dynamic scale to create the "depth" effect
        // The last card shouldn't scale down, so we keep it at 1
        const targetScale = 1 - ((projects.length - i) * 0.05); 
        return (
          <Card 
            key={i} 
            i={i} 
            {...project} 
            progress={scrollYProgress} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale} 
          />
        );
      })}
    </main>
  );
}

const Card = ({ i, title, description, src, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // Animation 1: The card scales down as it travels up the stack
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative -top-[25%] h-125 w-150 rounded-md p-12 origin-top"
      >
        {/* Card Background Layer (for color) */}
        <div className="absolute inset-0 bg-white rounded-md border border-gray-200 shadow-xl" />
        {/* Content Layout */}
        <div className="relative z-10 flex h-full gap-12">
          
          {/* Left: Image Box */}
          <div className="w-[40%] relative h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full relative">
               <Image 
                fill
                src={src}
                alt="image"
                className="object-cover"
               />
            </motion.div>
          </div>

          {/* Right: Text Content */}
          <div className="w-[60%] flex flex-col justify-between py-4">
            <div>
                <h2 className="text-4xl font-serif mb-6 text-[#1A1A1A]">{title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
            </div>
            
            <span className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium cursor-pointer hover:underline">
              More 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}