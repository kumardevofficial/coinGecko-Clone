import { mtConfig } from "@material-tailwind/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1e3a8a',   // Custom color example
        customGreen: '#10b981',
        customRed: '#ef4444',
        topHeaderTextColor: '#696969',
        serachBackground:'#EFF2F5'
      },
    },
  },
  plugins: [mtConfig],
};
