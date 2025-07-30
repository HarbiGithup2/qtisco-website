import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QTISCO Laboratory Co. - Testing & Inspection Services in Kuwait",
  description:
    "QTISCO is a leading Kuwait-based laboratory specializing in comprehensive testing and inspection services across construction, metallurgy, concrete, soil, and non-destructive techniques. ISO certified for quality excellence.",
  keywords: [
    "QTISCO",
    "Kuwait laboratory",
    "testing services Kuwait",
    "inspection services Kuwait",
    "metallurgical testing",
    "non-destructive testing",
    "civil construction material testing",
    "soil testing",
    "rock testing",
    "chemical analysis",
    "surveying services",
    "third party inspection",
    "ISO certified laboratory",
    "Kuwait construction",
  ],
  openGraph: {
    title: "QTISCO Laboratory Co. - Testing & Inspection Services in Kuwait",
    description:
      "QTISCO is a leading Kuwait-based laboratory specializing in comprehensive testing and inspection services across construction, metallurgy, concrete, soil, and non-destructive techniques. ISO certified for quality excellence.",
    url: "https://www.qtisco.com", // Replace with your actual domain
    siteName: "QTISCO Laboratory Co.",
    images: [
      {
        url: "/images/qtisco-logo.png", // Ensure this path is correct and image exists
        width: 180,
        height: 80,
        alt: "QTISCO Laboratory Co. Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QTISCO Laboratory Co. - Testing & Inspection Services in Kuwait",
    description:
      "QTISCO is a leading Kuwait-based laboratory specializing in comprehensive testing and inspection services across construction, metallurgy, concrete, soil, and non-destructive techniques. ISO certified for quality excellence.",
    images: ["/images/qtisco-logo.png"], // Ensure this path is correct and image exists
  },
  robots: "index, follow",
  canonical: "https://www.qtisco.com", // Replace with your actual domain
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
