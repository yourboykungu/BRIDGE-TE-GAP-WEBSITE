/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.jsx',
    './components/**/*.jsx',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c1228',
        header: '#01a1fd', 
        google: '#1175e4',},
    },
  },
  plugins: [],
}
