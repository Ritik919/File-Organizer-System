let fs = require("fs"); 
let path = require("path");
function treefn(dirPath){

   dirPath =  dirPath != undefined ? dirPath: process.cwd();
    let folderkaContent = fs.readdirSync(dirPath);
    console.log(path.basename(dirPath));
    for(let i = 0 ; i < folderkaContent.length ; i++){
        console.log("\t" + folderkaContent[i]);
    }
}

module.exports = {
    treefn : treefn
}