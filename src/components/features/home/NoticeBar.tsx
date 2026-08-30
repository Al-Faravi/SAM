"use client";

import Link from "next/link";
import { Bell } from "lucide-react";

export default function NoticeBar() {
  const notices = [
    {
      id: 1,
      text: "আগামী ১৫ই জুলাই ২০২৬ তারিখে মালিপাথর হাই স্কুল মাঠে বৃক্ষরোপণ কর্মসূচি অনুষ্ঠিত হবে।",
      link: "/events",
    },
    {
      id: 2,
      text: "২০২৬-২৭ সেশনের জন্য নতুন সদস্য সংগ্রহ চলছে। আজই রেজিস্ট্রেশন করুন।",
      link: "/about",
    },
    {
      id: 3,
      text: "বন্যা দুর্গতদের জন্য জরুরি ত্রাণ তহবিল গঠন করা হয়েছে। অনুদান পাঠাতে যোগাযোগ করুন।",
      link: "/events",
    },
  ];

  return (
    <div className="relative flex h-12 w-full items-center overflow-hidden border-b border-line bg-paper2">
      
      {/* 
        Custom CSS for Marquee Animation 
        (tailwind.config.ts এ না গিয়ে সরাসরি এখানেই অ্যানিমেশন যোগ করা হলো)
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          display: flex;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
        }
        .ticker-wrapper:hover .animate-ticker {
          animation-play-state: paused;
        }
      `}} />

      {/* Static Label (Left Side) */}
      <div className="absolute left-0 z-10 flex h-full items-center justify-center bg-red px-4 text-white shadow-[10px_0_15px_-3px_rgba(246,241,229,1)] md:px-6">
        <Bell className="mr-2 h-4 w-4 animate-pulse" />
        <span className="font-body text-sm font-bold uppercase tracking-wider">
          নোটিশ
        </span>
        {/* Right Arrow/Triangle pointing to text */}
        <div className="absolute -right-[12px] top-0 h-0 w-0 border-b-[24px] border-l-[12px] border-t-[24px] border-b-transparent border-l-red border-t-transparent"></div>
      </div>

      {/* Scrolling Content */}
      <div className="ticker-wrapper flex h-full w-full items-center overflow-hidden pl-[100px] md:pl-[140px]">
        {/* 
          অ্যানিমেশন স্মুথ করার জন্য কন্টেন্টটি দু'বার রেন্ডার করা হয়েছে, 
          যাতে লুপটি কখনও ভেঙে না যায়। 
        */}
        <div className="animate-ticker">
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex items-center">
              {notices.map((notice, i) => (
                <div key={`${arrayIndex}-${notice.id}`} className="flex items-center">
                  <Link 
                    href={notice.link}
                    className="font-heading text-[15px] font-medium text-ink transition-colors hover:text-green"
                  >
                    {notice.text}
                  </Link>
                  {/* Divider between notices */}
                  <span className="mx-6 h-1.5 w-1.5 rounded-full bg-red/40"></span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}