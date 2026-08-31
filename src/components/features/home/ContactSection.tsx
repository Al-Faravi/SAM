"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// প্রতিষ্ঠানের তথ্য — এখানে পরিবর্তন করলেই পুরো সেকশনে আপডেট হয়ে যাবে
const CONTACT_INFO = {
  name: "শালধর মোহাম্মদ আলী উচ্চ বিদ্যালয়",
  address: "শালধর মোহাম্মদ আলী উচ্চ বিদ্যালয়, পরশুরাম, ফেনী",
  phone: "+880 1812-345678",
  phoneHref: "+8801812345678",
  email: "info@sam-malipathor.org",
  website: "www.sam-malipathor.org",
  websiteHref: "https://www.sam-malipathor.org",
};

// কোনো API কী ছাড়াই Google-এর সার্চ কুয়েরির মাধ্যমে সরাসরি লাইভ ম্যাপ লোড হয়।
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  CONTACT_INFO.address
)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

const SUBJECT_OPTIONS = [
  "সাধারণ জিজ্ঞাসা",
  "সদস্যপদ ও স্বেচ্ছাসেবক",
  "শিক্ষা ও অনুদান সহায়তা",
  "অন্যান্য মতামত",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: এখানে প্রকৃত সাবমিশন এন্ডপয়েন্ট (API/ইমেইল সার্ভিস) যুক্ত করুন
    window.setTimeout(() => {
      setStatus("success");
      e.currentTarget.reset();
      window.setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="bg-paper2 py-16 lg:py-24 scroll-mt-20">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block font-body text-[0.72rem] font-bold uppercase tracking-[0.24em] text-red">
            যোগাযোগ
          </span>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            যোগাযোগ ও অবস্থান
          </h2>
          <p className="mx-auto mt-2 max-w-xl font-body text-[15px] text-inksoft">
            যেকোনো প্রয়োজনীয় তথ্য, পরামর্শ বা অভিযোগের জন্য নিচের ঠিকানায়
            যোগাযোগ করুন অথবা সরাসরি প্রতিষ্ঠান পরিদর্শন করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Formal info list + live map */}
          <div className="flex flex-col gap-6">
            <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
              <div className="flex items-start gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <dt className="font-body text-xs font-bold uppercase tracking-wider text-inksoft">
                    ঠিকানা
                  </dt>
                  <dd className="mt-1 font-heading text-[14.5px] font-semibold leading-snug text-ink">
                    {CONTACT_INFO.address}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <dt className="font-body text-xs font-bold uppercase tracking-wider text-inksoft">
                    ফোন ও ইমেইল
                  </dt>
                  <dd className="mt-1 font-body text-[14px] font-medium text-ink">
                    <a
                      href={`tel:${CONTACT_INFO.phoneHref}`}
                      className="hover:text-green transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </dd>
                  <dd className="font-body text-[14px] font-medium text-ink">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:text-green transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                  <Globe className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <dt className="font-body text-xs font-bold uppercase tracking-wider text-inksoft">
                    ওয়েবসাইট
                  </dt>
                  <dd className="mt-1 font-body text-[14px] font-medium text-ink">
                    <a
                      href={CONTACT_INFO.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green transition-colors"
                    >
                      {CONTACT_INFO.website}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            {/* Real live Google Map — no API key required */}
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-line shadow-sm sm:h-[320px]">
              <iframe
                title={`${CONTACT_INFO.name} — মানচিত্র`}
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Right: Formal contact form */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-sm md:p-8">
            <h3 className="mb-1 font-display text-xl font-bold text-ink">
              আমাদের বার্তা পাঠান
            </h3>
            <p className="mb-6 font-body text-[13.5px] text-inksoft">
              নিচের ফর্মটি পূরণ করুন। চিহ্নিত (*) ঘরগুলো পূরণ করা আবশ্যক।
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-body text-xs font-bold uppercase tracking-wider text-inksoft"
                  >
                    আপনার নাম *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                    className="h-11 rounded-xl border border-line bg-paper px-4 font-body text-sm text-ink outline-none transition-colors focus:border-green focus:ring-1 focus:ring-green"
                    placeholder="উদাঃ মো. রহিম"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="font-body text-xs font-bold uppercase tracking-wider text-inksoft"
                  >
                    মোবাইল নম্বর *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    required
                    type="tel"
                    inputMode="numeric"
                    pattern="01[0-9]{9}"
                    autoComplete="tel"
                    className="h-11 rounded-xl border border-line bg-paper px-4 font-body text-sm text-ink outline-none transition-colors focus:border-green focus:ring-1 focus:ring-green"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-body text-xs font-bold uppercase tracking-wider text-inksoft"
                  >
                    ইমেইল ঠিকানা (ঐচ্ছিক)
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="h-11 rounded-xl border border-line bg-paper px-4 font-body text-sm text-ink outline-none transition-colors focus:border-green focus:ring-1 focus:ring-green"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="font-body text-xs font-bold uppercase tracking-wider text-inksoft"
                  >
                    বিষয় *
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="h-11 rounded-xl border border-line bg-paper px-4 font-body text-sm text-ink outline-none transition-colors focus:border-green focus:ring-1 focus:ring-green"
                  >
                    <option value="" disabled>
                      বিষয় নির্বাচন করুন
                    </option>
                    {SUBJECT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-body text-xs font-bold uppercase tracking-wider text-inksoft"
                >
                  বার্তা *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  minLength={10}
                  className="resize-none rounded-xl border border-line bg-paper p-4 font-body text-sm text-ink outline-none transition-colors focus:border-green focus:ring-1 focus:ring-green"
                  placeholder="আপনার বার্তা বা মতামত বিস্তারিত এখানে লিখুন..."
                />
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-green font-body text-[15px] font-bold text-white shadow-soft transition-all hover:bg-greendeep hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="mr-2 h-4 w-4" />
                {status === "submitting" ? "পাঠানো হচ্ছে..." : "বার্তা প্রেরণ করুন"}
              </Button>

              {status === "success" && (
                <div
                  role="status"
                  className="mt-2 rounded-xl bg-green/10 px-4 py-3 text-center font-body text-sm font-medium text-green"
                >
                  ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে।
                </div>
              )}
              {status === "error" && (
                <div
                  role="alert"
                  className="mt-2 rounded-xl bg-red/10 px-4 py-3 text-center font-body text-sm font-medium text-red"
                >
                  দুঃখিত, বার্তা পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}