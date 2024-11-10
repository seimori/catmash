"use client";

import styles from "./VoteCard.module.css";
import { ImageFrame } from "../ImageFrame/ImageFrame";
import { Button } from "../Button/Button";
import { Cat } from "../../../types";
import { incrementCatScore } from "../../../utils/incrementCatScore";

export const VoteCard = ({ cat }: { cat: Cat }) => {
  return (
    <div className={styles.voteCard}>
      <ImageFrame imageData={{ src: cat.url }} />
      <Button onClick={() => incrementCatScore(cat.id)}>J'aime</Button>
    </div>
  );
};
