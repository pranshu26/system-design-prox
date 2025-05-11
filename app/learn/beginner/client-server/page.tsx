import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ClientServerPage() {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/learn">
          <Button variant="outline" size="sm">
            ← Back to Learning Paths
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">Client-Server Architecture</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Client-server architecture is a computing model in which the server hosts, delivers, and manages most of the
          resources and services to be consumed by the client. This type of architecture has one server and multiple
          clients.
        </p>

        <div className="my-8 flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=600&query=Client-Server+Architecture+Diagram"
            alt="Client-Server Architecture Diagram"
            width={600}
            height={400}
            className="rounded-lg border"
          />
        </div>

        <h2>Key Components</h2>

        <h3>Client</h3>
        <p>The client is the user-facing application that the end user interacts with. It can be:</p>
        <ul>
          <li>Web browsers (Chrome, Firefox, Safari)</li>
          <li>Mobile applications</li>
          <li>Desktop applications</li>
        </ul>
        <p>Clients request services or resources from the server.</p>

        <h3>Server</h3>
        <p>The server provides services, resources, or functions to clients. Types of servers include:</p>
        <ul>
          <li>Web servers (Apache, Nginx)</li>
          <li>Application servers</li>
          <li>Database servers</li>
          <li>File servers</li>
          <li>Mail servers</li>
        </ul>

        <h2>Communication Flow</h2>
        <ol>
          <li>Client sends a request to the server</li>
          <li>Server processes the request</li>
          <li>Server returns a response to the client</li>
          <li>Client processes and displays the response</li>
        </ol>

        <h2>Advantages of Client-Server Architecture</h2>
        <ul>
          <li>Centralized data storage and management</li>
          <li>Easier maintenance and updates</li>
          <li>Enhanced security through centralized control</li>
          <li>Scalability - can support many clients with few server changes</li>
        </ul>

        <h2>Disadvantages</h2>
        <ul>
          <li>Server can become a single point of failure</li>
          <li>High traffic can lead to performance issues</li>
          <li>Requires continuous network connectivity</li>
          <li>Can be more complex to set up initially</li>
        </ul>
      </div>

      <div className="mt-10 flex justify-between">
        <Link href="/learn/beginner/introduction">
          <Button variant="outline">← Previous: Introduction</Button>
        </Link>
        <Link href="/learn/beginner/database-fundamentals">
          <Button>Next: Database Fundamentals →</Button>
        </Link>
      </div>
    </div>
  )
}
