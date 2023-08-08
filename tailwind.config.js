/** @type {import('tailwindcss').Config} */
import * as daisy from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#641ae6",
          "secondary": "#d926a9",
          "accent": "#1fb2a6",
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'color1': '#FFF1D0',
        'color2': '#F0C808',
        'color3': '#06AED5',
        'color4': '#DD1C1A',
        'color5': '#086788'
      }
    },
  },
  plugins: [daisy],
}

