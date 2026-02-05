import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e9ff',
          200: '#bad8ff',
          300: '#8abfff',
          400: '#519bff',
          500: '#2677ff',
          600: '#0f56db',
          700: '#0e45b0',
          800: '#123d8a',
          900: '#16366d'
        }
      },
      boxShadow: {
        glass: '0 8px 30px rgba(15, 86, 219, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
