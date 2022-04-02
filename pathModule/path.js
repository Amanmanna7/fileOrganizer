let path=require("path");
let fs=require("fs");

let inputArr=process.argv.slice(2);

// printing the arguments passed
// console.log(inputArr);


//used for getting the current working directory
let currentDir=process.cwd();
// console.log(currentDir);


//used to join the paths.. doesn't create any folders or files
let joinedPath=path.join(currentDir,'abc','def.txt');
// console.log(joinedPath);

// used to get the base filename or base folder
let file=path.basename('C:\\Users\\ASUS\\Desktop\\Development\\fileOrganizer\\pathModule\\path.js');
// console.log(file);

// used to get the extensionName for the given path and its print a blank if the path is of folder 
let extName=path.extname('C:\\Users\\ASUS\\Desktop\\Development\\fileOrganizer\\pathModule\\path.js');
console.log(extName);