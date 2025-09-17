import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target } from "lucide-react"

const stats = [
  { icon: Users, label: "Candidates Placed", value: "2500+" },
  { icon: Award, label: "Partner Companies", value: "150+" },
  { icon: Clock, label: "Years Experience", value: "8+" },
  { icon: Target, label: "Success Rate", value: "95%" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">
                About <span className="text-blue-600">KN IT Solution</span>
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                We are a leading placement agency specializing in connecting talented IT professionals with top
                companies. Our expertise lies in understanding both candidate aspirations and employer requirements to
                create perfect matches.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the gap between exceptional talent and outstanding opportunities, fostering career growth
                  while helping companies build strong, innovative teams that drive business success.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Expert consultants with deep industry knowledge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Extensive network of 150+ partner companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Personalized career guidance and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">95% success rate in candidate placements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats and Image */}
          <div className="space-y-8">
            {/* Team Image */}
            <div className="relative">
              <img
                src="/career-counseling-session-with-consultant-and-clie.jpg"
                alt="Career counseling session"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="space-y-3">
                    <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
