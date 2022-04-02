let fs=require('fs');
let path=require('path');

function treeFunction(pathName){
    let baseName=path.basename(pathName);
    console.log(baseName);
    let dirArr=fs.readdirSync(pathName);
    let allEntities='';
    if(dirArr.length!=0){
        allEntities+='\t├──'+dirArr[0];
    }
    for(let i=1;i<dirArr.length-1;i++){
        allEntities+='\r\n\t├──'+dirArr[i];
    }
    if(dirArr.length!=0 || dirArr.length!=1){   
        allEntities+='\r\n\t└──'+dirArr[dirArr.length-1];
    }
    console.log(allEntities);
}

module.exports={
    treeFn:treeFunction
}