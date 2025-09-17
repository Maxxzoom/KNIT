"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Find Your Dream Job",
      description: "Connect with top companies and discover opportunities that match your skills and aspirations.",
      image: "/professional-office.png",
    },
    {
      title: "Expert Career Guidance",
      description: "Our experienced consultants provide personalized career advice to help you make the right moves.",
      image: "/career-counseling-session-with-consultant-and-clie.jpg",
    },
    {
      title: "Industry Connections",
      description: "Leverage our extensive network of industry partners to access exclusive job opportunities.",
      image: "/business-networking-event.png",
    },
    {
      title: "Skill Development",
      description: "Enhance your capabilities with our training programs designed for today's job market.",
      image: "/professional-training-session-with-laptops-and-lea.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative h-full bg-gradient-to-r from-blue-600/90 to-indigo-600/90">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
                    <div className="max-w-3xl">
                      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">{slide.title}</h2>
                      <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty">{slide.description}</p>
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                        Get Started Today
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
