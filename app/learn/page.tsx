import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Learn System Design | SystemDesignPro",
  description: "Learn system design concepts from beginner to advanced with our comprehensive learning paths",
}

export default function LearnPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Learn System Design</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Master system design with our structured learning paths, from fundamentals to advanced concepts
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Beginner Path</CardTitle>
            <CardDescription>Perfect for those new to system design</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Introduction to System Design</li>
              <li>Client-Server Architecture</li>
              <li>Database Fundamentals</li>
              <li>API Basics</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/learn/beginner/introduction" className="w-full">
              <Button className="w-full">Start Learning</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intermediate Path</CardTitle>
            <CardDescription>For those with basic understanding</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Scalability Patterns</li>
              <li>Caching Strategies</li>
              <li>Load Balancing</li>
              <li>Database Sharding</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/learn/intermediate/scalability" className="w-full">
              <Button className="w-full" variant="outline">
                Coming Soon
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced Path</CardTitle>
            <CardDescription>For experienced engineers</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Distributed Systems</li>
              <li>Microservices Architecture</li>
              <li>System Design Interviews</li>
              <li>Case Studies</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/learn/advanced/distributed-systems" className="w-full">
              <Button className="w-full" variant="outline">
                Coming Soon
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
