'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (acceptTerms) {
      console.log('Form submitted:', formData)
    }
  }

  const benefits = [
    { icon: '✓', text: 'Free Consultation' },
    { icon: '✓', text: '24hr Response' },
    { icon: '✓', text: 'No Obligation' },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="w-16 h-1 bg-gradient-to-r from-chathams-blue to-chathams-blue-light rounded-full mx-auto mb-6"></div>
          <h2 className="font-gelasio text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 leading-tight">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your space? Reach out for a free consultation and personalized quote for your epoxy flooring project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-chathams-blue focus:border-transparent transition-all duration-200 hover:border-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-chathams-blue focus:border-transparent transition-all duration-200 hover:border-gray-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-chathams-blue focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none"
                    placeholder="Tell us about your project - space size, type of flooring needed, timeline, etc."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      required
                      className="w-4 h-4 text-chathams-blue bg-gray-100 border-gray-300 rounded focus:ring-chathams-blue focus:ring-2"
                    />
                  </div>
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-chathams-blue hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-chathams-blue hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!acceptTerms}
                  className="w-full bg-gradient-to-r from-chathams-blue to-chathams-blue-dark text-white py-4 px-8 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-chathams-blue/25"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-r from-chathams-blue-lightest to-chathams-blue-lighter px-12 py-6">
              <div className="flex items-center justify-center gap-8 text-center">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-chathams-blue text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {benefit.icon}
                    </span>
                    <span className="font-medium text-chathams-blue-dark text-sm">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
