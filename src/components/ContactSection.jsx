import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import Icon from './Icon'

const ContactSection = () => {
  const { personalInfo, socialLinks, projects, experiences } = usePortfolio()
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Simulate form submission (you can replace this with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For now, we'll just open WhatsApp with the message
      const message = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0A%0AMessage:%0A${form.message}`
      window.open(`https://wa.me/917984079603?text=${message}`, '_blank')

      setSubmitSuccess(true)
      setSubmitMessage('Message sent successfully! Opening WhatsApp...')

      // Reset form
      setForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitSuccess(false)
      setSubmitMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-red-500/10 to-red-800/10 rounded-full blur-3xl animate-gentle-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-900/10 rounded-full blur-3xl animate-gentle-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <span className="text-4xl">📬</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have a project in mind? Let's work together to create something amazing
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/40 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-8 professional-shadow">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out through any of these channels.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp / Email</p>
                    <p className="text-white font-semibold">Send me a message</p>
                  </div>
                </a>

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-300 group"
                  >
                    <div
                      className={`p-3 bg-gradient-to-r ${social.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon name={social.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{social.name}</p>
                      <p className="text-white font-semibold">Follow me</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/40 border border-gray-700/50 backdrop-blur-xl rounded-xl p-6 text-center professional-shadow">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                  {projects.length}+
                </p>
                <p className="text-gray-400">Projects</p>
              </div>
              <div className="bg-gray-900/40 border border-gray-700/50 backdrop-blur-xl rounded-xl p-6 text-center professional-shadow">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                  {experiences.length}+
                </p>
                <p className="text-gray-400">Experience</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/40 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-8 professional-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-lg text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {!isSubmitting && <Icon name="send" size={20} />}
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {submitMessage && (
                <p className={`text-center text-sm ${submitSuccess ? 'text-white' : 'text-red-400'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
