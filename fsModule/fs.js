let fs=require("fs");
let path=require("path");

// let content=fs.readFileSync("f1.txt","utf-8");
// console.log(content);


// //Or you can

// let content=fs.readFileSync("f1.txt");
// console.log(content+"");


// //used to override a file data ----  if no such file exists it creates one
// fs.writeFileSync("abc.txt","Hello guys");

// //used to append to the file ----if no such file exists it creates one
// fs.appendFileSync("abc.txt"," Hope all are doing great");

// //used to delete the file --- throws a error if no such file exists
// fs.unlinkSync("abc.txt");

// // to make a new directories
// fs.mkdirSync("pathModule");

// // to remove a existing directories
// fs.rmdirSync("pathModule");

// // to check if the file exists or not 
// let fsExists=fs.existsSync("fs.js");
// console.log(fsExists);

// //status of file/folder
// let statusObj=fs.lstatSync("f1.txt");
// console.log(statusObj);

// // tells wheter it is a file or not
// console.log(statusObj.isFile());

// // tells wheter it is a folder/directory or not
// console.log(statusObj.isDirectory());


// // use to view the contents in the given path -- return a array
// let path1='C:\\Users\\ASUS\\Desktop\\Development\\fileOrganizer\\dir';
// let fileArr=fs.readdirSync(path1);
// console.log(fileArr);

//Used to copy the content from the sourcePath to the destPath---if the file exists it will override it--it doesn't then it will create one

// let srcPath='C:\\Users\\ASUS\\Desktop\\Development\\fileOrganizer\\fsModule\\f1.txt';
// let destPath='C:\\Users\\ASUS\\Desktop\\Development\\fileOrganizer\\fsModule\\f2.txt';

// fs.copyFileSync(srcPath,destPath);

// let toBeCopiedFileName=path.basename('C:\\Users\\ASUS\\Desktop\\Development\\fileOrganizer\\fsModule\\f1.txt');
// let dest=path.join('C:\\Users\\ASUS\\Desktop\\Development\\fileOrganizer\\dir',toBeCopiedFileName);

// fs.copyFileSync(srcPath,dest);

