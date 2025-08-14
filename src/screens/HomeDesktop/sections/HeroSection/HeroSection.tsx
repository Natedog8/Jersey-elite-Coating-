import React from "react";

export const HeroSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Home Services", hasDropdown: false },
    { label: "About Us", hasDropdown: false },
    { label: "Testimonials", hasDropdown: false },
    { label: "Gallery", hasDropdown: true },
  ];

  return (
    <header className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
      <nav
        className="relative self-stretch w-full h-[72px]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex flex-col w-[892px] h-[72px] items-center justify-center pr-[var(--spacing-sizing-page-padding-padding-global)] pl-[var(--spacing-sizing-page-padding-padding-global)] py-0 relative bg-[color:var(--color-schemes-color-scheme-2-background)]">
          <div className="flex w-[892px] items-center justify-around gap-8 relative flex-[0_0_auto] ml-[-64.00px] mr-[-64.00px]">
            <div className="inline-flex items-center justify-center gap-8 relative flex-[0_0_auto]">
              <div className="relative w-[88px] h-10">
                <img
                  className="absolute w-[84px] h-10 top-0 left-0.5 aspect-[0.82] object-cover"
                  alt="Company logo"
                  src="https://c.animaapp.com/ZszZBpsA/img/blue-logo@2x.png"
                />
              </div>

              <ul
                className="inline-flex items-center justify-end gap-8 relative flex-[0_0_auto]"
                role="menubar"
              >
                {navigationItems.map((item, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]"
                    role="none"
                  >
                    {item.hasDropdown ? (
                      <button
                        className="inline-flex items-center gap-1 relative flex-[0_0_auto] bg-transparent border-none cursor-pointer"
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="relative w-fit mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-2-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                          {item.label}
                        </span>
                        <img
                          className="relative w-6 h-6"
                          alt="Expand menu"
                          src="https://c.animaapp.com/ZszZBpsA/img/chevron-down.svg"
                        />
                      </button>
                    ) : (
                      <a
                        href="#"
                        className="relative w-fit mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-2-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)] no-underline hover:underline focus:underline"
                        role="menuitem"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
                <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-2.5 py-1 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-xl border border-solid border-[color:var(--primitives-opacity-neutral-darkest-15)] cursor-pointer hover:bg-[color:var(--primitives-opacity-neutral-darkest-5)] focus:outline-2 focus:outline-[color:var(--primitives-color-chathams-blue)] focus:outline-offset-2 transition-colors">
                  <span className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Get Started
                  </span>
                </button>

                <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-2.5 py-1 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] mr-[-2.00px] bg-[color:var(--primitives-color-chathams-blue)] rounded-xl border border-solid border-[color:var(--primitives-color-chathams-blue)] cursor-pointer hover:bg-[color:var(--primitives-color-chathams-blue-dark)] focus:outline-2 focus:outline-[color:var(--primitives-color-chathams-blue)] focus:outline-offset-2 transition-colors">
                  <span className="relative w-fit mt-[-1.00px] ml-[-1.00px] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Sign Up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
