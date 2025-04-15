import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',    // Deep Blue
        secondary: '#2ECC71',  // Emerald Green
        background: '#FAFAFA', // Very Light Gray
        accent: '#F1C40F',     // Golden Yellow
        text: '#333333',       // Dark Gray
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'sans-serif'],
        heading: ['var(--font-ibm-plex-sans)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        '7xl': '80rem',
        '6xl': '72rem',
        '5xl': '64rem',
        '4xl': '56rem',
        '3xl': '48rem',
        '2xl': '42rem',
        'xl': '36rem',
        'lg': '32rem',
        'md': '28rem',
        'sm': '24rem',
      },
    },
  },
  plugins: [],
};

export default config; 