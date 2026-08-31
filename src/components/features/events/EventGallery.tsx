"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, X, Clock, HeartHandshake } from "lucide-react";

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
  }
];

const categories = ["All", "Education", "Health", "Environment", "Relief"];

export default function EventGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<typeof eventsData[0] | null>(null);

  // Upcoming ও Past ইভেন্ট আলাদা করা
  const upcomingEvent = eventsData.find(e => e.status === "upcoming");
  const pastEvents = eventsData.filter(e => e.status === "past");
  const filteredPastEvents = activeCategory === "All" 
    ? pastEvents 
    : pastEvents.filter(event => event.category === activeCategory);

  return (
    <>
      {/* ----- 1. Upcoming Event Section (Background 1: bg-paper2) ----- */}
      {upcomingEvent && (
        <section className="border-b border-line/40 bg-paper2 py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-3 w-3 animate-pulse rounded-full bg-red"></span>
              <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">আসন্ন কার্যক্রম (Upcoming)</h2>
            </div>
            
            {/* Upcoming Event Card */}
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

            {/* Smart Volunteer Inline CTA */}
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
                href="/contact" 
                className="flex shrink-0 items-center gap-2 rounded-full bg-green px-8 py-3.5 font-body text-[14px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-greendeep hover:shadow-lg hover:shadow-green/20"
              >
                <HeartHandshake className="h-4 w-4" />
                স্বেচ্ছাসেবক হোন
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* ----- 2. Past Events Gallery Section (Background 2: bg-paper) ----- */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
          
          <div className="mb-10 flex flex-col items-center justify-between gap-6 border-b border-line pb-6 md:flex-row">
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">অতীতের কার্যক্রম (Past Events)</h2>
            {/* Filters */}
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

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPastEvents.map((event) => (
              <div key={event.id} className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-card shadow-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-lg">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wider text-green backdrop-blur-sm">
                    {event.category}
                  </div>
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-4 border-b border-line border-dashed pb-4 font-body text-[12px] font-medium text-inksoft">
                    <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-red" /><span>{event.date}</span></div>
                    <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-red" /><span className="truncate max-w-[120px]">{event.location}</span></div>
                  </div>
                  <h3 className="mb-3 font-heading text-[17px] font-bold leading-snug text-ink transition-colors group-hover:text-green">{event.title}</h3>
                  <p className="mb-6 font-body text-[13px] leading-relaxed text-inksoft">{event.summary}</p>
                  <button 
                    onClick={() => setSelectedEvent(event)}
                    className="mt-auto flex items-center gap-2 pt-2 font-body text-[13px] font-bold text-red transition-colors hover:text-green"
                  >
                    বিস্তারিত পড়ুন <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPastEvents.length === 0 && (
            <div className="py-20 text-center font-body text-inksoft">
              <p className="text-lg">এই ক্যাটাগরিতে বর্তমানে কোনো ইভেন্ট নেই।</p>
            </div>
          )}
        </div>
      </section>

      {/* ----- 3. Event Details Modal ----- */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm transition-all animate-in fade-in duration-300">
          <div className="relative max-h-[90vh] w-full max-w-[800px] overflow-y-auto rounded-[24px] bg-card shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-red"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-[250px] w-full sm:h-[350px]">
              <img src={selectedEvent.image} alt={selectedEvent.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="mb-2 inline-block rounded-md bg-green px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wider text-white">
                  {selectedEvent.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">{selectedEvent.title}</h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center gap-6 rounded-xl bg-paper2 p-4 font-body text-[13px] font-medium text-inksoft sm:text-[14px]">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-red" /> <span>{selectedEvent.date}</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-red" /> <span>{selectedEvent.location}</span></div>
                {selectedEvent.status === "upcoming" && (
                  <div className="flex items-center gap-2 font-bold text-green"><Clock className="h-4 w-4" /> <span>Upcoming Event</span></div>
                )}
              </div>
              <h4 className="mb-3 font-heading text-lg font-bold text-ink">বিস্তারিত বিবরণ</h4>
              <p className="font-body text-[15px] leading-relaxed text-inksoft">
                {selectedEvent.longDescription}
              </p>
            </div>

          </div>
          {/* Clicking outside the modal to close */}
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedEvent(null)}></div>
        </div>
      )}
    </>
  );
}