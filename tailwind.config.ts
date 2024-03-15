import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(3deg)' },
          '50%': { transform: 'rotate(-3deg)' },
        },
        fade_in_right: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in infinite',
        fade_in_right: 'fade_in_right 1.5s ease 0.5s forwards',
        fade_in_right_delay_1: 'fade_in_right 1.5s ease 1s forwards',
        fade_in_right_delay_2: 'fade_in_right 1.5s ease 1.5s forwards ',
        fade_in_right_delay_3: 'fade_in_right 1.5s ease 2s forwards',
        fade_in_right_delay_4: 'fade_in_right 1.5s ease 2.5s forwards',
        
      }
    },
  },
  plugins: [],
};
export default config;
