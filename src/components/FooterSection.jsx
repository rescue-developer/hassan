import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import Icon from './Icon'

const FooterSection = () => {
  const { personalInfo, socialLinks } = usePortfolio()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-gray-800/50 bg-gray-900/40 backdrop-blur-xl">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/5 to-red-800/5 rounded-full blur-3xl animate-gentle-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/5 to-red-900/5 rounded-full blur-3xl animate-gentle-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              Building innovative web applications with modern technologies. Passionate about clean
              code and exceptional user experiences.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 professional-glass rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon
                    name={social.icon}
                    size={20}
                    className="text-white/70 group-hover:text-white transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="w-0 h-px bg-gradient-to-r from-red-600 to-red-800 group-hover:w-6 transition-all duration-300 mr-2" />
                Home
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="w-0 h-px bg-gradient-to-r from-red-600 to-red-800 group-hover:w-6 transition-all duration-300 mr-2" />
                About
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="w-0 h-px bg-gradient-to-r from-red-600 to-red-800 group-hover:w-6 transition-all duration-300 mr-2" />
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="w-0 h-px bg-gradient-to-r from-red-600 to-red-800 group-hover:w-6 transition-all duration-300 mr-2" />
                Projects
              </a>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gradient-to-r group-hover:from-red-500/20 group-hover:to-red-800/20 transition-all duration-300 mr-3">
                  <Icon name="mail" size={18} />
                </div>
                <span>Contact Me</span>
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gradient-to-r group-hover:from-red-500/20 group-hover:to-red-800/20 transition-all duration-300 mr-3">
                  <Icon name="download" size={18} />
                </div>
                <span>Download Resume</span>
              </a>
            </div>

            {/* CTA Button */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-lg text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            >
              <Icon name="mail" size={18} className="mr-2" />
              Let's Work Together
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          </div>
          <div className="text-gray-400 text-sm flex items-center space-x-2">
            <span>Built with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>using</span>
            <span className="text-blue-400 font-semibold">React.js</span>
            <span>&</span>
            <span className="text-white font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
