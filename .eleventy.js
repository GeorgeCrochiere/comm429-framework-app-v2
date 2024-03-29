const NavbarTop = require("./src/_includes/components/NavbarTop.js");
const NavbarSide = require("./src/_includes/components/NavbarSide.js");
const Footer = require("./src/_includes/components/Footer.js");
const BlogCard = require("./src/_includes/components/BlogCard.js");
const DropdownSelector = require("./src/_includes/components/DropdownSelector.js");
const ExerciseCard = require("./src/_includes/components/ExerciseCard.js");
const ExerciseCardFull = require("./src/_includes/components/ExerciseCardFull.js");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "./src/_includes/assets/": "./src/assets" });
    eleventyConfig.addPassthroughCopy({ "./src/_includes/js/": "./src/js" });
    eleventyConfig.addPassthroughCopy({ "./src/_includes/css/": "./src/css" });

    eleventyConfig.addWatchTarget("./src/_includes/css");
    eleventyConfig.addWatchTarget("./src/_includes/js");

    eleventyConfig.addShortcode("NavbarTop", NavbarTop);
    eleventyConfig.addShortcode("NavbarSide", NavbarSide);
    eleventyConfig.addShortcode("Footer", Footer);
    eleventyConfig.addShortcode("BlogCard", BlogCard);
    eleventyConfig.addShortcode("DropdownSelector", DropdownSelector);
    eleventyConfig.addShortcode("ExerciseCard", ExerciseCard);
    eleventyConfig.addShortcode("ExerciseCardFull", ExerciseCardFull);

    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("./src/blog/**/*.md");
    });

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEgnine: 'njk',
        dataTemplateEgnine: 'njk',
    };
}