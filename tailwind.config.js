module.exports = {
  // purge: [
  //   './index.html',
  //   './src/**/*.{vue,js,ts,jsx,tsx}'
  // ],
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'ypg-yellow': '#f7c01a',
        'ypg-purple': '#c8acba',
        'ypg-blue': '#60a5fa',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
