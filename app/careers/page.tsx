import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign } from "lucide-react"
import { JobApplicationModal } from "@/components/job-application-modal"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Salesforce Developer",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹6-12 LPA",
      description:
        "Join our team as a Salesforce Developer. We provide comprehensive training and 100% placement guarantee.",
      requirements: ["Salesforce certification preferred", "Problem solving skills", "Willingness to learn"],
    },
    {
      title: "Java Developer",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹5-10 LPA",
      description: "Opportunity for Java developers with training support and guaranteed placement assistance.",
      requirements: ["Java fundamentals", "Object-oriented programming", "Database knowledge"],
    },
    {
      title: "Python Developer",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹5-11 LPA",
      description: "Python development role with comprehensive training program and placement support.",
      requirements: ["Python basics", "Web frameworks knowledge", "Analytical thinking"],
    },
    {
      title: "Web Developer",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹4-9 LPA",
      description: "Full-stack web development position with training in modern technologies and job placement.",
      requirements: ["HTML/CSS/JavaScript", "React/Angular preferred", "Portfolio required"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Training Programs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your IT career with KN IT Solution. We offer comprehensive training with 100% placement guarantee.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>
                <CardDescription className="text-base">{job.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <JobApplicationModal jobTitle={job.title}>
                  <Button className="w-full bg-accent hover:bg-accent/90">Apply Now</Button>
                </JobApplicationModal>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your IT Career?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us to learn more about our training programs and placement opportunities. We provide 24x7 job and
            technology support.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Us Today
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
