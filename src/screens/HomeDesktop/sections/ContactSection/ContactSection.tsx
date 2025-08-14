import React from "react";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="h-[1032px] gap-[60px] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] pt-[90px] flex flex-col items-center relative self-stretch w-full bg-color-schemes-color-scheme-1-background">
      <header className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          <span className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
            Transform
          </span>
        </div>

        <h2 className="self-stretch text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]">
          Unbeatable Commitment to Excellence That Transforms Every Floor
        </h2>

        <p className="relative self-stretch bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
          We&apos;ve delivered stunning epoxy floors across North Jersey for
          years, combining expert craftsmanship with premium materials to
          guarantee a flawless finish.
        </p>
      </header>

      <img
        className="relative w-[891px] h-[594px] mb-[-112.00px] ml-[-63.50px] mr-[-63.50px] aspect-[1.5] object-cover"
        alt="Epoxy floor coating basement showing professional installation by Jersey Elite Coatings"
        src="https://c.animaapp.com/ZszZBpsA/img/epoxy-floor-coating-basement-jersey-elite-coatings-1.png"
      />
    </section>
  );
};
