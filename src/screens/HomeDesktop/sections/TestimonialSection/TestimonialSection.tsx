import React from "react";

export const TestimonialSection = (): JSX.Element => {
  const testimonialData = {
    quote:
      "The epoxy flooring transformed our garage into a stunning space! The team was professional and exceeded our expectations.",
    author: {
      name: "Gabrielle C",
      location: "Homeowner, Madison, NJ",
      avatar: "https://c.animaapp.com/rCgVzQtu/img/avatar-image@2x.png",
    },
  };

  return (
    <section
      className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full flex-[0_0_auto] bg-[color:var(--color-schemes-color-scheme-3-background)]"
      role="region"
      aria-label="Customer testimonial"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] items-center gap-8 relative w-full flex-[0_0_auto]">
          <div className="relative w-[120px] h-12" aria-hidden="true" />

          <blockquote className="relative self-stretch font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-color-schemes-color-scheme-3-text text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
            "{testimonialData.quote}"
          </blockquote>

          <div className="flex flex-col w-[300px] items-center gap-4 relative flex-[0_0_auto]">
            <img
              className="relative w-16 h-16 aspect-[1] object-cover rounded-full"
              alt={`Profile photo of ${testimonialData.author.name}`}
              src={testimonialData.author.avatar}
            />

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <cite className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-color-schemes-color-scheme-3-text text-[length:var(--text-regular-semi-bold-font-size)] text-center tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)] not-italic">
                {testimonialData.author.name}
              </cite>

              <div className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-color-schemes-color-scheme-3-text text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                {testimonialData.author.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
