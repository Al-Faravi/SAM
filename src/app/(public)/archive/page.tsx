import DigitalArchive from "@/components/features/archive/DigitalArchive";
import GallerySection from "@/components/features/archive/GallerySection";

export const metadata = {
  title: "Archive & Gallery - SAM",
  description: "Explore the rich history, past projects, and photo gallery of Student Association of Malipathor.",
};

export default function ArchivePage() {
  return (
    <>
      <DigitalArchive />
      <GallerySection />
    </>
  );
}