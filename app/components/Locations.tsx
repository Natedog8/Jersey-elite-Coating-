export default function Locations() {
  const locations = [
    {
      id: 1,
      image: "https://c.animaapp.com/rCgVzQtu/img/image-52.png",
      title: "Newark",
      address: "8 Lombardy Street, Suite 249 Newark, NJ 07102",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/rCgVzQtu/img/image-53@2x.png",
      title: "All of North Jersey",
      address: "We cover it all!",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-chathams-blue to-chathams-blue-dark">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-chathams-blue-light uppercase tracking-wider font-semibold text-sm mb-6 block">
            Coverage
          </span>
          <h2 className="font-gelasio text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
            Service Locations
          </h2>
          <p className="text-xl text-chathams-blue-lighter leading-relaxed max-w-2xl mx-auto">
            Explore Our Service Areas in North Jersey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group glass-card overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.title} location`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="font-gelasio text-3xl font-normal text-white mb-4">
                  {location.title}
                </h3>
                <address className="text-chathams-blue-lighter mb-6 not-italic leading-relaxed">
                  {location.address}
                </address>
                <button className="inline-flex items-center text-white hover:text-chathams-blue-light transition-colors duration-200 group/btn">
                  <span className="font-medium">Get Directions</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
