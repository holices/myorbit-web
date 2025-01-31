export async function createGoalCompletion(goalId: string) {
  await fetch(`https://myorbit-backend.onrender.com/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goalId,
    })
  })
}