export async function createGoalCompletion(goalId: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goalId,
    })
  })
}