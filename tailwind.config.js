/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F2EBD9",
        foreground: "#5b5b2c",
        "sestra-teal": "#5b5b2c",
        "sestra-mahogany": "#9B7B5B",
        "sestra-gold": "#9B7B5B",
        "sestra-cream": "#F2EBD9",
        "sestra-sand": "#D6C9AE",
        "sestra-pale": "#A8A882",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
