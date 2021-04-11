// References:
// - <https://dev.to/divrhino/how-to-add-tailwindcss-to-your-hugo-site-5290>
// - <https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter>

const purgecss = require('@fullhuman/postcss-purgecss')({
  // See https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  }
});

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [__dirname]
    }),
    require('postcss-nested'),
    require('tailwindcss')(__dirname + '/tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
  ]
};
