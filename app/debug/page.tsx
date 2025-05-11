"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

// Define all the routes we want to check
const routes = [
  { path: "/", name: "Home" },
  { path: "/systems", name: "Systems" },
  { path: "/learn", name: "Learn" },
  { path: "/learn/beginner/introduction", name: "Learn - Beginner Introduction" },
  { path: "/learn/beginner/client-server", name: "Learn - Client Server" },
  { path: "/learn/beginner/database-fundamentals", name: "Learn - Database Fundamentals" },
  { path: "/learn/beginner/quiz", name: "Learn - Quiz" },
  { path: "/playground", name: "Playground" },
  { path: "/playground/editor", name: "Playground Editor" },
  { path: "/interview", name: "Interview" },
  { path: "/open-source", name: "Open Source" },
  { path: "/about", name: "About" },
  { path: "/terms", name: "Terms" },
  { path: "/privacy", name: "Privacy" },
  { path: "/login", name: "Login" },
]

export default function DebugPage() {
  const [results, setResults] = useState<{ [key: string]: { status: string; error?: string } }>({})
  const [checking, setChecking] = useState(false)

  const checkRoutes = async () => {
    setChecking(true)
    const newResults: { [key: string]: { status: string; error?: string } } = {}

    for (const route of routes) {
      try {
        newResults[route.path] = { status: "checking" }
        setResults({ ...newResults })

        // In a real app, we would check if the route exists and is accessible
        // For this demo, we'll just simulate a check
        await new Promise((resolve) => setTimeout(resolve, 300))

        // Simulate some failures for demonstration
        if (route.path === "/non-existent-route") {
          newResults[route.path] = { status: "error", error: "Route does not exist" }
        } else {
          newResults[route.path] = { status: "success" }
        }

        setResults({ ...newResults })
      } catch (error) {
        newResults[route.path] = { status: "error", error: (error as Error).message }
        setResults({ ...newResults })
      }
    }

    setChecking(false)
  }

  useEffect(() => {
    checkRoutes()
  }, [])

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">System Diagnostics</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          This page helps diagnose issues with the application routes and components.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Route Checker</CardTitle>
            <CardDescription>Verify that all routes are accessible</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {routes.map((route) => (
                <div key={route.path} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center">
                    {results[route.path]?.status === "success" && (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    )}
                    {results[route.path]?.status === "error" && <XCircle className="h-5 w-5 text-red-500 mr-2" />}
                    {(results[route.path]?.status === "checking" || !results[route.path]) && (
                      <div className="h-5 w-5 rounded-full border-2 border-t-transparent border-blue-500 animate-spin mr-2"></div>
                    )}
                    <span>{route.name}</span>
                  </div>
                  <Link href={route.path} target="_blank" className="text-sm text-blue-500 hover:underline">
                    {route.path}
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={checkRoutes} disabled={checking}>
              {checking ? "Checking..." : "Check Routes Again"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Component Checker</CardTitle>
            <CardDescription>Verify that all required components are loaded</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is a diagnostic tool to help identify issues with the application. If you're seeing this page, it
                means you're in debug mode.
              </AlertDescription>
            </Alert>

            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Common issues:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Missing or incorrect imports</li>
                <li>Component errors preventing rendering</li>
                <li>Route configuration issues</li>
                <li>Layout problems</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
            <Button asChild>
              <Link href="/learn">Try Learn Page</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
