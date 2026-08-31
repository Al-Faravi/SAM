"use client";

import { useState } from "react";
import { Search } from "lucide-react";

// ডামি মেম্বার ডেটা
const allMembers = [
  { id: 1, name: "আব্দুল্লাহ আল নোমান", enName: "Abdullah Al Noman", blood: "O+", skills: ["Leadership", "Management"] },
  { id: 2, name: "মো. ফারুক হোসেন", enName: "Md. Faruk Hossen", blood: "A+", skills: ["Administration"] },
  { id: 3, name: "মো. সাখাওয়াত হোসেন ফারাবী", enName: "Md. Shakawat Hossain Faravi", blood: "B+", skills: ["Web Dev", "Design", "IT"] },
  { id: 4, name: "মঈনুল হোসেন সৌরভ", enName: "Moinul Hossain Sourav", blood: "AB+", skills: ["Public Relations"] },
  { id: 5, name: "নুরুদ্দীন ভূঁইয়া জুয়েল", enName: "Nuruddin Bhuiyan Jewel", blood: "O-", skills: ["Social Work"] },
  { id: 6, name: "হাসান মাহমুদ", enName: "Hasan Mahmud", blood: "A-", skills: ["Writing", "Event Mgt."] },
  { id: 7, name: "আরিফুল ইসলাম", enName: "Ariful Islam", blood: "B+", skills: ["Finance"] },
];

const bloodGroups = ["All", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

// ইংরেজি সংখ্যাকে বাংলায় কনভার্ট করার ফাংশন
const toBengaliNumber = (num: number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num.toString().replace(/\d/g, (x) => banglaDigits[parseInt(x)]);
};

export default function MembersDirectory() {
  const [search, setSearch] = useState("");
  const [activeBlood, setActiveBlood] = useState("All");

  // Filter Logic (Substring match in both BN & EN, and Blood match)
  const filteredMembers = allMembers.filter((m) => {
    const query = search.toLowerCase();
    const matchName = m.name.includes(query) || m.enName.toLowerCase().includes(query);
    const matchBlood = activeBlood === "All" || m.blood === activeBlood;
    return matchName && matchBlood;
  });

  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        <div className="mb-8 border-b border-line pb-6">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink lg:text-3xl">
            সদস্য তালিকা
          </h2>

          {/* Toolbar: Search + Blood Group Filter */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-[280px]">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-inksoft" />
              <input
                type="text"
                placeholder="নাম দিয়ে খুঁজুন..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-line bg-card py-2.5 pl-10 pr-4 font-body text-[14px] text-ink outline-none transition-colors focus:border-green focus:ring-1 focus:ring-green"
              />
            </div>

            {/* Blood Group Filter */}
            <div className="flex flex-col gap-1.5">
              <span className="font-body text-[0.72rem] font-bold uppercase tracking-wider text-inksoft">
                রক্তের গ্রুপ অনুযায়ী ফিল্টার
              </span>
              <div className="flex flex-wrap gap-1.5">
                {bloodGroups.map((bg) => (
                  <button
                    key={bg}
                    onClick={() => setActiveBlood(bg)}
                    aria-pressed={activeBlood === bg}
                    className={`rounded-md border px-2.5 py-1 font-body text-[0.76rem] font-semibold transition-colors ${
                      activeBlood === bg
                        ? "border-red bg-red text-[#FFFDF8]"
                        : "border-line bg-card text-inksoft hover:border-red hover:text-red"
                    }`}
                  >
                    {bg === "All" ? "সকল" : bg}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Count Line */}
        <p className="mb-4 font-body text-[14px] font-medium text-inksoft">
          মোট {toBengaliNumber(filteredMembers.length)} জন সদস্য প্রদর্শিত হচ্ছে
        </p>

        {/* Directory Table */}
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-paper2">
                <th className="w-16 border-b border-line px-4 py-3 font-body text-[0.72rem] font-bold uppercase tracking-wider text-inksoft">
                  ক্রমিক
                </th>
                <th className="border-b border-line px-4 py-3 font-body text-[0.72rem] font-bold uppercase tracking-wider text-inksoft">
                  নাম
                </th>
                <th className="border-b border-line px-4 py-3 font-body text-[0.72rem] font-bold uppercase tracking-wider text-inksoft">
                  দক্ষতা
                </th>
                <th className="w-28 border-b border-line px-4 py-3 text-center font-body text-[0.72rem] font-bold uppercase tracking-wider text-inksoft">
                  রক্তের গ্রুপ
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, index) => (
                  <tr
                    key={member.id}
                    className={index % 2 === 1 ? "bg-paper2/50" : "bg-card"}
                  >
                    <td className="border-b border-line/70 px-4 py-3 font-body text-[13.5px] text-inksoft">
                      {toBengaliNumber(index + 1)}
                    </td>
                    <td className="border-b border-line/70 px-4 py-3">
                      <p className="font-heading text-[15px] font-bold text-ink">
                        {member.name}
                      </p>
                      <p className="font-body text-[12px] text-inksoft">
                        {member.enName}
                      </p>
                    </td>
                    <td className="border-b border-line/70 px-4 py-3">
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded border border-line bg-paper2 px-2 py-0.5 font-body text-[11px] font-medium text-inksoft"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="border-b border-line/70 px-4 py-3 text-center">
                      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded border border-red px-1.5 font-display text-[14px] font-bold text-red">
                        {member.blood}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-4 py-16 text-center">
                    <p className="font-body text-inksoft">কোনো সদস্য পাওয়া যায়নি।</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}