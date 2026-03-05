"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  // Refs
  const containerRef = useRef(null);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const navLinksRef = useRef([]);
  const navBasedRef = useRef(null);

  // Timeline Reference
  const tl = useRef();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  // Initialize GSAP Timeline for Mobile Menu
  useGSAP(
    () => {
      gsap.set(navBasedRef.current, { opacity: 0 });
      gsap.set(menuRef.current, { xPercent: 100 });
      // Create a timeline that is paused by default
      tl.current = gsap.timeline({ paused: true });

      tl.current
        // 1. Slide down the menu background
        .fromTo(
          menuRef.current,
          { xPercent: 100 },
          {
            xPercent: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
        )
        // 2. Animate Links In
        .from(
          navLinksRef.current,
          {
            opacity: 0,
            duration: 0.3,
            delay: 0.3,
            stagger: 0.06,
            ease: "power3.out",
          },
          "-=0.4",
        )
        // 3. Animate "Based in" text
        .to(
          navBasedRef.current,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
          },
          ">-0.1",
        );
    },
    { scope: containerRef },
  );

  // ScrollTrigger Animation for Navbar Hide/Show
  useGSAP(() => {
    let lastScroll = 0;

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        
        // Check if scrolled more than 10% of page height
        const scrollThreshold = window.innerHeight * 0.1;
        
        if (currentScroll < scrollThreshold) {
          // At the top - show navbar
          gsap.to(navbarRef.current, {
            yPercent: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        } else if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
          // Scrolling down - hide navbar
          gsap.to(navbarRef.current, {
            yPercent: -100,
            duration: 0.6,
            ease: "power3.inOut",
          });
        } else if (currentScroll < lastScroll) {
          // Scrolling up - show navbar
          gsap.to(navbarRef.current, {
            yPercent: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        }
        
        lastScroll = currentScroll;
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Handle Toggle State for Mobile Menu
  useEffect(() => {
    if (tl.current) {
      if (toggle) {
        tl.current.play();
        // Disable scroll when menu is open
        document.body.style.overflow = 'hidden';
      } else {
        tl.current.reverse();
        // Re-enable scroll when menu is closed
        document.body.style.overflow = 'unset';
      }
    }

    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [toggle]);

  return (
    <div ref={containerRef}>
      {/* HEADER / NAVBAR */}
      <div 
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-2xl"
      >
        <nav className="py-3 md:py-4 px-5 lg:px-16 xl:px-28 transition-colors duration-300 flex items-center justify-between shadow-md">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link
              href={"/"}
              className="text-2xl font-figtree-regular z-50 relative md:w-1/6"
              onClick={() => setToggle(false)}
            >
              <div className="relative w-22 h-18 lg:w-26 lg:h-20">
                <Image src={"/logo.png"} alt="Freund" fill />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:justify-center text-lg font-figtree-semibold gap-5 [&>a]:uppercase md:w-4/6">
              <Link
                href={"/about"}
                className={`${
                  pathname === "/about"
                    ? "text-text-dark underline decoration-2 underline-offset-4"
                    : "text-text-dark"
                }`}
              >
                About
              </Link>
              <Link
                href={"/services"}
                className={`${
                  pathname === "/services"
                    ? "text-text-dark underline decoration-2 underline-offset-4"
                    : "text-text-dark"
                }`}
              >
                Services
              </Link>
              <Link
                href={"/contact"}
                className={`${
                  pathname === "/contact"
                    ? "text-text-dark underline decoration-2 underline-offset-4"
                    : "text-text-dark"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="md:w-1/6 md:flex md:justify-end">
              <div className="bg-bg-dark w-fit text-text-light justify-center items-center gap-5 text-sm font-bold px-4 py-2.5 rounded-4xl hidden md:flex">
                <a href="tel:+1-541-480-1657">
                  <div className="flex items-center text-xs">
                    541-480-1657
                    <ArrowUpRight className="ml-2 size-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div className="z-50 relative md:hidden">
            <button
              onClick={() => setToggle(!toggle)}
              className="flex flex-col justify-center items-center w-10 h-10 border border-text-dark rounded-full md:hidden gap-1 cursor-pointer"
            >
              {/* Top Line */}
              <span
                className={`block w-5 h-0.5 bg-text-dark rounded transition-transform duration-300 ease-in-out ${
                  toggle ? "rotate-45 translate-y-1.5" : ""
                }`}
              />

              {/* Middle Line (Hidden on toggle) */}
              <span
                className={`block w-5 h-0.5 bg-text-dark rounded transition-opacity duration-300 ${
                  toggle ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Bottom Line */}
              <span
                className={`block w-5 h-0.5 bg-text-dark rounded transition-transform duration-300 ease-in-out ${
                  toggle ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </nav>
        <div className="border-b-[0.8] border-text-light opacity-30 mx-5 md:mx-8 xl:mx-10"></div>
      </div>

      {/* FULL SCREEN MENU OVERLAY */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-screen h-dvh bg-text-dark z-40 flex flex-col justify-between pt-32 pb-10 px-5 md:hidden"
      >
        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <div key={link.name} className="overflow-hidden">
              <Link
                href={link.link}
                ref={(el) => (navLinksRef.current[index] = el)}
                onClick={() => setToggle(false)}
                className={`block font-figtree-medium text-4xl ${
                  pathname === link.link ? "text-text-light" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div
          ref={navBasedRef}
          className="text-text-light text-lg font-medium leading-tight"
        >
          <div className="">
            <h1 className="font-figtree-regular text-4xl w-[80%]">
              Let’s Protect {" "}
              <span className="font-playfair-italic">Your Water</span> Together
            </h1>
            <Link href={"/contact"}>
              <button className="bg-text-light text-bg-dark flex justify-center items-center gap-5 text-sm font-bold uppercase px-4 py-2.5 rounded-4xl my-10">
                <h1>Send Inquiry</h1>
                <ArrowUpRight className="size-3.5" />
              </button>
            </Link>
            <div className="border-b-[0.8] border-text-light opacity-30"></div>
            <div className="mt-10 flex justify-between">
              <a href="tel:+1-541-480-0386">
                <div className="flex items-center text-xs">
                  541-480-0386
                  <ArrowUpRight className="ml-2 size-4" />
                </div>
              </a>
              <div className="text-xs text-right">
                <h1>&copy; 2026 Freund</h1>
                <h1>
                  Developed by{" "}
                  <a
                    href="https://vishalmishra.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Vishal
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;