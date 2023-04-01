/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-hammer-smith-one)'],
        serif: ['var(--font-im-fell-dw-pica-sc)'],
        mono: ['var(--font-cinzel)'],
      },
    },
    boxShadow: {
      custom01: '0px 0px 3px rgba(0, 0, 0, 0.3)',
    },
  },
  plugins: [],
}
