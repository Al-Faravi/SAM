"use client";

import { useState } from "react";
import { ArrowUpRight, GraduationCap, MapPin, CalendarClock, Trophy } from "lucide-react";

const tabs = ["ক্যারিয়ার গাইডলাইন", "স্কলারশিপ ও বৃত্তি", "ভর্তি প্রস্তুতি", "আইটি ও দক্ষতা"];

const resourcesData = {
  "ক্যারিয়ার গাইডলাইন": [
    { id: 1, title: "এসএসসি পরবর্তী সঠিক বিভাগ নির্বাচন গাইড", type: "PDF Guide" },
    { id: 2, title: "বিজ্ঞান, মানবিক না বাণিজ্য? কোনটি তোমার জন্য?", type: "Article" },
    { id: 3, title: "ক্যারিয়ার আড্ডা: মালিপাথরের সফল মুখ", type: "Video Session" },
    { id: 4, title: "পলিটেকনিক নাকি সাধারণ শিক্ষা? বিস্তারিত আলোচনা", type: "Career Path" },
    { id: 5, title: "ভবিষ্যতের কর্মবাজার ও প্রয়োজনীয় স্কিলসেট", type: "Workshop Docs" },
  ],
  "স্কলারশিপ ও বৃত্তি": [
    { id: 6, title: "SAM মেধাবৃত্তি ২০২৬ এর প্রাথমিক রেজাল্ট", type: "Result" },
    { id: 7, title: "সরকারি ও বেসরকারি স্কলারশিপের তালিকা (আপডেটেড)", type: "Directory" },
    { id: 8, title: "ডাচ-বাংলা ব্যাংক শিক্ষাবৃত্তি আবেদনের নিয়মাবলি", type: "Guide" },
    { id: 9, title: "বিশ্ববিদ্যালয় পর্যায়ে বিনামূল্যে পড়ার সুযোগ", type: "Article" },
    { id: 10, title: "অসচ্ছল শিক্ষার্থীদের জন্য জরুরি শিক্ষা সহায়তা ফর্ম", type: "Application" },
  ],
  "ভর্তি প্রস্তুতি": [
    { id: 11, title: "বিশ্ববিদ্যালয় ভর্তি: প্রস্তুতি শুরু করার সঠিক সময়", type: "Guideline" },
    { id: 12, title: "ইঞ্জিনিয়ারিং ও মেডিকেল প্রস্তুতির পার্থক্য", type: "Comparison" },
    { id: 13, title: "ঢাবি, জাবি ও রাবি ভর্তি পরীক্ষার মানবণ্টন", type: "Syllabus" },
    { id: 14, title: "মেস বা হলে থাকার অভিজ্ঞতা ও সতর্কতা", type: "Lifestyle" },
    { id: 15, title: "ভর্তি পরীক্ষার্থীদের জন্য SAM-এর বিশেষ মডেল টেস্ট", type: "Exam Link" },
  ],
  "আইটি ও দক্ষতা": [
    { id: 16, title: "বেসিক কম্পিউটার কোর্স মডিউল (ফ্রি)", type: "Course Material" },
    { id: 17, title: "ফ্রিল্যান্সিং নাকি রিমোট জব? শুরু করবেন কীভাবে", type: "Workshop Video" },
    { id: 18, title: "ইংরেজিতে কথা বলার জড়তা কাটানোর উপায়", type: "Tips & Tricks" },
    { id: 19, title: "PowerPoint ও Excel এর প্রয়োজনীয় শর্টকাট", type: "Cheat Sheet" },
    { id: 20, title: "শিক্ষার্থীদের জন্য ই-মেইল লেখার সঠিক নিয়ম", type: "Professional" },
  ]
};

export default function StudentResources() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const currentList = resourcesData[activeTab as keyof typeof resourcesData] || [];

  return (
    <section className="bg-paper py-[40px] lg:py-[70px]">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        
        {/* Layout Grid: 7.4fr / 4.6fr */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[7.4fr_4.6fr] lg:gap-14">
          
          {/* ----- Left: Underline Tabs & Resource List ----- */}
          <div className="flex w-full flex-col">
            
            {/* Underline Tabs Container */}
            <div className="mb-6 flex flex-wrap border-b border-line">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-[1.3rem] py-[.7rem] font-heading text-[15.5px] font-semibold transition-colors ${
                      isActive 
                        ? "mb-[-1.5px] border-b-[2.5px] border-red text-red" // Line-এর ওপর বসে + লাল
                        : "text-inksoft hover:text-ink"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Resource Rows Container */}
            <div className="flex flex-col">
              {currentList.map((item) => (
                <div 
                  key={item.id}
                  // Row Layout: Icon (auto) | Title (1fr) | Arrow (auto)
                  className="group grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[14px] border-b border-line border-dashed p-[14px_12px] transition-all hover:bg-card hover:pl-[18px] hover:shadow-sm active:bg-card"
                >
                  {/* Icon Box */}
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-paper2 transition-colors group-hover:bg-green/10">
                    <svg className="h-[19px] w-[19px] text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  {/* Title & Type */}
                  <div className="flex flex-col pr-4">
                    <h4 className="font-heading text-[15px] font-semibold text-ink transition-colors group-hover:text-green md:text-[16px]">
                      {item.title}
                    </h4>
                    <span className="mt-0.5 font-body text-[11px] font-medium uppercase tracking-wider text-inksoft">
                      {item.type}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex items-center justify-center text-inksoft transition-all duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:text-red">
                    <ArrowUpRight className="h-5 w-5 stroke-[2.5px]" />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ----- Right: Olympiad Promo Card (Green-Deep Theme) ----- */}
          <div className="mt-8 flex w-full flex-col overflow-hidden rounded-[22px] bg-greendeep p-[30px] shadow-lg lg:mt-0">
            
            {/* Gold Tag */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-ink">
              <Trophy className="h-3.5 w-3.5" />
              <span>Registration Open</span>
            </div>

            {/* Fraunces Title */}
            <h3 className="mb-6 font-display text-[1.9rem] font-bold leading-[1.15] text-white">
              SAM Math & Science <br className="hidden sm:block" /> 
              Olympiad 2026
            </h3>

            {/* Meta Column */}
            <div className="mb-8 flex flex-col gap-3 font-body text-[14px] text-white/80">
              <div className="flex items-center gap-3">
                <CalendarClock className="h-[15px] w-[15px] text-gold" />
                <span>১২ সেপ্টেম্বর, ২০২৬ | সকাল ১০:০০ টা</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-[15px] w-[15px] text-gold" />
                <span>মালিপাথর হাই স্কুল প্রাঙ্গণ</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-[15px] w-[15px] text-gold" />
                <span>৬ষ্ঠ থেকে ১০ম শ্রেণি পর্যন্ত</span>
              </div>
            </div>

            {/* Gold Button Full Width */}
            <button className="w-full rounded-[14px] bg-gold py-3.5 font-heading text-[15px] font-bold text-ink transition-transform hover:scale-[1.02] active:scale-95">
              এখনই রেজিস্ট্রেশন করুন
            </button>

            {/* Note */}
            <p className="mt-4 text-center font-body text-[.76rem] text-white opacity-60">
              * রেজিস্ট্রেশনের শেষ তারিখ ৫ সেপ্টেম্বর ২০২৬
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}