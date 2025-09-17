import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Salesforce Developer",
    company: "TCS",
    image: "/professional-woman-developer.png",
    rating: 5,
    text: "KN IT Solution transformed my career completely. Their Salesforce training was comprehensive and the placement support was exceptional. I got placed in TCS within 2 weeks of completing the course!",
  },
  {
    name: "Rahul Patil",
    role: "Java Developer",
    company: "Infosys",
    image: "/professional-man-developer.png",
    rating: 5,
    text: "The training quality at KN IT Solution is outstanding. Vikram sir's guidance and the practical approach helped me land my dream job at Infosys. Highly recommended for anyone looking to start their IT career.",
  },
  {
    name: "Sneha Desai",
    role: "Python Developer",
    company: "Wipro",
    image: "/professional-woman-programmer.jpg",
    rating: 5,
    text: "I was a complete beginner in programming, but KN IT Solution's structured approach and personalized attention helped me become a confident Python developer. Got placed in Wipro with an excellent package!",
  },
  {
    name: "Amit Kumar",
    role: "Full Stack Developer",
    company: "Accenture",
    image: "/professional-man-software-engineer.jpg",
    rating: 5,
    text: "The 100% placement guarantee is not just a promise - it's a reality! The comprehensive training and interview preparation helped me secure a position at Accenture. Thank you KN IT Solution!",
  },
  {
    name: "Pooja Joshi",
    role: "Software Tester",
    company: "Cognizant",
    image: "/professional-woman-tester.jpg",
    rating: 5,
    text: "KN IT Solution's software testing course was exactly what I needed to switch my career. The hands-on experience and real-world projects prepared me well for my role at Cognizant.",
  },
  {
    name: "Vishal Mehta",
    role: "Digital Marketing Specialist",
    company: "HCL Technologies",
    image: "/professional-man-marketing-specialist.jpg",
    rating: 5,
    text: "The digital marketing training at KN IT Solution opened new career opportunities for me. The practical knowledge and industry insights helped me get placed at HCL Technologies quickly.",
  },
]

const stats = [
  { number: "12,000+", label: "Candidates Placed" },
  { number: "100%", label: "Placement Rate" },
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Partner Companies" },
]

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                Success <span className="text-blue-600">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                Hear from our successful candidates who transformed their careers with KN IT Solution's training and
                placement programs.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Director Section */}
            <div className="mb-20">
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o8OXvJ67Sfv6HJnRmkW1QnB2dmFlZT.png"
                        alt="Director Vikram G. Rathod"
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">Vikram G. Rathod</h3>
                      <p className="text-blue-600 font-semibold mb-4">Director & Founder</p>
                      <p className="text-muted-foreground leading-relaxed">
                        "With over 15 years of experience in the IT industry, I founded KN IT Solution with a vision to
                        bridge the gap between industry requirements and candidate skills. Our 100% placement guarantee
                        is backed by comprehensive training, industry partnerships, and personalized career guidance."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <Quote className="h-8 w-8 text-blue-200 mb-4" />

                    <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-blue-600">{testimonial.role}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
