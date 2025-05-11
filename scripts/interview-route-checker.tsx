// This is a utility script to check all interview routes

const interviewRoutes = [
  "/interview",
  "/interview/random",
  "/interview/questions/design-twitter",
  "/interview/questions/design-url-shortener",
  "/interview/questions/design-netflix",
  "/interview/questions/design-chat-app",
  "/interview/questions/design-rate-limiter",
  "/interview/questions/design-google-drive",
  "/interview/practice/design-twitter",
  "/interview/practice/design-url-shortener",
  "/interview/practice/design-netflix",
  "/interview/practice/design-chat-app",
  "/interview/practice/design-rate-limiter",
  "/interview/practice/design-google-drive",
]

console.log("Interview Route Checker Utility")
console.log("===============================")
console.log(`Total interview routes to check: ${interviewRoutes.length}`)
console.log("\nThis utility helps identify missing interview routes.")

// In a real application, this would make actual HTTP requests to verify the routes
// For this demo, we'll just log the routes
interviewRoutes.forEach((route) => {
  console.log(`Checking route: ${route}`)
})
