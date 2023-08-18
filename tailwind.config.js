/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {colors: {
      light: {
        primary: '#6a717a',
        // other light mode colors
      },
      dark: {
        primary: '#0e2032',
        // other dark mode colors
      },
    },
  },
  },
  plugins: [],
}

