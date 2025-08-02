"use client"

import { FileText, DownloadCloud, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResourcesSection() {
  const resources = [
    {
      title: "Company Brochure",
      description: "Download our official company profile including all testing services and capabilities.",
      icon: FileText,
      link: "/resources/QTISCO_Brochure.pdf",
      fileName: "QTISCO_Brochure.pdf",
    },
    {
      title: "Accreditations & Certifications",
      description: "View quality certifications and accreditations held by QTISCO Laboratory Co.",
      icon: ShieldCheck,
       link: "/resources/QTISCO_Brochure.pdf",
      fileName: "QTISCO_Brochure.pdf",
    },
    {
      title: "Service Request Form",
      description: "Use this form to request lab testing or inspection services officially.",
      icon: DownloadCloud,
       link: "/resources/QTISCO_Brochure.pdf",
      fileName: "QTISCO_Brochure.pdf",
    },
  ]

  return (
    <section id="resources-section" className="py-10 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Resources & Downloads</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Access key documents and certifications related to QTISCO's operations and quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <resource.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{resource.title}</h3>
              </div>
              <p className="text-slate- text-sm mb-4">{resource.description}</p>
              <a href={resource.link} download={resource.fileName}>
                <Button variant="outline" className="w-full bg-[#044484] text-white ">
                  Download PDF
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
