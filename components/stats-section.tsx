import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target } from "lucide-react"
import Image from "next/image"

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: "2500+",
      label: "Candidates",
      description: "Placed",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      value: "150+",
      label: "Partner",
      description: "Companies",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      value: "8+",
      label: "Years",
      description: "Experience",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      value: "95%",
      label: "Success",
      description: "Rate",
    },
  ]

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="relative w-full max-w-md mx-auto mb-6">
            <Image
              src="/professional-handshake-business-partnership.jpg"
              alt="Professional handshake representing successful partnerships"
              width={400}
              height={200}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-gray-50 border-gray-200">
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-center mb-3 md:mb-4">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-gray-700 leading-tight">{stat.label}</div>
                <div className="text-sm md:text-base font-medium text-gray-700 leading-tight">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
