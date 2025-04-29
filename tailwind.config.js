/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      animation: {
        'scroll': 'scroll 20s linear infinite', // Adjust duration for speed
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)', // Moves the logos out of the container
          },
        },
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        "lime-green": "#B9FF66",
        "rich-black": "#191A23",
        "light-gray": "#F3F3F3",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "deep-gray": "#292A32"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}