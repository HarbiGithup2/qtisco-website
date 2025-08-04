"use client"

import { Briefcase, CheckCircle } from "lucide-react"

export function BusinessActivitiesSection() {
  const activities = [
    "Metallurgical Testing",
    "Destructive Testing",
    "Non-destructive Testing",
    "Civil Construction Material Testing Laboratory",
    "Soil and Rock Testing.",
    "Chemical Analysis for Construction Materials and Environmental.",
    "Survey and Drafting Services",
    "Third Party Inspection Services",
    "Structural Analysis and Building Assessment Studies",
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" id="business-activities-section">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp dark:bg-purple-900/20 dark:text-purple-400">
            <Briefcase className="h-4 w-4" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp dark:text-white">
            Comprehensive <span className="text-purple-600 dark:text-purple-400">Business Activities</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 text-lg text-slate-600 leading-relaxed animate-fadeInUp dark:text-slate-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1 dark:text-red-400" />
              <span>{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
