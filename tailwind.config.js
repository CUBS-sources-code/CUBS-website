/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F082C",
        "accent-purple": "#D1C4E9",
        "accent-purple-foreground": "#651FFF",
      },
    },
  },
  plugins: [],
};
