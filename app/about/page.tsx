import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About KN IT Solution</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in IT training, placement, and consulting services with 15+ years of excellence
            </p>
          </div>

          {/* Company Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded with a vision to bridge the gap between industry requirements and skilled professionals, KN IT
                Solution has been at the forefront of IT training and placement services for over 15 years.
              </p>
              <p className="text-muted-foreground mb-4">
                Under the leadership of Director Vikram G. Rathod, we have successfully placed over 12,000+ candidates
                in leading IT companies across India and globally.
              </p>
              <p className="text-muted-foreground">
                Our commitment to excellence and 100% placement guarantee has made us a trusted name in the industry.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">12,000+ Placements</h3>
                      <p className="text-muted-foreground">Successful career transformations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">100% Success Rate</h3>
                      <p className="text-muted-foreground">Guaranteed placement assurance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">15+ Years Experience</h3>
                      <p className="text-muted-foreground">Industry expertise and knowledge</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Salesforce Development",
                "Web Development Services",
                "Mobile App Development",
                "Project Outsourcing",
                "Digital Marketing Services",
                "Salesforce Industrial Training",
                "Software Testing",
                "Java Developer Training",
                "Python Developer Training",
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">{service}</h3>
                    <p className="text-muted-foreground text-sm">Professional training and placement services</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To empower individuals with cutting-edge IT skills and connect them with rewarding career
                  opportunities while helping organizations find the right talent for their growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be the leading IT training and placement partner, recognized for our commitment to excellence,
                  innovation, and creating successful career pathways in the technology industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
