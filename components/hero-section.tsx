"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Award } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()

  const handleFindJobs = () => {
    router.push("/careers")
  }

  const handlePostJob = () => {
    router.push("/post-job")
  }

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/50 dark:from-gray-900/50 dark:to-gray-800/50">
        <div className="absolute inset-0 bg-[url('/professional-office.png')] opacity-10 bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Find Your Perfect
                <span className="text-blue-600"> Career Match</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Connect talented professionals with leading companies. We specialize in IT placements, career guidance,
                and building lasting professional relationships.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Expert Consultants</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Target className="h-5 w-5 text-blue-600" />
                <span>Perfect Matches</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Award className="h-5 w-5 text-blue-600" />
                <span>Top Companies</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleFindJobs}>
                Find Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={handlePostJob}>
                Post a Job
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100/50 to-indigo-200/50 p-8 flex items-center justify-center">
              <img
                src="/professional-office.png"
                alt="Professional office environment"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <Users className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-indigo-600 text-white p-4 rounded-xl shadow-lg">
              <Target className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
