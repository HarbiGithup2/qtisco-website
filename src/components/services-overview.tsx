"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function ServicesOverview() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: "Metallurgical Testing",
      description:
        "Comprehensive testing of metallic materials with ISO certifications, fully equipped to assess compliance with applicable standards and specifications.",
      image: "/images/qtisco-logo.png",
      features: [
        "Tension Testing of Metallic Materials",
        "Tensile Testing of Welded Samples",
        "Bend Testing of Welded Samples",
        "Fillet Weld Breaking Test",
        "Notched Bar Impact Testing",
        "Vickers Hardness Testing",
        "Macro Etching of Metals and Alloys",
      ],
      standards: ["ASTM", "BS", "ASME", "AWS", "ISO"],
      color: "bg-red-500",
      gradient: "from-red-500 to-red-600",
    },
    {
      title: "Non-Destructive Testing",
      description:
        "Crucial method for examining objects or structures for potential faults without causing destruction or permanent deformation, particularly valuable for production and maintenance checks.",
      image: "/images/qtisco_image_4_3.jpeg",
      features: [
        "Radiography (X-Ray & Gamma-Ray)",
        "Magnetic Particle Testing",
        "Liquid Penetrant Testing",
        "Ultrasonic Testing",
        "Post-Weld Heat Treatment (PWHT)",
        "Automated Ultrasonic Testing (AUT)",
        "Borescope Inspections",
        "Eddy Current Testing",
        "Thickness Measurement",
      ],
      standards: ["Oil & Gas", "Refineries", "Petrochemicals", "Military"],
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Civil Construction Material Testing",
      description:
        "Comprehensive services ensuring compliance and quality control for diverse construction materials, delivering excellence in every construction project.",
      image: "/placeholder.svg?height=300&width=400&text=Construction+Materials+Testing",
      features: [
        "Concrete Testing",
        "Grouts Analysis",
        "Fine and Coarse Aggregates",
        "Cement Testing",
        "Asphalt Testing",
        "Water Quality Testing",
        "Admixtures Testing",
        "Reinforcements Testing",
        "Masonry Blocks",
        "Paving Blocks",
        "PVC Water Stops",
        "Refractory Materials",
      ],
      standards: ["ASTM", "BS", "International Standards"],
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "Soil and Rock Testing",
      description:
        "Sub-soil investigations and various testing for soil and rocks, providing full support for ongoing civil construction projects and earthwork quality assurance.",
      image: "/placeholder.svg?height=300&width=400&text=Soil+Testing+Laboratory",
      features: [
        "Particle Size Analysis",
        "Maximum Dry Density and Optimum Moisture Content",
        "Field Density Test",
        "Plate Load Test",
        "Standard Penetration Test",
        "In-Situ Field CBR",
        "Permeability Test",
        "Unconfined Compression Strength",
        "Dynamic Cone Penetration Test",
        "Sulphate and Chloride Analysis",
        "pH Testing",
        "Swelling Index",
        "Thermal Conductivity",
      ],
      standards: ["Geotechnical Standards", "ASTM", "BS"],
      color: "bg-amber-600",
      gradient: "from-amber-600 to-orange-600",
    },
    {
      title: "Chemical Analysis",
      description:
        "Services for various chemical analysis of construction and environmental materials with highly qualified and experienced personnel.",
      image: "/placeholder.svg?height=300&width=400&text=Chemical+Analysis+Lab",
      features: [
        "Coarse and Fine Aggregate Analysis",
        "Soil Chemical Analysis",
        "Water Testing",
        "Admixtures Analysis",
        "Cement Chemical Analysis",
        "Concrete Analysis",
        "Refractory Materials",
        "Sand and Grit Blast Materials",
        "Rock Analysis",
        "Paint Materials",
        "Bitumen Testing",
        "Water Proofing Membrane",
        "Gypsum Analysis",
        "Granite and Marble Testing",
      ],
      standards: ["Environmental Standards", "Construction Standards"],
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Survey & Engineering Drafting",
      description:
        "Excellence in mapping and engineering survey, equipped to meet diverse requirements for ministries, municipalities, contractors, consultants, and oil sector companies.",
      image: "/placeholder.svg?height=300&width=400&text=Survey+Equipment+GPS",
      features: [
        "Topographic Survey",
        "Engineering Survey",
        "Measured Building Survey",
        "Stock Piles Volumetric and Quantity Survey",
        "Utilities/Services Survey",
        "GPS Satellite Positioning",
        "Hydrographic and Bathymetric Survey",
        "Aerial Surveying",
        "Survey Training",
        "Survey Project Management",
      ],
      standards: ["KOC", "KNPC", "Joint Operations"],
      color: "bg-teal-500",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      title: "Third Party Inspection Services",
      description:
        "Comprehensive inspection services ensuring quality and compliance during construction and operation phases with qualified engineers in diverse fields.",
      image: "/placeholder.svg?height=300&width=400&text=Third+Party+Inspection",
      features: [
        "Civil Engineering Inspection",
        "Mechanical Engineering Inspection",
        "Health, Safety & Environmental",
        "Electrical Engineering Inspection",
        "Refineries Inspection",
        "Petrochemical Plants",
        "Pipelines Inspection",
        "Residential Buildings",
        "Heavy Industrial Works",
        "Roads and Bridges",
      ],
      standards: ["International Standards", "Safety Compliance"],
      color: "bg-indigo-500",
      gradient: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp">
            <CheckCircle className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp">
            Comprehensive Testing & <span className="text-red-600">Inspection Services</span>
          </h2>
          <p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            QTISCO provides world-class testing and inspection services across multiple industries, ensuring quality,
            safety, and compliance with international standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm animate-floatUp overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Service Image */}
                <div className="relative lg:w-2/5 h-64 lg:h-auto">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                  {/* Service Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${service.color}`}>
                      Professional Testing
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <CardContent className="lg:w-3/5 p-8 flex flex-col justify-between">
                  {/* Title and Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>

                    {/* Standards */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.standards.map((standard, standardIndex) => (
                        <span
                          key={standardIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium"
                        >
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Services Include:</h4>
                    <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                      {service.features.slice(0, 6).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2 text-sm text-slate-600">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${service.color}`}></div>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 6 && (
                        <div className="text-sm text-slate-500 italic">
                          +{service.features.length - 6} more services...
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className="group-hover:bg-red-50 group-hover:text-red-600 transition-all duration-300 p-0 h-auto font-medium self-start"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
       
      </div>
    </section>
  )
}
