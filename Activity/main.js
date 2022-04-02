let helpObj=require('./commands/help');
let treeObj=require('./commands/tree');
let organizeObj=require('./commands/organize');

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];

switch(command){
    case 'help':
        // is used to display the commands and its syntax
        helpObj.helpFn();
        break;
    case 'tree':
        // is used to create a tree view that is used to print the files and folder in the given directory
        treeObj.treeFn(path);
        break;
    case 'organize':
        // is used to create a folder in the given directory which stores the files according to the type of it like doc, pic, media etc..
        organizeObj.organizeFn(path);
        break;
    default:
        console.log('Invalid command');
        break;
}