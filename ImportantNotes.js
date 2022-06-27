


const { findNodeAfter } = require("acorn-walk");
const fs = require("fs");

console.log("Before ");
 
fs.readFile("file.txt",cb);   // phele filetext read hoga uske baad cb ko call lagegi

function cb(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
    }
}

console.log("After");


// output 
//  before 
//  after 
//  hello bro

// 1.  Jitne be asynchronous kam hote hae who call stack mae nhi hote who sare node api mae hote hae.


// 2.   sab se phele ek call stack form hoga jisme line no 6 execute hoga 
// 3.   uske baad line no 8  asynchronous hae jise who node api mae bhej dega run karne kae liye