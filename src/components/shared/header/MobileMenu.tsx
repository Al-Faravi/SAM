"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Student Corner", href: "/student-corner" },
    { name: "Members", href: "/members" },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="text-ink focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        
        <SheetContent side="right" className="w-[300px] bg-paper sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left font-display text-2xl font-bold text-green">
              SAM
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-lg font-medium text-ink transition-colors hover:text-green"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-4 flex flex-col gap-3">
              <Button className="w-full rounded-pill bg-green font-body font-semibold text-white hover:bg-greendeep">
                Join SAM
              </Button>
              <Button className="w-full rounded-pill bg-red font-body font-semibold text-white hover:bg-red/90">
                Donate
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}