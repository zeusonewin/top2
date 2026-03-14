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
          card: '#1e293b',
          border: '#334155',
          muted: '#64748b',
        },
        cta: {
          DEFAULT: '#fbbf24',
          hover: '#f59e0b',
          dark: '#d97706',
          glow: 'rgba(251, 191, 36, 0.25)',
        },
        accent: {
          gold: '#fbbf24',
          amber: '#f59e0b',
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
        'cta-glow': '0 0 24px rgba(251, 191, 36, 0.35)',
        'cta-glow-lg': '0 0 40px rgba(251, 191, 36, 0.25)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.25)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'glass-gold': '0 0 0 1px rgba(251, 191, 36, 0.15), 0 8px 32px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
        'glass': '12px',
        'glass-lg': '20px',
      },
    },
  },
  plugins: [],
};

export default config;
