import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AccreditationsSection } from "@/components/accreditations-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResourcesSection } from "@/components/resources-section"
import { BusinessActivitiesSection } from "@/components/business-activities-section"
import { ValuesMissionSection } from "@/components/values-mission-section"
import { VisionSection } from "@/components/vision-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
            <AboutSection />       
  <VisionSection /> {/* New section */}
      <ValuesMissionSection /> {/* New section */}
      <BusinessActivitiesSection /> {/* New section */}
      <ServicesOverview />
      
      <ProjectsSection />
           <ResourcesSection />
      <AccreditationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
