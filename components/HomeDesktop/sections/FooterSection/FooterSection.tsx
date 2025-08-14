import React from "react";

export const FooterSection = (): JSX.Element => {
  const navigationLinks = [
    "About Us",
    "Our Services",
    "Testimonials",
    "Contact Us",
    "Get a Quote",
  ];

  const legalLinks = ["Privacy Policy", "Terms of Use", "Cookie Policy"];

  return (
    <footer className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-medium)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-medium)] pl-[var(--spacing-sizing-page-padding-padding-global)] self-stretch w-full bg-color-schemes-color-scheme-1-background relative flex-[0_0_auto]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-small)] items-center gap-8 relative w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <img
              className="w-[337px] h-[337px] aspect-[1] relative object-cover"
              alt="Company Logo"
              src="https://c.animaapp.com/rCgVzQtu/img/image-54@2x.png"
            />
          </div>

          <nav
            className="flex flex-wrap items-start justify-center gap-[32px_32px] relative self-stretch w-full flex-[0_0_auto]"
            role="navigation"
            aria-label="Footer navigation"
          >
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="relative w-fit mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                tabIndex={0}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <hr
            className="relative self-stretch w-full h-px mt-[-1.00px] border-0 bg-[color:var(--color-schemes-color-scheme-1-border)]"
            role="separator"
          />

          <div className="justify-between flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              © 2025 Epoxy Flooring. All rights reserved.
            </p>

            <nav
              className="inline-flex items-start gap-6 relative flex-[0_0_auto]"
              role="navigation"
              aria-label="Legal links"
            >
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative w-fit mt-[-1.00px] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  tabIndex={0}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
