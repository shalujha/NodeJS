const fs=require("fs");
//var buffer=fs.readFileSync("abc.js");
 //console.log("output is : "+buffer);
//fs.writeFileSync("abc.txt","hi there i am learning developement lol");
//fs.appendFileSync("abc.txt","dekhte hain kabtk chlta h ye game bhi lol");
// commands for directory:

//fs.mkdirSync("meriDirectory");
//fs.writeFileSync("meriFile","Hi there I am a crazy bitch around here");


fs.writeFileSync("meriDirectory/meriFile","Hi there, I am a crazy bitch around here !!");
fs.writeFileSync("meriDirectory/secondFile","Hi there, I am a second file");
fs.writeFileSync("meriDirectory/thirdFile","Hi there, I am a third file ");


fs.readdir("meriDirectory/",function(err,files){
    if(err){
        console.log("could not find any file");
    }else{
      //  console.log("all files in this directory ae listed below : ");
        files.forEach(function(file){
            console.log(file);
            /*
            console.log(file+" removed");
             fs.unlinkSync("meriDirectory/"+file,function(err){
                 if(err){
                     console.log("couldnot delete a file");
                 }else{
                     console.log("file deleted");
                 }
             }); */
        })
    }
});
/*
fs.rmdirSync("meriDirectory");
*/


// check if some file or directory exists at a given path:
/*
fs.access("abc.txt",function(err){
    if(err){
        console.log("no such path exists");
    }else{
        console.log("path exists");
    }
});
fs.access("abcd.txt",function(err){
    if(err){
        console.log("No such path exists");
    }else{
        console.log("path exists");
    }
});
// check what is present at a specific path : 
var detailObj=fs.lstatSync("abc.js");
console.log("is this a file : "+ detailObj.isFile());
console.log("is this a directory : "+ detailObj.isDirectory());

detailObj=fs.lstatSync("meriDirectory");
console.log("is this a file : "+ detailObj.isFile());
console.log("is this a directory : "+ detailObj.isDirectory());
*/
//fs.rmdirSync("meriDirectory/Lecture-1");

// fs.mkdirSync("meriDirectory");
//fs.unlinkSync("meriDirectory/Lecture-1");

for(var i=1;i<=10;i++){
    var path="meriDirectory/Lecture-"+i;
    fs.mkdirSync(path);
    fs.writeFileSync(path+"\\"+"readme.md","Hey there");
}


