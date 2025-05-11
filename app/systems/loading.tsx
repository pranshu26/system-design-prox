import { Skeleton } from "@/components/ui/skeleton"

export default function SystemsLoading() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <Skeleton className="h-12 w-[400px] mx-auto mb-4" />
        <Skeleton className="h-6 w-[600px] mx-auto" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <Skeleton className="aspect-video w-full" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Skeleton className="h-6 w-[150px]" />
                  <Skeleton className="h-6 w-[80px] rounded-full" />
                </div>
                <Skeleton className="h-4 w-full mb-6" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
