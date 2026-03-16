/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFCFB",
        foreground: "#2C2C2C",
        "sestra-teal": "#1E3939",
        "sestra-mahogany": "#51291E",
        "sestra-gold": "#D4AF37",
        "sestra-cream": "#FDFCFB",
        "sestra-sand": "#F5EFE6",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
