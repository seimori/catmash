import { Cat } from "../../types";

export async function getDuelingCats(): Promise<Cat[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cats/random?limit=2`
  );
  if (!response.ok) {
    throw new Error("Error while fetching dueling cats");
  }

  return response.json();
}
