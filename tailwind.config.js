/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff88',
        secondary: '#0a0a0a',
        accent: '#00cc6a',
        dark: '#050505',
        glass: 'rgba(255, 255, 255, 0.05)',
        // Vibrant color palette
        vibrant: {
          pink: '#ff6b9d',
          purple: '#a855f7',
          orange: '#ff8c42',
          cyan: '#22d3ee',
          yellow: '#facc15',
          blue: '#3b82f6',
          red: '#ef4444',
          lime: '#84cc16',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00ff8820 0deg, #00ff8800 360deg)',
        'gradient-vibrant': 'linear-gradient(135deg, #ff6b9d, #a855f7, #22d3ee)',
        'gradient-warm': 'linear-gradient(135deg, #ff8c42, #ff6b9d, #a855f7)',
        'gradient-cool': 'linear-gradient(135deg, #22d3ee, #3b82f6, #a855f7)',
        'gradient-sunset': 'linear-gradient(135deg, #ff6b9d 0%, #ff8c42 50%, #facc15 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #a855f7 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'gradient': 'gradient 8s linear infinite',
        'rainbow': 'rainbow 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 255, 136, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        rainbow: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
