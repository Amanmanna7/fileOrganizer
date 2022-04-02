let str ="String to be exorted"

let a=10;
function foo(msg){
    return 'Hi I was made in owner.js ' +msg;
}


// module.exports is used to export anything from one file to other
// module is a object having different keys -- one of which is exports
// console.log(module);

//exporting only single thing
// module.exports=str;

//exporting as a complete object

//Mentioned below is not a good practice
// module.exports={str,a,foo};

//good practice is something like this
module.exports={
    var:a,
    string:str,
    fooFunc:foo
};
