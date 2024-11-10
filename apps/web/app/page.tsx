import { VoteLayout } from "../components/layout/VoteLayout/VoteLayout";
import { VoteCard } from "../components/ui/VoteCard/VoteCard";
import { getDuelingCats } from "../utils/getDuelingCats";

export default async function Home() {
  const [firstDuelingCat, secondDuelingCat] = await getDuelingCats();

  if (!firstDuelingCat || !secondDuelingCat) {
    throw new Error("Unable to fetch the dueling cats");
  }

  return (
    <>
      <VoteLayout>
        <VoteCard cat={firstDuelingCat} />
        <VoteCard cat={secondDuelingCat} />
      </VoteLayout>
    </>
  );
}
