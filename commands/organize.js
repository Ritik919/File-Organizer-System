let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


 function organizefn(dirPath){
    console.log("Organize command executed" , 
   dirPath = dirPath != undefined ? dirPath : process.cwd());

    organizeHelper(dirPath);
}

function organizeHelper(dirPath){
      let organizeddirPath = path.join(dirPath , "organized_dir");
      let doesorganizedFolderExist = fs.existsSync(organizeddirPath);
      if(doesorganizedFolderExist == false){
        fs.mkdirSync(organizeddirPath);
      }
      let names = fs.readdirSync(dirPath);
      for(let i = 0 ; i < names.length ; i++){
        let assetPath = path.join(dirPath , names[i]);
        let ans = isFile(assetPath);
         if(ans == true){
            let type = getType(assetPath);
            copytothatType(assetPath , type , organizeddirPath);
         }  
      }
}

function getType(assetPath){
    let extname = path.extname(assetPath);
    extname = extname.slice(1);
    for(let key in types){
        let totalextension = types[key];
        for(let i = 0 ; i < totalextension.length ; i++){
            if(totalextension[i] == extname){
                return key;
            }
        }
    }
    return "others";
}

function isFile(assetPath){
    
    let ans = fs.lstatSync(assetPath).isFile();
    return ans;
}

function copytothatType(assetPath , type , organizeddirPath){
 let destination = path.join(organizeddirPath , type);
 if(fs.existsSync(destination) == false){
    fs.mkdirSync(destination);
 }
 let originalname = path.basename(assetPath);
 let destinationfilepath = path.join(destination , originalname);
 fs.copyFileSync(assetPath , destinationfilepath)

}

module.exports = {
    organizefn : organizefn
}






