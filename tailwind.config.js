/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "#3d0a49",
        BlueMain: "#1e40af",
        CianDark: "#027fe9",
        CianMain: "#00caf8",
        GrayMain: "#e0daf7",
        YellowMain: "#ffcc00",
      },
    },
  },
  plugins: [],
};
