import { GraduationCap } from "lucide-react";

export default function StudentHero() {
  return (
    <section className="relative overflow-hidden bg-greendeep py-16 lg:py-24">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-[80px]"></div>

      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center px-4 text-center md:px-8">
        
        {/* Icon & Label */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold shadow-inner backdrop-blur-md">
            <GraduationCap className="h-8 w-8" />
          </div>
          <span className="font-body text-[0.75rem] font-bold uppercase tracking-[0.2em] text-gold">
            Student Portal
          </span>
        </div>

        {/* Title & Description */}
        <h1 className="mb-6 font-display text-3xl font-bold leading-tight text-white md:text-5xl lg:text-[3.5rem]">
          শিক্ষার্থীদের জন্য <span className="italic text-green-400">বিশেষ প্ল্যাটফর্ম</span>
        </h1>
        <p className="max-w-2xl font-body text-[15px] leading-relaxed text-white/70 md:text-lg">
          মালিপাথরের প্রতিটি শিক্ষার্থীর স্বপ্ন পূরণে সঠিক দিকনির্দেশনা, স্কলারশিপ এবং ক্যারিয়ার সহায়তার জন্য SAM-এর এই বিশেষ উদ্যোগ।
        </p>

      </div>
    </section>
  );
}