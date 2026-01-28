import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import Icon from './Icon'

const AboutSection = () => {
  const { aboutCards, coreValues } = usePortfolio()

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse" />
        </div>

        {/* About Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Description Cards */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-300/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />
              <div className="relative z-10 p-8 bg-gray-900/40 rounded-2xl border border-gray-700/50 backdrop-blur-xl group-hover:border-white/30 transition-all duration-500 professional-shadow">
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  I'm a Computer Engineering graduate with a passion for creating innovative web
                  applications and solving complex problems through code. My journey in software
                  development has taken me through various professional roles and projects, where
                  I've honed my skills in full-stack development.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/5 to-white/5 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500" />
              <div className="relative z-10 p-8 bg-gray-900/40 rounded-2xl border border-gray-700/50 backdrop-blur-xl group-hover:border-white/30 transition-all duration-500 professional-shadow">
                <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  When I'm not coding, you'll find me exploring the mountains, traveling to new
                  places, or diving deep into the latest tech trends. I believe in continuous
                  learning and love sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>

          {/* Right: About Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {aboutCards.map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-900/40 border-gray-700/50 hover:border-white/30 backdrop-blur-xl transform-gpu hover:scale-105 transition-all duration-700 cursor-pointer professional-shadow rounded-lg border text-card-foreground shadow-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div className="p-8 text-center relative z-10 h-full flex flex-col justify-center">
                  <div className="relative mb-6">
                    <Icon
                      name={card.icon}
                      size={48}
                      className="h-12 w-12 text-white mx-auto relative z-10 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <h3 className="font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300 text-xl">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-2">
                    {card.description}
                  </p>
                  {card.institution && (
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-2">
                      {card.institution}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    {card.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">Core Values</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The principles that guide my work and drive my passion for technology
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gray-800/20 border-gray-700/50 hover:border-white/10 backdrop-blur-xl transform-gpu hover:scale-105 transition-all duration-500 professional-shadow rounded-lg border text-card-foreground shadow-sm"
            >
              <div className="p-8 text-center relative z-10">
                <div className="relative mb-6">
                  <Icon
                    name={value.icon}
                    size={40}
                    className="h-10 w-10 text-white mx-auto relative z-10 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h4 className="font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300 text-lg">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
