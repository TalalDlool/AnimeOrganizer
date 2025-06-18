/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
        },
        secondary: "#6b7280",
        dark: {
          100: "#0f0f0f",
          200: "#1a1a1a",
          300: "#262626",
          400: "#404040",
        },
      },
      borderRadius: {
        container: "0.75rem",
      },
    },
  },
  plugins: [],
};
