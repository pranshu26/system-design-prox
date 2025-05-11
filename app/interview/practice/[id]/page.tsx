import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { notFound } from "next/navigation"

// Define the interview questions data
const questions = {
  "design-twitter": {
    title: "Design Twitter",
    difficulty: "Hard",
    categories: ["Social Media", "Feed", "Real-time"],
    description:
      "Design a simplified version of Twitter where users can post tweets, follow other users, and see a timeline of tweets from users they follow.",
    requirements: [
      "Users should be able to post tweets (short text messages)",
      "Users can follow other users",
      "Users should see a timeline of tweets from users they follow",
      "Support for likes and retweets",
      "Support for hashtags and searching tweets",
    ],
    constraints: [
      "The system should handle high read-to-write ratio (more reads than writes)",
      "Timeline generation should be efficient",
      "The system should be highly available",
    ],
    hints: [
      "Consider how to handle the feed generation: pull model vs. push model",
      "Think about database sharding strategies for user and tweet data",
      "Consider caching strategies for popular tweets and user timelines",
    ],
  },
  "design-url-shortener": {
    title: "Design a URL Shortener",
    difficulty: "Medium",
    categories: ["Web Service", "Hashing"],
    description:
      "Design a service like TinyURL that shortens long URLs to shorter ones and redirects users when they access the short URL.",
    requirements: [
      "Given a long URL, the service should generate a shorter, unique URL",
      "When users access the short URL, they should be redirected to the original long URL",
      "Users should be able to specify a custom short URL",
      "The system should track analytics like click counts",
    ],
    constraints: [
      "The system should be highly available",
      "URL redirection should happen in real-time with minimal latency",
      "Shortened URLs should not be predictable",
    ],
    hints: [
      "Consider different approaches for generating short URLs: hashing, base62 encoding, etc.",
      "Think about database choice for storing URL mappings",
      "Consider caching strategies for frequently accessed URLs",
    ],
  },
  "design-netflix": {
    title: "Design Netflix",
    difficulty: "Hard",
    categories: ["Streaming", "Content Delivery", "Recommendations"],
    description: "Design a video streaming service like Netflix that can serve millions of users with minimal latency.",
    requirements: [
      "Users should be able to browse and search for videos",
      "The system should stream videos with minimal buffering",
      "Support for multiple video quality levels based on user's internet speed",
      "Personalized recommendations for users",
      "Support for multiple devices (web, mobile, smart TVs)",
    ],
    constraints: [
      "The system should handle millions of concurrent streams",
      "Video delivery should be fast and reliable globally",
      "Storage costs should be optimized",
    ],
    hints: [
      "Consider content delivery network (CDN) architecture",
      "Think about video encoding and adaptive bitrate streaming",
      "Consider recommendation system design",
      "Think about storage tiering for hot and cold content",
    ],
  },
  "design-chat-app": {
    title: "Design a Chat Application",
    difficulty: "Medium",
    categories: ["Messaging", "Real-time", "Presence"],
    description:
      "Design a real-time chat application like WhatsApp or Facebook Messenger that supports one-on-one and group conversations.",
    requirements: [
      "Support for one-on-one messaging",
      "Support for group chats",
      "Message status (sent, delivered, read)",
      "Online/offline status indicators",
      "Push notifications for new messages",
    ],
    constraints: [
      "Messages should be delivered in real-time with minimal latency",
      "The system should handle millions of concurrent users",
      "Messages should be stored persistently",
    ],
    hints: [
      "Consider WebSockets vs. long polling for real-time communication",
      "Think about message delivery guarantees and ordering",
      "Consider presence system design",
      "Think about offline message delivery",
    ],
  },
  "design-rate-limiter": {
    title: "Design a Rate Limiter",
    difficulty: "Medium",
    categories: ["API", "Security", "Throttling"],
    description:
      "Design a rate limiter that can restrict the number of requests a client can make to an API within a specific time window.",
    requirements: [
      "Limit the number of requests a client can make within a time window",
      "Support different rate limits for different endpoints or user tiers",
      "Return appropriate HTTP status codes when rate limit is exceeded",
      "Provide headers indicating rate limit status",
    ],
    constraints: [
      "The rate limiter should add minimal latency to API requests",
      "The system should be distributed and handle high throughput",
      "Rate limit information should be consistent across multiple API servers",
    ],
    hints: [
      "Consider different algorithms: token bucket, leaky bucket, fixed window, sliding window",
      "Think about where to store rate limit data: in-memory, Redis, etc.",
      "Consider how to handle distributed rate limiting across multiple servers",
    ],
  },
  "design-google-drive": {
    title: "Design Google Drive",
    difficulty: "Hard",
    categories: ["Storage", "Synchronization", "Sharing"],
    description:
      "Design a file storage and sharing service like Google Drive that allows users to store, sync, and share files across devices.",
    requirements: [
      "Users should be able to upload, download, and delete files",
      "Files should be synchronized across multiple devices",
      "Support for file sharing and permissions",
      "Support for file versioning",
      "Support for collaborative editing",
    ],
    constraints: [
      "The system should handle large files efficiently",
      "Storage should be reliable and durable",
      "Synchronization should be fast and bandwidth-efficient",
    ],
    hints: [
      "Consider chunking strategies for large file uploads",
      "Think about metadata vs. actual file storage",
      "Consider conflict resolution strategies for concurrent edits",
      "Think about efficient synchronization algorithms",
    ],
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const question = questions[params.id as keyof typeof questions]

  if (!question) {
    return {
      title: "Question Not Found | SystemDesignPro",
      description: "The requested interview question could not be found",
    }
  }

  return {
    title: `${question.title} - Interview Practice | SystemDesignPro`,
    description: question.description,
  }
}

export default function InterviewPracticePage({ params }: { params: { id: string } }) {
  const questionId = params.id
  const question = questions[questionId as keyof typeof questions]

  if (!question) {
    notFound()
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/interview">
          <Button variant="outline" size="sm">
            ← Back to Interview Questions
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h1 className="text-4xl font-bold">{question.title}</h1>
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                question.difficulty === "Easy"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : question.difficulty === "Medium"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              }`}
            >
              {question.difficulty}
            </span>
            {question.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xl text-muted-foreground">{question.description}</p>
      </div>

      <Tabs defaultValue="practice">
        <TabsList className="mb-4">
          <TabsTrigger value="practice">Practice Mode</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="hints">Hints</TabsTrigger>
          <TabsTrigger value="solution">Solution Approach</TabsTrigger>
        </TabsList>

        <TabsContent value="practice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Practice Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Use the whiteboard below to design your solution. You can draw components, connections, and add notes to
                explain your design decisions.
              </p>
              <p className="mb-4">
                Approach this as you would in a real interview. Start by clarifying requirements, then work through the
                high-level design, and finally dive into specific components as needed.
              </p>
              <p>
                Remember to consider scalability, reliability, and performance in your design. You can use the hints tab
                if you get stuck.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Whiteboard</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-slate-50 dark:bg-slate-900 h-[500px] flex items-center justify-center border-t">
                <div className="text-center p-6">
                  <p className="text-muted-foreground mb-4">
                    The whiteboard feature is coming soon. For now, you can use our playground to create your design.
                  </p>
                  <Button asChild>
                    <Link href={`/playground/editor?template=blank`}>Open in Playground</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requirements">
          <Card>
            <CardHeader>
              <CardTitle>Functional Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {question.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Non-Functional Requirements & Constraints</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {question.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hints">
          <Card>
            <CardHeader>
              <CardTitle>Hints & Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                If you're stuck, here are some hints to guide your thinking. Try to solve the problem on your own before
                looking at these.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                {question.hints.map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="solution">
          <Card>
            <CardHeader>
              <CardTitle>Solution Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-md">
                <p className="text-center text-muted-foreground">
                  The detailed solution will be revealed after you've spent some time on the problem. Try solving it
                  first!
                </p>
                <div className="mt-6 text-center">
                  <Button variant="outline">Reveal Solution</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">Related Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(questions)
            .filter(([id]) => id !== questionId)
            .slice(0, 3)
            .map(([id, q]) => (
              <Link href={`/interview/practice/${id}`} key={id} className="block">
                <div className="border rounded-lg p-4 hover:border-primary transition-colors h-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{q.title}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        q.difficulty === "Easy"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : q.difficulty === "Medium"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {q.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{q.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
