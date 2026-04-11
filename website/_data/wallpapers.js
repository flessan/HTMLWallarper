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
        preview: `https://raw.githubusercontent.com/flessan/HTMLWallarper/main/wallpapers/${folder.name}/preview.png`,
        url: folder.html_url
      }));
  } catch (e) {
    return [];
  }
};