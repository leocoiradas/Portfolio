/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'space-background': "url('/assets/background-image/space.jpg')"
      }
    },
  },
  plugins: [],
}