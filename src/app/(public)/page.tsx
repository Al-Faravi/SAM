import HeroSection from "@/components/features/home/HeroSection";
import SamAtAGlance from "@/components/features/home/SamAtAGlance";
import WhatWeDo from "@/components/features/home/WhatWeDo";
import RecentEventsNews from "@/components/features/home/RecentEventsNews";

import ContactSection from "@/components/features/home/ContactSection"; // <-- ইম্পোর্ট করো

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SamAtAGlance />
      <WhatWeDo />
      <RecentEventsNews />
      <ContactSection /> {/* <-- এখানে যোগ করো */}
      
    </>
  );
}