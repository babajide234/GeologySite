/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          // Custom primary color with linear gradient
          lightest: '#AB7DF3', // Lightest shade of purple
          light: '#8250C1',    // Light shade of purple
          DEFAULT: '#6D28D9',  // Default shade of purple
          dark: '#4C1D95',     // Dark shade of purple
          darkest: '#2B094B',  // Darkest shade of purple
          // Custom accent colors
          accent1: '#FFC107',    // Yellow accent
          accent2: '#F06292',    // Pink accent
          accent3: '#64B5F6',    // Blue accent
      },
      // Custom background colors
      backgroundColor: {
        primary: '#F9FAFB',    // Primary background color
        secondary: '#EDF2F7',  // Secondary background color
      },
    },
  },
  plugins: [],
}

