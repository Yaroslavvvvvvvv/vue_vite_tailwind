/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        backgroundImage: {
            'bad': "url('./public/images/white_bed.jpeg')"
        },
        extend: {
            'bg-bad': {
                maxWidth: '100%',
            }
        }
    },
  },
  plugins: [],
}

