import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SystemLoading() {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/systems">
          <Button variant="outline" size="sm">
            ← Back to Systems
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="md:w-2/3">
          <Skeleton className="h-12 w-[300px] mb-4" />
          <Skeleton className="h-6 w-full max-w-[600px] mb-6" />

          <Skeleton className="h-8 w-[120px] rounded-full mb-8" />

          <Skeleton className="aspect-video w-full rounded-lg mb-8" />
        </div>

        <div className="md:w-1/3">
          <div className="border rounded-lg p-6">
            <Skeleton className="h-8 w-[200px] mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-6" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <Skeleton className="h-8 w-[200px] mb-4" />
          <div className="space-y-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <Skeleton className="h-6 w-[150px] mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
          </div>
        </div>

        <div>
          <Skeleton className="h-8 w-[200px] mb-4" />
          <div className="space-y-2">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
          </div>

          <Skeleton className="h-8 w-[250px] mt-8 mb-4" />
          <div className="space-y-2">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
          </div>
        </div>
      </div>

      <Skeleton className="h-px w-full mb-8" />
      <Skeleton className="h-8 w-[200px] mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border rounded-lg p-4">
              <Skeleton className="h-6 w-[150px] mb-2" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          ))}
      </div>
    </div>
  )
}
