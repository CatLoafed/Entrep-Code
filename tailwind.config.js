/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        totggreen: {
          1: "#262626",
          2: "#343e34",
          3: "#3d5434",
                    },
        totyellow: {
          1: "#d4b57e",
          2: "#DED2A2",
        },
      }
    },
  },
  plugins: [],
}

