import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const metadata: Metadata = {
  title: "System Design Playground | SystemDesignPro",
  description: "Create, visualize, and test your own system designs in our interactive playground",
}

const templates = [
  {
    id: "blank",
    title: "Blank Canvas",
    description: "Start from scratch with an empty canvas",
    image: "/blank-system-design-canvas.png",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description: "A system that converts long URLs into shorter, more manageable links",
    image: "/url-shortener-template.png",
  },
  {
    id: "social-media",
    title: "Social Media Platform",
    description: "A scalable architecture for handling posts, comments, and user interactions",
    image: "/social-media-system-template.png",
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    description: "A robust system for product listings, user carts, and payment processing",
    image: "/e-commerce-system-template.png",
  },
  {
    id: "video-streaming",
    title: "Video Streaming Service",
    description: "Architecture for storing, processing, and delivering video content at scale",
    image: "/video-streaming-template.png",
  },
  {
    id: "chat-application",
    title: "Real-time Chat Application",
    description: "Architecture for instant messaging with presence indicators and notifications",
    image: "/chat-app-template.png",
  },
]

export default function PlaygroundPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">System Design Playground</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Create, visualize, and test your own system designs in our interactive playground
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link href="/playground/editor">Start from Scratch</Link>
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Start with a Template</h2>
        <p className="text-muted-foreground mb-6">Choose a template to jumpstart your system design</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={template.image || "/placeholder.svg"}
                alt={`${template.title} Template`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{template.title}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/playground/editor?template=${template.id}`}>Use Template</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-muted p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Interactive Playground Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Design Your System</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Drag and drop components onto the canvas</li>
              <li>Connect components to show data flow</li>
              <li>Customize component labels and properties</li>
              <li>Arrange components to create clear system diagrams</li>
              <li>Save your designs for future reference</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Simulate and Test</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Run simulations to visualize data flow</li>
              <li>Zoom and pan to navigate complex diagrams</li>
              <li>Edit your design in real-time</li>
              <li>Learn from pre-built system templates</li>
              <li>Understand system design patterns through practice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
