import { VoteLayout } from "../components/layout/VoteLayout/VoteLayout";
import { VoteCard } from "../components/ui/VoteCard/VoteCard";

export default function Home() {
  return (
    <>
      <VoteLayout>
        <VoteCard />
        <VoteCard />
      </VoteLayout>
    </>
  );
}
