export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/styles.css");
    eleventyConfig.addPassthroughCopy("js/scripts.js");
    eleventyConfig.addPassthroughCopy("assets/bluerock.svg");
    eleventyConfig.addPassthroughCopy("assets/bluerock-white.svg");
    eleventyConfig.addPassthroughCopy("assets/bluerock-dark.svg");
    eleventyConfig.addPassthroughCopy("assets/bluerock-cube.svg");


    eleventyConfig.addGlobalData("siteName", "BlueRock Verification");
    eleventyConfig.addGlobalData("companyName", "BlueRock Security Inc");
    eleventyConfig.addGlobalData("copyrightYear", function() { return new Date().getUTCFullYear(); });
};
