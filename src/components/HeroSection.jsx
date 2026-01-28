import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import Icon from './Icon'

const HeroSection = () => {
  const { personalInfo, socialLinks } = usePortfolio()

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden professional-background professional-grid">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-red-700/10 rounded-full blur-3xl animate-gentle-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-900/10 rounded-full blur-3xl animate-gentle-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-full blur-3xl animate-gentle-pulse"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-red-600/10 to-red-900/10 rounded-full blur-3xl animate-gentle-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-16 perspective-1000">
          <div className="relative inline-block group cursor-pointer animate-subtle-float">
            <div
              className="absolute inset-0 rounded-full border border-white/10 scale-110 animate-elegant-rotate"
              style={{ animationDuration: '30s' }}
            />
            <div
              className="absolute inset-0 rounded-full border border-white/5 scale-105 animate-elegant-rotate"
              style={{ animationDuration: '25s', animationDirection: 'reverse' }}
            />
            <div className="relative z-10 p-1 professional-glass-strong rounded-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-red-800/10 mix-blend-overlay z-10 rounded-full" />
              <img
                alt={personalInfo.name}
                src={personalInfo.image}
                className="w-[300px] h-[300px] rounded-full relative z-10 shadow-2xl group-hover:scale-105 transition-all duration-500 professional-shadow"
                style={{ filter: 'contrast(1.1) saturate(1.1) brightness(1.05)' }}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8">
          {/* Greeting Badge */}
          <div className="relative">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-red-500/10 to-red-700/10 border border-red-500/20 text-red-300 text-sm font-medium mb-4 professional-glass">
              {personalInfo.greeting}
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white relative clean-heading slide-up-fade animation-delay-300">
              <span className="inline-block hover:scale-105 transition-all duration-500 cursor-default">
                Hassan Farid
              </span>
            </h1>

            {/* Decorative Icons */}
            <Icon
              name="user"
              size={32}
              className="absolute top-4 right-4 h-8 w-8 text-white/20 animate-gentle-pulse"
            />
            <Icon
              name="briefcase"
              size={24}
              className="absolute bottom-4 left-4 h-6 w-6 text-white/15 animate-gentle-pulse"
              style={{ animationDelay: '1s' }}
            />
          </div>

          {/* Title */}
          <div className="relative overflow-hidden slide-up-fade animation-delay-600">
            <h2 className="text-2xl md:text-4xl font-light tracking-wide relative clean-subheading text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              <span className="inline-block">{personalInfo.title}</span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gentle-pulse" />
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto slide-up-fade animation-delay-900">
            <p className="text-xl clean-body leading-relaxed mb-12 text-gray-300">
              {personalInfo.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 slide-up-fade animation-delay-1200">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 px-8 py-4 rounded-xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-500 inline-flex items-center justify-center text-lg font-semibold shadow-lg hover:shadow-red-500/25"
            >
              <Icon
                name="download"
                size={24}
                className="mr-3 h-6 w-6 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
              />
              <span className="relative z-10">Download Resume</span>
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden backdrop-blur-sm border border-red-500/30 hover:border-red-500/50 hover:bg-red-500/10 px-8 py-4 rounded-xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-500 inline-flex items-center justify-center text-lg font-semibold shadow-lg hover:shadow-red-500/20"
            >
              <Icon
                name="mail"
                size={24}
                className="mr-3 h-6 w-6 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
              />
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16 slide-up-fade animation-delay-1500">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 professional-glass rounded-2xl transform-gpu hover:scale-110 hover:-translate-y-2 transition-all duration-500 professional-interactive professional-shadow hover:bg-gradient-to-br ${social.color} hover:bg-opacity-20`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${social.color}`}
                />
                <Icon
                  name={social.icon}
                  size={32}
                  className="h-8 w-8 text-white/70 group-hover:text-white relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
