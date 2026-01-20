module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      mobileEnd: "600px",   // 👈 ADD THIS
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        coreBlue: "#276EF1",
        digitalTeal: "#14B8A6",
        darkNavy: "#0A2333"
      }
    }
  },
  plugins: []
};
