import { Skeleton } from "@/components/ui/skeleton"

export default function LearnLoading() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <Skeleton className="h-12 w-[300px] mx-auto mb-4" />
        <Skeleton className="h-6 w-[600px] mx-auto" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <Skeleton className="h-8 w-[200px] mb-2" />
              <Skeleton className="h-4 w-[250px] mb-6" />

              <div className="space-y-2 mb-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[180px]" />
              </div>

              <Skeleton className="h-10 w-full" />
            </div>
          ))}
      </div>
    </div>
  )
}
