import Image from "next/image";
import { Mail, Quote } from "lucide-react"; 

const committeeMembers = [
  {
    id: 1,
    name: "Moinul Hossain Sourav",
    designation: "প্রতিষ্ঠাতা (Founder)",
    image: "/Sourav.jpg",
    quote: "শিক্ষাই আলো, সেবাই ধর্ম। মালিপাথরকে একটি আদর্শ গ্রামে পরিণত করাই আমাদের লক্ষ্য।",
  },
  {
    id: 2,
    name: "Nuruddin Bhuiyan Jewel",
    designation: "প্রতিষ্ঠাতা (Founder)",
    image: "/Jewel.jpg",
    quote: "একতাবদ্ধ সমাজই আমাদের মূল শক্তি। তরুণরাই পারে সমাজের সত্যিকারের পরিবর্তন আনতে।",
  },
  {
    id: 3,
    name: "Abdullah Al Noman",
    designation: "সভাপতি (২০২৫-২০২৬)",
    image: "/Noman.jpg",
    quote: "তরুণদের নেতৃত্বেই আগামীর সুন্দর মালিপাথর। আমরা একসাথে কাজ করে যাব।",
  },
  {
    id: 4,
    name: "Md. Faruk Hossen",
    designation: "সাধারণ সম্পাদক (২০২৫-২০২৬)",
    image: "/faruk.jpg",
    quote: "স্বচ্ছতা, নিষ্ঠা ও ভালোবাসার সাথে সমাজের প্রতিটি মানুষের পাশে দাঁড়াতে চাই।",
  },
  {
    id: 5,
    name: "Md. Shakawat Hossain Faravi",
    designation: "Technology & Innovation Secretary",
    image: "/faravi(me).png",
    highlight: true, 
    quote: "প্রযুক্তির ছোঁয়ায় বদলে যাবে আমাদের গ্রাম। ডিজিটাল সমাজ গড়ার প্রত্যয়ে আমরা।",
  },
];

export default function CommitteeSection() {
  return (
    <section className="bg-paper2 py-16 lg:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-3 md:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <span className="mb-2 inline-block font-body text-[0.65rem] font-bold uppercase tracking-[0.24em] text-red md:mb-3 md:text-[0.72rem]">
            Leadership
          </span>
          <h2 className="mb-3 font-display text-2xl font-bold text-ink md:mb-4 md:text-3xl lg:text-4xl">
            Core Executive Committee
          </h2>
          <p className="mx-auto max-w-2xl font-body text-[13px] leading-relaxed text-inksoft md:text-[15px]">
            যাদের নিরলস পরিশ্রমে SAM আজ এই পর্যায়ে। আমাদের প্রতিষ্ঠাতা, বর্তমান কার্যনির্বাহী পর্ষদ এবং টেকনিক্যাল টিমের মূল কারিগরগণ।
          </p>
        </div>

        {/* Grid Layout: 2 per row on Mobile, 3 per row on PC */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8">
          {committeeMembers.map((member) => (
            <div 
              key={member.id} 
              /* Mobile: 50% width (minus gap), Tablet: 50%, PC: 33% */
              className="group relative flex w-[calc(50%-6px)] max-w-[340px] flex-col items-center overflow-hidden rounded-[20px] border border-line bg-card p-4 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md sm:w-[calc(50%-12px)] sm:p-6 md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%-22px)]"
            >
              {/* Image Container: Smaller on mobile, bigger on PC */}
              <div className="relative mb-3 h-[90px] w-[90px] overflow-hidden rounded-full border-[3px] border-paper2 shadow-inner sm:mb-5 sm:h-[150px] sm:w-[150px]">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  sizes="(max-width: 640px) 90px, 150px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-grow flex-col items-center text-center">
                <h3 className="mb-1 font-heading text-[14px] font-bold leading-tight text-ink sm:mb-1.5 sm:text-[17px]">
                  {member.name}
                </h3>
                
                {/* Special Highlight for Faravi */}
                {member.highlight ? (
                  <span className="mb-3 inline-block rounded-pill bg-green/10 px-2 py-0.5 font-body text-[10px] font-bold text-green sm:mb-4 sm:px-3 sm:py-1 sm:text-[12px]">
                    {member.designation}
                  </span>
                ) : (
                  <p className="mb-3 font-body text-[11px] font-medium text-inksoft sm:mb-4 sm:text-[13px]">
                    {member.designation}
                  </p>
                )}

                {/* Personal Quote */}
                <div className="relative mt-auto w-full px-2">
                  <Quote className="absolute -left-1 -top-2 h-3 w-3 text-red/20 sm:-left-2 sm:-top-3 sm:h-5 sm:w-5" />
                  <p className="font-display text-[11px] italic leading-relaxed text-inksoft sm:text-[13px]">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-4 flex items-center justify-center gap-2 border-t border-line/40 pt-3 opacity-80 transition-opacity group-hover:opacity-100 sm:mt-5 sm:gap-3 sm:pt-4">
                
                {/* Facebook Custom SVG */}
                <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-inksoft transition-colors hover:bg-green hover:text-white sm:h-9 sm:w-9">
                  <svg className="h-[12px] w-[12px] fill-current sm:h-4 sm:w-4" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                
                {/* Mail Icon (from Lucide) */}
                <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-inksoft transition-colors hover:bg-green hover:text-white sm:h-9 sm:w-9">
                  <Mail className="h-[12px] w-[12px] sm:h-4 sm:w-4" />
                </a>

                {/* LinkedIn Custom SVG (Only for Faravi) */}
                {member.highlight && (
                  <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-inksoft transition-colors hover:bg-green hover:text-white sm:h-9 sm:w-9">
                    <svg className="h-[12px] w-[12px] fill-current sm:h-4 sm:w-4" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}