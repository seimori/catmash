"use client";

import styles from "./VoteCard.module.css";
import { ImageFrame } from "../ImageFrame/ImageFrame";
import { Button } from "../Button/Button";
import { Cat } from "../../../types";
import { incrementCatScore } from "../../../utils/actions/incrementCatScore";

export const VoteCard = ({
  cat,
  refetch,
  incrementDuelCount,
}: {
  cat: Cat;
  refetch: () => void;
  incrementDuelCount: () => void;
}) => {
  return (
    <div className={styles.voteCard}>
      <ImageFrame imageData={{ src: cat.url }} />
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => {
            incrementCatScore(cat.id);
            refetch();
            incrementDuelCount();
          }}
        >
          J'aime
        </Button>
      </div>
    </div>
  );
};
