const colors = require('tailwindcss/colors');
// Temporary fix coming from <https://github.com/tailwindlabs/tailwindcss/issues/4690#issuecomment-881266377>
delete colors['lightBlue']
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media', // false | 'media' | 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: colors.orange,
      secondary: colors.yellow,
      neutral: colors.gray,
      transparent: 'transparent',
      gray: colors.warmGray,
      yellow: colors.amber
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      'rounded': [
        'Nunito',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
