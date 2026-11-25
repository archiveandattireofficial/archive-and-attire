module.exports = function (eleventyConfig) {
  // Purani files jaisi hain waisi copy karo
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("posts");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("nav.js");
  eleventyConfig.addPassthroughCopy("*.html");

  // README ko site mein mat daalo
  eleventyConfig.ignores.add("README.md");

  // Eleventy sirf Markdown (naye posts) banayega
  return {
    templateFormats: ["md"]
  };
};
