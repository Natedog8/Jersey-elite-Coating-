import React from "react";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative w-full">
        <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-20 relative w-full">
          <header className="flex flex-col items-center gap-8 relative w-full max-w-4xl text-center">
            <div className="inline-flex items-center relative">
              <span className="relative w-fit font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--primitives-color-chathams-blue)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)] uppercase">
                Transform
              </span>
            </div>

            <div className="flex flex-col items-center gap-6 relative w-full">
              <h2 className="text-center text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]">
                Unbeatable Commitment to Excellence That Transforms Every Floor
              </h2>

              <p className="relative text-center font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--primitives-color-neutral)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
                We've delivered stunning epoxy floors across North Jersey for years, combining expert craftsmanship with premium materials to guarantee a flawless finish.
              </p>
            </div>
          </header>

          <div className="relative w-full max-w-5xl">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primitives-color-chathams-blue)]/5 to-transparent" />
              
              <div className="relative p-8">
                <img
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                  alt="Professional epoxy floor coating installation in basement by Jersey Elite Coatings showing high-quality finish and expert craftsmanship"
                  src="https://c.animaapp.com/rCgVzQtu/img/epoxy-floor-coating-basement-jersey-elite-coatings-1.png"
                />
              </div>

              <div className="bg-gradient-to-r from-[var(--primitives-color-chathams-blue-lightest)] to-white px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-[var(--primitives-color-chathams-blue)] rounded-full flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-text-regular-semi-bold text-[var(--primitives-color-chathams-blue-dark)]">Premium Materials</h3>
                    <p className="font-text-small-normal text-[var(--primitives-color-neutral)]">Only the highest quality epoxy systems</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-[var(--primitives-color-chathams-blue)] rounded-full flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-text-regular-semi-bold text-[var(--primitives-color-chathams-blue-dark)]">Expert Installation</h3>
                    <p className="font-text-small-normal text-[var(--primitives-color-neutral)]">Years of professional experience</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-[var(--primitives-color-chathams-blue)] rounded-full flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-text-regular-semi-bold text-[var(--primitives-color-chathams-blue-dark)]">Lifetime Warranty</h3>
                    <p className="font-text-small-normal text-[var(--primitives-color-neutral)]">Guaranteed satisfaction & durability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
