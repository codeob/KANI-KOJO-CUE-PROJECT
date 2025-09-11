/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // this is enough
  ],
  theme: {
    extend: {
      colors: {
        primary: "#522a00",
        secondary: "#7b3f00",
        tertiary: "#b07010",
        textLight: "#e1ddd4",
        surface: "#b69f7c",
        watermark: "#afa692",
      },
    },
  },
  plugins: [],
}
