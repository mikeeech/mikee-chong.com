import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sometype-mono': ['Sometype Mono', 'monospace'],
        'pt-mono': ['PT Mono', 'monospace'],
        lilita: ['Lilita One', 'sans-serif'],
        concert: ['Concert One', 'sans-serif'],
        honk: ['Honk', 'system-ui'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
