/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'transparent',
        'bg-solid': '#050505',
        surface: '#0a0a0a',
        'surface-hover': '#111111',
        primary: '#0ea5e9', /* Azul tecnológico sutil, como pedido */
        'text-main': '#ededed',
        'text-muted': '#888888',
        'border-color': '#222222'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
