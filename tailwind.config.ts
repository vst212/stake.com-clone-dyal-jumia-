import type { Config } from "tailwindcss"
const { fontFamily } = require('tailwindcss/defaultTheme')

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        blue: {
          100: '#d0e3f9',
          200: '#a1c8f3',
          300: '#72aced',
          400: '#4391e7',
          500: '#1475e1',
          600: '#105eb4',
          700: '#0c4687',
          800: '#082f5a',
          900: '#04172d',
        },
        red: {
          100: '#fbcfd8',
          200: '#f6a0b1',
          300: '#f2708a',
          400: '#ed4163',
          500: '#e9113c',
          600: '#ba0e30',
          700: '#8c0a24',
          800: '#5d0718',
          900: '#2f030c',
        },
        purple: {
          100: '#dcccff',
          200: '#be8fff',
          300: '#b061ff',
          400: '#962eff',
          500: '#9000ff',
          600: '#7100c7',
          700: '#590099',
          800: '#2d004d',
          900: '#1e0132',
        },
        green: {
          100: '#ccffcc',
          200: '#8fff8f',
          300: '#57ff57',
          400: '#1fff20',
          500: '#00e701',
          600: '#00b801',
          700: '#008a01',
          800: '#004d00',
          900: '#013e01',
        },
        yellow: {
          100: '#fff2dd',
          200: '#ffdeaa',
          300: '#ffcc7b',
          400: '#ffb949',
          500: '#ff9d00',
          600: '#cd7f01',
          700: '#9c6000',
          800: '#633d00',
          900: '#301d00',
        },
        grey: {
          100: '#d5dceb',
          200: '#b1bad3',
          300: '#557086',
          400: '#2f4553',
          500: '#213743',
          600: '#1a2c38',
          700: '#0f212e',
          800:' #071d2a',
          900: '#071824',
        },
        
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
       strokeWidth: {
        '3': '3px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config