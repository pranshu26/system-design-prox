import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import Image from "next/image"

// Define the systems data
const systems = {
  "url-shortener": {
    title: "URL Shortener",
    description: "A system that converts long URLs into shorter, more manageable links",
    image: "/url-shortener-system-diagram.png",
    complexity: "Beginner",
    components: [
      { name: "Client", description: "Web or mobile application that users interact with" },
      { name: "Load Balancer", description: "Distributes incoming requests across multiple API servers" },
      { name: "API Server", description: "Handles URL shortening, redirection, and analytics" },
      { name: "Database", description: "Stores the mapping between short and long URLs" },
      { name: "Cache", description: "Stores frequently accessed URLs for faster retrieval" },
    ],
    challenges: [
      "Generating unique short keys that are collision-resistant",
      "Handling high read-to-write ratio efficiently",
      "Ensuring the system can scale to handle billions of URLs",
      "Preventing abuse and spam",
    ],
    designConsiderations: [
      "Using a hash function vs. incremental ID for generating short URLs",
      "Database choice: NoSQL vs. SQL for URL mappings",
      "Caching strategy to optimize for read-heavy workload",
      "Analytics and tracking capabilities",
    ],
  },
  "social-media": {
    title: "Social Media Platform",
    description: "A scalable architecture for handling posts, comments, and user interactions",
    image: "/social-media-system-diagram.png",
    complexity: "Intermediate",
    components: [
      { name: "Client", description: "Web or mobile application that users interact with" },
      { name: "CDN", description: "Delivers static assets and cached content to users" },
      { name: "Load Balancer", description: "Distributes incoming requests across multiple servers" },
      { name: "API Server", description: "Handles user authentication, posts, comments, and other interactions" },
      { name: "User Database", description: "Stores user profiles, relationships, and authentication data" },
      { name: "Post Database", description: "Stores posts, comments, likes, and other content" },
      { name: "Cache", description: "Stores frequently accessed data like news feeds and trending posts" },
      { name: "Search Service", description: "Indexes and searches posts, users, and other content" },
    ],
    challenges: [
      "Designing a scalable news feed system",
      "Handling real-time notifications and updates",
      "Managing complex social relationships and privacy settings",
      "Scaling to millions of concurrent users",
    ],
    designConsiderations: [
      "Push vs. pull model for news feed generation",
      "Database sharding strategies for user and post data",
      "Caching strategies for different types of content",
      "Real-time communication protocols (WebSockets, Server-Sent Events)",
    ],
  },
  "e-commerce": {
    title: "E-Commerce Platform",
    description: "A robust system for product listings, user carts, and payment processing",
    image: "/e-commerce-system-diagram.png",
    complexity: "Intermediate",
    components: [
      { name: "Client", description: "Web or mobile application that users interact with" },
      { name: "CDN", description: "Delivers static assets and product images to users" },
      { name: "Load Balancer", description: "Distributes incoming requests across multiple servers" },
      { name: "Web Server", description: "Serves the e-commerce website and handles user interactions" },
      { name: "API Server", description: "Handles product listings, cart management, and checkout" },
      { name: "Product Database", description: "Stores product information, inventory, and categories" },
      { name: "User Database", description: "Stores user profiles, addresses, and order history" },
      { name: "Order Database", description: "Stores order information, status, and payment details" },
      { name: "Payment Service", description: "Processes payments and communicates with payment gateways" },
      { name: "Cache", description: "Stores frequently accessed data like product listings and user carts" },
    ],
    challenges: [
      "Maintaining inventory consistency during high-traffic sales",
      "Ensuring secure and reliable payment processing",
      "Handling product search and recommendation at scale",
      "Managing cart abandonment and checkout optimization",
    ],
    designConsiderations: [
      "Inventory management system design",
      "Payment processing workflow and security",
      "Search and recommendation engine architecture",
      "Order fulfillment and shipping integration",
    ],
  },
  "video-streaming": {
    title: "Video Streaming Service",
    description: "Architecture for storing, processing, and delivering video content at scale",
    image: "/video-streaming-system-diagram.png",
    complexity: "Advanced",
    components: [
      { name: "Client", description: "Web, mobile, or TV application that users interact with" },
      { name: "CDN", description: "Delivers video content to users from edge locations" },
      { name: "Load Balancer", description: "Distributes incoming requests across multiple servers" },
      { name: "API Server", description: "Handles user authentication, content metadata, and playback control" },
      { name: "Metadata Database", description: "Stores video metadata, categories, and user preferences" },
      { name: "User Database", description: "Stores user profiles, viewing history, and subscriptions" },
      { name: "Encoding Service", description: "Processes and encodes videos into multiple formats and qualities" },
      { name: "Storage", description: "Stores raw and encoded video files" },
      { name: "Recommendation Service", description: "Generates personalized content recommendations" },
      { name: "Analytics Service", description: "Tracks viewing patterns and content performance" },
    ],
    challenges: [
      "Delivering high-quality video with minimal buffering",
      "Scaling to handle millions of concurrent streams",
      "Optimizing storage and delivery costs",
      "Providing personalized content recommendations",
    ],
    designConsiderations: [
      "Video encoding and adaptive bitrate streaming",
      "Content delivery network (CDN) architecture",
      "Storage tiering for hot and cold content",
      "Recommendation system design",
    ],
  },
  "ride-sharing": {
    title: "Ride Sharing Application",
    description: "System for matching riders with drivers and handling real-time location data",
    image: "/ride-sharing-system-diagram.png",
    complexity: "Advanced",
    components: [
      { name: "Client", description: "Mobile application for riders and drivers" },
      { name: "Load Balancer", description: "Distributes incoming requests across multiple servers" },
      { name: "API Server", description: "Handles ride requests, matching, and payment processing" },
      { name: "User Database", description: "Stores user profiles, payment methods, and ride history" },
      { name: "Driver Database", description: "Stores driver information, vehicle details, and availability" },
      { name: "Ride Database", description: "Stores ride information, routes, and status" },
      { name: "Geospatial Service", description: "Manages location data and proximity searches" },
      { name: "Matching Service", description: "Pairs riders with nearby available drivers" },
      { name: "Routing Service", description: "Calculates optimal routes and estimated arrival times" },
      { name: "Payment Service", description: "Processes payments between riders and drivers" },
      { name: "Notification Service", description: "Sends real-time updates to riders and drivers" },
    ],
    challenges: [
      "Efficiently matching riders with drivers in real-time",
      "Handling geospatial data and proximity searches at scale",
      "Ensuring reliable real-time communication",
      "Optimizing for surge pricing and demand prediction",
    ],
    designConsiderations: [
      "Geospatial indexing and search algorithms",
      "Real-time matching and dispatch system",
      "Dynamic pricing model implementation",
      "Fault tolerance for critical ride operations",
    ],
  },
  "chat-application": {
    title: "Real-time Chat Application",
    description: "Architecture for instant messaging with presence indicators and notifications",
    image: "/chat-application-system-diagram.png",
    complexity: "Intermediate",
    components: [
      { name: "Client", description: "Web or mobile application that users interact with" },
      { name: "Load Balancer", description: "Distributes incoming requests across multiple servers" },
      { name: "API Server", description: "Handles user authentication, message history, and settings" },
      { name: "WebSocket Server", description: "Maintains persistent connections for real-time messaging" },
      { name: "Message Database", description: "Stores message history and conversation metadata" },
      { name: "User Database", description: "Stores user profiles, contacts, and settings" },
      { name: "Redis", description: "Manages presence information and pub/sub for real-time updates" },
      { name: "Notification Service", description: "Sends push notifications for new messages" },
    ],
    challenges: [
      "Delivering messages in real-time with minimal latency",
      "Scaling to handle millions of concurrent connections",
      "Managing presence information (online/offline status)",
      "Ensuring message delivery and consistency",
    ],
    designConsiderations: [
      "WebSocket vs. long polling for real-time communication",
      "Message delivery guarantees and ordering",
      "Presence system design",
      "Offline message delivery and synchronization",
    ],
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const system = systems[params.id as keyof typeof systems]

  if (!system) {
    return {
      title: "System Not Found | SystemDesignPro",
      description: "The requested system design could not be found",
    }
  }

  return {
    title: `${system.title} System Design | SystemDesignPro`,
    description: system.description,
  }
}

export default function SystemPage({ params }: { params: { id: string } }) {
  const systemId = params.id
  const system = systems[systemId as keyof typeof systems]

  if (!system) {
    notFound()
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/systems">
          <Button variant="outline" size="sm">
            ← Back to Systems
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{system.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{system.description}</p>

          <div className="flex items-center gap-2 mb-8">
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                system.complexity === "Beginner"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : system.complexity === "Intermediate"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              }`}
            >
              {system.complexity} Level
            </span>
          </div>

          <div className="aspect-video relative rounded-lg overflow-hidden border mb-8">
            <Image
              src={system.image || `/placeholder.svg?height=400&width=800&query=${system.title}+System+Diagram`}
              alt={`${system.title} System Diagram`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="border rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Try It Yourself</h2>
            <p className="text-muted-foreground mb-6">
              Explore this system design in our interactive playground or practice implementing it in an interview
              setting.
            </p>
            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link href={`/playground/editor?template=${systemId}`}>Open in Playground</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/interview/practice/${systemId}`}>Practice in Interview</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">System Components</h2>
          <div className="space-y-4">
            {system.components.map((component, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold">{component.name}</h3>
                <p className="text-muted-foreground">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Design Challenges</h2>
          <ul className="space-y-2 list-disc pl-5">
            {system.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Design Considerations</h2>
          <ul className="space-y-2 list-disc pl-5">
            {system.designConsiderations.map((consideration, index) => (
              <li key={index}>{consideration}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Related Systems</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(systems)
            .filter(([id]) => id !== systemId)
            .slice(0, 3)
            .map(([id, relatedSystem]) => (
              <Link href={`/systems/${id}`} key={id}>
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-bold">{relatedSystem.title}</h3>
                  <p className="text-sm text-muted-foreground">{relatedSystem.complexity} Level</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
