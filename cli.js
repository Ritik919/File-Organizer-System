let helpobj = require("./commands/help");
let treeobj = require("./commands/tree");
let organizeobj = require("./commands/organize");

let ip = process.argv.slice(2);
 let command = ip[0];
 let dirPath = ip[1];
//  let listofthingsincurrentFolder  = fs.readdirSync(_dirname);

 switch (command){
     case "help":
         helpobj.helpfn();
         break;
     case "tree":
         treeobj.treefn(dirPath);
         break;
     case "organize":
         organizeobj.organizefn(dirPath);
         break;
     default:
         console.log("Wrong command . Type help to see  the list of all commands");
 }