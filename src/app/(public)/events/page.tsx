import EventsHero from "@/components/features/events/EventsHero";
import EventGallery from "@/components/features/events/EventGallery";

export const metadata = {
  title: "Events & Campaigns - SAM",
  description: "Explore the various social, educational, and environmental campaigns organized by the Student Association of Malipathor.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventGallery />
    </>
  );
}