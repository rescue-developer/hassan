import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import Icon from './Icon'

const ExperienceSection = () => {
  const { experiences } = usePortfolio()

  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-red-700/10 rounded-full blur-3xl animate-gentle-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-900/10 rounded-full blur-3xl animate-gentle-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <span className="text-4xl">💼</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            My professional journey and key achievements
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500/50 via-red-600/50 to-red-800/50 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}>
                  <div className="group relative overflow-hidden bg-gray-900/40 border border-gray-700/50 hover:border-red-500/30 backdrop-blur-xl rounded-2xl p-8 transform-gpu hover:scale-105 transition-all duration-500 professional-shadow">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Company Badge */}
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-700/20 border border-red-500/30 mb-4 ${
                          index % 2 === 0 ? 'md:ml-auto' : ''
                        }`}
                      >
                        <Icon name={exp.icon} size={20} className="mr-2 text-red-400" />
                        <span className="text-red-300 font-semibold text-sm">{exp.company}</span>
                      </div>

                      {/* Role */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-100 transition-colors duration-300">
                        {exp.role}
                      </h3>

                      {/* Duration */}
                      <p
                        className={`text-gray-400 mb-4 flex items-center gap-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}
                      >
                        <Icon name="calendar" size={16} />
                        {exp.duration}
                      </p>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full items-center justify-center border-4 border-gray-900 shadow-lg group-hover:scale-125 transition-all duration-500">
                  <Icon name={exp.icon} size={24} className="text-white" />
                </div>

                {/* Empty Column for Alternating Layout */}
                <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
