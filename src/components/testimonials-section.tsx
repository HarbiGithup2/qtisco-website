"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      position: "Project Manager",
      company: "Kuwait Construction Co.",
      content:
        "QTISCO's comprehensive testing services have been instrumental in ensuring our construction projects meet the highest quality standards. Their expertise in soil testing and material analysis is unmatched.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Ahmed+Al-Rashid",
    },
    {
      name: "Sarah Al-Mutairi",
      position: "Quality Assurance Director",
      company: "Gulf Engineering Solutions",
      content:
        "The non-destructive testing services provided by QTISCO have helped us maintain safety standards across our petrochemical facilities. Their team is professional and highly skilled.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Sarah+Al-Mutairi",
    },
    {
      name: "Mohammed Al-Sabah",
      position: "Chief Engineer",
      company: "Kuwait Oil Company",
      content:
        "QTISCO's metallurgical testing capabilities are exceptional. They've consistently delivered accurate results within tight deadlines, supporting our critical infrastructure projects.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Mohammed+Al-Sabah",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50 relative" id="testimonials-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp">
            <Star className="h-4 w-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Trusted by leading companies across Kuwait for reliable testing and inspection services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm animate-slideInUp">
            <CardContent className="p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-red-600 mx-auto mb-6" />

                <div key={currentTestimonial} className="animate-fadeInUp">
                  <p className="text-2xl text-slate-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-slate-600">{testimonials[currentTestimonial].position}</p>
                      <p className="text-red-600 font-medium">{testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 text-slate-600 hover:text-red-600 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 text-slate-600 hover:text-red-600 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-red-600 scale-125" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
