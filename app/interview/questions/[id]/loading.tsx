import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function QuestionDetailLoading() {
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

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg">
          <div className="p-6 border-b">
            <Skeleton className="h-6 w-[200px]" />
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>

        <div className="border rounded-lg">
          <div className="p-6 border-b">
            <Skeleton className="h-6 w-[200px]" />
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <Skeleton className="h-12 w-[250px]" />
      </div>

      <Skeleton className="h-px w-full mb-6" />
      <Skeleton className="h-8 w-[200px] mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <Skeleton className="h-6 w-[150px]" />
                <Skeleton className="h-5 w-[60px] rounded-full" />
              </div>
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-3/4 mt-2" />
            </div>
          ))}
      </div>
    </div>
  )
}
