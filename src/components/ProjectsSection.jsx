import React, { useState, useEffect, useRef } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import Icon from './Icon'

const ProjectsSection = () => {
  const { projects } = usePortfolio()
  const [currentImageIndex, setCurrentImageIndex] = useState(projects.map(() => 0))
  const imageIntervalsRef = useRef([])

  useEffect(() => {
    return () => {
      imageIntervalsRef.current.forEach(interval => clearInterval(interval))
    }
  }, [])

  const startImageCycle = (projectIndex) => {
    if (projects[projectIndex].images.length > 1) {
      imageIntervalsRef.current[projectIndex] = setInterval(() => {
        setCurrentImageIndex(prev => {
          const newIndices = [...prev]
          newIndices[projectIndex] = (newIndices[projectIndex] + 1) % projects[projectIndex].images.length
          return newIndices
        })
      }, 1500)
    }
  }

  const stopImageCycle = (projectIndex) => {
    if (imageIntervalsRef.current[projectIndex]) {
      clearInterval(imageIntervalsRef.current[projectIndex])
      setCurrentImageIndex(prev => {
        const newIndices = [...prev]
        newIndices[projectIndex] = 0
        return newIndices
      })
    }
  }

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-red-500/10 to-red-800/10 rounded-full blur-3xl animate-gentle-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-900/10 rounded-full blur-3xl animate-gentle-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-72 h-72 bg-gradient-to-r from-red-600/10 to-red-900/10 rounded-full blur-3xl animate-gentle-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 slide-up-fade">
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-6 shimmer">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700 mx-auto animate-pulse" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              className="slide-up-fade w-full"
            >
              <div
                className="rounded-lg border text-card-foreground shadow-sm group relative overflow-hidden bg-gray-900/40 border-gray-700/50 hover:border-red-500/30 backdrop-blur-xl transform-gpu hover:scale-105 hover:-translate-y-2 lg:hover:-translate-y-4 transition-all duration-700 cursor-pointer professional-glass-strong w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Hover Effects */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-red-600/30 via-red-500/30 to-red-700/30 blur-sm z-0" />

                {/* Project Image */}
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div
                    className="absolute inset-0"
                    onMouseEnter={() => startImageCycle(index)}
                    onMouseLeave={() => stopImageCycle(index)}
                  >
                    {project.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        alt={project.title}
                        src={image}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-105 ${
                          currentImageIndex[index] === imgIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 lg:top-4 lg:left-4 z-20">
                    <div className="inline-flex items-center rounded-full border font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gradient-to-r from-red-600/80 to-red-800/80 text-white border-white/20 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-1.5 shadow-lg transform group-hover:scale-110 transition-all duration-500 text-xs lg:text-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4 z-20">
                    <div className="p-2 lg:p-3 bg-gradient-to-r from-red-600/80 to-red-800/80 rounded-full backdrop-blur-sm border border-white/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <Icon
                        name={project.icon}
                        size={24}
                        className="h-4 w-4 lg:h-6 lg:w-6 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col space-y-1.5 relative z-10 p-4 lg:p-6">
                  <div className="font-semibold tracking-tight text-lg md:text-xl lg:text-2xl text-white group-hover:text-gray-100 transition-colors duration-300 break-words">
                    {project.title}
                    {project.subtitle && ` | ${project.subtitle}`}
                  </div>
                </div>

                <div className="relative z-10 space-y-4 lg:space-y-6 p-4 lg:p-6">
                  {/* Description */}
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-sm md:text-base lg:text-lg break-words">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                        className="inline-flex items-center rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-gray-800/80 text-gray-200 border border-red-500/30 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 hover:text-white transform-gpu hover:scale-110 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-1.5 shadow-md text-xs lg:text-sm professional-shadow"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
