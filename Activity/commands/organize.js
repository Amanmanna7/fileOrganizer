let path=require('path');
let fs=require('fs');
const { basename } = require('path');

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizeFunction(pathName){
    let dirArr=fs.readdirSync(pathName);
    let organizedFolder=path.join(pathName,'organizedFolder');
    if(!fs.existsSync(organizedFolder)){
        fs.mkdirSync(organizedFolder);
    }
    for(let i of dirArr){
        let elmntPath=path.join(pathName,i);
        let stats=fs.lstatSync(elmntPath);
        if(stats.isFile()){
            let type=checkType(elmntPath);
            let typeFolder=path.join(organizedFolder,type);
            if(!fs.existsSync(typeFolder)){
                fs.mkdirSync(typeFolder);
            }
            let src=elmntPath;
            let dest=path.join(typeFolder,i);
            fs.copyFileSync(src,dest);
        }
    }
}

function checkType(file){
    let extName=path.extname(file);
    extName=extName.slice(1);
    for(let type in types){
        if(types[type].includes(extName)){
            return type;
        }
    }
    return 'others';
}

module.exports={
    organizeFn:organizeFunction
}