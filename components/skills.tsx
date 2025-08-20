import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Brain, Cloud } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Code className="h-5 w-5" />,
      skills: ["Django", "Flask", "Node.js", "Express.js", "React.js", "jQuery"],
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Oracle SQL", "AWS (EC2, S3, EKS)", "Kubernetes", "Redis"],
    },
    {
      title: "Tools & Systems",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Docker", "Git/GitHub", "Linux/UNIX", "Windows", "Visual Studio Code", "Nginx"],
    },
    {
      title: "AI/ML & GenAI",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        "Machine Learning",
        "Deep Learning (CNNs, RNNs)",
        "NLP & Chatbots",
        "Generative AI (Prompt Engineering, RAG)",
        "Hugging Face Transformers",
        "LangChain",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "OCR Pipelines",
      ],
    },
    {
      title: "DevOps & Deployment",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        "CI/CD",
        "Microservices Architecture",
        "AWS Kubernetes (EKS)",
        "Docker Compose",
        "Gunicorn",
        "NGINX",
        "Prometheus & Grafana",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white/30 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="text-blue-600">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {skill}
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
