/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rooso-green': '#9FD134',
        'rooso-gray': '#2A2A2A',
      },
    },
  },
  plugins: [],
}