import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            SystemDesignPro
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/systems" className="text-sm font-medium hover:underline underline-offset-4">
            Systems
          </Link>
          <Link href="/learn" className="text-sm font-medium hover:underline underline-offset-4">
            Learn
          </Link>
          <Link href="/playground" className="text-sm font-medium hover:underline underline-offset-4">
            Playground
          </Link>
          <Link href="/interview" className="text-sm font-medium hover:underline underline-offset-4">
            Interview
          </Link>
          <Link href="/open-source" className="text-sm font-medium hover:underline underline-offset-4">
            Open Source
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
