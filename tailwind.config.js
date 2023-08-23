/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "100px minmax(500px, 1fr) 100px",
      },
      gridTemplateColumns: {
        customerTable: "60fr 40fr",
      },
    },
  },
  plugins: [],
};
