import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 SystemDesignPro. 100% Free & Open Source.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Privacy
          </Link>
          <a
            href="https://github.com/pranshu26/system-design-prox"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
