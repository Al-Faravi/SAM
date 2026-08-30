"use client";

import { useState } from "react";
import { GraduationCap, TreePine, Droplets, HeartHandshake, Flag, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "০১",
    enTitle: "Education",
    bnTitle: "শিক্ষা ও গাইডলাইন",
    icon: GraduationCap,
    eyebrow: "Education & Guidance",
    heading: "শিক্ষার্থীদের জন্য সঠিক দিকনির্দেশনা",
    desc: "স্টুডেন্ট গাইডেন্স, ক্যারিয়ার আড্ডা, স্কলারশিপ ইনফরমেশন এবং অলিম্পিয়াড আয়োজনের মাধ্যমে শিক্ষার্থীদের মেধা বিকাশে সহায়তা করা।",
    chips: ["Olympiad", "Career Guidance", "Mentorship"],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "০২",
    enTitle: "Environment",
    bnTitle: "পরিবেশ ও প্রকৃতি",
    icon: TreePine,
    eyebrow: "Green Environment",
    heading: "সবুজ ও বাসযোগ্য গ্রাম গড়ার প্রত্যয়",
    desc: "বৃক্ষরোপণ কর্মসূচি, পরিচ্ছন্নতা অভিযান এবং পরিবেশ সচেতনতা বৃদ্ধির মাধ্যমে একটি সবুজ ও সুন্দর গ্রাম গড়ে তোলা।",
    chips: ["Tree Plantation", "Clean-up", "Awareness"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "০৩",
    enTitle: "Blood & Healthcare",
    bnTitle: "রক্ত ও স্বাস্থ্য",
    icon: Droplets,
    eyebrow: "Health & Support",
    heading: "জরুরি রক্তদান ও স্বাস্থ্য সুরক্ষা",
    desc: "জরুরি রক্তের প্রয়োজনে ডোনার ম্যানেজমেন্ট, ইমার্জেন্সি সাপোর্ট এবং স্বাস্থ্য সচেতনতামূলক ক্যাম্পেইন পরিচালনা করা।",
    chips: ["Blood Network", "Health Camp", "Emergency"],
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "০৪",
    enTitle: "Humanitarian",
    bnTitle: "মানবিক সহায়তা",
    icon: HeartHandshake,
    eyebrow: "Social Welfare",
    heading: "অসহায় মানুষদের পাশে দাঁড়ানো",
    desc: "বন্যা বা দুর্যোগে ত্রাণ বিতরণ, শীতবস্ত্র প্রদান এবং অসহায় মানুষদের পাশে দাঁড়ানোর মাধ্যমে সামাজিক দায়বদ্ধতা পালন।",
    chips: ["Relief", "Winter Clothes", "Donation"],
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "০৫",
    enTitle: "National & Cultural",
    bnTitle: "জাতীয় ও সাংস্কৃতিক",
    icon: Flag,
    eyebrow: "Heritage & Culture",
    heading: "জাতীয় দিবস ও সুস্থ সংস্কৃতির চর্চা",
    desc: "স্বাধীনতা দিবস, বিজয় দিবস, আন্তর্জাতিক মাতৃভাষা দিবস উদযাপনসহ গ্রামে সুস্থ সাংস্কৃতিক চর্চার প্রসার ঘটানো।",
    chips: ["Victory Day", "Cultural Events", "Heritage"],
    image: "https://images.unsplash.com/photo-1596414605929-e85d9cbfd013?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];
  const Icon = activeCategory.icon;

  return (
    <section className="bg-paper2 py-16 lg:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center lg:mb-16 lg:text-left">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl lg:text-[2.5rem]">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-heading text-lg font-medium text-inksoft lg:mx-0">
            শিক্ষা, মানবসেবা এবং সামাজিক উন্নয়নের মাধ্যমে আমরা আমাদের কমিউনিটিকে এগিয়ে নেওয়ার চেষ্টা করছি।
          </p>
        </div>

        {/* Main Grid: Mobile 1-col / Desktop 4.1fr_7.9fr */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[4.1fr_7.9fr] lg:gap-[56px]">
          
          {/* Left: Category Menu (Mobile: Horizontal Scroll, Desktop: Vertical Stack) */}
          <div className="flex w-full snap-x snap-mandatory overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:overflow-visible lg:pb-0 lg:snap-none">
            {categories.map((item, index) => {
              const isActive = index === activeIndex;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative mr-3 flex shrink-0 snap-center items-center gap-3 rounded-[14px] border p-[12px_16px] text-left transition-all duration-300 lg:mr-0 lg:mb-[.35rem] lg:gap-4 lg:p-[17px_18px] ${
                    isActive 
                      ? "border-line bg-card shadow-[0_10px_26px_-18px_rgba(18,43,32,0.4)]" 
                      : "border-transparent bg-transparent hover:bg-black/5"
                  }`}
                >
                  {/* Indicator Bar & Number */}
                  <div className="flex shrink-0 items-center gap-2">
                    <div 
                      className={`h-[2px] bg-red transition-all duration-300 ${
                        isActive ? "w-[12px] lg:w-[22px]" : "w-0"
                      }`} 
                    />
                    <span 
                      className={`font-display text-[.85rem] italic lg:text-[.9rem] ${
                        isActive ? "font-bold text-red" : "text-inksoft"
                      }`}
                    >
                      {item.id}
                    </span>
                  </div>

                  {/* Labels (Mobile-এ nowrap করে এক লাইনে রাখা হয়েছে) */}
                  <div className="flex flex-col whitespace-nowrap">
                    <span className="font-body text-[.64rem] font-bold uppercase tracking-[.2em] text-inksoft">
                      {item.enTitle}
                    </span>
                    <span className={`font-heading text-base font-semibold transition-colors lg:text-[1.12rem] ${isActive ? "text-ink" : "text-inksoft"}`}>
                      {item.bnTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Panel */}
          {/* key={activeCategory.id} forces React to re-mount the div, triggering the fadeUp animation */}
          <div 
            key={activeCategory.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
          >
            {/* Panel Grid: Mobile 1-col / Desktop 1.08fr_0.92fr */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-[44px] lg:items-center">
              
              {/* Text Side (Mobile ও Desktop দুই জায়গাতেই আগে থাকবে) */}
              <div className="flex flex-col order-1">
                {/* Icon Box */}
                <div className="mb-6 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-green shadow-soft">
                  <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                
                <span className="mb-3 font-body text-[.72rem] font-bold uppercase tracking-[.24em] text-red">
                  {activeCategory.eyebrow}
                </span>
                
                <h3 className="mb-4 font-heading text-[clamp(1.5rem,2.4vw,1.9rem)] font-bold text-ink">
                  {activeCategory.heading}
                </h3>
                
                <p className="mb-8 font-body text-base leading-relaxed text-inksoft">
                  {activeCategory.desc}
                </p>
                
                {/* Chips Row */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {activeCategory.chips.map((chip, i) => (
                    <span 
                      key={i} 
                      className="rounded-pill border border-line bg-card px-4 py-1.5 font-body text-[13px] font-medium text-ink shadow-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <Link 
                  href="/events" 
                  className="group flex w-max items-center font-body text-[15px] font-semibold text-green transition-colors hover:text-greendeep"
                >
                  Explore Category 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Image Side */}
              <div className="relative z-0 order-2 w-full">
                {/* 
                  Offset Double Frame (Desktop Only) 
                  Mobile এ display:none (Tailwind এর lg:after:absolute দিয়ে কন্ট্রোল করা হয়েছে)
                */}
                <div className="relative aspect-[4/3] w-full lg:after:absolute lg:after:inset-[16px_-16px_-16px_16px] lg:after:-z-10 lg:after:rounded-[18px] lg:after:border-[1.5px] lg:after:border-line-strong">
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={activeCategory.image} 
                    alt={activeCategory.bnTitle}
                    className="h-full w-full rounded-[18px] object-cover shadow-sm"
                  />
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}