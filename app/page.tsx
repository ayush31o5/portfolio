import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ProfessionalProjects } from "@/components/professinal_projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProfessionalProjects/>
      <Projects />
      <Contact />
    </main>
  )
}
