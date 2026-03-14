import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0f172a',
          elevated: '#1e293b',
          card: 'rgba(255,255,255,0.04)',
          border: 'rgba(255,255,255,0.08)',
          muted: '#9CA3AF',
        },
        accent: {
          violet: '#A855F7',
          purple: '#9333EA',
        },
        cta: {
          DEFAULT: '#A855F7',
          hover: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(168, 85, 247, 0.2)',
        'glow-lg': '0 0 60px rgba(168, 85, 247, 0.25)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'glass-glow': '0 0 0 1px rgba(255,255,255,0.08), 0 0 24px rgba(168, 85, 247, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
        'glass': '12px',
        'xl': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
