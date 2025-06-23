import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/styles.css");
    eleventyConfig.addPassthroughCopy("js/scripts.js");
    eleventyConfig.addPassthroughCopy("assets/*.svg");
    eleventyConfig.addPassthroughCopy("assets/favicon.ico");

    eleventyConfig.addPassthroughCopy("tech_reports/");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    // date filter
    eleventyConfig.addFilter("formatDate", function(date, format) {
        return new Date(date).toLocaleDateString(
            'en-us',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
        );
    });

    eleventyConfig.addGlobalData("siteName", "BlueRock Formal Methods");
    eleventyConfig.addGlobalData("companyName", "BlueRock Security, Inc");
    eleventyConfig.addGlobalData("copyrightYear", function () { return new Date().getUTCFullYear(); });
};
