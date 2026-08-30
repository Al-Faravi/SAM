import Link from "next/link";
import { ArrowRight, MapPin, Clock, Users, Pin } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredEvent = {
  title: "Tree Plantation Campaign 2026",
  subtitle: "GREEN ENVIRONMENT INITIATIVE",
  date: "১৫ জুলাই ২০২৬ • সকাল ৯:০০ টা",
  desc: "মালিপাথর গ্রামের প্রতিটি রাস্তার মোড়ে এবং স্কুল প্রাঙ্গণে ৫০০+ গাছের চারা রোপণ কর্মসূচি। আসুন, আমরা সবাই মিলে একটি সবুজ গ্রাম গড়ে তুলি।",
  location: "মালিপাথর হাই স্কুল মাঠ",
  duration: "সারাদিন",
  audience: "সবার জন্য উন্মুক্ত",
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
  tag: "Upcoming",
};

const otherEvents = [
  {
    id: 1,
    day: "২০",
    month: "আগস্ট",
    title: "এইচএসসি পরীক্ষার্থীদের বিদায় সংবর্ধনা",
    meta: "বিকাল ৩:০০ • মালিপাথর স্কুল",
    status: "রেজিস্ট্রেশন চলছে",
    statusType: "registration", // red
  },
  {
    id: 2,
    day: "০৫",
    month: "সেপ্টে",
    title: "ফ্রি মেডিকেল ও ব্লাড গ্রুপিং ক্যাম্প",
    meta: "সকাল ১০:০০ • প্রাইমারি স্কুল",
    status: "আসছে",
    statusType: "upcoming", // gold
  },
  {
    id: 3,
    day: "২১",
    month: "ফেব্রু",
    title: "আন্তর্জাতিক মাতৃভাষা দিবস উদযাপন",
    meta: "সকাল ৭:০০ • শহীদ মিনার",
    status: "সম্পন্ন",
    statusType: "completed", // muted
  },
];

const notices = [
  {
    id: 1,
    title: "২০২৬-২৭ সেশনের জন্য নতুন সদস্য সংগ্রহ চলছে।",
    date: "১০ আগস্ট ২০২৬",
    isNew: true,
  },
  {
    id: 2,
    title: "অলিম্পিয়াডের ফলাফল এবং পুরস্কার বিতরণী অনুষ্ঠানের তারিখ ঘোষণা।",
    date: "০৫ আগস্ট ২০২৬",
    isNew: false,
  },
  {
    id: 3,
    title: "বন্যা দুর্গতদের জন্য জরুরি ত্রাণ তহবিল গঠন করা হয়েছে।",
    date: "২৮ জুলাই ২০২৬",
    isNew: false,
  },
  {
    id: 4,
    title: "সাধারণ সভার (AGM) নোটিশ ও কার্যবিবরণী।",
    date: "১৫ জুলাই ২০২৬",
    isNew: false,
  },
];

export default function RecentEventsNews() {
  return (
    <section className="bg-paper py-16 lg:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center lg:mb-14 lg:text-left">
          <span className="mb-4 inline-block font-body text-[0.72rem] font-bold uppercase tracking-[0.24em] text-red">
            Stay Updated
          </span>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl lg:text-[2.5rem]">
            Events & Notices
          </h2>
        </div>

        {/* Main Layout Grid: 7.4fr / 4.6fr */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[7.4fr_4.6fr] lg:gap-[48px]">
          
          {/* Left Column: Events Area */}
          <div className="flex flex-col">
            
            {/* Featured Event Card */}
            <div className="group mb-8 flex flex-col overflow-hidden rounded-[22px] bg-card shadow-sm transition-shadow hover:shadow-soft lg:grid lg:grid-cols-[.95fr_1.05fr]">
              {/* Image Side */}
              <div className="relative min-h-[220px] w-full lg:min-h-[280px]">
                <img 
                  src={featuredEvent.image} 
                  alt={featuredEvent.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-pill bg-red px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {featuredEvent.tag}
                </span>
              </div>
              
              {/* Body Side */}
              <div className="flex flex-col justify-center p-[22px] md:p-[30px_32px]">
                <span className="mb-2 font-body text-sm font-semibold text-green">
                  {featuredEvent.date}
                </span>
                
                <h3 className="mb-1 font-heading text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold leading-tight text-ink">
                  {featuredEvent.title}
                </h3>
                
                <span className="mb-4 block font-body text-[.66rem] font-bold uppercase tracking-[.24em] text-red">
                  {featuredEvent.subtitle}
                </span>
                
                <p className="mb-6 line-clamp-2 font-body text-[15px] leading-relaxed text-inksoft">
                  {featuredEvent.desc}
                </p>
                
                {/* Meta Icons */}
                <div className="mb-8 flex flex-wrap gap-x-5 gap-y-3 font-body text-[13.5px] font-medium text-inksoft">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-green" />
                    {featuredEvent.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-green" />
                    {featuredEvent.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-green" />
                    {featuredEvent.audience}
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button className="rounded-pill bg-green px-6 font-body font-semibold text-white hover:bg-greendeep">
                    Join Event
                  </Button>
                  <Button variant="outline" className="rounded-pill border-[1.5px] border-line-strong bg-transparent px-6 font-body font-semibold text-ink hover:bg-paper2">
                    Details
                  </Button>
                </div>
              </div>
            </div>

            {/* List Rows (Other Events) */}
            <div className="flex flex-col border-t border-line border-dashed pt-2">
              {otherEvents.map((ev) => (
                <div 
                  key={ev.id}
                  className="group grid grid-cols-[64px_1fr] items-center gap-x-[12px] border-b border-line border-dashed p-[17px_4px] transition-all duration-300 last:border-none active:bg-card sm:grid-cols-[74px_1fr_auto] sm:gap-[18px] sm:p-[17px_10px] lg:hover:bg-card lg:hover:pl-[18px]"
                >
                  {/* Date Box */}
                  <div className="flex flex-col items-center justify-center border-r border-line pr-[12px] sm:pr-[18px]">
                    <span className="font-display text-2xl font-bold leading-none text-ink group-hover:text-green lg:text-3xl">
                      {ev.day}
                    </span>
                    <span className="mt-1 font-body text-[11px] font-bold uppercase tracking-wider text-inksoft sm:text-xs">
                      {ev.month}
                    </span>
                  </div>
                  
                  {/* Title & Meta */}
                  <div className="flex flex-col">
                    <h4 className="font-heading text-[1.1rem] font-bold text-ink transition-colors group-hover:text-green sm:text-lg">
                      {ev.title}
                    </h4>
                    <p className="mt-1 flex items-center gap-1.5 font-body text-[13px] text-inksoft">
                      <Clock className="h-3.5 w-3.5" /> {ev.meta}
                    </p>
                  </div>
                  
                  {/* Status Tag (Responsive: drops to full width on very small screens) */}
                  <div className="col-span-2 mt-3 flex justify-end sm:col-span-1 sm:mt-0 sm:items-center sm:justify-start">
                    <span 
                      className={`rounded-pill px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wider ${
                        ev.statusType === "upcoming" 
                          ? "bg-gold/15 text-gold" 
                          : ev.statusType === "registration" 
                          ? "bg-red/15 text-red" 
                          : "bg-black/5 text-inksoft"
                      }`}
                    >
                      {ev.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* All Events Button */}
            <div className="mt-6 flex sm:mt-8">
              <Link 
                href="/events" 
                className="group flex items-center font-body text-[15px] font-semibold text-green transition-colors hover:text-greendeep"
              >
                View All Events 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Right Column: Notice Board (Sticky) */}
          <div className="relative mt-8 lg:mt-0">
            <div className="rounded-[22px] border border-line bg-paper2 p-[26px] lg:sticky lg:top-[96px]">
              
              {/* Notice Header */}
              <div className="mb-6 flex items-center gap-3 border-b border-line border-dashed pb-4">
                <Pin className="h-6 w-6 rotate-[38deg] text-red" strokeWidth={2.5} />
                <h3 className="font-display text-2xl font-bold text-ink">
                  Notice Board
                </h3>
              </div>
              
              {/* Notice Items */}
              <div className="flex flex-col">
                {notices.map((notice) => (
                  <div 
                    key={notice.id}
                    className="flex flex-col gap-2 border-b border-line border-dashed py-4 last:border-none last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="flex items-start gap-2 sm:max-w-[75%]">
                      <Link 
                        href={`/notices/${notice.id}`}
                        className="font-heading text-[1.05rem] font-semibold leading-snug text-ink transition-colors hover:text-green"
                      >
                        {notice.title}
                      </Link>
                      {notice.isNew && (
                        <span className="shrink-0 rounded-pill bg-red px-2 py-0.5 font-body text-[9px] font-bold uppercase tracking-wider text-white">
                          নতুন
                        </span>
                      )}
                    </div>
                    
                    <span className="shrink-0 font-body text-[12.5px] font-medium text-inksoft">
                      {notice.date}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}