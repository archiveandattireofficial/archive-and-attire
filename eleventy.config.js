module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("posts");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("nav.js");
  eleventyConfig.addPassthroughCopy("*.html");

  eleventyConfig.ignores.add("README.md");

  // New post (blog folder), newest first
  eleventyConfig.addCollection("blog", function (api) {
    return api.getFilesByGlob("blog/*.md").sort((a, b) => b.date - a.date);
  });

  return {
    templateFormats: ["md", "njk"]
  };
};
