const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Colors for subsidiaries
    'bg-mps', 'bg-mps-dark', 'text-mps', 'border-mps',
    'bg-labrigad', 'bg-labrigad-dark', 'text-labrigad', 'border-labrigad',
    'bg-gamius', 'bg-gamius-dark', 'text-gamius', 'border-gamius',
    'bg-moujeleell', 'bg-moujeleell-dark', 'text-moujeleell', 'border-moujeleell',
    'hover:bg-mps-dark', 'hover:bg-labrigad-dark', 'hover:bg-gamius-dark', 'hover:bg-moujeleell-dark',
    'hover:border-mps-dark', 'hover:border-labrigad-dark', 'hover:border-gamius-dark', 'hover:border-moujeleell-dark',
    'hover:text-mps-dark', 'hover:text-labrigad-dark', 'hover:text-gamius-dark', 'hover:text-moujeleell-dark',
    // Responsive utilities
    'responsive-fluid-text', 'responsive-touch-target', 'responsive-only-xs', 'responsive-hidden-xs',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B8DBFF',
          300: '#8CC6FF',
          400: '#59ABFF',
          500: '#2B90FF',
          600: '#0070F3',
          700: '#0057CC',
          800: '#003E99',
          900: '#002966',
          950: '#001433',
        },
        secondary: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
          950: '#0A1A2B',
        },
        // Subsidiary colors with improved contrast for WCAG compliance
        // MPS - blue theme (WCAG AA contrast with white)
        mps: {
          DEFAULT: '#0057B8', // Darker blue for better contrast (4.5:1 with white)
          light: '#3B7ED3',
          dark: '#004494', // Darker state for hover/active
        },
        // LABRIG'Ad - red/orange theme (WCAG AA contrast with white)
        labrigad: {
          DEFAULT: '#D14124', // Adjusted from original #ff4500 for better contrast
          light: '#E16850',
          dark: '#B73620', // Darker hover/active state
        },
        // Gamius - purple theme (WCAG AA contrast with white)
        gamius: {
          DEFAULT: '#7928CA', // Adjusted from original for better contrast
          light: '#954FD6',
          dark: '#6423A3', // Darker hover/active state
        },
        // Moujeleell - green theme (WCAG AA contrast with white)
        moujeleell: {
          DEFAULT: '#087F5B', // Adjusted from original for better contrast
          light: '#20A37E', 
          dark: '#076A4C', // Darker hover/active state
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'apple-spring': 'cubic-bezier(0.25, 0.1, 0.0, 1.0)',
      },
      boxShadow: {
        'apple-sm': '0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.1)',
        'apple-md': '0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 16px rgba(0, 0, 0, 0.1)',
        'apple-lg': '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 30px rgba(0, 0, 0, 0.1)',
        'apple-xl': '0 8px 12px rgba(0, 0, 0, 0.05), 0 20px 60px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-in-delayed-200': 'fadeIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s forwards',
        'fade-in-delayed-300': 'fadeIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s forwards',
        'fade-in-delayed-400': 'fadeIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.4s forwards',
        'fade-in-up-delayed-200': 'fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s forwards',
        'fade-in-up-delayed-300': 'fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s forwards',
        'fade-in-up-delayed-400': 'fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.4s forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.25, 0.1, 0.0, 1.0) forwards',
        'scale-in-delayed-200': 'scaleIn 0.5s cubic-bezier(0.25, 0.1, 0.0, 1.0) 0.2s forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Responsive-specific extensions
      spacing: {
        'responsive-xs': 'clamp(0.5rem, 0.5rem, 0.75rem)',
        'responsive-sm': 'clamp(0.75rem, 2vw, 1rem)',
        'responsive-md': 'clamp(1rem, 3vw, 1.5rem)',
        'responsive-lg': 'clamp(1.5rem, 5vw, 2rem)',
        'responsive-xl': 'clamp(2rem, 7vw, 3rem)',
      },
      fontSize: {
        // Fluid font sizes that scale based on viewport width
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.125rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.7rem + 1.25vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 2rem + 1.5vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 2.5rem + 2vw, 4rem)',
        'fluid-6xl': 'clamp(3.75rem, 3rem + 3vw, 6rem)',
      },
      maxWidth: {
        // Responsive container widths
        'mobile': '100%',
        'tablet': '90%',
        'laptop': '85%',
        'desktop': '80%',
        'hd': '1440px',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, matchUtilities, theme }) {
      // Animation delay utilities
      const animationDelayUtilities = {
        '.animation-delay-100': {
          'animation-delay': '0.1s',
        },
        '.animation-delay-200': {
          'animation-delay': '0.2s',
        },
        '.animation-delay-300': {
          'animation-delay': '0.3s',
        },
        '.animation-delay-400': {
          'animation-delay': '0.4s',
        },
        '.animation-delay-500': {
          'animation-delay': '0.5s',
        },
        '.animation-delay-600': {
          'animation-delay': '0.6s',
        },
        '.animation-delay-700': {
          'animation-delay': '0.7s',
        },
        '.animation-delay-800': {
          'animation-delay': '0.8s',
        },
        '.animation-delay-900': {
          'animation-delay': '0.9s',
        },
        '.animation-delay-1000': {
          'animation-delay': '1s',
        },
      };
      
      addUtilities(animationDelayUtilities);
      
      // Responsive Utilities
      const responsiveUtilities = {
        // Fluid Typography - text that scales smoothly with the viewport
        '.responsive-fluid-text': {
          fontSize: 'clamp(1rem, 0.75rem + 1vw, 1.5rem)',
          lineHeight: '1.5',
        },
        
        // Touch-Friendly Target - ensures elements are large enough for touch
        '.responsive-touch-target': {
          minHeight: '44px',
          minWidth: '44px',
        },
        
        // Extra Small Only - only visible on extra small screens
        '.responsive-only-xs': {
          display: 'block',
          '@screen sm': {
            display: 'none',
          },
        },
        
        // Hidden on Extra Small - hidden on phones, visible on larger screens
        '.responsive-hidden-xs': {
          display: 'none',
          '@screen sm': {
            display: 'block',
          },
        },
      };
      
      addUtilities(responsiveUtilities);
    }),
  ],
} 