
//Activity 2 -- to take the make dir as input and 3 sub dir and all will have the same file content.md and to write Hello there;
let fs=require('fs');
let path=require('path');

let inputArr=process.argv.slice(2);
let mainDir=inputArr[0];
let subDirArr=inputArr.slice(1);

let mainDirPath=path.join(process.cwd(),mainDir);

let contentToBePasted="Hello - 1";

if(!fs.existsSync(mainDir)){
    fs.mkdirSync(mainDir);
}
for(let i=0;i<3;i++){
    let subDirPath=path.join(mainDirPath,subDirArr[i]);
    if(!fs.existsSync(subDirPath)){
        fs.mkdirSync(subDirPath);
    }
    for(let i=1;i<=3;i++){
        let modulePath=path.join(subDirPath,'Module'+(i));
        if(!fs.existsSync(modulePath)){
            fs.mkdirSync(modulePath);
        }
        let filePath=path.join(modulePath,'content.md');
        fs.writeFileSync(filePath,contentToBePasted);
    }
}


/* -- You can always use backticks for strings because it doesn't give error in the following secne
"Hello         ----> error
eveyone"

`Hello          -----> not a error
everyone`

to use variables in this you need to use ${varName}

Eg- `Hello ${name} `

*/
