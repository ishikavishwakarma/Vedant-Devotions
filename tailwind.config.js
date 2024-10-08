/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Keep your original content path
    "./node_modules/flowbite/**/*.js" // Add flowbite content path
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Add flowbite plugin
  ],
  };