"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Navigation, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="bg-paper2 py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-8">
        
        {/* Header - Centered & Compact */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block font-body text-[0.7rem] font-bold uppercase tracking-[0.2em] text-red">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            যোগাযোগ করুন
          </h2>
        </div>

        {/* Layout Grid: 1:1 Ratio */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Column: Info & Location Card */}
          <div className="flex flex-col gap-8">
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-start gap-4 rounded-2xl border border-line bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10">
                  <MapPin className="h-5 w-5 text-red" />
                </div>
                <div className="flex flex-col">
                  <span className="mb-1 font-body text-xs font-bold uppercase tracking-wider text-inksoft">ঠিকানা</span>
                  <span className="font-heading text-[14px] font-semibold leading-snug text-ink">
                    শালধর মোহাম্মদ আলী উচ্চ বিদ্যালয়, পরশুরাম, ফেনী
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-line bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10">
                  <Mail className="h-5 w-5 text-red" />
                </div>
                <div className="flex flex-col">
                  <span className="mb-1 font-body text-xs font-bold uppercase tracking-wider text-inksoft">ইমেইল ও ফোন</span>
                  <span className="font-body text-[14px] font-medium text-ink">info@sam-malipathor.org</span>
                  <span className="font-body text-[14px] font-medium text-ink">+880 1812-345678</span>
                </div>
              </div>
            </div>

            {/* Custom Clean Location Preview Card (แทนที่ iFrame) */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-line bg-[#EDE4CF] p-8 text-center shadow-sm lg:h-[230px]">
              {/* Decorative background circle */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green/10 blur-xl"></div>
              <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-red/10 blur-xl"></div>
              
              <div className="relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green text-white shadow-md">
                <MapPin className="h-6 w-6" />
              </div>

              <h4 className="relative z-10 mb-1 font-heading text-lg font-bold text-ink">
                শালধর মোহাম্মদ আলী উচ্চ বিদ্যালয়
              </h4>
              <p className="relative z-10 mb-5 font-body text-xs font-medium text-inksoft">
                পরশুরাম, ফেনী, বাংলাদেশ
              </p>

              <a 
                href="https://maps.app.goo.gl/2uzeCHRSvxqaG2Au9" 
                target="_blank" 
                rel="noreferrer"
                className="relative z-10 flex h-10 items-center gap-2 rounded-full bg-green px-6 shadow-md transition-transform hover:scale-105 active:scale-95"
              >
                <Navigation className="h-4 w-4 text-white" />
                <span className="font-body text-[13px] font-bold text-white">Open in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Sleek Form Card */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-sm md:p-8">
            <h3 className="mb-6 font-display text-xl font-bold text-ink">বার্তা পাঠান</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs font-bold uppercase tracking-wider text-inksoft">আপনার নাম *</label>
                  <input 
                    required 
                    type="text" 
                    className="h-11 rounded-lg border border-line bg-paper px-4 font-body text-sm text-ink outline-none transition-colors focus:border-green focus:bg-white" 
                    placeholder="Ex: Md. Rahim" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs font-bold uppercase tracking-wider text-inksoft">যোগাযোগ *</label>
                  <input 
                    required 
                    type="text" 
                    className="h-11 rounded-lg border border-line bg-paper px-4 font-body text-sm text-ink outline-none transition-colors focus:border-green focus:bg-white" 
                    placeholder="018XXXXXXXX" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-bold uppercase tracking-wider text-inksoft">বিষয়</label>
                <select className="h-11 rounded-lg border border-line bg-paper px-4 font-body text-sm text-ink outline-none transition-colors focus:border-green focus:bg-white">
                  <option>সাধারণ জিজ্ঞাসা</option>
                  <option>সদস্যপদ সম্পর্কে</option>
                  <option>অনুদান বিষয়ে</option>
                  <option>অন্যান্য</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-bold uppercase tracking-wider text-inksoft">বিস্তারিত বার্তা *</label>
                <textarea 
                  required 
                  rows={4} 
                  className="resize-none rounded-lg border border-line bg-paper p-4 font-body text-sm text-ink outline-none transition-colors focus:border-green focus:bg-white" 
                  placeholder="আপনার বার্তা লিখুন..."
                ></textarea>
              </div>

              <Button type="submit" className="mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-green font-body text-sm font-bold text-white shadow-soft transition-colors hover:bg-greendeep">
                <Send className="mr-2 h-4 w-4" /> বার্তা প্রেরণ করুন
              </Button>

              {/* Success Toast */}
              {status === "success" && (
                <div className="mt-2 rounded-lg bg-green/10 px-4 py-3 text-center font-body text-sm font-medium text-green">
                  আপনার বার্তা সফলভাবে পাঠানো হয়েছে!
                </div>
              )}
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}