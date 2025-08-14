/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-schemes-color-scheme-1-background":
          "var(--color-schemes-color-scheme-1-background)",
        "color-schemes-color-scheme-2-foreground":
          "var(--color-schemes-color-scheme-2-foreground)",
        "color-schemes-color-scheme-3-accent":
          "var(--color-schemes-color-scheme-3-accent)",
        "color-schemes-color-scheme-3-border":
          "var(--color-schemes-color-scheme-3-border)",
        "color-schemes-color-scheme-3-foreground":
          "var(--color-schemes-color-scheme-3-foreground)",
        "color-schemes-color-scheme-3-text":
          "var(--color-schemes-color-scheme-3-text)",
        "primitives-color-chathams-blue-dark":
          "var(--primitives-color-chathams-blue-dark)",
        "primitives-color-chathams-blue-darker":
          "var(--primitives-color-chathams-blue-darker)",
        "primitives-color-chathams-blue-darkest":
          "var(--primitives-color-chathams-blue-darkest)",
        "primitives-color-chathams-blue-light":
          "var(--primitives-color-chathams-blue-light)",
        "primitives-color-chathams-blue-lighter":
          "var(--primitives-color-chathams-blue-lighter)",
        "primitives-color-flush-mahogany":
          "var(--primitives-color-flush-mahogany)",
        "primitives-color-flush-mahogany-dark":
          "var(--primitives-color-flush-mahogany-dark)",
        "primitives-color-flush-mahogany-darker":
          "var(--primitives-color-flush-mahogany-darker)",
        "primitives-color-flush-mahogany-darkest":
          "var(--primitives-color-flush-mahogany-darkest)",
        "primitives-color-flush-mahogany-light":
          "var(--primitives-color-flush-mahogany-light)",
        "primitives-color-flush-mahogany-lighter":
          "var(--primitives-color-flush-mahogany-lighter)",
        "primitives-color-flush-mahogany-lightest":
          "var(--primitives-color-flush-mahogany-lightest)",
        "primitives-color-galliano": "var(--primitives-color-galliano)",
        "primitives-color-galliano-dark":
          "var(--primitives-color-galliano-dark)",
        "primitives-color-galliano-darker":
          "var(--primitives-color-galliano-darker)",
        "primitives-color-galliano-darkest":
          "var(--primitives-color-galliano-darkest)",
        "primitives-color-galliano-light":
          "var(--primitives-color-galliano-light)",
        "primitives-color-galliano-lighter":
          "var(--primitives-color-galliano-lighter)",
        "primitives-color-galliano-lightest":
          "var(--primitives-color-galliano-lightest)",
        "primitives-color-neutral": "var(--primitives-color-neutral)",
        "primitives-color-neutral-dark": "var(--primitives-color-neutral-dark)",
        "primitives-color-neutral-darker":
          "var(--primitives-color-neutral-darker)",
        "primitives-color-neutral-light":
          "var(--primitives-color-neutral-light)",
        "primitives-color-neutral-lighter":
          "var(--primitives-color-neutral-lighter)",
        "primitives-opacity-neutral-darkest-10":
          "var(--primitives-opacity-neutral-darkest-10)",
        "primitives-opacity-neutral-darkest-20":
          "var(--primitives-opacity-neutral-darkest-20)",
        "primitives-opacity-neutral-darkest-30":
          "var(--primitives-opacity-neutral-darkest-30)",
        "primitives-opacity-neutral-darkest-40":
          "var(--primitives-opacity-neutral-darkest-40)",
        "primitives-opacity-neutral-darkest-5":
          "var(--primitives-opacity-neutral-darkest-5)",
        "primitives-opacity-neutral-darkest-50":
          "var(--primitives-opacity-neutral-darkest-50)",
        "primitives-opacity-neutral-darkest-60":
          "var(--primitives-opacity-neutral-darkest-60)",
        "primitives-opacity-transparent":
          "var(--primitives-opacity-transparent)",
        "primitives-opacity-white-10": "var(--primitives-opacity-white-10)",
        "primitives-opacity-white-15": "var(--primitives-opacity-white-15)",
        "primitives-opacity-white-20": "var(--primitives-opacity-white-20)",
        "primitives-opacity-white-30": "var(--primitives-opacity-white-30)",
        "primitives-opacity-white-40": "var(--primitives-opacity-white-40)",
        "primitives-opacity-white-5": "var(--primitives-opacity-white-5)",
        "primitives-opacity-white-50": "var(--primitives-opacity-white-50)",
        "primitives-opacity-white-60": "var(--primitives-opacity-white-60)",
      },
      fontFamily: {
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
        "heading-h5": "var(--heading-h5-font-family)",
        "heading-h6": "var(--heading-h6-font-family)",
        "heading-tagline": "var(--heading-tagline-font-family)",
        "text-large-bold": "var(--text-large-bold-font-family)",
        "text-large-extra-bold": "var(--text-large-extra-bold-font-family)",
        "text-large-light": "var(--text-large-light-font-family)",
        "text-large-link": "var(--text-large-link-font-family)",
        "text-large-medium": "var(--text-large-medium-font-family)",
        "text-large-normal": "var(--text-large-normal-font-family)",
        "text-large-semi-bold": "var(--text-large-semi-bold-font-family)",
        "text-medium-bold": "var(--text-medium-bold-font-family)",
        "text-medium-extra-bold": "var(--text-medium-extra-bold-font-family)",
        "text-medium-light": "var(--text-medium-light-font-family)",
        "text-medium-link": "var(--text-medium-link-font-family)",
        "text-medium-medium": "var(--text-medium-medium-font-family)",
        "text-medium-normal": "var(--text-medium-normal-font-family)",
        "text-medium-semi-bold": "var(--text-medium-semi-bold-font-family)",
        "text-regular-bold": "var(--text-regular-bold-font-family)",
        "text-regular-extra-bold": "var(--text-regular-extra-bold-font-family)",
        "text-regular-light": "var(--text-regular-light-font-family)",
        "text-regular-link": "var(--text-regular-link-font-family)",
        "text-regular-medium": "var(--text-regular-medium-font-family)",
        "text-regular-normal": "var(--text-regular-normal-font-family)",
        "text-regular-semi-bold": "var(--text-regular-semi-bold-font-family)",
        "text-small-bold": "var(--text-small-bold-font-family)",
        "text-small-extra-bold": "var(--text-small-extra-bold-font-family)",
        "text-small-light": "var(--text-small-light-font-family)",
        "text-small-link": "var(--text-small-link-font-family)",
        "text-small-medium": "var(--text-small-medium-font-family)",
        "text-small-normal": "var(--text-small-normal-font-family)",
        "text-small-semi-bold": "var(--text-small-semi-bold-font-family)",
        "text-tiny-bold": "var(--text-tiny-bold-font-family)",
        "text-tiny-extra-bold": "var(--text-tiny-extra-bold-font-family)",
        "text-tiny-light": "var(--text-tiny-light-font-family)",
        "text-tiny-link": "var(--text-tiny-link-font-family)",
        "text-tiny-medium": "var(--text-tiny-medium-font-family)",
        "text-tiny-normal": "var(--text-tiny-normal-font-family)",
        "text-tiny-semi-bold": "var(--text-tiny-semi-bold-font-family)",
      },
      boxShadow: {
        large: "var(--large)",
        medium: "var(--medium)",
        small: "var(--small)",
        xlarge: "var(--xlarge)",
        xsmall: "var(--xsmall)",
        xxlarge: "var(--xxlarge)",
        xxsmall: "var(--xxsmall)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
