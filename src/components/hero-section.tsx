"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/home.PNG",
      title: "Quality Embedded",
      subtitle: "Setting Testing Standards in Kuwait",
      description: "ISO certified lab delivering reliable solutions in construction, metallurgy, and soil testing.",
    },
    {
      image: "/images/qtisco_image_8_1.jpeg",
      title: "Trusted Testing",
      subtitle: "Your Partner in Excellence",
      description: "Expert inspections for oil & gas, petrochemicals, and civil projects—24/7 availability.",
    },
    {
      image: "/images/qtisco_image_5_2.jpeg",
      title: "Advanced Technology",
      subtitle: "Modern Facilities & Tools",
      description: "Accurate testing using global standards and calibrated equipment.",
    },
  ]

  const highlights = [
    { icon: Award, text: "ISO Certified Laboratory", delay: "0s" },
    { icon: Users, text: "Expert Engineering Team", delay: "0.2s" },
    { icon: CheckCircle, text: "Full Testing Coverage", delay: "0.4s" },
    { icon: Clock, text: "24/7 Operational Support", delay: "0.6s" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden" id="hero-section">
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
              className="object-cover fill-current object-center"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="space-y-4 text-white md:space-y-6">
              <div key={currentSlide} className="animate-slideInUp">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-2 md:mb-4">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-lg lg:text-3xl font-light text-blue-200 mb-4 md:mb-6">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-base lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  {slides[currentSlide].description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-8">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base md:px-8 md:py-4 md:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => scrollToSection("projects-section")}
                >
                  View Projects
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

      {/* Arrows */}
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

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
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

      {/* Highlights */}
      <div className="absolute top-8 right-8 z-20 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 space-y-4 animate-slideInRight dark:bg-slate-900/90 dark:border dark:border-slate-700">
          <h3 className="font-bold text-slate-900 text-center dark:text-white">Why QTISCO?</h3>
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 animate-fadeInUp hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: item.delay }}
            >
              <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-900/20">
                <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm text-slate-700 font-medium dark:text-slate-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
