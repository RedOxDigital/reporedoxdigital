import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Modern Authority Palette from colour.md
        'slate-blue': '#3D5A80',
        'slate-blue-light': '#52719D',
        'slate-blue-dark': '#314866',
        
        'core-red': '#9E2410',
        'core-red-light': '#B83A24',
        'core-red-dark': '#811D0D',
        
        'light-gray': '#E9ECEF',
        'light-gray-light': '#F1F3F5',
        'light-gray-dark': '#DEE2E6',
        
        'dark-slate': '#2A323C',
        'dark-slate-light': '#3C4652',
        'dark-slate-dark': '#212830',
        
        // Semantic color mappings
        primary: {
          50: '#F1F3F5',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#3C4652',
          400: '#314866',
          500: '#3D5A80',
          600: '#52719D',
          700: '#2A323C',
          800: '#212830',
          900: '#1A202C',
        },
        secondary: {
          500: '#9E2410',
          600: '#B83A24',
          700: '#811D0D',
        },
        accent: {
          500: '#3D5A80',
          600: '#52719D',
          700: '#314866',
        }
      },
      boxShadow: {
        'slate-blue': '0 4px 15px -5px rgba(61, 90, 128, 0.4)',
        'slate-blue-hover': '0 7px 20px -5px rgba(61, 90, 128, 0.6)',
        'core-red': '0 4px 15px -5px rgba(158, 36, 16, 0.4)',
        'core-red-hover': '0 7px 20px -5px rgba(158, 36, 16, 0.5)',
        'card': '0 10px 30px rgba(0,0,0,0.08)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'elevation-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'elevation-3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        'elevation-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        'dramatic': '0 25px 50px rgba(0,0,0,0.4)',
        'floating': '0 20px 40px rgba(0,0,0,0.3)',
        'professional': '0 4px 12px rgba(0,0,0,0.1)',
        'trust': '0 2px 8px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}