export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between h-18 px-4">
            <div className="flex items-center">
              <img
                src="https://c.animaapp.com/rCgVzQtu/img/blue-logo@2x.png"
                alt="Jersey Elite Coatings"
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-chathams-blue font-medium">Home Services</a>
              <a href="#about" className="text-gray-700 hover:text-chathams-blue font-medium">About Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-chathams-blue font-medium">Testimonials</a>
              <a href="#gallery" className="text-gray-700 hover:text-chathams-blue font-medium">Gallery</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium">
                Get Started
              </button>
              <button className="btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://c.animaapp.com/rCgVzQtu/img/header---1--.svg')"
        }}
      >
        <div className="absolute inset-0 bg-chathams-blue/80"></div>
        <div className="relative z-10 container-max px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-gelasio text-5xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight">
              Transform Your Space with{' '}
              <span className="text-chathams-blue-light">Epoxy Flooring</span>{' '}
              Today!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover the durability and beauty of epoxy flooring for your home or business. 
              Our expert team in North Jersey is ready to help you achieve the perfect finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get Quote
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section 
        id="services"
        className="relative overflow-hidden section-padding"
        style={{
          backgroundImage: "url('https://c.animaapp.com/rCgVzQtu/img/layout---245--.svg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-chathams-blue-light/95 to-chathams-blue/95"></div>
        <div className="relative container-max">
          <div className="text-center mb-20">
            <span className="text-white/80 uppercase tracking-wider font-semibold text-sm mb-6 block">
              Transform
            </span>
            <h2 className="font-gelasio text-5xl lg:text-7xl font-normal text-white leading-tight mb-6">
              Exceptional Epoxy Flooring Solutions
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
              Our epoxy flooring services are designed to enhance the beauty and durability of your spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="https://c.animaapp.com/rCgVzQtu/img/vector.svg" alt="" className="w-8 h-8 filter brightness-0 invert" />
              </div>
              <h3 className="font-gelasio text-2xl font-normal text-white mb-4">
                Residential Epoxy Flooring Services
              </h3>
              <p className="text-white/90 mb-6">
                Turn your home into a showroom with stunning, spill-proof floors.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="https://c.animaapp.com/rCgVzQtu/img/vector-1.svg" alt="" className="w-8 h-8 filter brightness-0 invert" />
              </div>
              <h3 className="font-gelasio text-2xl font-normal text-white mb-4">
                Commercial Epoxy Flooring Solutions
              </h3>
              <p className="text-white/90 mb-6">
                Elevate your workspace with flooring built for heavy use.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="https://c.animaapp.com/rCgVzQtu/img/vector-2.svg" alt="" className="w-8 h-8 filter brightness-0 invert" />
              </div>
              <h3 className="font-gelasio text-2xl font-normal text-white mb-4">
                Garage Epoxy Flooring Installation
              </h3>
              <p className="text-white/90 mb-6">
                Transform your garage into a polished, durable space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-gelasio text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your space? Contact us for a free consultation.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-chathams-blue"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-chathams-blue"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-chathams-blue"
                    placeholder="Tell us about your project"
                  />
                </div>
                <button type="submit" className="w-full btn-primary py-4">
                  Get My Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white section-padding border-t border-gray-200">
        <div className="container-max text-center">
          <div className="mb-8">
            <img
              src="https://c.animaapp.com/rCgVzQtu/img/image-54@2x.png"
              alt="Jersey Elite Coatings"
              className="w-32 h-32 mx-auto object-contain"
            />
          </div>
          <p className="text-gray-600">
            © 2025 Jersey Elite Coatings. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
