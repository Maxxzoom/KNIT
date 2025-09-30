import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Building, Users, Star, Filter, Search } from "lucide-react"
import { JobApplicationModal } from "@/components/job-application-modal"

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Salesforce Developer",
      department: "Engineering",
      location: "Pune, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹12-18 LPA",
      description: "We are looking for an experienced Salesforce Developer to design and implement customized Salesforce solutions for our clients.",
      requirements: ["Salesforce Platform Developer I certification", "3+ years Salesforce development experience", "Apex, Visualforce, Lightning Web Components", "Salesforce integration patterns"],
      postedDate: "2 days ago",
      urgent: true,
      featured: true
    },
    {
      id: 2,
      title: "Full Stack Java Developer",
      department: "Engineering",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8-15 LPA",
      description: "Join our core product team to build scalable enterprise applications using modern Java technologies.",
      requirements: ["Java 8+, Spring Boot", "React/Angular experience", "Microservices architecture", "SQL/NoSQL databases"],
      postedDate: "1 week ago",
      urgent: false,
      featured: true
    },
    {
      id: 3,
      title: "Python Data Engineer",
      department: "Data Science",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹10-16 LPA",
      description: "Design and build data pipelines and ETL processes for our data analytics platform.",
      requirements: ["Python, Pandas, PySpark", "SQL and data modeling", "AWS/Azure data services", "ETL pipeline development"],
      postedDate: "3 days ago",
      urgent: true,
      featured: false
    },
    {
      id: 4,
      title: "Frontend Developer (React)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹7-14 LPA",
      description: "Build responsive and performant user interfaces for our enterprise SaaS products.",
      requirements: ["React.js, TypeScript", "Redux/Context API", "CSS-in-JS, Styled Components", "Testing with Jest"],
      postedDate: "5 days ago",
      urgent: false,
      featured: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Pune, India",
      type: "Full-time",
      experience: "4-7 years",
      salary: "₹14-20 LPA",
      description: "Manage cloud infrastructure and implement CI/CD pipelines for our development teams.",
      requirements: ["AWS/Azure certification", "Kubernetes, Docker", "Terraform/CloudFormation", "Jenkins, GitLab CI"],
      postedDate: "1 week ago",
      urgent: false,
      featured: true
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Data Science",
      location: "Bengaluru, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹12-18 LPA",
      description: "Develop machine learning models and provide data-driven insights for business decisions.",
      requirements: ["Python, R, SQL", "Machine learning frameworks", "Statistical analysis", "Data visualization"],
      postedDate: "2 weeks ago",
      urgent: false,
      featured: false
    },
    {
      id: 7,
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      location: "Pune, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      description: "Design and implement automated testing frameworks for our software products.",
      requirements: ["Selenium, Cypress", "TestNG/JUnit", "API testing", "Performance testing"],
      postedDate: "4 days ago",
      urgent: false,
      featured: false
    },
    {
      id: 8,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹18-25 LPA",
      description: "Lead product strategy and work with cross-functional teams to deliver customer value.",
      requirements: ["Product management experience", "Agile methodology", "Market research", "Data analysis skills"],
      postedDate: "3 days ago",
      urgent: true,
      featured: true
    },
    {
      id: 9,
      title: "UX/UI Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹8-14 LPA",
      description: "Create intuitive and beautiful user experiences for our digital products.",
      requirements: ["Figma, Sketch", "User research", "Prototyping", "Design systems"],
      postedDate: "1 week ago",
      urgent: false,
      featured: false
    },
    {
      id: 10,
      title: "Cloud Solutions Architect",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "6-10 years",
      salary: "₹20-30 LPA",
      description: "Design and implement cloud-native solutions for enterprise clients.",
      requirements: ["AWS/Azure Solutions Architect", "Cloud security", "System design", "Consulting experience"],
      postedDate: "2 days ago",
      urgent: false,
      featured: true
    },
    {
      id: 11,
      title: "Technical Lead",
      department: "Engineering",
      location: "Pune, India",
      type: "Full-time",
      experience: "7-12 years",
      salary: "₹22-35 LPA",
      description: "Lead technical teams and drive architecture decisions for complex projects.",
      requirements: ["Team leadership", "System architecture", "Agile methodologies", "Mentoring experience"],
      postedDate: "1 week ago",
      urgent: true,
      featured: true
    },
    {
      id: 12,
      title: "Business Analyst",
      department: "Business",
      location: "Delhi, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹9-13 LPA",
      description: "Bridge the gap between business needs and technical solutions.",
      requirements: ["Requirements gathering", "Process modeling", "Stakeholder management", "Documentation"],
      postedDate: "5 days ago",
      urgent: false,
      featured: false
    }
  ]

  const departments = ["All", "Engineering", "Data Science", "Product", "Design", "Infrastructure", "Quality Assurance", "Business"]
  const locations = ["All", "Pune", "Bengaluru", "Hyderabad", "Mumbai", "Delhi", "Remote"]
  const jobTypes = ["All", "Full-time", "Part-time", "Contract"]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 py-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Build Your Career With Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join our team of innovators and problem-solvers. Explore opportunities that match your skills and ambitions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800 px-8 py-3">
              Learn About Culture
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Open Positions</div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs by title, skill, or keyword..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Jobs */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Jobs</h2>
            <Button variant="outline" className="text-blue-600 border-blue-600">
              View All Jobs
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.filter(job => job.featured).map((job) => (
              <Card key={job.id} className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Building className="w-4 h-4 mr-1" />
                        {job.department}
                      </CardDescription>
                    </div>
                    {job.urgent && (
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Urgent</Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm text-yellow-600 mb-2">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span>Featured</span>
                  </div>
                  
                  <CardDescription className="text-base">{job.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-green-500" />
                      {job.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="font-semibold">{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      {job.type}
                    </Badge>
                    <span className="text-sm text-gray-500">{job.postedDate}</span>
                  </div>

                  <JobApplicationModal jobTitle={job.title}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Apply Now
                    </Button>
                  </JobApplicationModal>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Jobs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Open Positions</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-gray-900">{job.title}</CardTitle>
                    {job.urgent && (
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Urgent</Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {job.department}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span>{job.experience}</span>
                  </div>
                  
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm font-semibold text-gray-700">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                    <span className="text-sm text-gray-500">{job.postedDate}</span>
                  </div>

                  <div className="flex gap-2">
                    <JobApplicationModal jobTitle={job.title}>
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        Apply Now
                      </Button>
                    </JobApplicationModal>
                    <Button variant="outline" className="flex-1">
                      Save Job
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Find the Perfect Role?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll contact you 
            when a position matches your profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              Submit Your Resume
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
              Contact Recruiter
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}