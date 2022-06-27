// web scrapping

// const request = require('request');

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;


// const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";


// request(link ,cb);

// function cb(error,response, html){
//     if(error){
//         console.error('error:', error); // Print the error if one occurred
//     }else{
//         console.log('body:', html); // Print the HTML for the link.
//         const dom = new JSDOM(html);
//         const document = dom.window.document
//        // console.log(document.textContent);

//        let team =  document.querySelectorAll(".ds-flex ds-items-center.ds-inline-flex ds-items-center ds-leading-none.ds-text-tight-l ds-font-bold" );
//        console.log(team.textcontent);
//     }
// }













// //   console.error('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.








const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let teamsName = document.querySelectorAll(".match-info.match-info-MATCH.match-info-MATCH-half-width .teams .name");
        console.log(teamsName[0].textContent);
        console.log(teamsName[1].textContent);
    }
}
