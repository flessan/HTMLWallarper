module.exports = function(eleventyConfig) {
    // Copy assets jika ada (misal gambar logo/css manual)
    // Jika tidak ada folder assets, baris ini bisa dikomentar dulu
    // eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
            input: ".",          // Titik artinya gunakan folder tempat file ini berada
            output: "_site",     // Hasil build tetap ke _site
            includes: "_includes",
            data: "_data"
        }
    };
};