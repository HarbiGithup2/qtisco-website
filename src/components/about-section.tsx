"use client"

import { Button } from "@/components/ui/button"
import { Award, Target, Users, Globe } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Quality Embedded",
      description: "Delivering services at the highest standards to ensure client satisfaction.",
    },
    {
      icon: Target,
      title: "Focused Services",
      description: "Specialized in testing, inspection, and analysis for construction and industrial sectors.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Qualified personnel with extensive experience in engineering and testing services.",
    },
    {
      icon: Globe,
      title: "Standard Compliance",
      description: "Services aligned with ASTM, BS, ASME, AWS, ISO, and international protocols.",
    },
  ]

  return (
    <section className="py-20 bg-white relative" id="about-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp">
                <Award className="h-4 w-4" />
                <span>About QTISCO</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp">
                Your Trusted <span className="text-blue-600">Testing Partner</span>
              </h2>
              <div
                className="space-y-4 text-lg text-slate-600 leading-relaxed animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <p>
                  QTISCO Laboratory Company is a Kuwait-based Testing & Inspection services organization formed to meet the growing demands of the local construction industry.
                </p>
                <p>
                  QTISCO provides metallurgical, civil, chemical, geotechnical, and non-destructive testing services, along with surveys and third-party inspections.
                </p>
                <p>
                  Our mission is to grow sustainably while maintaining full compliance with international standards and ensuring total customer satisfaction.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slideInUp" style={{ animationDelay: "0.8s" }}>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 transform hover:scale-105 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/#accreditations-section">View Certifications</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slideInRight">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8 space-y-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">QTISCO</h3>
                  <p className="text-slate-600">Laboratory for Soil Testing and Quality Inspection Services</p>
                </div>
              </div>

              {/* Icons */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-pulse-slow">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              >
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
