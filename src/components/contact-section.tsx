"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["East Ahmadi, Block-07 Parcel-139", "P.O. Box 9088, Ahmadi-61001", "Kuwait"],
      color: "bg-red-500",
    },
    {
      icon: Phone,
      title: "Phone & Fax",
      details: ["Tel: +965-22284450", "Fax: +965-22284450", "24/7 Emergency Support"],
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["services@qtisco.com", "Quick Response Guaranteed"],
      color: "bg-green-500",
    },
    
  ]

  const services = [
    "Metallurgical Testing",
    "Non-Destructive Testing",
    "Construction Materials Testing",
    "Soil & Rock Testing",
    "Chemical Analysis",
    "Survey & Drafting Services",
    "Third Party Inspection",
    "Other Services",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative" id="contact-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeInUp">
            <Mail className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 animate-slideInUp">
            Ready to Start Your <span className="text-red-600">Testing Project?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Contact our expert team for comprehensive testing solutions tailored to your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid gap-3">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-floatUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start space-x-4">
                      <div className={`${info.color} p-3 rounded-lg flex-shrink-0`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps */}
     

            {/* Quick Stats (Removed from here as it's in Hero and Stats sections) */}
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-2xl animate-slideInUp" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-r from-red-600 to-blue-600 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">Find Us on Map</h3>
                        <p className="text-sm opacity-90">East Ahmadi, Kuwait</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20 bg-transparent"
                        onClick={() => window.open("https://www.google.com/maps?q=East+Ahmadi+Kuwait", "_blank")}
                        aria-label="Open QTISCO location in Google Maps"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open in Maps
                      </Button>
                    </div>
                  </div>

                  {/* Embedded Google Map */}
                  <div className="relative h-64 lg:h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14407.123456789!2d48.0123456!3d29.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c123456789a%3A0x123456789abcdef0!2sEast%20Ahmadi%2C%20Kuwait!5e0!3m2!1sen!2skw!4v1234567890123!5m2!1sen!2skw"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="QTISCO Location - East Ahmadi, Kuwait"
                      className="rounded-b-lg"
                    ></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
