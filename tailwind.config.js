/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        backgroundImage: {
            'bad': "url('./assets/images/white_bed.jpg')"
        },
        extend: {
            'bg-bad': {
                maxWidth: '100%',

            }
        }
    },
  },
  plugins: [
      require('tailwindcss-animated')
  ],
}

