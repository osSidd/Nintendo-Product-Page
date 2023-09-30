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
        'footer-bg': '#1f2937',
        'footer-text': '#e5e7eb',
        'hero-title': '#f9faf8',
        'hero-secondary': '#e5e7eb',
        'hero-logo': '#f9faf8',
        'testimonial': '#e5e7eb',
        'test-text': '#1f2937',
        'signup': '#3882f6',
      },
      fontSize:{
        logo: '24px',
        title: '48px',
        'hero-desc': '18px',
        'sub-heading': '36px',
        'test-size': '36px',
      },
      lineHeight:{
        title: '72px',
        description: '27px',
        testimonial: '48px',
      },
    },
  },
  plugins: [],
}

