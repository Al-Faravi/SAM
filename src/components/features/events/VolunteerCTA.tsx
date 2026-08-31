import Link from "next/link";
import { HeartHandshake, ArrowRight, ArrowUpRight } from "lucide-react";

export default function VolunteerCTA() {
  return (
    <section className="bg-paper2 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-8">
        
        {/* The Smart Floating Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-line bg-card px-6 py-16 text-center shadow-sm md:px-16 lg:px-24 lg:py-20">
          
          {/* Subtle Background Pattern & Accents for Professional Look */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] opacity-[0.03] [background-size:20px_20px]"></div>
          <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-green/10 blur-[80px]"></div>
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-red/10 blur-[80px]"></div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Smart Badge */}
            <div className="mb-6 flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 shadow-sm transition-shadow hover:shadow-md">
              <HeartHandshake className="h-4 w-4 text-red" />
              <span className="font-body text-[11px] font-bold uppercase tracking-wider text-inksoft">
                Join The Community
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-5 font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.75rem]">
              আমাদের সমাজ পরিবর্তনের <br className="hidden sm:block" /> 
              এই যাত্রায় <span className="italic text-green">সঙ্গী হোন</span>
            </h2>

            {/* Description */}
            <p className="mb-10 max-w-2xl font-body text-[15px] leading-relaxed text-inksoft md:text-base">
              SAM-এর প্রতিটি কার্যক্রমে স্বেচ্ছাসেবী হিসেবে যুক্ত হয়ে আপনিও পারেন মালিপাথরের উন্নয়নে সরাসরি ভূমিকা রাখতে। চলুন একসাথে একটি সুন্দর ভবিষ্যৎ গড়ি।
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              {/* Primary Action */}
              <Link 
                href="/contact" 
                className="group flex h-12 items-center justify-center gap-2 rounded-full bg-green px-8 font-body text-[14px] font-bold text-white transition-all hover:bg-greendeep hover:shadow-lg hover:shadow-green/20"
              >
                স্বেচ্ছাসেবক হোন 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              {/* Secondary Action */}
              <Link 
                href="/about" 
                className="group flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-transparent px-8 font-body text-[14px] font-bold text-ink transition-all hover:border-ink hover:bg-ink hover:text-white"
              >
                আমাদের সম্পর্কে জানুন 
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}