"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// বাংলা সংখ্যা কনভার্টার
const toBengaliNumber = (num: number) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, x => banglaDigits[parseInt(x)]);
};

// ছবিগুলোর ইচ্ছাকৃত ভিন্ন Ratio (আরও কিছু ডামি ছবি যোগ করা হয়েছে পেজিনেশন দেখার জন্য)
const galleryData = [
  { id: 1, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=760&fit=crop", cat: "Education", caption: "ক্যারিয়ার গাইডলাইন সেমিনার" },
  { id: 2, src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=420&h=520&fit=crop", cat: "Environment", caption: "সবুজ মালিপাথর প্রকল্প" },
  { id: 3, src: "https://images.unsplash.com/photo-1615461065624-21b562ee5566?w=380&h=700&fit=crop", cat: "Health", caption: "ব্লাড ডোনেশন ক্যাম্পেইন" },
  { id: 4, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=460&h=400&fit=crop", cat: "Relief", caption: "শীতবস্ত্র বিতরণ" },
  { id: 5, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=560&h=440&fit=crop", cat: "Education", caption: "ডিজিটাল লিটারেসি প্রোগ্রাম" },
  { id: 6, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&h=620&fit=crop", cat: "Team", caption: "প্রতিষ্ঠাতা সদস্যদের মিলনমেলা" },
  { id: 7, src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=500&fit=crop", cat: "Education", caption: "লাইব্রেরি স্থাপন" },
  { id: 8, src: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=600&fit=crop", cat: "Health", caption: "করোনা মহামারী সহায়তা" },
  { id: 9, src: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=500&h=400&fit=crop", cat: "Education", caption: "সায়েন্স অলিম্পিয়াড" },
  { id: 10, src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop", cat: "Relief", caption: "ফ্রি মেডিকেল ক্যাম্প" },
];

const categories = ["All", "Education", "Environment", "Health", "Relief", "Team"];
const ITEMS_PER_PAGE = 6; // প্রতি পেজে কয়টি ছবি দেখাবে তা এখান থেকে কন্ট্রোল করা যাবে

export default function GallerySection() {
  const [activeCat, setActiveCat] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Lightbox States
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Filter & Pagination Logic
  const filteredData = activeCat === "All" ? galleryData : galleryData.filter(img => img.cat === activeCat);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentItems = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Reset page to 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCat]);

  // ⭐️ নতুন পেজ চেঞ্জ হ্যান্ডলার: পেজ চেঞ্জ হওয়ার সাথে সাথে স্ক্রোল করে উপরে নিয়ে যাবে
  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
    setTimeout(() => {
      const section = document.getElementById("gallery-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  // Lightbox Navigation Methods
  const openLightbox = (absoluteIndex: number) => {
    setCurrentIndex(absoluteIndex);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const nextImg = useCallback(() => setCurrentIndex((p) => (p + 1) % filteredData.length), [filteredData.length]);
  const prevImg = useCallback(() => setCurrentIndex((p) => (p === 0 ? filteredData.length - 1 : p - 1)), [filteredData.length]);

  // Swipe Handler
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextImg();
    if (touchStart - touchEnd < -50) prevImg();
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLightbox, nextImg, prevImg]);

  return (
    // ⭐️ id="gallery-section" এবং scroll-mt-24 যোগ করা হয়েছে
    <section id="gallery-section" className="bg-paper2 py-16 scroll-mt-24 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8">
        
        {/* Header & Filter Chips */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl font-bold text-ink">ফটোগ্যালারি</h2>
            <p className="mt-2 font-body text-[14px] text-inksoft">আমাদের কাজের কিছু স্থিরচিত্র</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:justify-end">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`rounded-full border border-line px-4 py-1.5 font-body text-[12px] font-semibold transition-colors sm:text-[13px] ${
                  activeCat === c ? "bg-ink text-paper" : "bg-card text-inksoft hover:bg-ink/10 hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid (Paginated) */}
        <div className="columns-2 gap-3 sm:gap-[16px] lg:columns-3">
          {currentItems.map((item, index) => {
            // Calculate absolute index in the filtered array for the lightbox
            const absoluteIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
            
            return (
              <div 
                key={item.id} 
                onClick={() => openLightbox(absoluteIndex)}
                className="group relative mb-3 w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-[12px] bg-card shadow-sm sm:mb-[16px] sm:rounded-[16px]"
              >
                <img 
                  src={item.src} 
                  alt={item.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Zoom Icon Hint */}
                <div className="absolute right-2 top-2 hidden h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 sm:flex sm:right-3 sm:top-3">
                  <ZoomIn className="h-4 w-4" />
                </div>

                {/* Caption Overlay */}
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-1 bg-gradient-to-t from-[rgba(14,24,18,0.82)] to-transparent p-3 pt-8 opacity-100 transition-all duration-[350ms] group-hover:translate-y-0 group-hover:opacity-100 sm:p-5 sm:pt-10 lg:translate-y-4 lg:opacity-0">
                  <div className="mb-1 inline-block rounded-sm bg-white/20 px-1.5 py-0.5 font-body text-[8.5px] uppercase tracking-wider text-white backdrop-blur-md sm:px-2 sm:text-[10px]">
                    {item.cat}
                  </div>
                  <h4 className="font-heading text-[12px] font-medium leading-snug text-white sm:text-[15px]">
                    {item.caption}
                  </h4>
                </figcaption>
              </div>
            );
          })}
        </div>

        {/* --- Pagination Controls --- */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {/* Prev Button */}
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-transparent text-ink transition-colors hover:bg-card disabled:opacity-40 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-heading text-[15px] font-bold transition-all ${
                      currentPage === pageNum 
                        ? "bg-ink text-white shadow-md" 
                        : "bg-transparent text-inksoft hover:bg-line/50 hover:text-ink"
                    }`}
                  >
                    {toBengaliNumber(pageNum)}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-transparent text-ink transition-colors hover:bg-card disabled:opacity-40 disabled:hover:bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[rgba(15,23,17,0.94)] p-4 backdrop-blur-sm animate-in fade-in">
          
          {/* Top Controls */}
          <div className="absolute right-4 top-4 z-50 md:right-8 md:top-8">
            <button onClick={closeLightbox} className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-red md:h-[48px] md:w-[48px]">
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>

          {/* Main Image Wrapper with Swipe */}
          <div 
            className="relative flex w-full max-w-[920px] flex-col items-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Nav Prev (PC Only) */}
            <button onClick={prevImg} className="absolute -left-16 top-1/2 hidden h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-ink md:flex">
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative flex max-h-[65vh] w-[92vw] max-w-[920px] items-center justify-center overflow-hidden rounded-[14px] md:max-h-[70vh]">
              <img 
                key={filteredData[currentIndex].id} // Force re-render animation on change
                src={filteredData[currentIndex].src} 
                alt={filteredData[currentIndex].caption} 
                className="max-h-[65vh] w-auto max-w-full object-contain duration-300 animate-in fade-in zoom-in-95 md:max-h-[70vh]"
              />
            </div>

            {/* Nav Next (PC Only) */}
            <button onClick={nextImg} className="absolute -right-16 top-1/2 hidden h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-ink md:flex">
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Caption & Counter (Bottom) */}
            <div className="mt-4 flex w-full flex-col items-center justify-between gap-3 text-center md:mt-6 md:flex-row md:text-left">
              <div>
                <span className="font-body text-[10px] font-bold uppercase tracking-wider text-green md:text-[11px]">
                  {filteredData[currentIndex].cat}
                </span>
                <h3 className="mt-1 font-heading text-lg font-medium text-white md:text-2xl">
                  {filteredData[currentIndex].caption}
                </h3>
              </div>
              
              <div className="font-body text-base font-medium text-white/50 md:text-lg">
                {toBengaliNumber(currentIndex + 1)} / {toBengaliNumber(filteredData.length)}
              </div>
            </div>

            {/* Mobile Nav Controls (Bottom Center) */}
            <div className="mt-6 flex gap-4 md:hidden">
              <button onClick={prevImg} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md active:bg-white active:text-ink">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={nextImg} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md active:bg-white active:text-ink">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}