"use client"
import { Button } from "@/components/ui/button"
import { Award, Target, Users, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "ISO certified processes ensuring the highest standards in every test and inspection.",
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "State-of-the-art equipment and methodologies for accurate, reliable results.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly qualified engineers and technicians with extensive industry experience.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with international standards including ASTM, BS, ASME, AWS, and ISO.",
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
                Kuwait's Leading <span className="text-blue-600">Testing Laboratory</span>
              </h2>
              <div
                className="space-y-4 text-lg text-slate-600 leading-relaxed animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <p>
                  QTISCO Laboratory Company is a Kuwait-based Testing & Inspection services organization formed by an
                  aspiring young entrepreneur to explore the boom in the Kuwait construction market.
                </p>
                <p>
                  We aspire to continue our winning strategy, thereby increasing market share by adding more resources
                  and extensive marketing. Our vision is to emerge as a market leader in Testing Services.
                </p>
                <p>
                  We are committed to sustained growth and aspire to achieve complete customer satisfaction by
                  delivering quality services at the highest standards to all our clients.
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
              {/* Main Image */}
              <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Quality Embedded</h3>
                    <p className="text-slate-600">Our commitment to excellence</p>
                  </div>

                  {/* Achievement Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-red-600">ISO</div>
                      <div className="text-sm text-slate-600">Certified</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-blue-600">15+</div>
                      <div className="text-sm text-slate-600">Years</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-slate-600">Projects</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-slate-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
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
