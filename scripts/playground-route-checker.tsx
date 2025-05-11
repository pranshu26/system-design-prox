// This is a utility script to check all playground routes

const playgroundRoutes = [
  "/playground",
  "/playground/editor",
  "/playground/editor?template=blank",
  "/playground/editor?template=url-shortener",
  "/playground/editor?template=social-media",
  "/playground/editor?template=e-commerce",
  "/playground/editor?template=video-streaming",
  "/playground/editor?template=chat-application",
]

console.log("Playground Route Checker Utility")
console.log("================================")
console.log(`Total playground routes to check: ${playgroundRoutes.length}`)
console.log("\nThis utility helps identify missing playground routes.")

// In a real application, this would make actual HTTP requests to verify the routes
// For this demo, we'll just log the routes
playgroundRoutes.forEach((route) => {
  console.log(`Checking route: ${route}`)
})
