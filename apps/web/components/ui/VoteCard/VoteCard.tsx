"use client";

import styles from "./VoteCard.module.css";
import { ImageFrame } from "../ImageFrame/ImageFrame";
import { Button } from "../Button/Button";
import { Cat } from "../../../types";
import { incrementCatScore } from "../../../utils/incrementCatScore";

export const VoteCard = ({
  cat,
  refetch,
}: {
  cat: Cat;
  refetch: () => void;
}) => {
  return (
    <div className={styles.voteCard}>
      <ImageFrame imageData={{ src: cat.url }} />
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => {
            incrementCatScore(cat.id);
            refetch();
          }}
        >
          J'aime
        </Button>
      </div>
    </div>
  );
};
