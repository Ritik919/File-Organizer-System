let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

let path = require("path");
function returnfoldername(filename){
    let extname = path.extname(filename);
    extname = extname.slice(1);
    for(let key in types){
        let totalextension = types[key];
        for(let i = 0 ; i < totalextension.length ; i++){
            if(totalextension[i] == extname){
                console.log(key);
                return;
            }
        }
    }
    console.log("others");
}
returnfoldername("resume.docx");
returnfoldername("xyz.abc");