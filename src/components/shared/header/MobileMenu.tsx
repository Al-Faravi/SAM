"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "./Navbar";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="min-[1120px]:hidden">
      
      {/* Hamburger Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="relative z-[60] flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border-[1.5px] border-line/70 text-ink transition-colors focus:outline-none active:bg-card"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* 
        ⭐️ CSS Backdrop-Blur Bug Fix: 
        'fixed' এর পরিবর্তে 'absolute' এবং হাইট 'calc(100vh-74px)' ব্যবহার করা হয়েছে, 
        যাতে ন্যাভবার ব্লার হলেও মেনু স্ক্রিনের নিচে গায়েব না হয়ে যায়। 
      */}
      <div 
        className={`absolute left-0 top-[74px] z-50 h-[calc(100vh-74px)] w-full overflow-hidden transition-all duration-[350ms] ${
          isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
        }`}
      >
        
        {/* Overlay Background */}
        <div 
          className={`absolute inset-0 bg-ink/20 backdrop-blur-sm transition-opacity duration-[350ms] ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Right Drawer */}
        <div 
          className={`absolute bottom-0 right-0 top-0 flex w-[min(320px,86vw)] flex-col overflow-y-auto border-l border-line bg-paper px-6 py-6 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transition-transform duration-[350ms] ease-[cubic-bezier(0.2,0.8,0.3,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full py-[0.7rem] font-body text-[1.05rem] font-medium transition-colors ${
                    isActive ? "text-red" : "text-ink hover:text-green"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile CTA */}
          <Link 
            href="/#contact" 
            onClick={() => setIsOpen(false)}
            className="mt-6 flex w-full justify-center rounded-full bg-green py-3.5 font-body text-[15px] font-bold text-white transition-colors hover:bg-greendeep active:scale-95"
          >
            যোগ দিন
          </Link>
        </div>

      </div>
    </div>
  );
}