import React from "react";

interface LocationData {
  id: string;
  title: string;
  address: string;
  image: string;
  imageAlt: string;
}

export const ClientFeedbackSection = (): JSX.Element => {
  const locations: LocationData[] = [
    {
      id: "newark",
      title: "Newark",
      address: "8 Lombardy Street, Suite 249 Newark, NJ 07102",
      image: "https://c.animaapp.com/ZszZBpsA/img/image-52.png",
      imageAlt: "Newark office location",
    },
    {
      id: "north-jersey",
      title: "All of North Jersey",
      address: "We cover it all!",
      image: "https://c.animaapp.com/ZszZBpsA/img/image-53@2x.png",
      imageAlt: "North Jersey coverage area",
    },
  ];

  return (
    <section
      className="flex flex-col h-[913px] items-center gap-20 pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] pt-28 relative self-stretch w-full bg-[color:var(--color-schemes-color-scheme-2-accent)]"
      aria-labelledby="locations-heading"
    >
      <header className="items-start flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] gap-4 relative w-full flex-[0_0_auto]">
        <div className="inline-flex items-center flex-[0_0_auto] relative self-stretch">
          <span className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
            Coverage
          </span>
        </div>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <h2
            id="locations-heading"
            className="self-stretch mt-[-1.00px] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]"
          >
            Locations
          </h2>

          <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Explore Our Service Areas in North Jersey
          </p>
        </div>
      </header>

      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 relative w-full flex-[0_0_auto] mb-[-94.00px]">
        <div className="flex flex-col items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="gap-16 flex items-start relative self-stretch w-full flex-[0_0_auto]">
            {locations.map((location, index) => (
              <article
                key={location.id}
                className="flex flex-col items-center gap-8 relative flex-1 grow"
              >
                <img
                  className={`${index === 0 ? "w-[584px] h-[383px] ml-[-64.00px] mr-[-170.00px] aspect-[1.8]" : "w-[292px] h-[382px] aspect-[0.76]"} relative object-cover`}
                  alt={location.imageAlt}
                  src={location.image}
                />

                <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto] mr-[-274.00px]">
                    <h3 className="w-[624px] mt-[-1.00px] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] relative font-heading-h4 font-[number:var(--heading-h4-font-weight)] [font-style:var(--heading-h4-font-style)]">
                      {location.title}
                    </h3>

                    <address className="relative w-[624px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] not-italic">
                      {location.address}
                    </address>
                  </div>

                  <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                    <button
                      className="all-[unset] box-border inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] rounded-xl cursor-pointer hover:opacity-80 focus:outline-2 focus:outline-white focus:outline-offset-2"
                      type="button"
                      aria-label={`Get directions to ${location.title}`}
                    >
                      <span className="all-[unset] box-border relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                        Get Directions
                      </span>

                      <img
                        className="relative w-6 h-6"
                        alt=""
                        src="https://c.animaapp.com/ZszZBpsA/img/chevron-right-2.svg"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
