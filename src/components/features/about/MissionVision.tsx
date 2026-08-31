import { Target, Lightbulb } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-greendeep py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red text-white shadow-lg">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
              Our Mission (আমাদের লক্ষ্য)
            </h3>
            <p className="font-body text-base leading-relaxed text-white/70">
              মালিপাথর গ্রামের প্রতিটি শিক্ষার্থীকে আধুনিক শিক্ষায় উৎসাহিত করা, ঝরে পড়া রোধ করা এবং তাদের ক্যারিয়ার গঠনে সঠিক দিকনির্দেশনা প্রদান করা। সেই সাথে সামাজিক দায়বদ্ধতা থেকে রক্তদান, বৃক্ষরোপণ এবং অসহায় মানুষের পাশে দাঁড়ানোর মাধ্যমে একটি আদর্শ সমাজ গঠন করা।
            </p>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-ink shadow-lg">
              <Lightbulb className="h-7 w-7" />
            </div>
            <h3 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
              Our Vision (আমাদের রূপকল্প)
            </h3>
            <p className="font-body text-base leading-relaxed text-white/70">
              একটি দারিদ্র্যমুক্ত, শতভাগ শিক্ষিত এবং পরিবেশবান্ধব মালিপাথর গ্রাম গড়ে তোলা, যা সমগ্র বাংলাদেশের জন্য একটি দৃষ্টান্ত হিসেবে কাজ করবে। আমরা চাই আমাদের তরুণেরা শুধু গ্রামের নয়, বরং দেশের সম্পদে পরিণত হোক।
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}