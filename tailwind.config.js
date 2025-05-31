// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
            sans: ["var(--font-geist-sans)", "sans-serif"],
            mono: ["var(--font-geist-mono)", "monospace"],
            code: ["var(--font-fira-code)", "monospace"],
            tinos: ["var(--font-tinos)", "serif"],
            fancy: ["var(--font-playfair)", "serif"],
            cursive: ["var(--font-dancing)", "cursive"],
          },
      },
    },
    plugins: [],
  };
  
  export default config;
  