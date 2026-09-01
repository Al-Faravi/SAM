"use client";

import { useState } from "react";
import Image from "next/image";

// ডামি ডেটা
const committeeData = {
  "২০২৫-২০২৬": {
    main: [
      {
        id: 1,
        name: "Moinul Hossain Sourav",
        role: "Founder",
        inst: "PhD Fellow (Qingdao) • MBA (BUTEX)",
        img: "/Sourav.jpg",
      },
      {
        id: 2,
        name: "Abdullah Al Noman",
        role: "President",
        inst: "B.Sc in Math (Feni Govt. College)",
        img: "/Noman.jpg",
      },
      {
        id: 3,
        name: "Md. Faruk Hossen",
        role: "General Secretary",
        inst: "BBA (Feni Govt. College)",
        img: "/faruk.jpg",
      },
      {
        id: 4,
        name: "Md. Shakawat Hossain Faravi",
        role: "Technology & Innovation Secretary",
        inst: "CSE - AI & ML (GUB)",
        img: "/profile.jpg", // বা তোমার দেওয়া /faravi(me).png
      },
    ],
    others: [
      { id: 1, role: "Vice President", name: "Rahim Uddin" },
      { id: 2, role: "Organizing Secretary", name: "Karim Hasan" },
      { id: 3, role: "Finance Secretary", name: "Ariful Islam" },
      { id: 4, role: "Education Secretary", name: "Nazmul Huda" },
    ],
  },
  "২০২৩-২০২৪": {
    main: [
      { id: 1, name: "Nuruddin Bhuiyan Jewel", role: "President", inst: "Dhaka College", img: "/Jewel.jpg" },
      {
        id: 2,
        name: "Hasan Mahmud",
        role: "General Secretary",
        inst: "Feni Govt. College",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      },
    ],
    others: [
      { id: 1, role: "Vice President", name: "Shafiqur Rahman" },
      { id: 2, role: "Finance Secretary", name: "Tanvir Ahmed" },
    ],
  },
};

const years = Object.keys(committeeData);

// দুটি সমান কলামে ভাগ করার সহায়ক ফাংশন — ফরমাল টেবিল-জোড়া তৈরির জন্য
function splitInHalf<T>(items: T[]): [T[], T[]] {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

export default function ExecutiveCommittee() {
  const [activeYear, setActiveYear] = useState(years[0]);
  const currentData = committeeData[activeYear as keyof typeof committeeData];
  const [leftOthers, rightOthers] = splitInHalf(currentData.others);

  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        {/* Header & Year Selector */}
        <div className="mb-12 flex flex-col items-center gap-6 text-center">
          <div>
            <span className="mb-2 inline-block font-body text-[0.72rem] font-bold uppercase tracking-[0.24em] text-red">
              নেতৃত্ব
            </span>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              কার্যনির্বাহী পর্ষদ
            </h2>
          </div>

          {/* Year Selector: bordered segmented control, no pill */}
          <div
            role="tablist"
            aria-label="কমিটির মেয়াদ নির্বাচন করুন"
            className="inline-flex overflow-hidden rounded-md border border-line bg-card"
          >
            {years.map((year, i) => (
              <button
                key={year}
                role="tab"
                aria-selected={activeYear === year}
                onClick={() => setActiveYear(year)}
                className={`whitespace-nowrap px-5 py-2.5 font-body text-[14px] font-bold transition-colors ${
                  i > 0 ? "border-l border-line" : ""
                } ${
                  activeYear === year
                    ? "bg-ink text-paper"
                    : "text-inksoft hover:bg-paper2 hover:text-ink"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div key={activeYear}>
          {/* Main Members — formal profile cards */}
          <div className="mb-4 border-b border-line pb-2">
            <h3 className="font-body text-[0.78rem] font-bold uppercase tracking-wider text-inksoft">
              মূল দায়িত্বপ্রাপ্ত ({activeYear})
            </h3>
          </div>
          
          {/* ⭐️ Mobile: 2-col, Tablet/Desktop: 4-col */}
          <div className="mb-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {currentData.main.map((member) => (
              <div
                key={member.id}
                className="overflow-hidden rounded-lg border border-line bg-card"
              >
                <div className="relative aspect-[3/4] w-full bg-paper2">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                
                {/* ⭐️ Adjusted padding and font sizes for smaller mobile screens */}
                <div className="border-t border-line px-2.5 py-3 sm:px-4 sm:py-3.5">
                  <p className="mb-1 font-body text-[0.6rem] font-bold uppercase tracking-wider text-red sm:text-[0.7rem]">
                    {member.role}
                  </p>
                  <h3 className="font-heading text-[0.85rem] font-bold leading-tight text-ink sm:text-[1rem]">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 font-body text-[0.65rem] text-inksoft sm:text-[0.8rem]">
                    {member.inst}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Other Members — formal two-up tables (role / name) */}
          <div className="mb-4 border-b border-line pb-2">
            <h3 className="font-body text-[0.78rem] font-bold uppercase tracking-wider text-inksoft">
              অন্যান্য সদস্যবৃন্দ
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[leftOthers, rightOthers].map(
              (column, colIndex) =>
                column.length > 0 && (
                  <table
                    key={colIndex}
                    className="w-full border-collapse overflow-hidden rounded-lg border border-line text-left"
                  >
                    <thead>
                      <tr className="bg-paper2">
                        <th className="border-b border-line px-4 py-2 font-body text-[0.72rem] font-bold uppercase tracking-wider text-inksoft">
                          পদবী
                        </th>
                        <th className="border-b border-line px-4 py-2 font-body text-[0.72rem] font-bold uppercase tracking-wider text-inksoft">
                          নাম
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {column.map((member, i) => (
                        <tr
                          key={member.id}
                          className={i % 2 === 1 ? "bg-paper2/60" : "bg-card"}
                        >
                          <td className="border-b border-line/70 px-4 py-2.5 font-body text-[13.5px] font-semibold text-red">
                            {member.role}
                          </td>
                          <td className="border-b border-line/70 px-4 py-2.5 font-heading text-[14.5px] font-semibold text-ink">
                            {member.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}