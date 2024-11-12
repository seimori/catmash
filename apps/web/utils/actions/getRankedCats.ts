import { Cat } from "../../types";

export async function getRankedCats(): Promise<Cat[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cats?limit=100&orderByScore=desc`
  );
  if (!response.ok) {
    throw new Error("Error while fetching cats ranking");
  }

  return response.json();
}