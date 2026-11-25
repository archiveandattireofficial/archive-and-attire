module.exports = function (eleventyConfig) {
  // Copy these as-is into the finished site
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("nav.js");

  // Leave my existing HTML pages untouched
  return {
    htmlTemplateEngine: false
  };
};
