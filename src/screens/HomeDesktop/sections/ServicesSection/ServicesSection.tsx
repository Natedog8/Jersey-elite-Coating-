import React from "react";

export const ServicesSection = (): JSX.Element => {
  const services = [
    {
      id: 1,
      icon: "https://c.animaapp.com/ZszZBpsA/img/vector.svg",
      iconPosition: "w-[53px] h-[51px] top-1.5 left-[7px]",
      containerSize: "w-[66px] h-16",
      title: "Residential Epoxy Flooring Services",
      description:
        "Turn your home into a showroom with stunning, spill-proof floors.",
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/ZszZBpsA/img/vector-1.svg",
      iconPosition: "w-[61px] h-[51px] top-2.5 left-[3px]",
      containerSize: "w-[67px] h-16",
      title: "Commercial Epoxy Flooring Solutions",
      description: "Elevate your workspace with flooring built for heavy use.",
    },
    {
      id: 3,
      icon: "https://c.animaapp.com/ZszZBpsA/img/vector-2.svg",
      iconPosition: "w-14 h-[54px] top-[5px] left-[5px]",
      containerSize: "w-[66px] h-16",
      title: "Garage  Epoxy Flooring Installation",
      description: "Transform your garage into a polished, durable space.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pl-[var(--spacing-sizing-page-padding-padding-global)] pb-[90px] relative self-stretch w-full flex-[0_0_auto] bg-[url(https://c.animaapp.com/ZszZBpsA/img/layout---245--.svg)] bg-cover bg-[50%_50%] bg-primitives-color-chathams-blue-light">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 relative w-full flex-[0_0_auto]">
        <header className="flex items-start gap-20 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[383px] items-start gap-4 relative">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                Transform
              </span>
            </div>

            <h2 className="self-stretch text-[color:var(--color-schemes-color-scheme-1-foreground)] text-7xl tracking-[-0.72px] leading-[64.8px] relative [font-family:'Gelasio',Helvetica] font-normal">
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

          <p className="relative flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            <br />
            <br />
            <br />
            <br />
            Our epoxy flooring services are designed to enhance the beauty and
            durability of your spaces. We specialize in residential and
            commercial applications, ensuring a seamless finish that lasts.
            Discover the perfect solution for your flooring needs today.
          </p>
        </header>

        <div className="flex flex-col items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col items-start gap-6 relative flex-1 grow"
              >
                <div className={`relative ${service.containerSize}`}>
                  <img
                    className={`absolute ${service.iconPosition}`}
                    alt={`${service.title} icon`}
                    src={service.icon}
                  />
                </div>

                <h3 className="relative self-stretch font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                  {service.title}
                </h3>

                <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-foreground)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <button
            className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-3 py-1.5 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-xl overflow-hidden border border-solid border-[color:var(--primitives-opacity-neutral-darkest-15)] cursor-pointer hover:opacity-80 transition-opacity"
            type="button"
            aria-label="Learn more about our epoxy flooring services"
          >
            <span className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
              Learn More
            </span>
          </button>

          <button
            className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
            type="button"
            aria-label="Get started with our epoxy flooring services"
          >
            <span className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
              <span className="text-white font-text-regular-medium [font-style:var(--text-regular-medium-font-style)] font-[number:var(--text-regular-medium-font-weight)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] text-[length:var(--text-regular-medium-font-size)]">
                Get
              </span>

              <span className="text-[#0a0303] font-text-regular-medium [font-style:var(--text-regular-medium-font-style)] font-[number:var(--text-regular-medium-font-weight)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] text-[length:var(--text-regular-medium-font-size)]">
                &nbsp;
              </span>

              <span className="text-white font-text-regular-medium [font-style:var(--text-regular-medium-font-style)] font-[number:var(--text-regular-medium-font-weight)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] text-[length:var(--text-regular-medium-font-size)]">
                Started
              </span>
            </span>

            <img
              className="relative w-6 h-6"
              alt=""
              src="https://c.animaapp.com/ZszZBpsA/img/chevron-right.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
