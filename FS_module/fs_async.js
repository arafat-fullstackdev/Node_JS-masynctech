const fs = require("fs");

const path = require("path");

//Create folder and file
const folderPath = path.join(__dirname, "product");
const filePath = path.join(folderPath, "productList.pdf");

async function createFolder() {
  try {
    await fs.access(folderPath);
  } catch {
    await fs.mkdir(folderPath);
    console.log("Folder created");
  }
}
createFolder();
