import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "OncoDisha",
      linkedin: "https://www.linkedin.com/company/oncodisha/",
      role: "Software Backend & AI Intern",
      duration: "November 2024 – April 2025",
      location: "Remote",
      type: "Completed",
      description: [
        "Enhanced an NLP-based patient support chatbot by integrating Hugging Face Transformers with context management and prompt engineering",
        "Built scalable conversational AI microservices on AWS EKS with autoscaling, blue-green deployments, and A/B testing pipelines",
        "Developed OCR-powered prescription analysis using Tesseract, CNN classifiers, and transformer-based NER for accurate medicine extraction",
        "Monitored microservices with Prometheus & Grafana, keeping error rates under 5%",
      ],
      technologies: ["Node.js", "AI/ML", "NLP", "AWS EKS", "Kubernetes", "Microservices", "OCR", "Transformers"],
    },
    {
      company: "Myrix Labs",
      linkedin: "https://www.linkedin.com/company/myrixlabs/",
      role: "Software Development Engineer Intern",
      duration: "Januray 2024 – April 2024",
      location: "Remote",
      type: "Completed",
      description: [
        "Developed RESTful APIs with Express.js for core features and integrations",
        "Implemented secure authentication with JWT and OAuth2 for seamless onboarding",
        "Optimized backend performance with query caching, reducing response times by 30%",
      ],
      technologies: ["Express.js", "Node.js", "JWT", "OAuth2", "MongoDB", "Redis"],
    },
    {
      company: "Zomato",
      linkedin: "https://www.linkedin.com/company/zomato/",
      role: "Software Engineer Intern",
      duration: "May 2025 – July 2025",
      location: "Remote",
      type: "Completed",
      description: [
        "Developed and maintained RESTful APIs(Express.js) powering core product features and third - party integrations.",
        "Implemented secure authentication and authorization mechanisms using JWT and OAuth2, ensuring seamless user onboarding and data protection.",
        "Optimized backend performance through efficient database queries and caching strategies",
      ],
      technologies: ["Express.js", "Node.js", "JWT", "OAuth2","React.js"],
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
        "Integrated Razorpay for secure per-page payments",
        "Deployed on AWS EC2 behind Nginx & Gunicorn, ensuring responsive UI and real-time job tracking",
      ],
      technologies: ["Django", "AWS EC2", "Nginx", "Gunicorn", "Razorpay", "QR Codes"],
    },
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
