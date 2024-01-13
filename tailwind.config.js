import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#6b7280",
          "secondary": "#4b5563",
          "accent": "#0f766e",
          "neutral": "#6b7280",
          "base-100": "#374151",
          "info": "#0369a1",
          "success": "#15803d",
          "warning": "#c2410c",
          "error": "#b91c1c",
        },
      },
    ],
  },
}

