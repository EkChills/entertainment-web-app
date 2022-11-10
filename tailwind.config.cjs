/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        PureWhite: '#FFFFFF',
        Red: "#FC4747",
        DarkBlue: ' #10141E',
        GreyishBlue: '#5A698F',
        SemiDarkBlue: '#161D2F',
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}


