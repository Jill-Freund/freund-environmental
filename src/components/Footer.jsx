"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#042120] pb-5">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-15">
        <div className="text-lg font-medium leading-tight px-5 py-15 lg:w-2/3">
        <div className="text-[#e2ffc2] lg:flex lg:justify-between lg:items-end lg:pb-12">
          <h1 className="font-figtree-regular text-4xl lg:text-5xl w-[80%] lg:w-[55%]">
            Let’s Protect {" "}
              <span className="font-playfair-italic">Your Water</span> Together
          </h1>
          <Link href={"/contact"}>
            <button className="bg-[#e2ffc2] text-[#003433] flex justify-center items-center gap-5 text-sm font-bold uppercase px-4 py-2.5 rounded-4xl my-10 lg:my-0">
              <h1>Send Inquiry</h1>
              <ArrowUpRight className="size-3.5" />
            </button>
          </Link>
        </div>
        <div className="border-b-[0.8] border-[#e2ffc2] opacity-30"></div>
        <div className="text-white font-figtree-medium">
          <div className="text-xl mt-10">
            <a href="mailto:jeff@freundenvironmental.com">
              <h1>jeff@freundenvironmental.com</h1>
            </a>
            <h2>Oregon, USA</h2>
          </div>
          <div className="mt-12 flex items-end justify-between">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <Link
                    href={link.link}
                    className={`block text-lg ${
                      pathname === link.link ? "text-[#e2ffc2]" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
            <a href="tel:+1-541-480-1657">
              <div className="flex items-center text-xs text-[#e2ffc2]">
                541-480-1657
                <ArrowUpRight className="ml-2 size-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-dvw h-[90vw] lg:w-1/3 lg:h-130">
        <Image
          src={"/assets/footer.jpg"}
          alt="footer"
          className="object-cover"
          fill
        />
      </div>
      </div>
      <div className="text-sm text-center text-[#e2ffc2] lg:mt-8">
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
  );
};

export default Footer;
