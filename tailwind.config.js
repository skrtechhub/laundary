/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Sky Blue
        primary: {
          DEFAULT: "#87CEEB", // sky-blue
          50: "#F0F9FF", // sky-blue-50
          100: "#E0F2FE", // sky-blue-100
          200: "#BAE6FD", // sky-blue-200
          300: "#7DD3FC", // sky-blue-300
          400: "#38BDF8", // sky-blue-400
          500: "#87CEEB", // sky-blue-500
          600: "#0284C7", // sky-blue-600
          700: "#0369A1", // sky-blue-700
          800: "#075985", // sky-blue-800
          900: "#0C4A6E", // sky-blue-900
        },
        // Secondary Colors - Navy Blue
        secondary: {
          DEFAULT: "#1E3A8A", // navy-blue
          50: "#EFF6FF", // navy-blue-50
          100: "#DBEAFE", // navy-blue-100
          200: "#BFDBFE", // navy-blue-200
          300: "#93C5FD", // navy-blue-300
          400: "#60A5FA", // navy-blue-400
          500: "#3B82F6", // navy-blue-500
          600: "#2563EB", // navy-blue-600
          700: "#1D4ED8", // navy-blue-700
          800: "#1E3A8A", // navy-blue-800
          900: "#1E40AF", // navy-blue-900
        },
        // Accent Colors - Fresh Green
        accent: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
        },
        // Background Colors
        background: "#FAFBFC", // soft-white
        surface: {
          DEFAULT: "#F1F5F9", // slate-100
          hover: "#E2E8F0", // slate-200
        },
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800
          secondary: "#6B7280", // gray-500
          tertiary: "#9CA3AF", // gray-400
          inverse: "#FFFFFF", // white
        },
        // Semantic Colors
        success: {
          DEFAULT: "#059669", // emerald-600
          light: "#D1FAE5", // emerald-100
        },
        warning: {
          DEFAULT: "#D97706", // amber-600
          light: "#FEF3C7", // amber-100
        },
        error: {
          DEFAULT: "#DC2626", // red-600
          light: "#FEE2E2", // red-100
        },
        info: {
          DEFAULT: "#3B82F6", // blue-500
          light: "#DBEAFE", // blue-100
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
          dark: "#D1D5DB", // gray-300
        },
      },
      fontFamily: {
        headline: ['Outfit', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        cta: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.16' }],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      transitionDuration: {
        '0': '0ms',
        '150': '150ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}