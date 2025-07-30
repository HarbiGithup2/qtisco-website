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
      title: "Oil & Gas Facilities Testing",
      category: "Oil & Gas",
      description: "Comprehensive testing and inspection services for refineries, petrochemical plants, and pipelines.",
      image: "/placeholder.svg?height=300&width=500&text=Oil+Gas+Testing",
      services: ["Metallurgical Testing", "Non-Destructive Testing", "Third Party Inspection"],
      applications: [
        "Pressure vessel inspection",
        "Pipeline integrity testing",
        "Welding quality assessment",
        "Equipment certification",
      ],
      link: "/projects/oil-gas",
    },
    {
      title: "Construction Material Testing",
      category: "Construction",
      description: "Quality control testing for concrete, aggregates, cement, asphalt, and reinforcement materials.",
      image: "/placeholder.svg?height=300&width=500&text=Construction+Materials",
      services: ["Construction Materials Testing", "Chemical Analysis"],
      applications: [
        "Concrete strength testing",
        "Aggregate quality analysis",
        "Cement compliance testing",
        "Asphalt performance evaluation",
      ],
      link: "/projects/construction-materials",
    },
    {
      title: "Geotechnical Investigation",
      category: "Construction",
      description: "Comprehensive soil and rock testing for foundation design and earthwork quality assurance.",
      image: "/placeholder.svg?height=300&width=500&text=Soil+Testing",
      services: ["Soil and Rock Testing", "Survey & Drafting"],
      applications: [
        "Foundation design support",
        "Soil bearing capacity analysis",
        "Compaction quality control",
        "Environmental assessment",
      ],
      link: "/projects/geotechnical",
    },
    {
      title: "Infrastructure Projects",
      category: "Infrastructure",
      description: "Testing and inspection services for roads, bridges, and major infrastructure developments.",
      image: "/placeholder.svg?height=300&width=500&text=Infrastructure+Testing",
      services: ["Construction Materials Testing", "Survey & Drafting", "Third Party Inspection"],
      applications: [
        "Road construction quality control",
        "Bridge structural assessment",
        "Pavement materials testing",
        "Infrastructure surveying",
      ],
      link: "/projects/infrastructure",
    },
    {
      title: "Industrial Facility Assessment",
      category: "Industrial",
      description: "Metallurgical testing and structural analysis for manufacturing and industrial facilities.",
      image: "/placeholder.svg?height=300&width=500&text=Industrial+Testing",
      services: ["Metallurgical Testing", "Non-Destructive Testing", "Chemical Analysis"],
      applications: [
        "Equipment material analysis",
        "Structural integrity assessment",
        "Quality certification",
        "Safety compliance testing",
      ],
      link: "/projects/industrial",
    },
    {
      title: "Environmental & Chemical Analysis",
      category: "Industrial",
      description: "Chemical analysis for construction materials and environmental compliance testing.",
      image: "/placeholder.svg?height=300&width=500&text=Chemical+Analysis",
      services: ["Chemical Analysis"],
      applications: [
        "Material composition analysis",
        "Environmental compliance testing",
        "Water quality assessment",
        "Contamination analysis",
      ],
      link: "/projects/environmental-chemical",
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
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 lg:p-12 text-white animate-slideInUp">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join our growing list of satisfied clients across Kuwait's major industries. Let us deliver excellence for
              your next testing and inspection project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 transform hover:scale-105 transition-all duration-300"
                onClick={scrollToContact}
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 transform hover:scale-105 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
