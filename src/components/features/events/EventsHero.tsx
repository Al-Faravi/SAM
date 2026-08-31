import { CalendarRange } from "lucide-react";

export default function EventsHero() {
  return (
    <section className="bg-greendeep py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center px-4 text-center md:px-8">
        
        {/* Icon & Label */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold shadow-inner backdrop-blur-md">
            <CalendarRange className="h-8 w-8" />
          </div>
          <span className="font-body text-[0.75rem] font-bold uppercase tracking-[0.2em] text-gold">
            Our Campaigns
          </span>
        </div>

        {/* Title & Description */}
        <h1 className="mb-6 font-display text-3xl font-bold leading-tight text-white md:text-5xl lg:text-[3.5rem]">
          আমাদের <span className="italic text-green-400">কার্যক্রম</span> ও ইভেন্ট
        </h1>
        <p className="max-w-2xl font-body text-[15px] leading-relaxed text-white/70 md:text-lg">
          মালিপাথর গ্রামের উন্নয়ন ও সাধারণ মানুষের কল্যাণে SAM-এর উদ্যোগে আয়োজিত বিভিন্ন সামাজিক, শিক্ষামূলক এবং স্বেচ্ছাসেবী কার্যক্রমের গ্যালারি।
        </p>

      </div>
    </section>
  );
}