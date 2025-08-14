export default function Transform() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Premium Materials",
      description: "Only the highest quality epoxy systems"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      ),
      title: "Expert Installation",
      description: "Years of professional experience"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
      title: "Lifetime Warranty",
      description: "Guaranteed satisfaction & durability"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-chathams-blue uppercase tracking-wider font-semibold text-sm mb-6 block">
            Transform
          </span>
          <h2 className="font-gelasio text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 leading-tight">
            Unbeatable Commitment to Excellence That Transforms Every Floor
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We've delivered stunning epoxy floors across North Jersey for years, combining expert craftsmanship 
            with premium materials to guarantee a flawless finish.
          </p>
        </div>

        {/* Main Image Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-chathams-blue/5 to-transparent rounded-3xl"></div>
            
            <div className="relative p-8">
              <img
                src="https://c.animaapp.com/rCgVzQtu/img/epoxy-floor-coating-basement-jersey-elite-coatings-1.png"
                alt="Professional epoxy floor coating installation"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-chathams-blue-lightest to-white px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-chathams-blue rounded-full flex items-center justify-center text-white mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-chathams-blue-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
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
