"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/placeholder.svg?height=800&width=1920&text=Quality+Embedded+Hero",
      title: "Quality Embedded",
      subtitle: "Leading Kuwait's Construction Testing Standards",
      description:
        "ISO certified laboratory with cutting-edge equipment and expert engineers delivering precise testing solutions for construction, metallurgy, and soil analysis.",
    },
    {
      image: "/placeholder.svg?height=800&width=1920&text=Trusted+Testing+Services+Hero",
      title: "Trusted Testing Services",
      subtitle: "Your Partner in Construction Excellence",
      description:
        "Comprehensive inspection services across oil & gas, petrochemicals, and civil construction projects with 24/7 support and rapid turnaround times.",
    },
    {
      image: "/placeholder.svg?height=800&width=1920&text=Advanced+Technology+Hero",
      title: "Advanced Technology",
      subtitle: "State-of-the-Art Testing Facilities",
      description:
        "Non-destructive testing, metallurgical analysis, and soil investigation services using the latest international standards and calibrated equipment.",
    },
    {
      image: "/placeholder.svg?height=800&width=1920&text=Expert+Engineering+Hero",
      title: "Expert Engineering",
      subtitle: "Qualified Professionals You Can Trust",
      description:
        "Highly experienced team of engineers specializing in civil, mechanical, and environmental testing with extensive knowledge across all industry sectors.",
    },
  ]

  const highlights = [
    { icon: Award, text: "ISO Certified Laboratory", delay: "0s" },
    { icon: Users, text: "Expert Team of Engineers", delay: "0.2s" },
    { icon: CheckCircle, text: "Comprehensive Testing Services", delay: "0.4s" },
    { icon: Clock, text: "24/7 Support Available", delay: "0.6s" },
  ]

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // 4 seconds per slide

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden" id="hero-section">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Animated Text Content */}
            <div className="space-y-4 text-white md:space-y-6">
              <div key={currentSlide} className="animate-slideInUp">
                <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-2 md:mb-4">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-xl lg:text-3xl font-light text-blue-200 mb-4 md:mb-6">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-base lg:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* CTA Buttons with hover animations */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-8">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base md:px-8 md:py-4 md:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => scrollToSection("contact-section")}
                >
                  Request Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={() => scrollToSection("services-overview")}
                >
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Statistics Cards */}
      <div className="absolute bottom-4 left-4 right-4 z-20 md:bottom-8 md:left-8 md:right-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Projects Completed", color: "bg-red-600" },
              { number: "15+", label: "Years Experience", color: "bg-blue-600" },
              { number: "100%", label: "Quality Assured", color: "bg-green-600" },
              { number: "24/7", label: "Support", color: "bg-purple-600" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white shadow-lg animate-floatUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`text-xl font-bold ${stat.color.replace("bg-", "text-")} md:text-2xl`}>
                  {stat.number}
                </div>
                <div className="text-xs text-slate-600 md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-300 hover:scale-110 md:left-4 md:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-300 hover:scale-110 md:right-4 md:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:bottom-24">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 md:w-3 md:h-3 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Trust Indicators (Hidden on small screens) */}
      <div className="absolute top-8 right-8 z-20 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 space-y-4 animate-slideInRight">
          <h3 className="font-bold text-slate-900 text-center">Why Choose QTISCO?</h3>
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 animate-fadeInUp hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: item.delay }}
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <item.icon className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-sm text-slate-700 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
