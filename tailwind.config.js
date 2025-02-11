/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#DE0C78", // Custom pink shade for Penni AI
      },
    },
  },
  plugins: [],
};
