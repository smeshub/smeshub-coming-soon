import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    boxShadow: {
      xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
      xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
      '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
      '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
      'elevation-xs': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      'elevation-sm':
        '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      'elevation-md':
        '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      'elevation-lg':
        '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
      'elevation-xl':
        '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
      'elevation-2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
      'elevation-3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
      'focus-ring':
        '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 2px #CED2DC',
    },
    fontSize: {
      // General
      xs: ['12px', '18px'],
      sm: ['14px', '24px'],
      base: ['16px', '26px'],
      lg: ['18px', '32px'],

      // Link
      'link-xs': ['12px', '1'],
      'link-sm': ['14px', '1'],
      'link-base': ['16px', '1'],
      'link-lg': ['18px', '1'],

      // Display
      'display-xs': ['18px', '26px'],
      'display-sm': ['24px', '32px'],
      'display-md': ['32px', '48px'],
      'display-lg': ['40px', '50px'],
      'display-xl': ['48px', '56px'],

      // Title
      'title-sm': ['14px', '120%'],
      'title-base': ['16px', '120%'],
      'title-lg': ['18px', '120%'],
      'title-xl': ['20px', '120%'],
      'title-2xl': ['25px', '120%'],
    },
    extend: {
      keyframes: {
        loading: {
          '0%': { 'stroke-dasharray': '0 150', 'stroke-dashoffset': '0' },
          '47.5%': { 'stroke-dasharray': '42 150', 'stroke-dashoffset': '-16' },
          '95%, 100%': {
            'stroke-dasharray': '42 150',
            'stroke-dashoffset': '-59',
          },
        },
        'dialog-overlay': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'dialog-show': {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        'loading-spin': { '100%': { transform: 'rotate(360deg)' } },
      },
      animation: {
        loading: 'loading 2s linear infinite',
        'loading-spin': 'loading-spin 1.5s ease-in-out infinite',
        'dialog-show': 'dialog-show 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'dialog-overlay': 'dialog-overlay 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontFamily: {
        sans: ['var(--font-metropolis)', ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        touch: '44px',
        ...defaultTheme.height,
      },
      minWidth: {
        touch: '44px',
        ...defaultTheme.width,
      },
      colors: {
        // General
        neutral: {
          DEFAULT: '#0F172A',
          100: '#0F172A',
          90: '#1E293B',
          80: '#334155',
          70: '#475569',
          60: '#64748B',
          50: '#94A3B8',
          40: '#CBD5E1',
          30: '#E2E8F0',
          20: '#F1F5F9',
          10: '#f8fafc',
          0: '#ffffff',
        },
        success: {
          DEFAULT: '#67C11D',
          110: '#4EA515',
          100: '#67C11D',
          90: '#95D94E',
          20: '#D8F8A4',
          10: '#EDFBD1',
        },
        alert: {
          DEFAULT: '#E84040',
          110: '#C72E3C',
          100: '#E84040',
          90: '#F1796E',
          20: '#FCC6B3',
          10: '#FDE5D9',
        },
        info: {
          DEFAULT: '#336FE8',
          110: '#2555C7',
          100: '#336FE8',
          90: '#6497F1',
          20: '#ADD0FC',
          10: '#D6E8FD',
        },
        warning: {
          DEFAULT: '#F9DE40',
          110: '#D6BB2E',
          100: '#F9DE40',
          90: '#FBE96F',
          20: '#FEF6B2',
          10: '#FEFBD8',
        },

        // Brand Colors
        smeshub: {
          DEFAULT: '#081C4F',
          110: '#071947',
          100: '#081C4F',
          90: '#213361',
          20: '#ced2dc',
          10: '#e6e8ed',
        },
        ahli: {
          DEFAULT: '#FF1C41',
          110: '#E6193B',
          100: '#FF1C41',
          90: '#FF3354',
          20: '#FFD2D9',
          10: '#FFE8EC',
        },
        layanan: {
          DEFAULT: '#FF601B',
          110: '#E65618',
          100: '#FF601B',
          90: '#FF7032',
          20: '#FFDFD1',
          10: '#FFEFE8',
        },
        ekspor: {
          DEFAULT: '#00B03B',
          110: '#009E35',
          100: '#00B03B',
          90: '#1AB84F',
          20: '#CCEFD8',
          10: '#E6F7EB',
        },
        pengusaha: {
          DEFAULT: '#8B01FF',
          110: '#7D01E6',
          100: '#8B01FF',
          90: '#971AFF',
          20: '#E8CCFF',
          10: '#F3E6FF',
        },
        akademi: {
          DEFAULT: '#0062E4',
          110: '#0058CD',
          100: '#0062E4',
          90: '#1A72E7',
          20: '#CCE0FA',
          10: '#E6EFFC',
        },
        fund: {
          DEFAULT: '#00BDE7',
          110: '#00AAD0',
          100: '#00BDE7',
          90: '#1AC4E9',
          20: '#CCF2FA',
          10: '#E6F8FD',
        },
      },
      height: {
        content: 'min-content',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate global styles
    }),
  ],
}
export default config
