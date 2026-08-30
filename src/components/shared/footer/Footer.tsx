import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  // বাংলা বছর ক্যালকুলেশন
  const currentYear = new Date().getFullYear();
  const bengaliYear = (currentYear - 593).toLocaleString("bn-BD", { useGrouping: false });

  return (
    <footer className="bg-greendeep pt-[70px]">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        
        {/* Main Grid Layout: 4fr 2fr 2fr 3fr */}
        <div className="grid grid-cols-1 gap-11 pb-14 sm:grid-cols-2 lg:grid-cols-[4fr_2fr_2fr_3fr]">
          
          {/* Col 1: Brand, Desc & Socials */}
          <div className="flex flex-col">
            <Link href="/" className="mb-5 flex items-center gap-3">
              {/* SAM Logo */}
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white p-1">
                <Image 
                  src="/sam_logo.png" 
                  alt="SAM Logo" 
                  fill 
                  sizes="44px"
                  className="object-contain p-1"
                />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                SAM
              </span>
            </Link>
            <p className="mb-7 max-w-[34ch] font-body text-[.9rem] leading-relaxed text-white opacity-65">
              মালিপাথরের শিক্ষার্থী ও তরুণদের ঐক্যবদ্ধ করে শিক্ষা, মানবসেবা ও সামাজিক উন্নয়নে কাজ করা একটি স্বেচ্ছাসেবী সংগঠন।
            </p>
            
            {/* Social Circles (Custom SVGs) */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="group flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#F6F1E5]/30 transition-colors hover:bg-paper">
                <svg className="h-4 w-4 fill-white transition-colors group-hover:fill-green" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="group flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#F6F1E5]/30 transition-colors hover:bg-paper">
                <svg className="h-4 w-4 fill-white transition-colors group-hover:fill-green" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="group flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#F6F1E5]/30 transition-colors hover:bg-paper">
                <svg className="h-4 w-4 fill-white transition-colors group-hover:fill-green" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" aria-label="X (Twitter)" className="group flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#F6F1E5]/30 transition-colors hover:bg-paper">
                <svg className="h-3.5 w-3.5 fill-white transition-colors group-hover:fill-green" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="group flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#F6F1E5]/30 transition-colors hover:bg-paper">
                <svg className="h-4 w-4 fill-white transition-colors group-hover:fill-green" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Links */}
          <div className="flex flex-col">
            <h4 className="mb-6 font-display text-[.7rem] font-bold uppercase tracking-[.24em] text-gold">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3 font-body text-[.92rem] text-white">
              <Link href="/about" className="opacity-70 transition-all duration-300 hover:pl-1 hover:opacity-100">আমাদের সম্পর্কে</Link>
              <Link href="/events" className="opacity-70 transition-all duration-300 hover:pl-1 hover:opacity-100">কার্যক্রম</Link>
              <Link href="/members" className="opacity-70 transition-all duration-300 hover:pl-1 hover:opacity-100">সদস্য তালিকা</Link>
              <Link href="/student-corner" className="opacity-70 transition-all duration-300 hover:pl-1 hover:opacity-100">স্টুডেন্ট কর্নার</Link>
            </nav>
          </div>

          {/* Col 3: Legal / Support */}
          <div className="flex flex-col">
            <h4 className="mb-6 font-display text-[.7rem] font-bold uppercase tracking-[.24em] text-gold">
              Support
            </h4>
            <nav className="flex flex-col gap-3 font-body text-[.92rem] text-white">
              <Link href="/contact" className="opacity-70 transition-all duration-300 hover:pl-1 hover:opacity-100">যোগাযোগ</Link>
              <Link href="/donate" className="opacity-70 transition-all duration-300 hover:pl-1 hover:opacity-100">অনুদান</Link>
              <Link href="/privacy" className="opacity-70 transition-all duration-300 hover:pl-1 hover:opacity-100">প্রাইভেসি পলিসি</Link>
              <Link href="/terms" className="opacity-70 transition-all duration-300 hover:pl-1 hover:opacity-100">শর্তাবলী</Link>
            </nav>
          </div>

          {/* Col 4: Address */}
          <div className="flex flex-col">
            <h4 className="mb-6 font-display text-[.7rem] font-bold uppercase tracking-[.24em] text-gold">
              Address
            </h4>
            <div className="flex flex-col font-body text-[.92rem] leading-[2] text-white opacity-70">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1.5 h-4 w-4 shrink-0 text-red" />
                <span>শালধর মোহাম্মদ আলী উচ্চ বিদ্যালয়,<br />পরশুরাম, ফেনী, বাংলাদেশ।</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-red" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-red" />
                <span>info@sam-malipathor.org</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#F6F1E5]/15 py-[22px] text-center font-body text-[.82rem] text-white opacity-65 md:flex-row md:text-left">
          <span>&copy; {bengaliYear} Student Association of Malipathor.</span>
          <span className="hidden md:inline-block">Empowering Students. Serving Community.</span>
          <span>
            Developed by{" "}
            <a href="https://github.com/Al-Faravi" target="_blank" rel="noreferrer" className="font-bold hover:text-gold transition-colors">
              Al-Faravi
            </a>
          </span>
        </div>
        
      </div>
    </footer>
  );
}