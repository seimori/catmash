export async function incrementCatScore(id: number) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cats/${id}/incrementScore`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
  });
}