import type { ReactNode } from "react"

interface LearnLayoutProps {
  children: ReactNode
}

export default function LearnLayout({ children }: LearnLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}
