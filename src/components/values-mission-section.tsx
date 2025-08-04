"use client"

import { Heart, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ValuesMissionSection() {
  const values = [
    { letter: "Q", title: "QUALITY embedded" },
    { letter: "T", title: "Building TRUST" },
    { letter: "I", title: "INTEGRITY in dealings" },
    { letter: "S", title: "SUPPORTIVE to clients" },
    { letter: "C", title: "Fostering COLLABORATION" },
    { letter: "O", title: "ONE TEAM" },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden" id="values-mission-section">
      <div className="container mx-auto px-4 relative">
        {/* Values Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp dark:bg-blue-900/20 dark:text-blue-400">
            <Heart className="h-4 w-4" />
            <span>Our Core Values</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp dark:text-white">
            Principles That <span className="text-blue-600 dark:text-blue-400">Guide Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-floatUp bg-white dark:bg-slate-900 dark:border dark:border-slate-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold group-hover:bg-blue-600 transition-colors duration-300 dark:bg-red-400 dark:group-hover:bg-blue-400">
                  {value.letter}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-300 dark:text-white dark:group-hover:text-red-400">
                  {value.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp dark:bg-green-900/20 dark:text-green-400">
            <Target className="h-4 w-4" />
            <span>Our Mission</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp dark:text-white">
            Our Commitment to <span className="text-green-600 dark:text-green-400">Excellence</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 text-lg text-slate-600 leading-relaxed animate-fadeInUp dark:text-slate-300">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0 dark:bg-red-400"></div>
              <span>To emerge as a market leader in Testing Services by:</span>
            </li>
            <li className="flex items-start space-x-3 ml-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0 dark:bg-blue-400"></div>
              <span>building Trust through quality services</span>
            </li>
            <li className="flex items-start space-x-3 ml-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0 dark:bg-blue-400"></div>
              <span>adherence to the highest standards, and</span>
            </li>
            <li className="flex items-start space-x-3 ml-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0 dark:bg-blue-400"></div>
              <span>professionalism in delivery of services</span>
            </li>
            <li className="flex items-start space-x-3 ml-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0 dark:bg-blue-400"></div>
              <span>develop reliability with accurate and timely reporting</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
