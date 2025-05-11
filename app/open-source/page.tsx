import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Star, Code2, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Open Source | SystemDesignPro",
  description: "SystemDesignPro is 100% free and open source. Learn how to contribute and join our community.",
}

export default function OpenSourcePage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">100% Free & Open Source</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          SystemDesignPro is completely free and open source. No paywalls, no premium tiers, just high-quality system
          design education for everyone.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button asChild size="lg">
            <a href="https://github.com/pranshu26/system-design-prox" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/pranshu26/system-design-prox/stargazers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="mr-2 h-5 w-5" />
              Star the Project
            </a>
          </Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code2 className="mr-2 h-5 w-5" />
              Why Open Source?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We believe that knowledge about system design should be accessible to everyone. By making SystemDesignPro
              open source:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>We ensure the content remains free forever</li>
              <li>We leverage collective knowledge from the community</li>
              <li>We maintain transparency in how the platform works</li>
              <li>We enable continuous improvement through community contributions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>SystemDesignPro is built by the community, for the community. Join us to:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Contribute to the codebase and content</li>
              <li>Report bugs and suggest improvements</li>
              <li>Help others learn system design</li>
              <li>Connect with like-minded engineers</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <a href="https://discord.gg/systemdesignpro" target="_blank" rel="noopener noreferrer">
                Join Discord Community
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Contribute</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Code Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Help improve the platform by contributing code. Fix bugs, add features, or improve performance.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://github.com/pranshu26/system-design-prox/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Open Issues
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Help create and improve learning materials, system design examples, and interview questions.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://github.com/pranshu26/system-design-prox/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Content Guidelines
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spread the Word</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Help others discover SystemDesignPro by sharing it on social media and with your network.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20out%20SystemDesignPro%20-%20a%20free%20and%20open-source%20platform%20for%20learning%20system%20design!%20https://systemdesignpro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share on Twitter
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Our Contributors</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          SystemDesignPro is made possible by the contributions of these amazing people. Join them in making system
          design education accessible to everyone.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* Placeholder for contributor avatars */}
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-muted"></div>
            ))}
        </div>
        <Button asChild>
          <a
            href="https://github.com/pranshu26/system-design-prox/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Contributors
          </a>
        </Button>
      </div>
    </div>
  )
}
