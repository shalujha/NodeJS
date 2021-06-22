let cp=require("child_process");
// cp.execSync("calc");
cp.execSync("start chrome https:// www.pepcoding.com/ ");
var output=cp.execSync("node abc.js");
console.log("output is : "+ output);