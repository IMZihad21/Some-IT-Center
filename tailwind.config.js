module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundImage: {
     'azure': "url('https://docs.microsoft.com/en-us/learn/media/topics/azure-header-background.svg')",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
