const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/live-cricket-score";
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-mumbai-indians-30th-match-1254104/live-cricket-score";
request(link, cb);

function cb(error, response, html) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        
        let teamsName = document.querySelectorAll(".ds-text-tight-l.ds-font-bold");
        //console.log(html);   // it will print the html part of the body
        console.log(teamsName[0].textContent);   // array output me dega tho print kara diya
        console.log(teamsName[1].textContent);
        
    }
}
