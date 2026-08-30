"use client";

import { useEffect, useState, useRef } from "react";
import { GraduationCap, TreeDeciduous, Droplet, HeartHandshake, BookOpen, Medal } from "lucide-react";

// কাস্টম অ্যানিমেটেড কাউন্টার (অপরিবর্তিত)
function AnimatedNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function SamAtAGlance() {
  const stats = [
    { id: 1, label: "Students", value: 250, suffix: "+", icon: GraduationCap },
    { id: 2, label: "Trees", value: 500, suffix: "+", icon: TreeDeciduous },
    { id: 3, label: "Donors", value: 120, suffix: "+", icon: Droplet },
    { id: 4, label: "Campaigns", value: 35, suffix: "+", icon: HeartHandshake },
    { id: 5, label: "Guided", value: 300, suffix: "+", icon: BookOpen },
    { id: 6, label: "Alumni", value: 100, suffix: "+", icon: Medal },
  ];

  return (
    <section className="bg-greendeep py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-8 px-4 md:px-8 lg:flex-row lg:gap-12">
        
        {/* Section Header (ডেস্কটপে বামে থাকবে) */}
        <div className="shrink-0 text-center lg:text-left">
          <h2 className="font-display text-2xl font-bold text-card md:text-3xl">
            SAM at a <br className="hidden lg:block" /> Glance
          </h2>
          <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-red lg:mx-0"></div>
        </div>

        {/* Divider (শুধু ডেস্কটপে দেখাবে) */}
        <div className="hidden h-12 w-px bg-white/20 lg:block"></div>

        {/* Stats Grid (কম্প্যাক্ট লেআউট) */}
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="group flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Icon & Number on the same line */}
                <div className="mb-1 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-display text-2xl font-bold text-card md:text-3xl">
                    <AnimatedNumber end={stat.value} suffix={stat.suffix} />
                  </h3>
                </div>
                {/* Label */}
                <p className="font-body text-[13px] font-medium uppercase tracking-wide text-paper2/70">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}