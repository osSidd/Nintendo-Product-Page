/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./src/pages/**/*.{js,jsx,ts,tsx}",
  //   "./src/components/**/*.{js,jsx,ts,tsx}",
  //   "./index.html"
  // ],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
        'xxs':'280px',
        'xs':'360px'
      },
      colors:{
        'main':'#e60012',
        'hero-bg': '#d5eff9',
        'nav-info': '#efefef',
        'copyright-bg':'#242424',
        'copyright-address':'#d0d0d0',
        'copyright-links':'#ffffff',
        'footer-bg': '#242424',
        'footer-heading': '#484848',
        'hero-title': '#f9faf8',
        'hero-secondary': '#e5e7eb',
        'online': '#f8f8f8',
        'testimonial': '#e5e7eb',
        'test-text': '#1f2937',
        'signup': '#3882f6',
        'border':'#dadada'
      },
      fontSize:{
        logo: '24px',
        title: '48px',
        'hero-desc': '18px',
        'sub-heading': '36px',
        'test-size': '36px',
        'copyright-links-mobile':'10px'
      },
      lineHeight:{
        title: '64px',
        description: '27px',
        testimonial: '48px',
      },
      keyframes:{
        translateLeft:{
          '0%':{transform: 'translateX(100%) scale(0.75)'},
          '50%':{transform: 'scale(0.75)'},
          '100%': {transform: 'translateX(0) scale(1)'}
        },
        translateRight:{
          '0%':{transform: 'translateX(-100%) scale(0.75)'},
          '50%':{transform: 'scale(0.75)'},
          '100%': {transform: 'translateX(0) scale(1)'}
        }
      },
      animation:{
        'translate-img-left': 'translateLeft 0.5s linear',
        'translate-img-right': 'translateRight 0.5s linear',
      }
    },
  },
  plugins: [],
}

