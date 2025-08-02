"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, ArrowRight, Filter, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

 const projectCategories = ["All", "Oil & Gas", "Construction", "Infrastructure", "Industrial"]

const projects = [
  {
    title: "Oil & Gas Testing Services",
    category: "Oil & Gas",
    description: "Testing and inspection services for refineries, petrochemical plants, and pipelines.",
    image: "/images/qtisco_image_5_2.jpeg", // يفضل أخذ صورة من PDF أو استبدالها لاحقًا
    services: [
      "Metallurgical Testing",
      "Non-Destructive Testing",
      "Third Party Inspection Services",
    ],
    applications: [
      "Welded samples testing",
      "Radiographic and ultrasonic inspection",
      "Pipeline and equipment evaluation",
    ],
    link: "#",
  },
  {
    title: "Civil Construction Material Testing",
    category: "Construction",
    description: "Testing of concrete, aggregates, cement, asphalt, and other construction materials.",
    image: "/images/qtisco_image_6_2.jpeg",
    services: [
      "Civil Construction Material Testing",
      "Chemical Analysis",
    ],
    applications: [
      "Concrete strength and consistency",
      "Aggregate grading and durability",
      "Cement and admixture compliance",
      "Asphalt mix verification",
    ],
    link: "#",
  },
  {
    title: "Soil and Rock Investigation",
    category: "Construction",
    description: "Soil and rock testing services for civil projects and foundation design.",
    image: "/images/qtisco_image_9_2.jpeg",
    services: [
      "Soil and Rock Testing",
      "Survey & Engineering Drafting Services",
    ],
    applications: [
      "Sub-soil investigation",
      "CBR and compaction tests",
      "Plate load and field density tests",
      "Foundation soil classification",
    ],
    link: "#",
  },
  {
    title: "Infrastructure Quality Assurance",
    category: "Infrastructure",
    description: "Inspection and testing for roads, bridges, and infrastructure works.",
    image: "/images/qtisco_image_7_3.jpeg",
    services: [
      "Construction Material Testing",
      "Survey & Engineering Drafting Services",
      "Third Party Inspection Services",
    ],
    applications: [
      "Pavement material testing",
      "Structural inspection",
      "Volumetric surveys",
      "Site-level compliance checks",
    ],
    link: "#",
  },
  {
    title: "Industrial & Manufacturing Testing",
    category: "Industrial",
    description: "Metallurgical and NDT services for manufacturing and industrial facilities.",
    image: "/images/qtisco_image_4_3.jpeg",
    services: [
      "Metallurgical Testing",
      "Non-Destructive Testing",
      "Chemical Analysis",
    ],
    applications: [
      "Material strength and hardness",
      "Weld and surface flaw detection",
      "Chemical composition testing",
    ],
    link: "#",
  },
  {
    title: "Environmental & Material Chemical Testing",
    category: "Industrial",
    description: "Chemical analysis for construction materials and environmental research.",
    image: "/images/qtisco_image_1_2.jpeg",
    services: ["Chemical Analysis"],
    applications: [
      "Soil and water chemical testing",
      "Admixtures and cement analysis",
      "Silica and bitumen verification",
      "Paints, gypsum, and membrane evaluation",
    ],
    link: "#",
  },
]


  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const scrollToContact = () => {
    const element = document.getElementById("contact-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="projects-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp">
            <Building className="h-4 w-4" />
            <span>Our Project Areas</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp">
            Comprehensive Testing <span className="text-red-600">Solutions</span>
          </h2>
          <p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            QTISCO provides testing and inspection services across diverse industries, ensuring quality and compliance
            with international standards.
          </p>
        </div>

        {/* Project Statistics */}
      

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slideInUp">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeFilter === category
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white overflow-hidden animate-floatUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link href={project.link} aria-label={`Learn more about ${project.title}`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Project Category */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white border-0">{project.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{project.description}</p>
                  </div>

                  {/* Services Used */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">Applications:</h4>
                    <div className="space-y-1">
                      {project.applications.slice(0, 3).map((application, appIndex) => (
                        <div key={appIndex} className="flex items-start space-x-2 text-xs text-slate-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className="group-hover:bg-red-50 group-hover:text-red-600 transition-all duration-300 p-0 h-auto font-medium text-sm"
                    asChild
                  >
                   
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* CTA Section */}

      </div>
    </section>
  )
}
