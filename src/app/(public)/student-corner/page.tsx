import StudentHero from "@/components/features/student-corner/StudentHero";
import StudentResources from "@/components/features/student-corner/StudentResources";

export const metadata = {
  title: "Student Corner - SAM",
  description: "Career guidelines, scholarships, and admission support for the students of Malipathor.",
};

export default function StudentCornerPage() {
  return (
    <>
      <StudentHero />
      <StudentResources />
    </>
  );
}