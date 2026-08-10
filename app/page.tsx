"use client"
import Navbar from '@/app/components/layout/navbar'
import Footer from '@/app/components/layout/footer'
import HeroSection from '@/app/components/sections/hero'
import AboutSection from '@/app/components/sections/about'
import SkillsSection from '@/app/components/sections/skills'
import ProjectsSection from '@/app/components/sections/projects'
import EducationSection from '@/app/components/sections/education'
import ContactSection from '@/app/components/sections/contact'
import RippleBackground from '@/app/components/ui/ripple-background'

export default function Portfolio() {
  return (
    // แม่: เต็มจอ + ห้ามเลื่อน
    <main className="relative h-screen w-full overflow-hidden bg-transparent">
      
      {/* 1. พื้นหลังน้ำ (อยู่ล่างสุด) */}
      <RippleBackground />
      
      {/* 2. ส่วนเนื้อหา (อนุญาตให้เลื่อนเฉพาะส่วนนี้) */}
      <div className="absolute inset-0 z-10 h-full w-full overflow-y-auto overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col">
           <HeroSection />
           <AboutSection />
           <SkillsSection />
           <ProjectsSection />
           <EducationSection />
           <ContactSection />
           <Footer />
        </div>
      </div>
    </main>
  )
}