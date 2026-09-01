"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, X, Clock, HeartHandshake, ChevronLeft, ChevronRight } from "lucide-react";

// বাংলা সংখ্যা কনভার্টার
const toBengaliNumber = (num: number) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, x => banglaDigits[parseInt(x)]);
};

// ডামি ইভেন্ট ডেটা
const eventsData = [
  {
    id: 1,
    title: "শীতবস্ত্র বিতরণ ও ফ্রি মেডিকেল ক্যাম্প ২০২৬",
    category: "Relief",
    date: "১৫ ডিসেম্বর, ২০২৬",
    location: "মালিপাথর হাই স্কুল মাঠ",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    summary: "আসন্ন শীতে গ্রামের অসহায় মানুষের মাঝে শীতবস্ত্র বিতরণ এবং বিশেষজ্ঞ চিকিৎসকদের উপস্থিতিতে দিনব্যাপী ফ্রি মেডিকেল ক্যাম্প।",
    longDescription: "আগামী ১৫ ডিসেম্বর ২০২৬ তারিখে Student Association of Malipathor (SAM)-এর উদ্যোগে একটি বিশাল শীতবস্ত্র বিতরণ ও ফ্রি মেডিকেল ক্যাম্পের আয়োজন করা হয়েছে। এই ইভেন্টে আমরা গ্রামের প্রায় ৫০০ অসহায় মানুষের মাঝে শীতবস্ত্র বিতরণ করব। পাশাপাশি বিশেষজ্ঞ চিকিৎসকদের একটি দল বিনামূল্যে চিকিৎসা সেবা ও ঔষধ প্রদান করবেন। এই মহতী উদ্যোগে স্বেচ্ছাসেবক হিসেবে যুক্ত হতে অথবা আর্থিকভাবে সহায়তা করতে আমাদের সাথে যোগাযোগ করুন।",
    status: "upcoming"
  },
  {
    id: 2,
    title: "এসএসসি পরীক্ষার্থীদের ক্যারিয়ার গাইডলাইন",
    category: "Education",
    date: "১৫ মে, ২০২৬",
    location: "মালিপাথর হাই স্কুল",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    summary: "গ্রামের এসএসসি পরীক্ষার্থীদের সঠিক ক্যারিয়ার নির্বাচন এবং উচ্চশিক্ষার বিষয়ে দিকনির্দেশনামূলক সেমিনার।",
    longDescription: "মালিপাথর হাই স্কুলের এসএসসি পরীক্ষার্থীদের জন্য আয়োজিত এই সেমিনারে দেশের স্বনামধন্য বিশ্ববিদ্যালয় থেকে আগত প্রাক্তন শিক্ষার্থীরা গাইডলাইন প্রদান করেন। বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক শাখা থেকে ভবিষ্যতে কী কী ক্যারিয়ার গড়া সম্ভব এবং সেজন্য এখন থেকে কীভাবে প্রস্তুতি নিতে হবে—সেই বিষয়ে বিস্তারিত আলোচনা করা হয়। ইভেন্ট শেষে ১০০ জন শিক্ষার্থীর মাঝে শিক্ষা উপকরণ বিতরণ করা হয়।",
    status: "past"
  },
  {
    id: 3,
    title: "ফ্রি ব্লাড গ্রুপিং ও থ্যালাসেমিয়া সচেতনতা",
    category: "Health",
    date: "১০ এপ্রিল, ২০২৬",
    location: "মালিপাথর বাজার",
    image: "https://images.unsplash.com/photo-1615461065624-21b562ee5566?auto=format&fit=crop&q=80&w=800",
    summary: "এলাকার ২৫০ জন সাধারণ মানুষের বিনামূল্যে রক্তের গ্রুপ নির্ণয় এবং থ্যালাসেমিয়া প্রতিরোধে সচেতনতা বৃদ্ধি।",
    longDescription: "রক্তদানে উৎসাহিত করতে এবং থ্যালাসেমিয়া সম্পর্কে সচেতনতা বাড়াতে SAM-এর আয়োজনে ফ্রি ব্লাড গ্রুপিং ক্যাম্পেইন অনুষ্ঠিত হয়। সকাল ৯টা থেকে শুরু হয়ে বিকেল ৫টা পর্যন্ত চলা এই ক্যাম্পে ২৫০ জনের বেশি মানুষের বিনামূল্যে রক্তের গ্রুপ নির্ণয় করা হয় এবং তাদের ব্লাড ডোনার ডাটাবেজে যুক্ত করা হয়, যাতে জরুরি প্রয়োজনে রক্ত সংগ্রহ করা সহজ হয়।",
    status: "past"
  },
  {
    id: 4,
    title: "সবুজ মালিপাথর: বৃক্ষরোপণ কর্মসূচি",
    category: "Environment",
    date: "৫ জুন, ২০২৫",
    location: "মালিপাথর গ্রাম সংলগ্ন",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    summary: "বিশ্ব পরিবেশ দিবস উপলক্ষে গ্রামের রাস্তার দুই পাশে এবং পতিত জমিতে ৫০০টি ফলজ ও ঔষধি গাছ রোপণ।",
    longDescription: "পরিবেশের ভারসাম্য রক্ষায় এবং গ্রামকে সবুজে ভরিয়ে তুলতে 'সবুজ মালিপাথর' উদ্যোগের আওতায় ৫০০টি ফলজ, বনজ ও ঔষধি গাছ রোপণ করা হয়। গ্রামের শিশু থেকে বৃদ্ধ—সবাই এই কার্যক্রমে স্বতঃস্ফূর্তভাবে অংশগ্রহণ করে। প্রতিটি গাছের রক্ষণাবেক্ষণের দায়িত্ব স্থানীয় শিক্ষার্থীদের মাঝে বণ্টন করে দেওয়া হয়।",
    status: "past"
  },
  {
    id: 5,
    title: "বন্যাদুর্গতদের মাঝে ত্রাণ বিতরণ",
    category: "Relief",
    date: "২০ আগস্ট, ২০২৪",
    location: "ফেনী সদর",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800",
    summary: "ভয়াবহ বন্যায় ক্ষতিগ্রস্ত ২০০টি পরিবারের মাঝে জরুরি খাদ্য ও বিশুদ্ধ পানি সরবরাহ।",
    longDescription: "বন্যার আকস্মিক পরিস্থিতিতে SAM-এর স্বেচ্ছাসেবকরা জীবনের ঝুঁকি নিয়ে বন্যাকবলিত অঞ্চলে ত্রাণ কার্যক্রম পরিচালনা করে। প্রায় ২০০টি পানিবন্দি পরিবারের মাঝে শুকনা খাবার, বিশুদ্ধ পানি এবং জরুরি ঔষধ পৌঁছে দেওয়া হয়।",
    status: "past"
  },
  {
    id: 6,
    title: "মেধাবী শিক্ষার্থীদের শিক্ষাবৃত্তি প্রদান",
    category: "Education",
    date: "১০ জানুয়ারি, ২০২৪",
    location: "মালিপাথর হাই স্কুল",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
    summary: "অসচ্ছল ও মেধাবী ১০ জন শিক্ষার্থীকে এককালীন শিক্ষাবৃত্তি ও সম্মাননা স্মারক প্রদান।",
    longDescription: "গ্রামের অসচ্ছল কিন্তু মেধাবী শিক্ষার্থীদের পড়াশোনায় উৎসাহিত করতে SAM-এর পক্ষ থেকে শিক্ষাবৃত্তি প্রদান করা হয়। এই অনুষ্ঠানে বিশিষ্ট ব্যক্তিবর্গের উপস্থিতিতে ১০ জন শিক্ষার্থীকে নগদ অর্থ ও সম্মাননা স্মারক তুলে দেওয়া হয়।",
    status: "past"
  },
  {
    id: 7,
    title: "ফ্রি চক্ষু শিবির ও ছানি অপারেশন",
    category: "Health",
    date: "২৫ নভেম্বর, ২০২৩",
    location: "মালিপাথর প্রাইমারি স্কুল",
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&q=80&w=800",
    summary: "বয়স্ক মানুষের জন্য বিনামূল্যে চক্ষু পরীক্ষা এবং ১০ জন রোগীর বিনামূল্যে ছানি অপারেশন।",
    longDescription: "গ্রামের বয়স্ক রোগীদের জন্য আয়োজিত এই চক্ষু শিবিরে ২০০ জনের বেশি রোগীর চোখ পরীক্ষা করা হয়। এর মধ্যে ১০ জন ছানি রোগীকে বাছাই করে সম্পূর্ণ বিনামূল্যে অপারেশনের ব্যবস্থা করা হয়।",
    status: "past"
  },
  {
    id: 8,
    title: "প্লাস্টিক বর্জ্য পরিচ্ছন্নতা অভিযান",
    category: "Environment",
    date: "১৫ মার্চ, ২০২৩",
    location: "মালিপাথর বাজার ও সংলগ্ন এলাকা",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80f4173?auto=format&fit=crop&q=80&w=800",
    summary: "বাজার ও রাস্তার আশেপাশের প্লাস্টিক বর্জ্য পরিষ্কার এবং জনসচেতনতা সৃষ্টি।",
    longDescription: "পরিবেশ দূষণ রোধে SAM-এর স্বেচ্ছাসেবকরা দিনব্যাপী পরিচ্ছন্নতা অভিযান পরিচালনা করে। বাজার ও আশেপাশের এলাকা থেকে প্লাস্টিক বর্জ্য সংগ্রহ করে নির্দিষ্ট স্থানে ফেলা হয় এবং স্থানীয় ব্যবসায়ীদের মাঝে সচেতনতামূলক লিফলেট বিতরণ করা হয়।",
    status: "past"
  }
];

const categories = ["All", "Education", "Health", "Environment", "Relief"];
const ITEMS_PER_PAGE = 6;

export default function EventGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<typeof eventsData[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Upcoming ও Past ইভেন্ট আলাদা করা
  const upcomingEvent = eventsData.find(e => e.status === "upcoming");
  const pastEvents = eventsData.filter(e => e.status === "past");
  
  const filteredPastEvents = activeCategory === "All" 
    ? pastEvents 
    : pastEvents.filter(event => event.category === activeCategory);

  // পেজিনেশন লজিক
  const totalPages = Math.ceil(filteredPastEvents.length / ITEMS_PER_PAGE);
  const currentEvents = filteredPastEvents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // ক্যাটাগরি চেঞ্জ হলে পেজ ১ এ রিসেট হবে
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // ⭐️ নতুন পেজ চেঞ্জ হ্যান্ডলার: পেজ চেঞ্জ হওয়ার সাথে সাথে স্ক্রোল করে উপরে নিয়ে যাবে
  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
    
    // একটু সময় (delay) দিয়ে স্ক্রোল করা, যাতে রিঅ্যাক্ট আগে নতুন পেজের ডাটা রেন্ডার করে নেয়
    setTimeout(() => {
      const section = document.getElementById("past-events-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <>
      {/* ----- 1. Upcoming Event Section ----- */}
      {upcomingEvent && (
        <section className="border-b border-line/40 bg-paper2 py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-3 w-3 animate-pulse rounded-full bg-red"></span>
              <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">আসন্ন কার্যক্রম (Upcoming)</h2>
            </div>
            
            <div className="group relative mb-8 grid grid-cols-1 overflow-hidden rounded-[24px] border border-line bg-card shadow-md transition-shadow hover:shadow-lg lg:grid-cols-2">
              <div className="relative h-[250px] w-full overflow-hidden lg:h-full">
                <img src={upcomingEvent.image} alt={upcomingEvent.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-md bg-red px-3 py-1 font-body text-[12px] font-bold uppercase tracking-wider text-white shadow-sm">
                  Coming Soon
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 flex flex-wrap items-center gap-5 border-b border-line/60 pb-4 font-body text-[13.5px] font-medium text-inksoft">
                  <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-green" /> <span>{upcomingEvent.date}</span></div>
                  <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-green" /> <span>{upcomingEvent.location}</span></div>
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold leading-snug text-ink md:text-3xl">{upcomingEvent.title}</h3>
                <p className="mb-8 font-body text-[15px] leading-relaxed text-inksoft">{upcomingEvent.summary}</p>
                <button 
                  onClick={() => setSelectedEvent(upcomingEvent)}
                  className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-body text-[14px] font-bold text-white transition-all hover:bg-green"
                >
                  বিস্তারিত দেখুন <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 rounded-[24px] border border-line bg-card px-6 py-8 shadow-sm md:flex-row lg:px-10">
              <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
                <h3 className="font-heading text-xl font-bold text-ink lg:text-2xl">
                  এই যাত্রায় আমাদের <span className="italic text-green">সঙ্গী হোন</span>
                </h3>
                <p className="font-body text-[14px] text-inksoft lg:text-[15px]">
                  SAM-এর প্রতিটি কার্যক্রমে স্বেচ্ছাসেবী হিসেবে যুক্ত হয়ে মালিপাথরের উন্নয়নে সরাসরি ভূমিকা রাখুন।
                </p>
              </div>
              <Link 
                href="/#contact" 
                className="flex shrink-0 items-center gap-2 rounded-full bg-green px-8 py-3.5 font-body text-[14px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-greendeep hover:shadow-lg hover:shadow-green/20"
              >
                <HeartHandshake className="h-4 w-4" />
                স্বেচ্ছাসেবক হোন
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ----- 2. Past Events Gallery Section ----- */}
      {/* ⭐️ id="past-events-section" এবং scroll-mt-24 যোগ করা হয়েছে যাতে স্ক্রোল করে ঠিক এই জায়গায় আসে */}
      <section id="past-events-section" className="bg-paper py-16 scroll-mt-24 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
          
          <div className="mb-10 flex flex-col items-center justify-between gap-6 border-b border-line pb-6 md:flex-row">
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">অতীতের কার্যক্রম (Past)</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-1.5 font-body text-[12px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === category ? "bg-green text-white shadow-md" : "bg-paper2 text-inksoft hover:bg-green/10 hover:text-green"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {currentEvents.map((event) => (
              <div key={event.id} className="group flex flex-col overflow-hidden rounded-[16px] border border-line bg-card shadow-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-lg sm:rounded-[20px] sm:hover:-translate-y-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 font-body text-[9px] font-bold uppercase tracking-wider text-green backdrop-blur-sm sm:left-4 sm:top-4 sm:rounded-md sm:px-3 sm:py-1 sm:text-[11px]">
                    {event.category}
                  </div>
                </div>
                
                <div className="flex flex-grow flex-col p-3 sm:p-6">
                  <div className="mb-2 flex flex-col gap-1 border-b border-line border-dashed pb-2 font-body text-[10px] font-medium text-inksoft sm:mb-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pb-4 sm:text-[12px]">
                    <div className="flex items-center gap-1 sm:gap-1.5"><Calendar className="h-3 w-3 text-red sm:h-3.5 sm:w-3.5" /><span>{event.date}</span></div>
                    <div className="flex items-center gap-1 sm:gap-1.5"><MapPin className="h-3 w-3 text-red sm:h-3.5 sm:w-3.5" /><span className="line-clamp-1 max-w-[100px] sm:max-w-[120px]">{event.location}</span></div>
                  </div>
                  <h3 className="mb-1.5 line-clamp-2 font-heading text-[13px] font-bold leading-snug text-ink transition-colors group-hover:text-green sm:mb-3 sm:text-[17px]">{event.title}</h3>
                  <p className="mb-3 line-clamp-2 font-body text-[11px] leading-relaxed text-inksoft sm:mb-6 sm:line-clamp-3 sm:text-[13px]">{event.summary}</p>
                  
                  <button 
                    onClick={() => setSelectedEvent(event)}
                    className="mt-auto flex w-fit items-center gap-1 pt-1 font-body text-[11px] font-bold text-red transition-colors hover:text-green sm:gap-2 sm:pt-2 sm:text-[13px]"
                  >
                    বিস্তারিত <span className="hidden sm:inline">পড়ুন</span> <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPastEvents.length === 0 && (
            <div className="py-20 text-center font-body text-inksoft">
              <p className="text-[15px] sm:text-lg">এই ক্যাটাগরিতে বর্তমানে কোনো ইভেন্ট নেই।</p>
            </div>
          )}

          {/* ----- Pagination Controls ----- */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2 sm:mt-12">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-transparent text-ink transition-colors hover:bg-card disabled:opacity-40 disabled:hover:bg-transparent sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`flex h-9 w-9 items-center justify-center rounded-full font-heading text-[14px] font-bold transition-all sm:h-10 sm:w-10 sm:text-[15px] ${
                        currentPage === pageNum 
                          ? "bg-ink text-white shadow-md" 
                          : "bg-transparent text-inksoft hover:bg-line/50 hover:text-ink"
                      }`}
                    >
                      {toBengaliNumber(pageNum)}
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-transparent text-ink transition-colors hover:bg-card disabled:opacity-40 disabled:hover:bg-transparent sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ----- 3. Event Details Modal ----- */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm transition-all animate-in fade-in duration-300">
          <div className="relative max-h-[90vh] w-full max-w-[800px] overflow-y-auto rounded-[20px] bg-card shadow-2xl sm:rounded-[24px]">
            
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-red sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="relative h-[200px] w-full sm:h-[350px]">
              <img src={selectedEvent.image} alt={selectedEvent.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <span className="mb-2 inline-block rounded-md bg-green px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-white sm:text-[11px]">
                  {selectedEvent.category}
                </span>
                <h3 className="font-heading text-xl font-bold leading-tight text-white sm:text-3xl">{selectedEvent.title}</h3>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center gap-4 rounded-xl bg-paper2 p-4 font-body text-[12px] font-medium text-inksoft sm:mb-6 sm:gap-6 sm:text-[14px]">
                <div className="flex items-center gap-1.5 sm:gap-2"><Calendar className="h-4 w-4 text-red" /> <span>{selectedEvent.date}</span></div>
                <div className="flex items-center gap-1.5 sm:gap-2"><MapPin className="h-4 w-4 text-red" /> <span>{selectedEvent.location}</span></div>
                {selectedEvent.status === "upcoming" && (
                  <div className="flex items-center gap-1.5 font-bold text-green sm:gap-2"><Clock className="h-4 w-4" /> <span>Upcoming Event</span></div>
                )}
              </div>
              <h4 className="mb-2 font-heading text-base font-bold text-ink sm:mb-3 sm:text-lg">বিস্তারিত বিবরণ</h4>
              <p className="font-body text-[14px] leading-relaxed text-inksoft sm:text-[15px]">
                {selectedEvent.longDescription}
              </p>
            </div>
          </div>
          
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedEvent(null)}></div>
        </div>
      )}
    </>
  );
}