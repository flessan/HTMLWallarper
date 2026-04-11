module.exports = function(eleventyConfig) {
    // Copy folder wallpapers dari root ke dalam folder hasil build
    // ../wallpapers artinya cari folder wallpapers di luar folder website
    eleventyConfig.addPassthroughCopy({ "../wallpapers": "wallpapers" });

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            data: "_data"
        }
    };
};