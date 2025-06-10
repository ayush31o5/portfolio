import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a passionate Computer Engineering student at IIIT Sri City with hands-on experience in full-stack
              development, backend engineering, and AI/ML. Currently working as a Backend Engineering and Agentric AI
              Intern at The HAC, where I focus on building scalable APIs and AI-driven solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              My expertise spans across modern web technologies, cloud deployment, and machine learning. I've
              successfully deployed applications on AWS, worked with microservices architecture, and developed
              innovative solutions like OCR systems and gesture recognition models.
            </p>
          </div>

          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">IIIT Sri City</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">B.Tech Computer Engineering</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Expected May 2026</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Graduation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Andhra Pradesh, India</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Location</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
