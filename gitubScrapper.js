const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const link = "https://github.com/topics";

request(link,cb);


function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
       // let allAnchorTags = document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");
       let allAnchorTags = document.querySelectorAll('[class="topic-box position-relative hover-grow height-full text-center border color-border-muted rounded color-bg-default p-5"] a');
        for(let i=0;i<allAnchorTags.length;i++){
            let link = allAnchorTags[i].href;
            let completeLink = "https://github.com"+link;
            console.log(completeLink);
            request(completeLink,cb2);
        }
    }
}


function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
    }
}