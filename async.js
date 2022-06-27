const { findNodeAfter } = require("acorn-walk");
const { func } = require("assert-plus");
const fs = require("fs");

console.log("Before ");
 
fs.readFile("file1.txt",cb1); 

fs.readFile("file2.txt",cb2);

function cb1(error,data){
    if(error){
        console.log(error);
    }else{
        console.log("data of file 1" + data);
    }
}

function cb2(error,data){
    if(error){
        console.log(error);
    }else{
        console.log("data of file 2" + data);
    }
}
console.log("After");
