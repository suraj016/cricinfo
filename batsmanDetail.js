// const request = require('request');
// const jsdom = require("jsdom");            // PREDIFINED IMP KEYWORDS
// const { JSDOM } = jsdom;



// const link = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/delhi-capitals-vs-rajasthan-royals-34th-match-1304080/full-scorecard";

// request(link,cb);

// function cb(error, response, html){
  
//         if(error){
//             console.log(error);
//         }else{
//             // console.log(html);

//         const dom = new JSDOM(html);
//         const document = dom.window.document;


    


//     //  let batsman  = document.querySelectorAll("span.ds-border-b.ds-border-line.ds-text-tight-s.ds-border-none .ds-text-tight-s.ds-font-medium");
//     //  console.log(batsman.length);
    
    
      
    

    
//     let batsman =document.querySelectorAll('[class="ds-border-b ds-border-line ds-text-tight-s ds-border-none"] [class="ds-inline-flex ds-items-center ds-leading-none"]  a');
//    // console.log(batsman.length);
//     for(let i = 0; i < batsman.length; i++){

//         let batsmanLink = batsman[i].href;

//         let completebatsmanlink = "https://www.espncricinfo.com" + batsmanLink;
       
//         console.log(completebatsmanlink);


//         request(completelink,cb2);
//     }


//     function cb2(error, response, html){
  
//         if(error){
//             console.log(error);
//         }else{
//             // console.log(html);

//         const dom = new JSDOM(html);
//         const document = dom.window.document;
     
//         let name=document.querySelectorAll('[class="ds-grid lg:ds-grid-cols-3 ds-grid-cols-2 ds-gap-4 ds-mb-8"] div span h5');
//         //let tname=name.querySelectorAll("span h5");
//           let plname=name[0].textContent;
//           let detail=name[1].textContent;
           
//         console.log("name of player "+plname);
//         console.log("DOB "+detail);
//         }
//     }


   

    
    

    


    



         
       


           
            
//         }

        
       
//     }




const request = require('request');
const jsdom = require("jsdom");            // PREDIFINED IMP KEYWORDS
const { JSDOM } = jsdom;



const link = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/delhi-capitals-vs-rajasthan-royals-34th-match-1304080/full-scorecard";

request(link,cb);

function cb(error, response, html){
  
        if(error){
            console.log(error);
        }else{
            // console.log(html);

        const dom = new JSDOM(html);
        const document = dom.window.document;


    


    //  let batsman  = document.querySelectorAll("span.ds-border-b.ds-border-line.ds-text-tight-s.ds-border-none .ds-text-tight-s.ds-font-medium");
    //  console.log(batsman.length);
    
    
      
    

    
    let batsman =document.querySelectorAll('[class="ds-w-full ds-table ds-table-xs ds-table-fixed ci-scorecard-table"] [class="ds-border-b ds-border-line ds-text-tight-s"]  a');
   //let batsman =  document.querySelectorAll('[class="ds-w-full ds-table ds-table-xs ds-table-fixed ci-scorecard-table"] [class="ds-border-b ds-border-line ds-text-tight-s ds-border-none"] a')
    for(let i = 0; i < batsman.length; i++){

        let batsmanLink = batsman[i].href;

        let completebatsmanlink = "https://www.espncricinfo.com" + batsmanLink;
       
        console.log(completebatsmanlink);


        request(completebatsmanlink,cb2);
    }


    // hello world

}
}
    function cb2(error, response, html){
  
        if(error){
            console.log(error);
        }else{
            // console.log(html);

        const dom = new JSDOM(html);
        const document = dom.window.document;
     
        let name=document.querySelectorAll('[class="ds-grid lg:ds-grid-cols-3 ds-grid-cols-2 ds-gap-4 ds-mb-8"] div span h5');
        //let tname=name.querySelectorAll("span h5");
          let plname=name[0].textContent;
          let detail=name[1].textContent;
           
        console.log("name of player "+plname);
        console.log("DOB "+detail);
        }
    }
