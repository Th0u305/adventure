/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
    flowbite.content(),

  ],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },

  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin") ,
    flowbite.plugin(),
  ],
}

