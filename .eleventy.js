const prettier = require('prettier')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/')
  eleventyConfig.addPassthroughCopy('./src/img/')

  eleventyConfig.addWatchTarget('./src/css/')
  eleventyConfig.addWatchTarget('./src/img/')

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)

  eleventyConfig.addTransform('prettier', (content, outputPath) => {
    if (outputPath.endsWith('.html') && process.env.NODE_ENV !== 'production') {
      return prettier.format(content, { parser: 'html' })
    }
    return content
  })

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
