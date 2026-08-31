import AboutHero from "@/components/features/about/AboutHero";
import StorySection from "@/components/features/about/StorySection";
import CommitteeSection from "@/components/features/about/CommitteeSection";

export const metadata = {
  title: "About Us - SAM",
  description: "Student Association of Malipathor (SAM) - Our history, mission, and vision.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <CommitteeSection />
    </>
  );
}