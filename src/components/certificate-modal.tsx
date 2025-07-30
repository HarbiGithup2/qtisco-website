"use client"
import Image from "next/image"
import { X, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificate: {
    name: string
    image: string
  }
}

export function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-slate-900">{certificate.name}</h3>
          <div className="flex items-center space-x-2">
           
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Certificate Image */}
        <div className="relative bg-gray-50 flex items-center justify-center" style={{ height: "calc(90vh - 120px)" }}>
          <Image
            src={certificate.image || "/placeholder.svg"}
            alt={certificate.name}
            fill
            className="object-contain p-4"
            sizes="90vw"
          />
        </div>
      </div>
    </div>
  )
}
