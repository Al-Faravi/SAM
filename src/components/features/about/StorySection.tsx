"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Plus } from "lucide-react";

const accordionData = [
  {
    id: "vision",
    enTitle: "Vision",
    bnTitle: "ভিশন",
    content: (
      <p className="font-body text-[15px] leading-relaxed text-inksoft">
        একটি দারিদ্র্যমুক্ত, শতভাগ শিক্ষিত এবং পরিবেশবান্ধব মালিপাথর গ্রাম গড়ে তোলা, যা সমগ্র বাংলাদেশের জন্য একটি দৃষ্টান্ত হিসেবে কাজ করবে। আমরা চাই আমাদের তরুণেরা শুধু গ্রামের নয়, বরং দেশের সম্পদে পরিণত হোক।
      </p>
    ),
  },
  {
    id: "mission",
    enTitle: "Mission",
    bnTitle: "মিশন",
    content: (
      <p className="font-body text-[15px] leading-relaxed text-inksoft">
        মালিপাথর গ্রামের প্রতিটি শিক্ষার্থীকে আধুনিক শিক্ষায় উৎসাহিত করা, ঝরে পড়া রোধ করা এবং তাদের ক্যারিয়ার গঠনে সঠিক দিকনির্দেশনা প্রদান করা। সামাজিক দায়বদ্ধতা থেকে রক্তদান, বৃক্ষরোপণ এবং অসহায় মানুষের পাশে দাঁড়ানো।
      </p>
    ),
  },
  {
    id: "objectives",
    enTitle: "Objectives",
    bnTitle: "লক্ষ্য",
    content: (
      <ul className="flex flex-col gap-3 font-body text-[15px] text-inksoft">
        <li className="flex items-start gap-3 before:mt-[7px] before:block before:h-[6px] before:w-[6px] before:shrink-0 before:bg-red">
          শিক্ষার্থীদের জন্য সঠিক ক্যারিয়ার গাইডলাইন ও মেন্টরশিপ নিশ্চিত করা।
        </li>
        <li className="flex items-start gap-3 before:mt-[7px] before:block before:h-[6px] before:w-[6px] before:shrink-0 before:bg-red">
          জরুরি রক্তের প্রয়োজনে একটি স্বয়ংসম্পূর্ণ ব্লাড ডোনার নেটওয়ার্ক তৈরি।
        </li>
        <li className="flex items-start gap-3 before:mt-[7px] before:block before:h-[6px] before:w-[6px] before:shrink-0 before:bg-red">
          গ্রামের পরিবেশ রক্ষায় নিয়মিত পরিচ্ছন্নতা ও বৃক্ষরোপণ কর্মসূচি পরিচালনা।
        </li>
      </ul>
    ),
  },
  {
    id: "values",
    enTitle: "Values",
    bnTitle: "মূল্যবোধ",
    content: (
      <div className="flex flex-wrap gap-2 pt-1">
        {["Unity", "Integrity", "Empathy", "Responsibility", "Transparency"].map((val, idx) => (
          <span 
            key={idx} 
            className="rounded-pill bg-green/10 px-3 py-1 font-body text-[13px] font-bold tracking-wide text-green"
          >
            {val}
          </span>
        ))}
      </div>
    ),
  },
];

export default function StorySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-paper py-[40px] lg:py-[70px]">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        
        {/* Layout Grid: 1.05fr / .95fr */}
        <div className="grid grid-cols-1 items-start gap-[40px] lg:grid-cols-[1.05fr_.95fr] lg:gap-[64px]">
          
          {/* Left: Story & Quote */}
          <div className="flex flex-col">
            
            {/* Section Header */}
            <div className="mb-8 flex flex-col">

              <span className="mb-1 font-body text-[0.72rem] font-bold uppercase tracking-[0.24em] text-red">
                About SAM
              </span>
              <h2 className="font-heading text-[30.4px] font-bold leading-tight text-ink lg:text-[2.2rem] [&_br]:hidden lg:[&_br]:block">
                আমাদের গল্প
              </h2>
            </div>

            {/* Paragraphs */}
            <p className="mb-[1.1rem] font-body text-[15px] leading-relaxed text-inksoft">
              প্রায় ২০১৭–২০১৮ সালের দিকে মালিপাথরের কিছু শিক্ষার্থী ও এলাকার বড় ভাইদের উদ্যোগে SAM-এর যাত্রা শুরু। উদ্দেশ্য একটাই — গ্রামের শিক্ষার্থীদের একত্র করে শিক্ষা আর সমাজের জন্য কিছু করা।
            </p>
            <p className="mb-[1.1rem] font-body text-[15px] leading-relaxed text-inksoft">
              স্কুলে পড়া ছাত্রছাত্রীদের সঠিক গাইডলাইন দেওয়া থেকে শুরু করে বৃক্ষরোপন, রক্তদান, দুর্যোগে ত্রাণ — প্রতিটি কার্যক্রম স্বেচ্ছাসেবীরা নিজেরাই আয়োজন করে। কোনো বেতন নেই, কোনো পদবির লোভ নেই — শুধু পাশে থাকার দায়িত্ব।
            </p>

            {/* Pull Quote */}
            <blockquote className="my-6 rounded-[0_16px_16px_0] border-l-[3px] border-red bg-card p-[1.2rem_1.5rem] shadow-sm">
              <p className="font-display text-[1.05rem] italic leading-relaxed text-ink">
                "SAM was initiated by a group of students and senior members from Malipathor around 2017–2018 with a vision of bringing students together for the betterment of their community."
              </p>
              <footer className="mt-3 font-heading text-[.9rem] font-semibold text-inksoft">
                — প্রতিষ্ঠাতা সদস্যবৃন্দ
              </footer>
            </blockquote>

            {/* Meta Row (Clock / Archive) */}
            <div className="mt-4 flex items-center gap-3 border-t border-line border-dashed pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card shadow-sm">
                <Clock className="h-[18px] w-[18px] text-green" />
              </div>
              <p className="font-body text-[13.5px] font-medium leading-relaxed text-inksoft">
                সাবেক সভাপতি ও সম্পাদকদের সম্পূর্ণ তালিকা <br className="sm:hidden" />
                <Link href="/archive" className="font-bold text-red transition-colors hover:underline">
                  Archive
                </Link>-এ সংরক্ষিত
              </p>
            </div>
            
          </div>

          {/* Right: Accordion */}
          <div className="flex w-full flex-col pt-2 lg:pt-0">
            <div className="border-t border-line">
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.id} className="border-b border-line">
                    
                    {/* Accordion Button */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="group flex w-full items-center justify-between p-[1.15rem_.2rem] text-left transition-colors hover:bg-black/[0.02]"
                    >
                      <div className="flex flex-col">
                        <span className={`font-body text-[.72rem] font-bold uppercase tracking-[.2em] transition-colors ${isOpen ? "text-red" : "text-inksoft"}`}>
                          {item.enTitle}
                        </span>
                        <span className={`font-heading text-[1.08rem] font-semibold transition-colors ${isOpen ? "text-red" : "text-ink"}`}>
                          {item.bnTitle}
                        </span>
                      </div>
                      
                      <div className="shrink-0 p-2">
                        <Plus 
                          className={`h-[19px] w-[19px] transition-transform duration-400 ease-in-out ${isOpen ? "rotate-45 text-red" : "text-inksoft group-hover:text-ink"}`} 
                          strokeWidth={2.5}
                        />
                      </div>
                    </button>
                    
                    {/* Accordion Body (Grid transition for smooth height animation) */}
                    <div 
                      className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-[.2rem] pb-[1.5rem] pt-2">
                          {item.content}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}