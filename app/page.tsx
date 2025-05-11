import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">SystemDesignPro</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn, practice, and master system design with our free and open-source platform
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button asChild size="lg">
            <Link href="/systems">Explore Systems</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/playground">Try Playground</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Learn System Design</CardTitle>
            <CardDescription>Comprehensive learning paths for all levels</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              From fundamentals to advanced concepts, our structured learning paths help you master system design step
              by step.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/learn">Start Learning</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Playground</CardTitle>
            <CardDescription>Design and test your own systems</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Use our interactive playground to create, visualize, and test your own system designs in a hands-on
              environment.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/playground">Open Playground</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interview Preparation</CardTitle>
            <CardDescription>Practice with real interview questions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Prepare for system design interviews with our collection of real-world questions and detailed solutions.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/interview">Practice Now</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">100% Free & Open Source</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          SystemDesignPro is completely free and open source. No paywalls, no premium tiers, just high-quality system
          design education for everyone.
        </p>
        <Button asChild variant="outline">
          <a href="https://github.com/pranshu26/system-design-prox" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  )
}
