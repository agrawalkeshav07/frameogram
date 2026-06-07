/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        frame: {
          black: '#050505',
          coal: '#0b0b0d',
          graphite: '#141417',
          steel: '#8f98a3',
          white: '#f7f7f2',
          yellow: '#f5e900',
          gold: '#d9c700',
          cyan: '#7fdfff',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(245, 233, 0, 0.28)',
        softGlow: '0 0 54px rgba(245, 233, 0, 0.16)',
      },
      backgroundImage: {
        'lens-grid':
          'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        floatLens: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -16px, 0) rotate(3deg)' },
        },
      },
      animation: {
        sweep: 'sweep 2.8s ease-in-out infinite',
        floatLens: 'floatLens 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
