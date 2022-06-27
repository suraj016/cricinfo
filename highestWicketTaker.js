  //                    WEB SCRAPPING LECTURE 2

  //    1. GIVEN A MATCH LINK AND FIND THE HIGHEST WICKET TAKER 
  //    2. GIVEN A MATCH LINK AND FIND THE INFORMATION OF EVERY PLAYER



const request = require('request');
const jsdom = require("jsdom");            // PREDIFINED IMP KEYWORDS
const { JSDOM } = jsdom;



//const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/delhi-capitals-vs-chennai-super-kings-qualifier-1-1254114/full-scorecard";
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";
request(link,cb);

function cb(error, response, html){
  
        if(error){
            console.log(error);
        }else{
            // console.log(html);

        const dom = new JSDOM(html);
        const document = dom.window.document;

         
       

        // // [class="ds-border-b ds-border-line ds-text-tight-s"] [class="ds-inline-flex ds-items-center ds-leading-none"] [class="ds-text-tight-s ds-font-medium"]


            let btable = document.querySelectorAll('[class="ds-w-full ds-table ds-table-xs ds-table-fixed"]');

           // console.log(bowlerstable.length);

           
            let mostWicket = 0;
            let nameOfHighestWicketTaker = "";
           for (let i = 0; i < btable.length; i++){
               let rows = btable[i].querySelectorAll('[class="ds-w-full ds-table ds-table-xs ds-table-fixed"] tbody  tr');

              // console.log(rows.length);

             

               for(let j = 0; j < rows.length; j++){
                   let tds =  rows[j].querySelectorAll('td');

                   if(tds.length > 1){

                    let name  = tds[0].textContent;
                    let wicket = tds[4].textContent;

                    // console.log("Name of the bowler --->", name);
                    // console.log("wickets-->" , wicket);


                   

                    if(wicket > mostWicket){
                        mostWicket = wicket;
                        nameOfHighestWicketTaker = name;
                    }


                    
                   }
               }

              
                   

           }

           console.log("Number of highest wicket taken : " , mostWicket);
           console.log("Name of highest Wicket Taker : " , nameOfHighestWicketTaker);



           

        // const dom = new JSDOM(html);
        // const document =  dom.window.document;
        // let mostWicket = 0;
        // let nameOfHighestWicketTacker = "";
        // let bowlersTable = document.querySelectorAll(".table.bowler");
        // for(let i=0;i<bowlersTable.length;i++){
        //     let rows = bowlersTable[i].querySelectorAll("tbody tr");
        //     for(let j=0;j<rows.length;j++){
        //         let tds = rows[j].querySelectorAll("td");
        //         if(tds.length>1){
        //             let name = tds[0].textContent;
        //             let wicket = tds[4].textContent;
        //             // console.log("Name of Bowler ---> ",name,"     Wickets ---> ",wicket);
        //             if(wicket>mostWicket){
        //                 mostWicket = wicket;
        //                 nameOfHighestWicketTacker = name;
        //             }
        //         }
        //     }
        // }
        // console.log("Name of Highest Wicket Taker : ",nameOfHighestWicketTacker);
        // console.log("Number of Wickets Taken      : ",mostWicket)


            
        }

        
       
    }
