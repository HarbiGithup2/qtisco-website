"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export function ServicesOverview() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

 const services = [
  {
    title: "Metallurgical Testing",
    description:
      "Fully equipped to assess the compliance of materials with applicable standards and specifications.",
    image: "/images/qtisco_image_4_1.jpeg",
    features: [
      "Tension Testing of Metallic Materials",
      "Tensile Testing of Welded Samples",
      "Bend Testing of Welded Samples",
      "Fillet Weld Breaking Test",
      "Notched Bar Impact Testing",
      "Impact Testing of Welded Samples",
      "Vickers Hardness of Metallic Materials",
      "Hardness Testing of Welded Samples",
      "Nick Testing of Welded Samples",
      "Macro Etching of Metals and Alloys",
    ],
    standards: ["ASTM", "BS", "ASME", "AWS", "ISO"],
    color: "bg-red-500",
    gradient: "from-red-500 to-red-600",
  },
  {
    title: "Non-Destructive Testing",
    description:
      "Method for examining objects or structures for faults without causing destruction.",
    image: "/images/qtisco_image_5_3.jpeg",
    features: [
      "Radiography (X-Ray & Gamma-Ray)",
      "Magnetic Particle Testing",
      "Liquid Penetrant Testing",
      "Ultrasonic Testing",
      "Post-Weld Heat Treatment (PWHT)",
      "Preheat Treatment",
      "Hardness Testing",
      "Magnetic Flux Leakage (MFL)",
      "Calibrations",
      "Automated Ultrasonic Testing (AUT)",
      "Borescope Inspections",
      "Eddy Current Testing",
      "Thickness Measurement",
      "Risk-Based Inspections",
    ],
    standards: [],
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Civil Construction Material Testing",
    description:
      "Testing services for a range of construction materials.",
    image: "/images/qtisco_image_6_4.jpeg",
    features: [
      "Concrete",
      "Grouts",
      "Fine and Coarse Aggregates",
      "Cement",
      "Asphalt",
      "Water",
      "Admixtures",
      "Reinforcements",
      "Masonry Blocks",
      "Paving Blocks",
      "PVC Water Stops",
      "Refractory Materials",
    ],
    standards: [],
    color: "bg-green-500",
    gradient: "from-green-500 to-green-600",
  },
  {
    title: "Soil and Rock Testing",
    description:
      "Testing for soil and rocks to support civil construction projects.",
    image: "/images/qtisco_image_9_1.jpeg",
    features: [
      "Particle Size Analysis",
      "Maximum Dry Density and Optimum Moisture Content",
      "Field Density Test",
      "Plate Load Test",
      "Soil Resistivity",
      "Point Load Index",
      "Standard Penetration Test",
      "In-Situ Field CBR",
      "Permeability Test",
      "Density & Water Absorption",
      "Unconfined Compression Strength",
      "Dynamic Cone Penetration Test",
      "Sulphate and Chloride",
      "Organic Content",
      "Methylene Blue Absorption Test",
      "Silica Content & Calcium Carbonate",
      "Magnesium, Potassium & Sodium",
      "pH",
      "Swelling Index",
      "Thermal Conductivity",
      "Shear Test",
    ],
    standards: [],
    color: "bg-amber-600",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    title: "Chemical Analysis",
    description:
      "Chemical analysis for construction materials and environmental research.",
    image: "/images/qtisco_image_10_2.jpeg",
    features: [
      "Coarse and Fine Aggregate",
      "Soil",
      "Water",
      "Admixtures",
      "Cement",
      "Concrete",
      "Refractory Materials",
      "Sand and Grit Blast Materials Silica",
      "Rock",
      "Paint Materials",
      "Bitumen",
      "Water Proofing Membrane",
      "Gypsum",
      "Granite and Marble",
    ],
    standards: [],
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "Survey & Engineering Drafting Services",
    description:
      "Survey services for ministries, municipalities, contractors, consultants, and oil sector clients.",
    image: "/images/qtisco_image_7_4.jpeg",
    features: [
      "Topographic Survey",
      "Engineering Survey",
      "Measured Building Survey",
      "Stock Piles Volumetric and Quantity Survey",
      "Utilities/Services Survey",
      "Survey Project Management",
      "GPS Satellite Positioning",
      "Hydrographic and Bathymetric Survey",
      "Aerial Surveying",
      "Survey Training",
    ],
    standards: [],
    color: "bg-teal-500",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    title: "Third Party Inspection Services",
    description:
      "Inspection services during construction and operation phases.",
    image: "/images/qtisco_image_8_2.jpeg",
    features: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Health, Safety, & Environmental",
      "Electrical Engineering",
      "Refineries",
      "Petrochemical Plants",
      "Pipelines",
      "Civil Construction Projects",
      "Residential Buildings",
      "Offices",
      "Heavy Industrial Works",
      "Roads and Bridges",
    ],
    standards: [],
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
                      {service.features.slice(0, service.features.length).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2 text-sm text-slate-600">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${service.color}`}></div>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    
                    </div>
                  </div>

                  {/* Learn More Button */}
            
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
