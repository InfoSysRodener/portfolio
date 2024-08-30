import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        pixel: ['var(--font-pixel)'],
        tagalog: ['var(--font-tagalog)'],
      },
      colors: {
        primary_red: '#780000',
        secondary_red: '#C1121F',
        primary_brown: '#FDF0D5',
        primary_blue: '#003049',
        secondary_blue: '#669bbc',
      },
    },
  },
  plugins: [],
}
export default config
