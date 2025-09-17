import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Building2 } from "lucide-react"

const projects = [
  {
    title: "Tech Giant Partnership",
    description:
      "Successfully placed 50+ software engineers at leading technology companies including startups and Fortune 500 firms.",
    image: "/business-networking-event.png",
    technologies: ["Software Engineering", "Full Stack", "DevOps", "Cloud"],
    category: "Mass Recruitment",
  },
  {
    title: "Healthcare IT Specialists",
    description:
      "Specialized placement of healthcare IT professionals for digital transformation projects in medical institutions.",
    image: "/professional-training-session-with-laptops-and-lea.jpg",
    technologies: ["Healthcare IT", "HIPAA Compliance", "EMR Systems", "Data Security"],
    category: "Specialized Placement",
  },
  {
    title: "Fintech Talent Pipeline",
    description:
      "Built a continuous talent pipeline for fintech companies, placing blockchain developers and financial analysts.",
    image: "/professional-office.png",
    technologies: ["Blockchain", "Financial Analysis", "Risk Management", "Compliance"],
    category: "Industry Focus",
  },
  {
    title: "Startup Ecosystem Support",
    description: "Helped 25+ startups build their core technical teams from ground up with the right talent mix.",
    image: "/career-counseling-session-with-consultant-and-clie.jpg",
    technologies: ["MVP Development", "Scaling Teams", "Technical Leadership", "Agile"],
    category: "Startup Support",
  },
  {
    title: "Remote Work Solutions",
    description: "Pioneered remote placement strategies, successfully placing 200+ professionals in distributed teams.",
    image: "/business-networking-event.png",
    technologies: ["Remote Collaboration", "Digital Communication", "Project Management", "Time Zones"],
    category: "Remote Placement",
  },
  {
    title: "Executive Search Program",
    description: "High-level executive placements including CTOs, Engineering Directors, and VP of Technology roles.",
    image: "/professional-training-session-with-laptops-and-lea.jpg",
    technologies: ["Leadership", "Strategic Planning", "Team Building", "Technology Vision"],
    category: "Executive Search",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Discover how we've successfully connected talented professionals with leading companies, creating win-win
            partnerships that drive innovation and career growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Building2 className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Success Stories
          </Button>
        </div>
      </div>
    </section>
  )
}
