"use client"

import { HardHat } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ResourcesSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden" id="resources-section">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp dark:bg-amber-900/20 dark:text-amber-400">
            <HardHat className="h-4 w-4" />
            <span>Our Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp dark:text-white">
            Unmatched <span className="text-amber-600 dark:text-amber-400">Resources & Expertise</span>
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto border-0 shadow-lg p-8 animate-fadeInUp bg-white dark:bg-slate-900 dark:border dark:border-slate-700">
          <CardContent className="p-0 space-y-6 text-lg text-slate-600 leading-relaxed dark:text-slate-300">
            <p>QTISCO has all the resources and expertise in the field of testing and inspection services.</p>
            <p>
              Each department is headed by personnel having decades of proven capability in the specific field and very
              well supported by expert technical crews.
            </p>
            <p>
              The facility is equipped with state-of-the-art equipment and are maintained in compliance with the laws of
              the land.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
