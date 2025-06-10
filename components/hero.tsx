import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            AS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Ayush Singhai
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-2">Full Stack Software Developer</p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
            Computer Engineering Student at IIIT Sri City | Backend Engineering & AI Enthusiast
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <Button asChild variant="ghost" size="icon" className="h-12 w-12">
            <Link href="https://github.com/ayush31o5" target="_blank">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-12 w-12">
            <Link href="https://www.linkedin.com/in/ayush-singhai-72931b258/" target="_blank">
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-12 w-12">
            <Link href="https://leetcode.com/u/Ayushsinghai" target="_blank">
              <ExternalLink className="h-6 w-6" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-12 w-12">
            <Link href="mailto:ayushsinghai3105@gmail.com">
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
