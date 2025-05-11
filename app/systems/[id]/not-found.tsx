import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SystemNotFound() {
  return (
    <div className="container py-20 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">System Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The system design you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default">
            <Link href="/systems">Browse All Systems</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
