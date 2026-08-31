import ExecutiveCommittee from "@/components/features/committee/ExecutiveCommittee";
import MembersDirectory from "@/components/features/committee/MembersDirectory";

export const metadata = {
  title: "Committee & Members - SAM",
  description: "Executive committee and member directory of Student Association of Malipathor.",
};

export default function CommitteePage() {
  return (
    <>
      <ExecutiveCommittee />
      <MembersDirectory />
    </>
  );
}