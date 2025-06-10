import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ayush Singhai - Full Stack Developer",
  description:
    "Portfolio of Ayush Singhai, Computer Engineering student at IIIT Sri City specializing in full-stack development, backend engineering, and AI/ML.",
  keywords: ["Ayush Singhai", "Full Stack Developer", "Backend Engineer", "IIIT Sri City", "AI/ML", "Portfolio"],
  authors: [{ name: "Ayush Singhai" }],
  openGraph: {
    title: "Ayush Singhai - Full Stack Developer",
    description:
      "Portfolio of Ayush Singhai, Computer Engineering student specializing in full-stack development and AI/ML.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
