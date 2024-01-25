import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        'r-flex': ['R-Flex Regular', 'sans-serif'],
        bold: ['R-Flex Bold', 'sans-serif'],
      },
      colors: {
        primary: '#01162D',
        secondary: '#95F9C3',
      },
      backgroundImage: {
        'blur-bg': "url('/assets/images/blur-bg.svg')",
      },
    },
  },
  plugins: [],
}
export default config
