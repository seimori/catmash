"use client";

import { Footer } from "../components/layout/Footer/Footer";
import { MainContent } from "../components/layout/MainContent/MainContent";
import { VoteLayout } from "../components/layout/VoteLayout/VoteLayout";
import { VoteCard } from "../components/ui/VoteCard/VoteCard";
import { useDuelCount } from "../hooks/useDuelCount";
import { useGetDuelingCats } from "../hooks/useGetDuelingCats";

export default function Home() {
  const { firstDuelingCat, secondDuelingCat, isLoading, error, refetch } =
    useGetDuelingCats();
  const { duelCount, incrementDuelCount } = useDuelCount();

  if (error) {
    console.error(error);
    return <div>Error</div>;
  }
  if (isLoading) return <div>...Loading</div>;
  if (!firstDuelingCat || !secondDuelingCat) {
    throw new Error("Problem getting the dueling cats");
  }

  return (
    <>
      <MainContent>
        <VoteLayout>
          <VoteCard
            cat={firstDuelingCat}
            refetch={refetch}
            incrementDuelCount={incrementDuelCount}
          />
          <VoteCard
            cat={secondDuelingCat}
            refetch={refetch}
            incrementDuelCount={incrementDuelCount}
          />
        </VoteLayout>
      </MainContent>
      <Footer duelCount={duelCount}>Voir le classement des chats</Footer>
    </>
  );
}
