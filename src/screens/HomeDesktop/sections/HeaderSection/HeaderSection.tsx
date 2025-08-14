import React from "react";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex h-[486px] items-start justify-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full bg-[url(https://c.animaapp.com/rCgVzQtu/img/header---1--.svg)] bg-cover bg-[50%_50%] bg-[color:var(--primitives-color-white)]">
      <div className="relative flex-1 max-w-[var(--spacing-sizing-container-container-large)] grow h-[262px]">
        <div className="w-[764px] h-[262px]">
          <div className="h-[300px]">
            <div className="relative w-[777px] h-[411px] -top-1 left-[-7px]">
              <div className="relative h-[411px]">
                <div className="absolute w-[777px] h-[411px] top-0 left-0">
                  <h1 className="absolute w-[764px] -top-px left-0 [font-family:'Gelasio',Helvetica] font-normal text-[color:var(--primitives-color-white)] text-5xl tracking-[-0.48px] leading-[57.6px]">
                    Transform Your Space with Epoxy Flooring Today!
                  </h1>

                  <p className="absolute w-[764px] top-[139px] left-0 font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Discover the durability and beauty of epoxy flooring for
                    your home or business. Our expert team in North Jersey is
                    ready to help you achieve the perfect finish.
                  </p>
                </div>

                <div className="absolute w-[198px] h-9 top-[249px] left-0">
                  <button
                    type="button"
                    className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-3 py-1.5 absolute -top-0.5 -left-0.5 bg-[color:var(--primitives-color-chathams-blue)] rounded-xl border border-solid border-[color:var(--primitives-color-chathams-blue)] cursor-pointer hover:opacity-90 focus:outline-2 focus:outline-offset-2 focus:outline-[color:var(--primitives-color-chathams-blue)] transition-opacity"
                    aria-label="Get a quote for epoxy flooring"
                  >
                    <span className="relative w-fit mt-[-1.00px] ml-[-1.00px] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      Quote
                    </span>
                  </button>

                  <button
                    type="button"
                    className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-3 py-1.5 absolute -top-px left-[86px] rounded-xl border border-solid border-[color:var(--primitives-opacity-neutral-darkest-15)] cursor-pointer hover:bg-[color:var(--primitives-opacity-white-10)] focus:outline-2 focus:outline-offset-2 focus:outline-[color:var(--primitives-color-white)] transition-colors"
                    aria-label="Learn more about epoxy flooring"
                  >
                    <span className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      Learn More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
