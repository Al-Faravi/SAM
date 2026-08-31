"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const archiveData = [
  { year: "২০১৭", enYear: 2017, title: "সংগঠনের আত্মপ্রকাশ ও প্রথম উদ্যোগ", bullets: ["মালিপাথরের কয়েকজন তরুণের উদ্যোগে SAM-এর প্রতিষ্ঠা", "প্রথমবারের মতো গ্রামে বৃক্ষরোপণ কর্মসূচি পালন", "১০ জন সদস্য নিয়ে প্রাথমিক কমিটি গঠন"], img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" },
  { year: "২০১৮", enYear: 2018, title: "প্রথম শিক্ষাবৃত্তি ও সম্প্রসারণ", bullets: ["এসএসসি উত্তীর্ণ ৫ জন শিক্ষার্থীকে শিক্ষাবৃত্তি প্রদান", "গ্রামে প্রথমবারের মতো ক্যারিয়ার গাইডলাইন সেমিনার", "সদস্য সংখ্যা বেড়ে ৫০-এ উন্নীত"], img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
  { year: "২০১৯", enYear: 2019, title: "ব্লাড ডোনেশন ক্যাম্পেইন", bullets: ["ফ্রি ব্লাড গ্রুপিং ক্যাম্পেইন আয়োজন", "১০০ জন ডোনারের ডাটাবেজ তৈরি", "থ্যালাসেমিয়া সম্পর্কে সচেতনতা বৃদ্ধি"], img: "https://images.unsplash.com/photo-1615461065624-21b562ee5566?auto=format&fit=crop&q=80&w=800" },
  { year: "২০২০", enYear: 2020, title: "করোনা মহামারীতে সহায়তা", bullets: ["২০০টি পরিবারের মাঝে জরুরি খাদ্যসামগ্রী বিতরণ", "গ্রামে বিনামূল্যে মাস্ক ও স্যানিটাইজার সরবরাহ", "জরুরি স্বাস্থ্যসেবায় হটলাইন চালু"], img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&q=80&w=800" },
  { year: "২০২১", enYear: 2021, title: "লাইব্রেরি স্থাপন প্রকল্প", bullets: ["শিক্ষার্থীদের জন্য গ্রামে একটি ছোট লাইব্রেরি স্থাপন", "৫০০+ বই সংগ্রহ ও বিতরণ", "বই পড়ার অভ্যাস গড়তে বিশেষ প্রতিযোগিতা"], img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800" },
  { year: "২০২২", enYear: 2022, title: "আইটি ও দক্ষতা উন্নয়ন", bullets: ["মালিপাথর হাই স্কুলে বেসিক কম্পিউটার প্রশিক্ষণ", "ফ্রিল্যান্সিং সচেতনতা সেমিনার", "৫০ জন শিক্ষার্থীকে বিনামূল্যে আইটি প্রশিক্ষণ"], img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
  { year: "২০২৩", enYear: 2023, title: "বৃহৎ শীতবস্ত্র বিতরণ", bullets: ["৫০০টি অসহায় পরিবারের মাঝে কম্বল বিতরণ", "দিনব্যাপী ফ্রি মেডিকেল ক্যাম্প", "১০ জন বিশেষজ্ঞ চিকিৎসকের অংশগ্রহণ"], img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" },
  { year: "২০২৪", enYear: 2024, title: "সবুজ মালিপাথর প্রকল্প", bullets: ["গ্রামের রাস্তার দুই পাশে ১০০০ ফলজ গাছ রোপণ", "পরিচ্ছন্নতা ও ডেঙ্গু সচেতনতা অভিযান", "প্লাস্টিক বর্জ্য ব্যবস্থাপনায় নতুন উদ্যোগ"], img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
  { year: "২০২৫", enYear: 2025, title: "SAM এডুকেশনাল পোর্টাল", bullets: ["শিক্ষার্থীদের জন্য ডিজিটাল পোর্টাল উন্মোচন", "অনলাইন মেন্টরশিপ প্রোগ্রাম চালু", "মালিপাথরের ইতিহাসে প্রথম আইটি মেলা"], img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" },
  { year: "২০২৬", enYear: 2026, title: "ম্যাথ ও সায়েন্স অলিম্পিয়াড", bullets: ["১ম SAM ম্যাথ ও সায়েন্স অলিম্পিয়াড আয়োজন", "উপজেলার ৩০০+ শিক্ষার্থীর অংশগ্রহণ", "ভবিষ্যৎ বিজ্ঞানীদের জন্য বিশেষ ফান্ড গঠন"], img: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=800" },
];

export default function DigitalArchive() {
  const [activeYear, setActiveYear] = useState(archiveData[archiveData.length - 1]);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeNodeRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll active node to center (specifically for mobile snap)
  useEffect(() => {
    if (activeNodeRef.current && trackRef.current) {
      activeNodeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  }, [activeYear]);

  // Is Vintage (2017-2021)
  const isVintage = activeYear.enYear <= 2021;

  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        
        <div className="mb-12 text-center md:text-left">
          <span className="mb-2 inline-block font-body text-[0.72rem] font-bold uppercase tracking-[0.24em] text-red">
            History & Legacy
          </span>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">ডিজিটাল আর্কাইভ</h2>
        </div>

        {/* Timeline Track Wrapper */}
        <div className="relative mb-12 w-full overflow-hidden">
          {/* Edge-fade gradient for mobile scroll hint */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent lg:hidden"></div>
          
          <div 
            ref={trackRef}
            className="flex min-w-max snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          >
            {/* Connector Line inside track */}
            <div className="absolute left-[41px] right-[41px] top-[32px] -z-10 h-[2px] bg-line/70"></div>

            {archiveData.map((data) => {
              const isActive = activeYear.year === data.year;
              return (
                <button
                  key={data.year}
                  ref={isActive ? activeNodeRef : null}
                  onClick={() => setActiveYear(data)}
                  className="group flex min-w-[82px] snap-center flex-col items-center gap-3 outline-none"
                >
                  <span className={`font-display text-[1.05rem] transition-colors ${isActive ? "font-bold text-red" : "text-inksoft group-hover:text-ink"}`}>
                    {data.year}
                  </span>
                  {/* Dot */}
                  <div className={`relative flex h-[13px] w-[13px] items-center justify-center rounded-full border-[2.5px] bg-paper transition-colors ${isActive ? "border-red" : "border-inksoft group-hover:border-ink"}`}>
                    {isActive && <div className="h-1.5 w-1.5 rounded-full bg-red"></div>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Panel (Grid 7fr 5fr PC / 1-col Mobile) */}
        <div 
          key={activeYear.year} 
          className="grid animate-in fade-in slide-in-from-bottom-4 grid-cols-1 gap-8 rounded-[22px] bg-card p-[clamp(24px,4vw,40px)] shadow-sm duration-[450ms] lg:grid-cols-[7fr_5fr] lg:gap-11"
        >
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-2 font-display text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-none text-red opacity-20">
              {activeYear.year}
            </h2>
            <h3 className="mb-6 font-heading text-[1.4rem] font-bold text-ink md:text-[1.8rem]">
              {activeYear.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {activeYear.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 h-[7px] w-[7px] shrink-0 bg-red"></div>
                  <span className="font-body text-[15px] leading-relaxed text-inksoft md:text-[16px]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Content (4:3) with optional Vintage Filter */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] border border-line bg-paper2">
            <Image
              src={activeYear.img}
              alt={activeYear.title}
              fill
              className={`object-cover transition-all duration-700 ${isVintage ? "contrast-[.92] grayscale sepia-[.35]" : ""}`}
            />
            {isVintage && (
              <div className="absolute right-3 top-3 rounded bg-black/50 px-2 py-1 font-body text-[10px] uppercase tracking-widest text-white/90 backdrop-blur-sm">
                Vintage Record
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}