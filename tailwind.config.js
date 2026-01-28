/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(220, 38, 38)',
          light: 'rgb(239, 68, 68)',    
          dark: 'rgb(153, 27, 27)',     
        },
        accent: {
          DEFAULT: 'rgb(220, 38, 38)',  
          light: 'rgb(239, 68, 68)',    
          dark: 'rgb(127, 29, 29)',     
        },
      },
      animation: {
        'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite',
        'elegant-rotate': 'elegant-rotate 30s linear infinite',
        'subtle-float': 'subtle-float 6s ease-in-out infinite',
      },
      keyframes: {
        'gentle-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        'elegant-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
