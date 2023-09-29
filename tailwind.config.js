/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'hero-bg': '#1f2937',
        'hero-title': '#f9faf8',
        'hero-secondary': '#e5e7eb',
        'hero-logo': '#f9faf8'
      },
      fontSize:{
        logo: '24px',
        title: '48px',
        'hero-desc': '18px',
      },
      lineHeight:{
        title: '72px',
        description: '27px',
      },
    },
  },
  plugins: [],
}

