import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function ProfessionalProjects() {
  const professinal_projects = [
    {
      company: "MULTIMEME",
      linkedin: "https://github.com/ayush31o5", // (no company LinkedIn, so using GitHub)
      role: "AI Research Intern",
      duration: "August 2025 – October 2025",
      location: "Remote",
      type: "Completed",
      description: [
        "Developed multimodal meme classification pipeline with OpenCV + Transformers on a 50k dataset",
        "Boosted F1 score to 0.87 using joint CNN embeddings and vision-language models",
        "Deployed inference microservice in Flask, achieving 50 FPS on CPU and 150 FPS on GPU",
      ],
      technologies: ["OpenCV", "Transformers", "CNNs", "Flask", "PyTorch", "Vision-Language Models"],
    },
  ]

  return (
    <section id="professinal_projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Professinal Projects
        </h2>

        <div className="space-y-8">
          {professinal_projects.map((exp, idx) => (
            <Card
              key={idx}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.role}</CardTitle>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Building className="h-4 w-4" />
                      <Link
                        href={exp.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </Link>
                    </div>
                  </div>
                  <Badge
                    variant={exp.type === "Current" ? "default" : "secondary"}
                    className="w-fit"
                  >
                    {exp.type}
                  </Badge>
                </div>

                <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-slate-600 dark:text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-blue-600 mt-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
