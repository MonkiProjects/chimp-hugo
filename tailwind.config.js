const colors = require('tailwindcss/colors');
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
