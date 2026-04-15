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
          DEFAULT: '#e63946',
          hover: '#d62839',
          glow: 'rgba(230, 57, 70, 0.4)',
        },
        secondary: '#1d3557',
        accent: '#f1faee',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint': "linear-gradient(rgba(230, 57, 70, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 57, 70, 0.05) 1px, transparent 1px)",
        'blueprint-fine': "linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        'blueprint': '40px 40px',
        'blueprint-fine': '10px 10px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'strong': '0 8px 30px rgba(0, 0, 0, 0.1)',
        'primary-glow': '0 0 20px rgba(230, 57, 70, 0.4)',
      }
    },
  },
  plugins: [],
}
