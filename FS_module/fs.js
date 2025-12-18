const fs = require('fs')
//console.log(fs)
const path = require('path');

//Create folder and file
const folderPath = path.join(__dirname, 'product');
const filePath = path.join(folderPath, 'productList.pdf');
//console.log(filePath);

//1.create directory if it does'n exist
if(!fs.existsSync(folderPath)){
    //create folder
    fs.mkdir(folderPath);
    console.log('Folder created')
}


async function createFolder(){
    try{
        fs.access(folderPath);

    }catch{
        await fs.mkdir(filePath);
        console.log('Folder created')
    }
}
createFolder();
