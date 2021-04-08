const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'media', // false | 'media' | 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Nunito',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
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
      'sans': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'serif': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      'mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      'rounded': 'Nunito, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
