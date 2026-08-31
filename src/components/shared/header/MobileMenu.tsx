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
    <div className="lg:hidden">
      
      {/* Hamburger Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border-[1.5px] border-line/70 text-ink transition-colors focus:outline-none active:bg-card"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-[74px] z-40 bg-ink/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Right Drawer */}
      <div 
        className={`fixed bottom-0 right-0 top-[74px] z-50 flex w-[min(320px,86vw)] flex-col border-l border-line bg-paper px-6 py-6 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transition-transform duration-[350ms] ease-[cubic-bezier(0.2,0.8,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-[105%]"
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
                className={`w-full border-b border-line/40 py-[0.7rem] font-body text-[1.05rem] font-medium transition-colors last:border-0 ${
                  isActive ? "text-red" : "text-ink hover:text-green"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        {/* Mobile CTA */}
        <button className="mt-8 w-full rounded-full bg-green py-3.5 font-body text-[15px] font-bold text-white transition-colors hover:bg-greendeep active:scale-95">
          যোগ দিন
        </button>
      </div>

    </div>
  );
}