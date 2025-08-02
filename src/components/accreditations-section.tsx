"use client"

import { useState } from "react"
import Image from "next/image"
import { Award, ZoomIn } from "lucide-react"
import { CertificateModal } from "./certificate-modal"

export function AccreditationsSection() {
  const [hoveredAccreditation, setHoveredAccreditation] = useState<number | null>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<{ name: string; image: string } | null>(null)

  const accreditations = [
    {
      name: "ISO 9001:2015 - Quality Management Systems",
      image: "/images/certificates/qtisco_image_11_1.jpeg",
      link: "/im",
    },
    {
      name: "ISO 14001:2015 - Environmental Management",
      image: "/images/certificates/qtisco_image_11_2.jpeg",
      link: "/accreditations/iso-14001",
    },
    {
      name: "ISO 45001:2018 - Occupational Health & Safety",
      image: "/images/certificates/qtisco_image_11_3.jpeg",
      link: "/accreditations/iso-45001",
    },
    {
      name: "ASTM International Compliance",
      image: "/images/certificates/qtisco_image_11_6.jpeg",
      link: "/accreditations/astm",
    },
    {
      name: "AWS Welding Certification",
      image: "/images/certificates/qtisco_image_11_4.jpeg",
      link: "/accreditations/aws",
    },
    {
      name: "ASME Mechanical Engineering Standards",
      image: "/images/certificates/qtisco_image_11_5.jpeg",
      link: "/accreditations/asme",
    },
  ]

  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
      id="accreditations-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp">
            <Award className="h-4 w-4" />
            <span>Certifications & Accreditations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp">
            Internationally <span className="text-blue-600">Certified</span> &{" "}
            <span className="text-red-600">Accredited</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Our certifications validate our commitment to international standards and quality excellence.
          </p>
        </div>

        {/* Certifications Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accreditations.map((accreditation, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-floatUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredAccreditation(index)}
              onMouseLeave={() => setHoveredAccreditation(null)}
              onClick={() => setSelectedCertificate(accreditation)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden relative">
                {/* Certificate Image Container */}
                <div className="relative aspect-[3/4] bg-gray-50">
                  <Image
                    src={accreditation.image || "/placeholder.svg"}
                    alt={accreditation.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Zoom Indicator */}
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-5 w-5 text-white" />
                  </div>

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
 
        {/* Certificate Modal */}
        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          certificate={selectedCertificate || { name: "", image: "" }}
        />
      </div>
    </section>
  )
}
