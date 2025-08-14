import React, { useState } from "react";

export const MainContentSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (acceptTerms) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-20 relative w-full flex-[0_0_auto]">
        <header className="flex flex-col items-center gap-6 relative w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--primitives-color-chathams-blue)] to-[var(--primitives-color-chathams-blue-light)] rounded-full" />

          <div className="flex flex-col items-center gap-6 relative w-full">
            <h2 className="text-center text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]">
              Get Your Free Quote
            </h2>

            <p className="text-center font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--primitives-color-neutral)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-2xl">
              Ready to transform your space? Reach out for a free consultation and personalized quote for your epoxy flooring project.
            </p>
          </div>
        </header>

        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-12">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label 
                      htmlFor="name" 
                      className="font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-200 rounded-xl font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] focus:outline-none focus:ring-2 focus:ring-[var(--primitives-color-chathams-blue)] focus:border-transparent transition-all duration-200 hover:border-gray-300"
                      placeholder="Enter your full name"
                      type="text"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label 
                      htmlFor="email" 
                      className="font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-200 rounded-xl font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] focus:outline-none focus:ring-2 focus:ring-[var(--primitives-color-chathams-blue)] focus:border-transparent transition-all duration-200 hover:border-gray-300"
                      placeholder="Enter your email address"
                      type="email"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-200 rounded-xl font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] focus:outline-none focus:ring-2 focus:ring-[var(--primitives-color-chathams-blue)] focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none h-32"
                    placeholder="Tell us about your project - space size, type of flooring needed, timeline, etc."
                    required
                    aria-required="true"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <label
                    htmlFor="terms"
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      id="terms"
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="sr-only"
                      required
                      aria-required="true"
                    />
                    <div
                      className={`relative w-5 h-5 mt-0.5 rounded border-2 transition-all duration-200 ${
                        acceptTerms 
                          ? "bg-[color:var(--primitives-color-chathams-blue)] border-[color:var(--primitives-color-chathams-blue)]" 
                          : "bg-white border-gray-300 group-hover:border-[color:var(--primitives-color-chathams-blue)]"
                      } flex items-center justify-center`}
                    >
                      {acceptTerms && (
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

                    <span className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] flex-1">
                      I agree to the <a href="#" className="text-[color:var(--primitives-color-chathams-blue)] hover:underline">Terms of Service</a> and <a href="#" className="text-[color:var(--primitives-color-chathams-blue)] hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!acceptTerms}
                  className="w-full bg-gradient-to-r from-[var(--primitives-color-chathams-blue)] to-[var(--primitives-color-chathams-blue-dark)] text-white py-4 px-8 rounded-xl font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[var(--primitives-color-chathams-blue)]/25"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-r from-[var(--primitives-color-chathams-blue-lightest)] to-[var(--primitives-color-chathams-blue-lighter)] px-12 py-6">
              <div className="flex items-center justify-center gap-8 text-center">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--primitives-color-chathams-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-text-small-medium text-[var(--primitives-color-chathams-blue-dark)]">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--primitives-color-chathams-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-text-small-medium text-[var(--primitives-color-chathams-blue-dark)]">24hr Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--primitives-color-chathams-blue)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-text-small-medium text-[var(--primitives-color-chathams-blue-dark)]">No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
