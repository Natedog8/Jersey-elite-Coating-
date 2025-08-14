export default function Hero() {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://c.animaapp.com/rCgVzQtu/img/header---1--.svg')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-chathams-blue/80"></div>
      
      {/* Content */}
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
            <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
