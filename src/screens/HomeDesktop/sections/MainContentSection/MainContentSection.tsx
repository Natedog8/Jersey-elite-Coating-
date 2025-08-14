import React, { useState } from "react";

export const MainContentSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] flex-[0_0_auto] flex flex-col items-center relative self-stretch w-full bg-color-schemes-color-scheme-1-background">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-20 relative w-full flex-[0_0_auto]">
        <header className="items-center flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] gap-4 relative w-full flex-[0_0_auto]">
          <div className="w-7 h-6 relative self-stretch" />

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="self-stretch mt-[-1.00px] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative font-heading-h2 font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]">
              Contact Us
            </h1>

            <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Reach out for a free quote or inquiry.
            </p>
          </div>
        </header>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-medium)] items-center gap-6 relative w-full flex-[0_0_auto]"
        >
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="relative self-stretch mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] [background:transparent] border-[none] p-0 focus:outline-none"
              placeholder="Name"
              type="text"
              required
              aria-required="true"
            />

            <div className="flex items-center gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[color:var(--primitives-opacity-neutral-darkest-15)] bg-primitives-opacity-transparent" />
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="relative self-stretch mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] [background:transparent] border-[none] p-0 focus:outline-none"
              placeholder="Email"
              type="email"
              required
              aria-required="true"
            />

            <div className="flex items-center gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[color:var(--primitives-opacity-neutral-darkest-15)] bg-primitives-opacity-transparent" />
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <label
              htmlFor="message"
              className="relative self-stretch mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
            >
              Message
            </label>

            <div className="flex h-[182px] items-start pl-0 pr-3 py-3 relative self-stretch w-full mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[color:var(--primitives-opacity-neutral-darkest-15)] bg-primitives-opacity-transparent">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="relative flex-1 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] [background:transparent] border-[none] p-0 resize-none focus:outline-none h-full"
                placeholder="Type your message..."
                required
                aria-required="true"
              />

              <img
                className="w-[3px] h-[3px] top-44 left-[556px] absolute object-cover"
                alt=""
                src="https://c.animaapp.com/ZszZBpsA/img/line-1.svg"
                role="presentation"
              />

              <img
                className="w-[7px] h-[7px] top-[172px] left-[552px] absolute object-cover"
                alt=""
                src="https://c.animaapp.com/ZszZBpsA/img/line-2.svg"
                role="presentation"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-5 h-5 ml-[-1.00px]">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
                aria-required="true"
              />
              <div
                className={`w-full h-full rounded border border-solid border-[color:var(--primitives-opacity-neutral-darkest-15)] bg-primitives-opacity-transparent flex items-center justify-center ${formData.acceptTerms ? "bg-[color:var(--primitives-color-chathams-blue)] border-[color:var(--primitives-color-chathams-blue)]" : ""}`}
              >
                {formData.acceptTerms && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>

            <label
              htmlFor="acceptTerms"
              className="relative w-fit mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)] cursor-pointer"
            >
              I accept the Terms
            </label>
          </div>

          <button
            type="submit"
            className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-3 py-1.5 relative flex-[0_0_auto] mb-[-2.00px] bg-[color:var(--primitives-color-chathams-blue)] rounded-xl border border-solid border-[color:var(--primitives-color-chathams-blue)] cursor-pointer hover:bg-[color:var(--primitives-color-chathams-blue-dark)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primitives-color-chathams-blue)] focus:ring-offset-2"
            disabled={!formData.acceptTerms}
          >
            <span className="relative w-fit mt-[-1.00px] ml-[-1.00px] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
              Submit
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
