import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "OncoDisha",
      linkedin: "https://www.linkedin.com/company/oncodisha/",
      role: "Software Backend Engineering and Agentric AI and ML Intern",
      duration: "November 2024 – Present",
      location: "Remote",
      type: "Current",
      description: [
        "Working as SDE and Agentric AI Intern at a startup, focusing on backend development and NLP",
        "Building APIs, optimizing backend systems, and developing AI-driven chatbots with intent recognition",
        "Implementing ML models to enhance chatbot interactions and deploying scalable agentric AI solutions",
        "Deploying microservices to AWS Kubernetes clusters",
        "Triage and resolve bugs, continuously updating software to meet client needs",
      ],
      technologies: ["Node.js", "AI/ML", "NLP", "AWS", "Kubernetes", "Microservices"],
    },
    {
      company: "Invent2change",
      linkedin: "https://www.linkedin.com/company/i4c-inventions/",
      role: "Full Stack Software Developer Intern",
      duration: "May 2024 – August 2024",
      location: "Bangalore, IN",
      type: "Completed",
      description: [
        "Developed and deployed a cross-platform web app for seamless document printing over local & network printers",
        "Enabled users to upload files, customize print settings, and send jobs via Wi-Fi Direct or Bluetooth using dynamic QR codes",
        "Integrated Razorpay for secure, per-page payment processing",
        "Deployed on AWS EC2 behind Nginx and Gunicorn, ensuring real-time job tracking, responsive UI, and multi-format support (PDF, DOCX)",
      ],
      technologies: ["Django", "AWS EC2", "Nginx", "Gunicorn", "Razorpay", "QR Codes"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
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
