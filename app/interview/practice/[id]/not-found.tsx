import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function QuestionNotFound() {
  return (
    <div className="container py-20 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Question Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The interview question you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default">
            <Link href="/interview">Browse All Questions</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
