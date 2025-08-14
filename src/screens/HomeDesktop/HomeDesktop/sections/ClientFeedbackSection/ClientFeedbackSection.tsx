import React from "react";

const locationData = [
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
];

export const ClientFeedbackSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full bg-gradient-to-br from-[#154563] to-[#0f3a52]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-20 relative w-full flex-[0_0_auto]">
        <header className="flex flex-col items-center gap-6 relative w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <span className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--primitives-color-chathams-blue-light)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
              Coverage
            </span>
          </div>

          <div className="flex flex-col items-center gap-6 relative w-full">
            <h2 className="text-center text-[color:var(--primitives-color-white)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]">
              Service Locations
            </h2>

            <p className="relative text-center font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--primitives-color-chathams-blue-lighter)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-2xl">
              Explore Our Service Areas in North Jersey
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative w-full">
          {locationData.map((location) => (
            <article
              key={location.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt={`${location.title} location`}
                  src={location.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-8 relative">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[color:var(--primitives-color-white)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] font-heading-h4 font-[number:var(--heading-h4-font-weight)] [font-style:var(--heading-h4-font-style)]">
                    {location.title}
                  </h3>

                  <address className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-chathams-blue-lighter)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] not-italic">
                    {location.address}
                  </address>

                  <button
                    className="inline-flex items-center gap-2 mt-4 text-[color:var(--primitives-color-white)] hover:text-[color:var(--primitives-color-chathams-blue-light)] transition-colors duration-200 group/btn"
                    type="button"
                    aria-label={`Get directions to ${location.title}`}
                  >
                    <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                      Get Directions
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
