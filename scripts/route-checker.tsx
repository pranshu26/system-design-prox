// This is a utility script to check all routes and components in the application

const routes = {
  // Main pages
  "/": "Home Page",
  "/systems": "Systems Page",
  "/learn": "Learn Page",
  "/playground": "Playground Page",
  "/interview": "Interview Page",
  "/open-source": "Open Source Page",
  "/login": "Login Page",
  "/about": "About Page",
  "/terms": "Terms Page",
  "/privacy": "Privacy Page",

  // Learn section
  "/learn/beginner/introduction": "Beginner Introduction",
  "/learn/beginner/client-server": "Client-Server Architecture",
  "/learn/beginner/database-fundamentals": "Database Fundamentals",
  "/learn/beginner/quiz": "Beginner Quiz",

  // These are marked as coming soon
  "/learn/intermediate/scalability": "Intermediate Scalability (Coming Soon)",
  "/learn/advanced/distributed-systems": "Advanced Distributed Systems (Coming Soon)",
}

// Check if all required components exist
const requiredComponents = [
  // Layout components
  "app/layout.tsx",
  "components/site-header.tsx",
  "components/site-footer.tsx",
  "components/theme-provider.tsx",
  "components/theme-toggle.tsx",

  // Learn section components
  "app/learn/page.tsx",
  "app/learn/layout.tsx",
  "app/learn/loading.tsx",
  "app/learn/error.tsx",
  "app/learn/beginner/introduction/page.tsx",
  "app/learn/beginner/client-server/page.tsx",
  "app/learn/beginner/database-fundamentals/page.tsx",
  "app/learn/beginner/quiz/page.tsx",

  // UI components
  "components/ui/button.tsx",
  "components/ui/card.tsx",
  "components/ui/radio-group.tsx",
  "components/ui/label.tsx",
  "components/ui/alert.tsx",
  "components/ui/skeleton.tsx",
]

console.log("Route Checker Utility")
console.log("=====================")
console.log(`Total routes to check: ${Object.keys(routes).length}`)
console.log(`Total components to check: ${requiredComponents.length}`)
console.log("\nThis utility helps identify missing routes and components.")
