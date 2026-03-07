/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        background:  "rgb(var(--bg-secondary) / <alpha-value>)",
        foreground:  "rgb(var(--text-primary) / <alpha-value>)",
        surface:     "rgb(var(--bg-elevated) / <alpha-value>)",

        /* Apple Blue system accent */
        apple: {
          blue:    "#007AFF",
          blue2:   "#0A84FF",   /* dark-mode blue */
          indigo:  "#5856D6",
          purple:  "#AF52DE",
          green:   "#34C759",
          red:     "#FF3B30",
          orange:  "#FF9500",
          yellow:  "#FFCC00",
          gray:    "#8E8E93",
          gray2:   "#636366",
          gray3:   "#48484A",
          gray4:   "#3A3A3C",
          gray5:   "#2C2C2E",
          gray6:   "#1C1C1E",
        },
        /* Label hierarchy */
        label:     "rgb(var(--text-primary) / <alpha-value>)",
        label2:    "rgb(var(--text-secondary) / <alpha-value>)",

        /* Legacy compat */
        primary: {
          DEFAULT:    "#007AFF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT:    "#F2F2F7",
          foreground: "#1C1C1E",
        },
        accent: {
          DEFAULT:    "#F2F2F7",
          foreground: "#1C1C1E",
        },
        card: {
          DEFAULT:    "#FFFFFF",
          foreground: "#000000",
        },
      },

      borderRadius: {
        'apple-xs': '6px',
        'apple-sm': '10px',
        'apple':    '14px',
        'apple-md': '16px',
        'apple-lg': '20px',
        'apple-xl': '28px',
        'apple-2xl':'36px',
      },

      boxShadow: {
        'apple':          '0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)',
        'apple-md':       '0 4px 20px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.05)',
        'apple-elevated': '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
        'apple-float':    '0 16px 48px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08)',
        'apple-btn':      '0 1px 3px rgba(0,122,255,0.30), 0 0 0 0px rgba(0,122,255,0)',
      },

      fontFamily: {
        sans: [
          '-apple-system',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
      },

      fontSize: {
        'largetitle': ['34px', { lineHeight: '41px', fontWeight: '700', letterSpacing: '-0.4px' }],
        'title1':     ['28px', { lineHeight: '34px', fontWeight: '700', letterSpacing: '-0.3px' }],
        'title2':     ['22px', { lineHeight: '28px', fontWeight: '700', letterSpacing: '-0.26px' }],
        'title3':     ['20px', { lineHeight: '25px', fontWeight: '600', letterSpacing: '-0.2px' }],
        'headline':   ['17px', { lineHeight: '22px', fontWeight: '590', letterSpacing: '-0.4px' }],
        'body':       ['17px', { lineHeight: '22px', fontWeight: '400', letterSpacing: '-0.4px' }],
        'callout':    ['16px', { lineHeight: '21px', fontWeight: '400', letterSpacing: '-0.32px' }],
        'subhead':    ['15px', { lineHeight: '20px', fontWeight: '400', letterSpacing: '-0.24px' }],
        'footnote':   ['13px', { lineHeight: '18px', fontWeight: '400', letterSpacing: '-0.08px' }],
        'caption1':   ['12px', { lineHeight: '16px', fontWeight: '400', letterSpacing: '0px' }],
        'caption2':   ['11px', { lineHeight: '13px', fontWeight: '400', letterSpacing: '0.06px' }],
      },

      backdropBlur: {
        'apple': '20px',
        'apple-xl': '40px',
      },

      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.35, 0, 0.25, 1)',
        'apple-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      animation: {
        'fade-in':    'fadeIn 0.25s ease forwards',
        'slide-up':   'slideUp 0.3s cubic-bezier(0.35,0,0.25,1) forwards',
        'scale-in':   'scaleIn 0.25s cubic-bezier(0.35,0,0.25,1) forwards',
        'pulse-blue': 'pulseBlue 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
