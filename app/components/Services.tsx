export default function Services() {
  const services = [
    {
      id: 1,
      icon: "https://c.animaapp.com/rCgVzQtu/img/vector.svg",
      title: "Residential Epoxy Flooring Services",
      description: "Turn your home into a showroom with stunning, spill-proof floors.",
      features: ["Garage Floors", "Basement Coating", "Kitchen Floors", "Patio Surfaces"]
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/rCgVzQtu/img/vector-1.svg",
      title: "Commercial Epoxy Flooring Solutions",
      description: "Elevate your workspace with flooring built for heavy use.",
      features: ["Warehouse Floors", "Retail Spaces", "Industrial Areas", "Office Buildings"]
    },
    {
      id: 3,
      icon: "https://c.animaapp.com/rCgVzQtu/img/vector-2.svg",
      title: "Garage Epoxy Flooring Installation",
      description: "Transform your garage into a polished, durable space.",
      features: ["Decorative Flakes", "Metallic Finishes", "Anti-Slip Coating", "Custom Colors"]
    },
  ]

  return (
    <section 
      id="services"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('https://c.animaapp.com/rCgVzQtu/img/layout---245--.svg')"
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-chathams-blue-light/95 to-chathams-blue/95"></div>
      
      <div className="relative section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start gap-20 mb-20">
            <div className="flex-1">
              <span className="text-white/80 uppercase tracking-wider font-semibold text-sm mb-6 block">
                Transform
              </span>
              <h2 className="font-gelasio text-5xl lg:text-7xl font-normal text-white leading-tight">
                <span className="text-white">Exceptional </span>
                <span className="text-chathams-blue-lightest">Epoxy Flooring </span>
                <span className="text-white">Solutions for You</span>
              </h2>
            </div>
            
            <div className="flex-1 lg:pt-16">
              <p className="text-white/90 text-lg leading-relaxed">
                Our epoxy flooring services are designed to enhance the beauty and durability of your spaces. 
                We specialize in residential and commercial applications, ensuring a seamless finish that lasts. 
                Discover the perfect solution for your flooring needs today.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group glass-card p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <img
                    src={service.icon}
                    alt=""
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </div>
                
                <h3 className="font-gelasio text-2xl font-normal text-white mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="inline-flex items-center text-white hover:text-chathams-blue-light transition-colors duration-200 group/btn">
                  <span className="font-medium">Learn More</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="glass-card px-8 py-4 text-white hover:bg-white/20 transition-all duration-200 hover:scale-105">
              Learn More
            </button>
            <button className="bg-white text-chathams-blue px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
