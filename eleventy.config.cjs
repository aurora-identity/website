const CleanCSS = require("clean-css");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/docs/architecture-diagram.png": "docs/architecture-diagram.png" });

  eleventyConfig.addNunjucksFilter("date", (value, format) => {
    const date = value === "now" ? new Date() : new Date(value);
    if (format === "yyyy") return String(date.getFullYear());
    return date.toISOString();
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.on("eleventy.after", async () => {
    const input = fs.readFileSync("./src/assets/css/main.css", "utf8");
    const minified = new CleanCSS({}).minify(input).styles;
    const outDir = "./_site/assets/css/"; // adjust to your output dir
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "main.css"), minified);
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
