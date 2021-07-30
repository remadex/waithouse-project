/* eslint-disable */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./app/**/*.{hbs,js,ts,html}', './tests/**/*.{hbs,js,ts,html}'],
  },
  theme: {
    extend: {
      colors: {
        "primary": "#211F20",
        "secondary": "#83a8ae",
        "error": "#EB5757",
        "valid": "#19D568"
      },
      fontFamily: {
        "poppins": ['Poppins']
      }
    }
  },
  corePlugins: {},
  plugins: [],
};
