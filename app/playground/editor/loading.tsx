export default function Loading() {
  return (
    <div className="container py-10 flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-lg">Loading editor...</p>
      </div>
    </div>
  )
}
