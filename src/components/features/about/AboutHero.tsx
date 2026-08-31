"use client";

import { useRef, type MouseEvent } from "react";
import { GraduationCap, Heart, Users, TreeDeciduous } from "lucide-react";

const PILLARS = [
  { icon: GraduationCap, label: "শিক্ষা", color: "text-gold", bg: "bg-gold/10" },
  { icon: Heart, label: "মানবসেবা", color: "text-red", bg: "bg-red/10" },
  { icon: Users, label: "সমাজ উন্নয়ন", color: "text-green", bg: "bg-green/10" },
  { icon: TreeDeciduous, label: "পরিবেশ", color: "text-inksoft", bg: "bg-ink/5" },
] as const;

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax CSS variable দিয়ে — DOM সরাসরি আপডেট হয়, React re-render হয় না
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty("--mx", (e.clientX / window.innerWidth - 0.5).toFixed(3));
    el.style.setProperty("--my", (e.clientY / window.innerHeight - 0.5).toFixed(3));
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-paper2 pt-12 pb-10 lg:pt-20 lg:pb-16"
    >
      {/* Ambient glow — mouse-এর সাথে ধীরে ধীরে নড়ে (interactive layer) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[min(720px,90vw)] rounded-full bg-green/10 blur-[100px] transition-transform duration-1000 ease-out will-change-transform"
        style={{ transform: "translate(calc(-50% + var(--mx, 0) * 140px), calc(var(--my, 0) * 50px))" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-32 h-[360px] w-[min(560px,80vw)] rounded-full bg-gold/10 blur-[100px] transition-transform duration-1000 ease-out will-change-transform"
        style={{ transform: "translate(calc(var(--mx, 0) * -90px), calc(var(--my, 0) * -40px))" }}
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 text-center md:px-8 md:text-left">
        {/* Eyebrow badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-sm font-medium text-inksoft backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
          </span>
          আমাদের সম্পর্কে
        </div>

        <h1 className="mb-5 font-display text-[clamp(2.2rem,4vw,4rem)] font-bold leading-[1.1] text-ink">
          Empowering a Village. <br className="hidden md:block" />
          Building our <span className="italic text-green">Future.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl font-heading text-lg font-medium leading-relaxed text-inksoft md:mx-0 md:text-[1.15rem] lg:mb-14">
          মালিপাথরের শিক্ষার্থী ও তরুণদের একটি সম্মিলিত প্রয়াস, যা শিক্ষা, মানবসেবা ও সামাজিক উন্নয়নের মাধ্যমে একটি আদর্শ সমাজ গড়তে কাজ করে যাচ্ছে।
        </p>

        {/* সংগঠনের চারটি স্তম্ভ */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {PILLARS.map(({ icon: Icon, label, color, bg }) => (
            <div
              key={label}
              className="group flex items-center gap-3 rounded-2xl border border-line bg-white/70 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg hover:shadow-ink/5"
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${bg} ${color} transition-transform duration-300 group-hover:scale-110`}>
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="font-heading font-semibold text-ink">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}