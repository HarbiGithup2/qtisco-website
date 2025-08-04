"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false) // State to track if component is mounted

  // useEffect only runs on the client, so now we can safely show the UI
  // that relies on the theme value.
  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationItems = [
    { name: "Home", href: "/#hero-section" },
    { name: "About", href: "/#about-section" },
    { name: "Vision", href: "/#vision-section" },
    { name: "Values", href: "/#values-mission-section" },
    { name: "Business Activities", href: "/#business-activities-section" },
    { name: "Services", href: "/#services-overview" },
    { name: "Projects", href: "/#projects-section" },
    { name: "Resources", href: "/#resources-section" },
    { name: "Accreditations", href: "/#accreditations-section" },
    { name: "Contact", href: "/#contact-section" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // Close menu after clicking a link
    }
  }

  // Determine which logo to show based on theme
  const currentLogoSrc =
    mounted && theme === "dark"
        ? "/images/qtisco_image_1_4.jpeg" // Dark mode logo
      : "/images/qtisco-logo.png" // Light mode logo

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100 dark:bg-slate-900 dark:border-slate-800">
      {/* Top contact bar */}
      <div className="bg-[#044484] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 md:space-x-6">
              <a href="tel:+96522284450" className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                <Phone className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">+965-22284450</span>
                <span className="sm:hidden">Call Us</span>
              </a>
              <a
                href="mailto:services@qtisco.com"
                className="flex items-center space-x-1 hover:text-red-400 transition-colors"
              >
                <Mail className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">services@qtisco.com</span>
                <span className="sm:hidden">Email Us</span>
              </a>
            </div>
            <div className="hidden md:block text-slate-300">
              <span>East Ahmadi, Block-07 Parcel-139, Kuwait</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center transform hover:scale-105 transition-transform duration-300">
            {mounted ? ( // Only render the Image component after mounted to prevent hydration errors
              <Image
                src={currentLogoSrc || "/placeholder.svg"}
                alt="QTISCO Logo"
                width={160}
                height={70}
                className="h-11 w-auto sm:h-12"
                priority
              />
            ) : (
              // Render a placeholder or nothing on the server
              <div className="h-10 w-[160px] sm:h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-red-600 font-medium transition-all duration-300 relative group dark:text-slate-300 dark:hover:text-red-400"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href.split("#")[1])
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {mounted && ( // Only render theme toggle after component mounts
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen} // Added aria-expanded
            aria-controls="mobile-menu-overlay" // Added aria-controls
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div
            id="mobile-menu-overlay" // Added id
            className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center py-8 animate-fadeIn dark:bg-slate-900/95"
            role="dialog" // Added role for accessibility
            aria-modal="true" // Added aria-modal
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-slate-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-8 w-8 text-slate-700 dark:text-slate-300" />
            </button>
            <nav className="flex flex-col space-y-6 text-center" role="menu" aria-orientation="vertical">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-800 text-1x2 font-bold hover:text-red-600 transition-colors duration-300 dark:text-slate-200 dark:hover:text-red-400"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href.split("#")[1])
                  }}
                  role="menuitem" // Added role="menuitem"
                >
                  {item.name}
                </Link>
              ))}
              {mounted && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-full max-w-xs mx-auto mt-4 py-3 text-lg border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  aria-label="Toggle theme"
                  role="menuitem" // Added role="menuitem" for theme toggle button
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-5 w-5 mr-2" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 mr-2" /> Dark Mode
                    </>
                  )}
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
