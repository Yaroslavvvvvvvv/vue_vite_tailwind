/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        backgroundImage: {
            'bad': "url('./src/assets/images/bad.jpg')",
        },
    },
  },
  plugins: [],
}

