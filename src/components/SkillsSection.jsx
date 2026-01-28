import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'

const SkillsSection = () => {
  const { skillsCategories } = usePortfolio()

  return (
    <section id="skills" className="py-28 px-4 relative">
      <div className="absolute inset-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <span className="text-4xl">💻</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-3 relative">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            Expertise across the full technology stack with modern tools and frameworks
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gray-900/40 border-white/10 hover:border-white/20 backdrop-blur-xl cursor-pointer professional-glass-strong rounded-lg border text-card-foreground shadow-sm"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6 relative z-10 h-full flex flex-col">
                {/* Category Header */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-2xl">{category.emoji}</div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                      className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white/5 text-white/80 border border-white/10 hover:bg-white/15 hover:text-white transform-gpu transition-all duration-200 font-medium px-3 py-2 text-xs rounded-full whitespace-nowrap professional-shadow"
                    >
                      <span className="mr-1.5">{skill.emoji}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
