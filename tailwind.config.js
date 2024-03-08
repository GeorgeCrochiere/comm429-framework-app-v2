/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0094a3",
          "secondary": "#008278",
          "accent": "#ec4800",
          "neutral": "#211700",
          "base-100": "#25241f",
          "info": "#4ea7ff",
          "success": "#00cfa8",
          "warning": "#ff7200",
          "error": "#d0000e",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,njk,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

