import React from "react";

export const ServicesSection = (): JSX.Element => {
  const services = [
    {
      id: 1,
      icon: "https://c.animaapp.com/rCgVzQtu/img/vector.svg",
      iconAlt: "Residential flooring icon",
      title: "Residential Epoxy Flooring Services",
      description: "Turn your home into a showroom with stunning, spill-proof floors.",
      features: ["Garage Floors", "Basement Coating", "Kitchen Floors", "Patio Surfaces"]
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/rCgVzQtu/img/vector-1.svg",
      iconAlt: "Commercial flooring icon",
      title: "Commercial Epoxy Flooring Solutions",
      description: "Elevate your workspace with flooring built for heavy use.",
      features: ["Warehouse Floors", "Retail Spaces", "Industrial Areas", "Office Buildings"]
    },
    {
      id: 3,
      icon: "https://c.animaapp.com/rCgVzQtu/img/vector-2.svg",
      iconAlt: "Garage flooring icon",
      title: "Garage Epoxy Flooring Installation",
      description: "Transform your garage into a polished, durable space.",
      features: ["Decorative Flakes", "Metallic Finishes", "Anti-Slip Coating", "Custom Colors"]
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://c.animaapp.com/rCgVzQtu/img/layout---245--.svg)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primitives-color-chathams-blue-light)]/95 to-[var(--primitives-color-chathams-blue)]/95" />
      
      <div className="relative flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pl-[var(--spacing-sizing-page-padding-padding-global)] pb-[90px] w-full">
        <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-20 relative w-full">
          <header className="flex flex-col lg:flex-row items-start gap-20 relative w-full">
            <div className="flex flex-col flex-1 items-start gap-6">
              <div className="inline-flex items-center relative">
                <span className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
                  Transform
                </span>
              </div>

              <h2 className="text-[color:var(--color-schemes-color-scheme-1-foreground)] text-7xl tracking-[-0.72px] leading-[64.8px] relative [font-family:'Gelasio',Helvetica] font-normal">
                <span className="text-white tracking-[-0.52px]">
                  Exceptional{" "}
                </span>
                <span className="text-[#154563] tracking-[-0.52px]">
                  Epoxy Flooring{" "}
                </span>
                <span className="text-white tracking-[-0.52px]">
                  Solutions for You
                </span>
              </h2>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <div className="h-16" />
              <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Our epoxy flooring services are designed to enhance the beauty and durability of your spaces. We specialize in residential and commercial applications, ensuring a seamless finish that lasts. Discover the perfect solution for your flooring needs today.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative w-full">
            {services.map((service) => (
              <article
                key={service.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="p-8 flex flex-col gap-6 h-full">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <img
                        className="w-8 h-8 filter brightness-0 invert"
                        alt={service.iconAlt}
                        src={service.icon}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 flex-1">
                    <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                      {service.title}
                    </h3>

                    <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] opacity-90">
                      {service.description}
                    </p>

                    <ul className="flex flex-col gap-2 mt-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="font-text-small-normal text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="inline-flex items-center gap-2 mt-4 text-white hover:text-[color:var(--primitives-color-chathams-blue-light)] transition-colors duration-200 group/btn"
                    type="button"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                      Learn More
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 relative">
            <button
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-200 hover:scale-[1.02]"
              type="button"
              aria-label="Learn more about our epoxy flooring services"
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Learn More
              </span>
            </button>

            <button
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] shadow-lg"
              type="button"
              aria-label="Get started with our epoxy flooring services"
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-chathams-blue)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Get Started
              </span>
              <svg
                className="w-5 h-5 text-[var(--primitives-color-chathams-blue)] transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
