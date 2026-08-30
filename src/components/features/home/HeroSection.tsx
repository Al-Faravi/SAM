import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper pt-16 pb-20 md:pt-24 lg:pt-32 lg:pb-28">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-12 px-4 md:px-8 lg:flex-row lg:gap-20">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Eyebrow / Label */}
          <span className="mb-5 inline-block font-body text-[0.72rem] font-bold uppercase tracking-[0.24em] text-red">
            একটি গ্রাম • একটি সংগঠন • একটি স্বপ্ন
          </span>
          
          {/* Main Headline (Fraunces) */}
          <h1 className="mb-4 font-display text-5xl font-bold leading-[1.1] text-ink md:text-6xl lg:text-[clamp(3rem,4.5vw,4.5rem)]">
            Student Association of <br />
            <span className="text-green italic">Malipathor</span>
          </h1>

          {/* English Subtitle */}
          <p className="mb-6 font-display text-[1.1rem] font-medium italic leading-relaxed text-red md:text-lg">
            Empowering Students. Serving Our Community. Building Our Future.
          </p>
          
          {/* Subheadline (Noto Serif Bengali) */}
          <p className="mx-auto mb-10 max-w-2xl font-heading text-lg font-medium leading-relaxed text-inksoft lg:mx-0 md:text-xl">
            মালিপাথরের শিক্ষার্থী ও তরুণদের ঐক্যবদ্ধ করে শিক্ষা, মানবসেবা ও সামাজিক উন্নয়নে কাজ করা একটি স্বেচ্ছাসেবী সংগঠন।
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button 
              asChild 
              size="lg" 
              className="w-full rounded-pill bg-green px-8 font-body text-base font-semibold text-white shadow-soft hover:bg-greendeep sm:w-auto"
            >
              <Link href="/about">
                SAM সম্পর্কে <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full rounded-pill border-[1.5px] border-line-strong bg-transparent px-8 font-body text-base font-semibold text-ink hover:bg-paper2 sm:w-auto"
            >
              <Link href="/events">আমাদের কার্যক্রম</Link>
            </Button>
          </div>
        </div>
        
        {/* Right: Visual / Image */}
        <div className="relative w-full max-w-lg flex-1 lg:max-w-none">
          {/* Decorative Background Shape */}
          <div className="absolute -inset-4 rotate-3 rounded-[30px] bg-paper2/60 transition-transform hover:rotate-6 duration-700"></div>
          
          {/* Main Image Frame */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-line bg-card shadow-soft">
            {/* 
              TODO: পরবর্তীতে এখানে মালিপাথর গ্রাম বা স্কুলের আসল ছবি দেবে। 
            */}
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
              alt="Malipathor Village Community" 
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl border border-line bg-paper/95 px-4 py-3 shadow-sm backdrop-blur">
              <div className="flex items-center justify-center rounded-full bg-red/10 p-2 text-red">
                <Heart className="h-5 w-5 fill-current" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-ink">250+ Members</p>
                <p className="font-body text-xs font-medium text-inksoft">Working together</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}