"use client"
import Image from "next/image"
import { Award } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden" id="about-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp dark:bg-blue-900/20 dark:text-blue-400">
            <Award className="h-4 w-4" />
            <span>About QTISCO</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp dark:text-white">
            Kuwait's Leading <span className="text-blue-600 dark:text-blue-400">Testing Laboratory</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl animate-floatUp">
            <Image
              src="/images/qtisco_image_1_3.jpeg" // Using a relevant image from your public folder
              alt="QTISCO Laboratory Interior"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Text Content Column */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-slate-600 leading-relaxed dark:text-slate-300">
              QTISCO, is a company originally established in the State of Kuwait, in the field of Testing & Inspection
              services.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed dark:text-slate-300">
              Founded by an aspiring young entrepreneur, QTISCO operates across various industries to explore the boom
              in the construction industry.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed dark:text-slate-300">
              QTISCO was established in 2013 in a very small scale and scaled up its operations, slowly and steadily and
              in 2024 a branch was registered in Saudi Arabia.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed dark:text-slate-300">
              QTISCO aspires to be the foremost provider of testing services in the Middle East. Having established its
              first overseas operation in Saudi Arabia, it is poised to embark its journey in testing and inspection
              services, redefining reliability by providing accurate and timely testing reports. QTISCO is on a mission
              to align its processes and standardize services in such a way to reduce the gap with client requirements
              and international standards in its areas of expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
