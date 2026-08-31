"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

// ⭐️ Standard Serial with Contact Link to Home Section
export const navLinks = [
  { name: "হোম", href: "/" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  { name: "কমিটি ও সদস্য", href: "/committee" },
  { name: "কার্যক্রম", href: "/events" },
  { name: "স্টুডেন্ট কর্নার", href: "/student-corner" },
  { name: "আর্কাইভ ও গ্যালারি", href: "/archive" },
  { name: "যোগাযোগ", href: "/#contact" }, // হোম পেজের কন্টাক্ট সেকশনের জন্য
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle Scroll state (>40px)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 flex h-[74px] w-full items-center transition-all duration-300 ${
        isScrolled 
          ? "border-b border-line bg-[#F6F1E5]/95 backdrop-blur-[12px]" 
          : "border-b border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1180px] items-center justify-between px-4 md:px-8">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full border border-line/60 bg-white shadow-sm">
            <Image 
              src="/sam_logo.png" 
              alt="SAM Logo" 
              fill 
              sizes="40px"
              className="object-contain p-[3px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display text-[1.25rem] font-bold leading-none text-ink">
              SAM
            </span>
            <span className="mt-[2px] font-body text-[0.6rem] font-bold uppercase tracking-[0.34em] text-inksoft">
              Malipathor
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Hidden on mobile/tablet, visible on min-[1120px] screens) */}
        <nav className="hidden items-center gap-5 min-[1120px]:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative py-2 font-body text-[0.9rem] font-medium transition-colors hover:text-ink ${
                  isActive ? "text-ink" : "text-inksoft"
                }`}
              >
                {link.name}
                {/* Active / Hover Underline Animation */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-red transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/#contact" className="hidden rounded-full bg-green px-6 py-2 font-body text-[14px] font-bold text-white transition-all hover:bg-greendeep hover:shadow-lg min-[1120px]:flex">
            যোগ দিন
          </Link>
          
          {/* Renders hamburger and drawer on <= 1120px */}
          <MobileMenu />
        </div>
        
      </div>
    </header>
  );
}