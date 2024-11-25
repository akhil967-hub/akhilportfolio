/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
         'custom-bg': "url('https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg')", 
      },
    },
  },
  plugins: [],
};
