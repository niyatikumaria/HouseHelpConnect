/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add more paths here as needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Default Tailwind blue-500
        secondary: '#64748b', // slate-500
        accent: '#f43f5e', // rose-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '128': '32rem', // Extra large spacing
      },
      screens: {
        '3xl': '1920px', // Extra large breakpoint
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For better form styling
    require('@tailwindcss/typography'), // For prose content
    require('@tailwindcss/aspect-ratio'), // For aspect-ratio utilities
  ],
}