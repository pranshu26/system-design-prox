import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "System Design Interview Practice | SystemDesignPro",
  description: "Practice system design interviews with real-world questions and detailed solutions",
}

const questions = [
  {
    id: "design-twitter",
    title: "Design Twitter",
    difficulty: "Hard",
    categories: ["Social Media", "Feed", "Real-time"],
    description:
      "Design a simplified version of Twitter where users can post tweets, follow other users, and see a timeline of tweets from users they follow.",
  },
  {
    id: "design-url-shortener",
    title: "Design a URL Shortener",
    difficulty: "Medium",
    categories: ["Web Service", "Hashing"],
    description:
      "Design a service like TinyURL that shortens long URLs to shorter ones and redirects users when they access the short URL.",
  },
  {
    id: "design-netflix",
    title: "Design Netflix",
    difficulty: "Hard",
    categories: ["Streaming", "Content Delivery", "Recommendations"],
    description: "Design a video streaming service like Netflix that can serve millions of users with minimal latency.",
  },
  {
    id: "design-chat-app",
    title: "Design a Chat Application",
    difficulty: "Medium",
    categories: ["Messaging", "Real-time", "Presence"],
    description:
      "Design a real-time chat application like WhatsApp or Facebook Messenger that supports one-on-one and group conversations.",
  },
  {
    id: "design-rate-limiter",
    title: "Design a Rate Limiter",
    difficulty: "Medium",
    categories: ["API", "Security", "Throttling"],
    description:
      "Design a rate limiter that can restrict the number of requests a client can make to an API within a specific time window.",
  },
  {
    id: "design-google-drive",
    title: "Design Google Drive",
    difficulty: "Hard",
    categories: ["Storage", "Synchronization", "Sharing"],
    description:
      "Design a file storage and sharing service like Google Drive that allows users to store, sync, and share files across devices.",
  },
]

export default function InterviewPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">System Design Interview Practice</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Practice with real-world system design interview questions and detailed solutions
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link href="/interview/random">Start Random Question</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {questions.map((question) => (
          <Card key={question.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{question.title}</CardTitle>
                <Badge
                  variant={
                    question.difficulty === "Easy"
                      ? "outline"
                      : question.difficulty === "Medium"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {question.difficulty}
                </Badge>
              </div>
              <CardDescription>{question.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {question.categories.map((category) => (
                  <Badge key={category} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={`/interview/questions/${question.id}`}>View Details</Link>
              </Button>
              <Button asChild>
                <Link href={`/interview/practice/${question.id}`}>Practice Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
