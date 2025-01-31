interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({ title, desiredWeeklyFrequency }: CreateGoalRequest) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/goals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency
    })
  })
}