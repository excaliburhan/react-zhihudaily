module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-cssnext': {},
    'postcss-nested': {},
    cssnano: {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false,
    },
  },
}
