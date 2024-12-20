import { Footer } from "../../components/layout/Footer/Footer";
import { MainContent } from "../../components/layout/MainContent/MainContent";
import { RankingLayout } from "../../components/layout/RankingLayout/RankingLayout";
import { getRankedCats } from "../../utils/actions/getRankedCats";
import { RankCard } from "../../components/ui/RankCard/RankCard";
import Link from "next/link";

export default async function Ranking() {
  const cats = await getRankedCats();

  return (
    <>
      <MainContent>
        <RankingLayout>
          {cats.map((cat, index) => (
            <RankCard key={cat.id} cat={cat} rank={index + 1} />
          ))}
        </RankingLayout>
      </MainContent>
      <Footer>
        <Link href="/">Revenir au vote</Link>
      </Footer>
    </>
  );
}
