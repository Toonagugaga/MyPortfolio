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
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      
      <RippleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  )
}