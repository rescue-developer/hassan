import React, { useState, useEffect } from 'react'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const totalScroll = documentHeight - windowHeight
      const currentProgress = scrollTop / totalScroll

      setScrollProgress(Math.min(Math.max(currentProgress, 0), 1))
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const targetElement = document.querySelector(target.getAttribute('href'))
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Fixed Background */}
      <div className="fixed inset-0 pointer-events-none z-0" />

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  )
}

export default App
