"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { number: 500, suffix: "+", label: "Projects Completed", description: "Successful testing projects across Kuwait" },
    { number: 15, suffix: "+", label: "Years Experience", description: "Proven track record in the industry" },
    { number: 100, suffix: "%", label: "Quality Assured", description: "ISO certified processes and standards" },
    { number: 24, suffix: "/7", label: "Support Available", description: "Round-the-clock technical assistance" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section")
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const CountUpNumber = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, target])

    return (
      <span className="text-4xl lg:text-6xl font-bold">
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <section
      className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
      id="stats-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slideInUp">Trusted by Industry Leaders</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Our commitment to excellence is reflected in our impressive track record and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-floatUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                <div className={`text-red-400 mb-4`}>
                  <CountUpNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
