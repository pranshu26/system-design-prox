import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IntroductionPage() {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/learn">
          <Button variant="outline" size="sm">
            ← Back to Learning Paths
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">Introduction to System Design</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          System design is the process of defining the architecture, components, modules, interfaces, and data for a
          system to satisfy specified requirements. It's a critical skill for software engineers, especially as they
          progress in their careers.
        </p>

        <h2>Why Learn System Design?</h2>
        <p>Understanding system design principles helps you:</p>
        <ul>
          <li>Build scalable and reliable applications</li>
          <li>Make better architectural decisions</li>
          <li>Communicate effectively with other engineers</li>
          <li>Prepare for technical interviews at top companies</li>
        </ul>

        <h2>Key Concepts in System Design</h2>
        <p>Throughout this learning path, we'll cover fundamental concepts including:</p>
        <ul>
          <li>Client-server architecture</li>
          <li>Database design and selection</li>
          <li>API design principles</li>
          <li>Scalability and performance considerations</li>
          <li>Reliability and fault tolerance</li>
        </ul>

        <h2>How to Use This Learning Path</h2>
        <p>
          Each module builds on the previous one, so we recommend following them in order. Take your time to understand
          each concept before moving on. The path includes:
        </p>
        <ul>
          <li>Conceptual explanations</li>
          <li>Visual diagrams</li>
          <li>Practical examples</li>
          <li>Quizzes to test your understanding</li>
        </ul>
      </div>

      <div className="mt-10 flex justify-between">
        <div></div>
        <Link href="/learn/beginner/client-server">
          <Button>Next: Client-Server Architecture →</Button>
        </Link>
      </div>
    </div>
  )
}
