"use client"

import { Eye } from "lucide-react"

export function VisionSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" id="vision-section">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp dark:bg-red-900/20 dark:text-red-400">
            <Eye className="h-4 w-4" />
            <span>Our Vision</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp dark:text-white">
            Shaping the Future of <span className="text-red-600 dark:text-red-400">Testing Excellence</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 text-lg text-slate-600 leading-relaxed animate-fadeInUp dark:text-slate-300">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0 dark:bg-red-400"></div>
              <span>To feel proud of the partnership</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0 dark:bg-blue-400"></div>
              <span>To make a difference and build trust</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0 dark:bg-green-400"></div>
              <span>To promote teamwork through collaboration</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0 dark:bg-purple-400"></div>
              <span>To be an expert, that people look for your expertise</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
