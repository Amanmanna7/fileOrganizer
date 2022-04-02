let path=require('path');
let fs=require('fs');

//Activity 1 -- to read a directory and copy all the content of all the .txt file in it and write it in the summary.txt file

let inputArr=process.argv.slice(2);
let givenPath=inputArr[0];
let givenDestPath=process.cwd();
let fileArray=fs.readdirSync(givenPath);
let contentData='';
for(let i of fileArray){
    let filePath=path.join(givenPath,i);
    let extensionName=path.extname(filePath);
    if(extensionName=='.txt'){
        contentData+=fs.readFileSync(filePath);
        contentData+='\r\n';
    }
}
let fileDestPath=path.join(givenDestPath,'summary.txt');
fs.writeFileSync(fileDestPath,contentData);
