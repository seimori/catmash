"use client";

import { VoteLayout } from "../components/layout/VoteLayout/VoteLayout";
import { VoteCard } from "../components/ui/VoteCard/VoteCard";
import { useGetDuelingCats } from "../hooks/useGetDuelingCats";

export default function Home() {
  const { firstDuelingCat, secondDuelingCat, isLoading, error, refetch } =
    useGetDuelingCats();

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
      <VoteLayout>
        <VoteCard cat={firstDuelingCat} refetch={refetch} />
        <VoteCard cat={secondDuelingCat} refetch={refetch} />
      </VoteLayout>
    </>
  );
}
