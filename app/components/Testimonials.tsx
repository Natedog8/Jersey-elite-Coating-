export default function Testimonials() {
  return (
    <section className="section-padding bg-chathams-blue-lightest">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="w-16 h-16 mx-auto mb-8 opacity-20">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-chathams-blue">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          {/* Testimonial */}
          <blockquote className="font-gelasio text-3xl md:text-4xl font-normal text-gray-800 mb-12 leading-relaxed">
            "The epoxy flooring transformed our garage into a stunning space! The team was professional and exceeded our expectations."
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center">
            <img
              src="https://c.animaapp.com/rCgVzQtu/img/avatar-image@2x.png"
              alt="Gabrielle C"
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <cite className="font-semibold text-gray-800 not-italic">
              Gabrielle C
            </cite>
            <p className="text-gray-600">
              Homeowner, Madison, NJ
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
