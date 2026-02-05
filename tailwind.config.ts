import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf3ff',
          100: '#dce8ff',
          200: '#c0d4ff',
          300: '#95b7ff',
          400: '#638fff',
          500: '#3c68f5',
          600: '#2449d9',
          700: '#1e3db0',
          800: '#1e378c',
          900: '#1e3271'
        },
        accent: {
          500: '#1eb5a6',
          600: '#0d9a8b'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-manrope)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        soft: '0 25px 65px -28px rgba(30, 61, 176, 0.32)'
      }
    }
  },
  plugins: []
};

export default config;
