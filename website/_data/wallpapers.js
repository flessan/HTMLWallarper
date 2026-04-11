const fs = require("fs");
const path = require("path");

module.exports = function() {
  // Kita mundur satu tingkat dari /website ke root, lalu masuk ke /wallpapers
  const folderPath = path.resolve(__dirname, "../../wallpapers");
  
  try {
    // Membaca semua isi folder /wallpapers
    const dirents = fs.readdirSync(folderPath, { withFileTypes: true });
    
    // Filter hanya yang berupa folder
    return dirents
      .filter(dirent => dirent.isDirectory())
      .map(dirent => {
        return {
          name: dirent.name,
          folderName: dirent.name,
          // Path untuk preview mengarah ke folder wallpapers di root
          preview: `/wallpapers/${dirent.name}/gambar.png`,
          url: `https://github.com/flessan/HTMLWallarper/tree/main/wallpapers/${dirent.name}`
        };
      });
  } catch (e) {
    console.error("Gagal membaca folder wallpapers:", e);
    return [];
  }
};