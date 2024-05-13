/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        containerColour: "#EDEDED",
        submitButtonColour: "#000000",
        hoverSubmitButtonColour: "#111111",
        resetButtonColour: "#FF0038",
        hoverResetButtonColour: "#FF1548",
        closeResultModalButtonColour: "#1F9EDE",
      },
    },
  },
  plugins: [],
};
