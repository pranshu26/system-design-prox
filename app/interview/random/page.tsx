import { redirect } from "next/navigation"

// Define the interview questions
const questionIds = [
  "design-twitter",
  "design-url-shortener",
  "design-netflix",
  "design-chat-app",
  "design-rate-limiter",
  "design-google-drive",
]

export default function RandomQuestionPage() {
  // Get a random question ID
  const randomIndex = Math.floor(Math.random() * questionIds.length)
  const randomQuestionId = questionIds[randomIndex]

  // Redirect to the random question
  redirect(`/interview/practice/${randomQuestionId}`)
}
