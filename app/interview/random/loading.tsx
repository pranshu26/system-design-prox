export default function RandomQuestionLoading() {
  return (
    <div className="container py-20 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-lg">Finding a random question for you...</p>
      </div>
    </div>
  )
}
