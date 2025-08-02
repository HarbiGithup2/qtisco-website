"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Award,
  Shield,
  Clock,
} from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about-section" },
    { name: "Services", href: "/#services-overview" },
    { name: "Projects", href: "/#projects-section" },
    { name: "Accreditations", href: "/#accreditations-section" },
    { name: "Contact", href: "/#contact-section" },
  ]

  const services = [
    { name: "Metallurgical Testing", href: "/" },
    { name: "Non-Destructive Testing", href: "/" },
    { name: "Construction Materials", href: "/" },
    { name: "Soil & Rock Testing", href: "/" },
    { name: "Chemical Analysis", href: "/" },
    { name: "Survey & Drafting", href: "/" },
    { name: "Third Party Inspection", href: "/" },
  ]

  const certifications = [
    { name: "ISO 9001:2015", icon: Award, href: "/" },
    { name: "ISO 14001:2015", icon: Shield, href: "/" },
    { name: "ISO 45001:2018", icon: Shield, href: "/" },
  ]

  // const socialLinks = [
  //   { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/qtisco", target: "_blank" },
  //   { name: "Twitter", icon: Twitter, href: "https://twitter.com/qtisco", target: "_blank" },
  //   { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/qtisco", target: "_blank" },
  //   { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/qtisco", target: "_blank" },
  // ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#044484] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6"> 
              <Link href="/" className="inline-block" aria-label="QTISCO Home">
                <Image
                  src="/images/QTISCO.png"
                  alt="QTISCO Laboratory Co. Logo"
                  width={180}
                  height={80}
  
  className="h-10 w-auto sm:h-12"
                />
              </Link>
              <p className="text-slate-300 leading-relaxed">
                Kuwait's premier testing and inspection services organization, delivering quality solutions with
                international standards compliance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">East Ahmadi, Block-07 Parcel-139, Kuwait</span>
                </div>
                <a href="tel:+96522284450" className="flex items-center space-x-3 hover:text-red-400 transition-colors">
                  <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">+965-22284450</span>
                </a>
                <a
                  href="mailto:services@qtisco.com"
                  className="flex items-center space-x-3 hover:text-red-400 transition-colors"
                >
                  <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">services@qtisco.com</span>
                </a>
              </div>

              {/* Social Links */}
              {/* <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.target}
                    rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="bg-slate-800 p-3 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-red-400 transition-colors duration-300 flex items-center space-x-2 group"
                      onClick={(e) => {
                        if (link.href.startsWith("/#")) {
                          e.preventDefault()
                          scrollToSection(link.href.split("#")[1])
                        }
                      }}
                    >
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-red-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Certifications */}
      
          </div>
        </div>

    
      </div>
    </footer>
  )
}
