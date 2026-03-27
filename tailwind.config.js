/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d1b1e',
        mist: '#edf3ef',
        sage: '#c9d9cf',
        pine: '#214a43',
        gold: '#c58d44',
        sand: '#f4f8fe',
      },
      boxShadow: {
        panel: '0 24px 80px rgba(13, 27, 30, 0.12)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(197, 141, 68, 0.18), transparent 38%), radial-gradient(circle at top right, rgba(33, 74, 67, 0.2), transparent 28%), linear-gradient(180deg, rgba(247, 241, 232, 0.96), rgba(255, 255, 255, 1))',
        'hero-glow-dark':
          'radial-gradient(circle at top left, rgba(197, 141, 68, 0.12), transparent 32%), radial-gradient(circle at top right, rgba(111, 185, 164, 0.12), transparent 25%), linear-gradient(180deg, rgba(12, 18, 20, 0.98), rgba(17, 24, 29, 1))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
