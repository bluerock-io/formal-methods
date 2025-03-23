import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/styles.css");
    eleventyConfig.addPassthroughCopy("js/scripts.js");
    eleventyConfig.addPassthroughCopy("assets/*.svg");
    eleventyConfig.addPassthroughCopy("assets/favicon.ico");

    eleventyConfig.addPassthroughCopy("tech_reports/");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addGlobalData("siteName", "BlueRock Verification");
    eleventyConfig.addGlobalData("companyName", "BlueRock Security Inc");
    eleventyConfig.addGlobalData("copyrightYear", function () { return new Date().getUTCFullYear(); });
};
