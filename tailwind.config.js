/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', " sans-serif"],
      },
      colors: {
        dark_bg: "#2A2A29",
        green_text: "#07D511",
      },
	  
    },
  },

};
