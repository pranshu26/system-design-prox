import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Explore Systems | SystemDesignPro",
  description: "Explore various system architectures and learn how they work",
}

const systems = [
  {
    id: "url-shortener",
    title: "URL Shortener",
    description: "A system that converts long URLs into shorter, more manageable links",
    image: "/placeholder.svg?key=o6szj",
    complexity: "Beginner",
  },
  {
    id: "social-media",
    title: "Social Media Platform",
    description: "A scalable architecture for handling posts, comments, and user interactions",
    image: "/placeholder.svg?key=t8i42",
    complexity: "Intermediate",
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    description: "A robust system for product listings, user carts, and payment processing",
    image: "/placeholder.svg?key=fhme6",
    complexity: "Intermediate",
  },
  {
    id: "video-streaming",
    title: "Video Streaming Service",
    description: "Architecture for storing, processing, and delivering video content at scale",
    image: "/placeholder.svg?key=kcdx1",
    complexity: "Advanced",
  },
  {
    id: "ride-sharing",
    title: "Ride Sharing Application",
    description: "System for matching riders with drivers and handling real-time location data",
    image: "/placeholder.svg?key=ze8xi",
    complexity: "Advanced",
  },
  {
    id: "chat-application",
    title: "Real-time Chat Application",
    description: "Architecture for instant messaging with presence indicators and notifications",
    image: "/chat-application-system-diagram.png",
    complexity: "Intermediate",
  },
]

export default function SystemsPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Explore System Architectures</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Study real-world system designs and understand how they're built to handle scale, reliability, and performance
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {systems.map((system) => (
          <Card key={system.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={system.image || "/placeholder.svg"}
                alt={`${system.title} System Diagram`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{system.title}</CardTitle>
                  <CardDescription>{system.description}</CardDescription>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    system.complexity === "Beginner"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : system.complexity === "Intermediate"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                  }`}
                >
                  {system.complexity}
                </span>
              </div>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/systems/${system.id}`}>Explore System</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
