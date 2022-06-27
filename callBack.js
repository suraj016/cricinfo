// const fs = require("fs");

// console.log("Before");

// let content  = fs.readFileSync("C:\\Users\\hp\\Desktop\\FJP-6\\Module2-js\\web_scrapping\\file.txt");

// console.log(content + " ");

// console.log("After");



// CallBack Function  ->  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.



const fs = require("fs");

console.log("Before ");
 
fs.readFile("file.txt",cb);

function cb(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
    }
}

console.log("After");

// int this case the line wise the code will work and execution will be done 
// ek ek call back func ka eg hae jisme cb ko argument mae pass kiya gya hae

 //tho sabse phele before print hoga then niche wala after and fir jo file who read hoga
 