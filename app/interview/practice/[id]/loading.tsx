import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InterviewPracticeLoading() {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/interview">
          <Button variant="outline" size="sm">
            ← Back to Interview Questions
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <Skeleton className="h-12 w-[300px]" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-[80px] rounded-full" />
            <Skeleton className="h-8 w-[100px] rounded-full" />
            <Skeleton className="h-8 w-[100px] rounded-full" />
          </div>
        </div>
        <Skeleton className="h-6 w-full max-w-[800px]" />
      </div>

      <div className="mb-4">
        <Skeleton className="h-10 w-[400px]" />
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg">
          <div className="p-6 border-b">
            <Skeleton className="h-6 w-[200px]" />
          </div>
          <div className="p-6">
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>

        <div className="border rounded-lg">
          <div className="p-6 border-b">
            <Skeleton className="h-6 w-[200px]" />
          </div>
          <div className="p-0">
            <div className="h-[500px] bg-slate-50 dark:bg-slate-900 flex items-center justify-center border-t">
              <Skeleton className="h-12 w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
