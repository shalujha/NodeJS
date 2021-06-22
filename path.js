var path=require("path");
var fs=require("fs");
/*
fs.mkdirSync("PathKiDirectory");
for(var i=1;i<=10;i++){
    var dirpath="PathKiDirectory/Lecture-"+i;
    fs.mkdirSync(dirpath);
    fs.writeFileSync(path.join(dirpath,"readme.md"),"Hey there");
}
*/
// get extension name from a given file:
var extName=path.extname(path.join(__dirname,"abc.js"));
console.log(extName);
var baseName=path.basename(path.join(__dirname,"abc.js"));
console.log(baseName);
baseName=path.basename(__dirname);
console.log(baseName);

