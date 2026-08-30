import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Student Corner', href: '/student-corner' },
    { name: 'Members', href: '/members' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-4 md:px-8">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
            <Image 
              src="/sam_logo.png" 
              alt="SAM Logo" 
              fill 
              className="object-contain p-1"
            />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-green hidden sm:block">
            SAM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-body text-[15px] font-medium text-inksoft transition-colors hover:text-green"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex rounded-pill bg-red px-6 font-body font-semibold text-white shadow-soft hover:bg-red/90">
            Donate
          </Button>
          <Button className="hidden md:flex rounded-pill bg-green px-6 font-body font-semibold text-white shadow-soft hover:bg-greendeep">
            Join SAM
          </Button>
          
          <MobileMenu />
        </div>
        
      </div>
    </header>
  );
}