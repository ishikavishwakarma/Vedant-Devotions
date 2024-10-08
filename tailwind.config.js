/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./views//*.ejs", "./node_modules/flowbite/**/*.js"],
  content: [
    "./views/**/*.ejs", // Original content path
    "./node_modules/flowbite/**/*.js", // Flowbite content path
  ],
  theme: {
  extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
  };