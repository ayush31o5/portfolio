import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Eye } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Job Finder Platform with Blogging Feature",
      status: "Completed",
      description:
        "A comprehensive job finder platform developed with guidance from Dr. Himanghu Sarma and Dr. Dorsala Mallikarjun Reddy, Assistant Professors at IIIT Sri City.",
      features: [
        "Full-stack job search and posting functionality",
        "Integrated blogging system for career insights",
        "JWT-based authentication system",
        "File upload capabilities with Cloudinary integration",
        "Email notifications via Nodemailer",
      ],
      technologies: ["Node.js", "Express.js", "React.js", "Vite", "MongoDB", "JWT", "Cloudinary"],
      links: {
        demo: "https://cubicles.netlify.app/",
        github: "https://github.com/Cubicles2024/Cubicals-main",
      },
    },
    {
      title: "OCR Text Extraction and Structuring",
      status: "Completed",
      description:
        "Advanced OCR system for Hindi/Devanagari text extraction developed in collaboration with Ananya Jain (Google Employee).",
      features: [
        "High-accuracy Hindi/Devanagari text recognition",
        "Intelligent text layout preservation",
        "AI-driven prompt engineering for improved output",
        "Structured formatting with proper spacing and line breaks",
        "Special character recognition and handling",
      ],
      technologies: ["Python", "OCR", "AI/ML", "Prompt Engineering", "Computer Vision"],
      links: {
        github: "https://github.com/ayush31o5/ocr-text-extraction",
      },
    },
    {
      title: "Reddit Sentiment Analysis",
      status: "Completed",
      description:
        "ChatGPT said:Developed a Reddit sentiment analysis pipeline using NLP and machine learning to classify user sentiments with over 85% accuracy.",
      features: [
        "Automated Reddit data collection using PRAW API for large-scale discussion scraping.",
        "Built robust text preprocessing and NLP pipelines (tokenization, lemmatization, TF–IDF).",
        "Trained and compared ML models (Logistic Regression, Random Forest, LSTM) achieving >85% accuracy.",
        "Conducted EDA with visualization tools to uncover sentiment and topic trends.",
        "Packaged the workflow into reproducible Jupyter notebooks with GitHub version control.",
      ],
      technologies: ["Python", "PRAW", "pandas", "NumPy", "NLTK", "scikit-learn", "TensorFlow", "Keras", "matplotlib", "seaborn", "Jupyter Notebook", "GitHub"],
      links: {
        github: "https://github.com/ayush31o5/reddit_sentiment_analysis",
      },
    },
    {
      title: "3D Hand Gesture Recognition",
      status: "Under Review",
      description:
        "Enhanced 3D hand gesture recognition system developed under the guidance of Prof. Dr. Piyush Joshi at IIIT Sri City.",
      features: [
        "Bone joint vector-based pose estimation",
        "Improved accuracy under occlusions",
        "Robust detection for complex hand movements",
        "Real-time gesture processing",
        "3D spatial understanding",
      ],
      technologies: ["Python", "Computer Vision", "3D Modeling", "Machine Learning", "OpenCV"],
      links: {
        github: "https://github.com/ayush31o5/3d-hand-gesture",
      },
    },
    {
      title: "A Comprehensiveness of Aggregation Algorithms in Federated Learning",
      status: "Under Review",
      description:
        "Comprehensive research analyzing and benchmarking nine Federated Learning algorithms, proposing a modular and parallel aggregation framework for efficient distributed training.",
      features: [
        "Comparative study of nine FL algorithms including FedAvg, FedAvgM, FedAdam, MimeLite, and SCAFFOLD",
        "Designed a modular, parallel simulation framework achieving up to 33% faster convergence",
        "Implemented dynamic client selection and secure aggregation under non-IID data conditions",
        "Achieved 86% model accuracy with superior edge-device adaptability (10/10 rating)"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "NumPy", "Matplotlib", "FedML", "OpenFL", "Jupyter Notebook"],
      links: {
        github: "https://github.com/varunTyagarayanG/Fed-Agg",
      },
    },

  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white/30 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "secondary"
                        : project.status === "Under Review"
                          ? "outline"
                          : "default"
                    }
                    className="shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                        >
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.links.demo && (
                      <Button asChild size="sm" className="flex-1">
                        <Link href={project.links.demo} target="_blank">
                          <Eye className="mr-1 h-3 w-3" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <Link href={project.links.github} target="_blank">
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
