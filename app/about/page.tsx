import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About SystemDesignPro",
  description: "Learn about our mission to make system design education accessible to everyone",
}

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About SystemDesignPro</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our mission is to make system design education accessible to everyone
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h2>Our Story</h2>
        <p>
          SystemDesignPro was created by a group of software engineers who were frustrated with the lack of accessible,
          high-quality resources for learning system design. Most existing resources were either behind paywalls,
          outdated, or lacked interactive elements that make learning engaging and effective.
        </p>
        <p>We decided to create a platform that would be:</p>
        <ul>
          <li>
            <strong>100% Free and Open Source</strong> - No paywalls, no premium tiers
          </li>
          <li>
            <strong>Interactive</strong> - Learn by doing, not just reading
          </li>
          <li>
            <strong>Comprehensive</strong> - From beginner to advanced topics
          </li>
          <li>
            <strong>Community-driven</strong> - Continuously improved by the community
          </li>
        </ul>

        <h2>Our Mission</h2>
        <p>
          Our mission is to democratize system design education and make it accessible to everyone, regardless of their
          background or financial situation. We believe that understanding how to design scalable, reliable, and
          maintainable systems is a crucial skill for modern software engineers, and everyone should have the
          opportunity to learn it.
        </p>

        <h2>Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 not-prose my-8">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We believe that education should be accessible to everyone, regardless of their background or financial
                situation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We are committed to providing high-quality, accurate, and up-to-date content that reflects industry best
                practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We believe in the power of community and collective knowledge to create something greater than the sum
                of its parts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Continuous Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We are committed to continuously improving our platform based on feedback and emerging best practices.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2>Get Involved</h2>
        <p>
          SystemDesignPro is an open-source project, and we welcome contributions from everyone. Whether you're a
          seasoned software engineer or just starting your journey, there are many ways to get involved:
        </p>
        <ul>
          <li>Contribute code to the platform</li>
          <li>Create or improve learning content</li>
          <li>Report bugs and suggest improvements</li>
          <li>Spread the word about SystemDesignPro</li>
        </ul>

        <div className="flex justify-center my-8 not-prose">
          <Button asChild size="lg">
            <Link href="/open-source">Learn How to Contribute</Link>
          </Button>
        </div>

        <h2>Contact Us</h2>
        <p>Have questions, suggestions, or just want to say hi? We'd love to hear from you!</p>
        <p>
          Email: <a href="mailto:hello@systemdesignpro.com">hello@systemdesignpro.com</a>
          <br />
          Twitter:{" "}
          <a href="https://twitter.com/systemdesignpro" target="_blank" rel="noopener noreferrer">
            @systemdesignpro
          </a>
          <br />
          GitHub:{" "}
          <a href="https://github.com/pranshu26/system-design-prox" target="_blank" rel="noopener noreferrer">
            github.com/pranshu26/system-design-prox
          </a>
        </p>
      </div>
    </div>
  )
}
