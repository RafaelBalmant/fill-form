/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "bluish-purple": "#763DF2",
        "lavender-indigo": "#8C5CF2",
        "dull-lavender": "#B599F2",
        "connecticut-lilac": "#C8C2F2",
        "snorlax": "#222673",
      },
    },
  },
  plugins: [],
};
