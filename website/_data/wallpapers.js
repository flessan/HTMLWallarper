const fetch = require("node-fetch");

module.exports = async function() {
  const url = `https://api.github.com/repos/flessan/HTMLWallarper/contents/wallpapers`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    return data
  .filter(item => item.type === "dir")
  .map(folder => ({
    name: folder.name,
    folderName: folder.name,
    // URL untuk memuat file HTML di iframe
    htmlUrl: `https://flessan.github.io/HTMLWallarper/wallpapers/${folder.name}/index.html`,
    url: folder.html_url
  }));
  } catch (e) {
    return [];
  }
};
