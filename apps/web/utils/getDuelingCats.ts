import { Cat } from "../types";

export async function getDuelingCats(): Promise<Cat[]> {
  const response = await fetch(`${process.env.API_URL}/cats/random?limit=2`);
  const duelingCats: Cat[] = await response.json();

  return duelingCats;
}
