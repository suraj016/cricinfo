const request = require('request');
const jsdom = require("jsdom");            // PREDIFINED IMP KEYWORDS
const { JSDOM } = jsdom;
const fs = require("fs");
let xlsx = require("json-as-xlsx")     // xlxs ko require kiya  , module ko use karenge

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard=[];
let counter = 0;

request(link, cb);

function cb(error, response, html) {

    if (error) {
        console.log(error);
    } else {
        // console.log(html);

        const dom = new JSDOM(html);
        const document = dom.window.document;
       // let link2 = document.querySelectorAll('[class="ds-flex ds-flex-wrap"] [class="ds-flex ds-mx-4 ds-pt-2 ds-pb-3 ds-space-x-4 ds-border-t ds-border-line-default-translucent"] span:nth-child(3) a');
                            
                                 //     LINK FOR THE SCORE CARD 60
      let link2 = document.querySelectorAll('[class="ds-flex ds-mx-4 ds-pt-2 ds-pb-3 ds-space-x-4 ds-border-t ds-border-line-default-translucent"] span:nth-child(3) a'); 
                               // LOOP FOR EVERY MATCH SCORE CARD
      for(let i =0;i<60;i++){
          //  console.log(link2[i].href);
          let batsmenlink=link2[i].href;
            let completelink="https://www.espncricinfo.com"+batsmenlink;   // this http is domain name 
           // console.log(completelink);
            request(completelink,cb2);
            counter++;
        }

    }
}

//                  NEW FUNCTION CALL KIYA GYA
    function cb2(error, response, html) {

        if (error) {
            console.log(error);
        } else {
            // console.log(html);
    
            const dom = new JSDOM(html);
            const document = dom.window.document;
                        // HAR BATSMAN KE ROW KA DETAIL
          let batsmantable = document.querySelectorAll('[class="ds-w-full ds-table ds-table-xs ds-table-fixed ci-scorecard-table"] tbody tr');
         //  console.log(batsmantable.length);

         // LOOP LGA KE HAR BATSMAN KA DETAIL
         for(let i=0;i<batsmantable.length;i++){
             let cells=batsmantable[i].querySelectorAll("td");
             if(cells.length==8){
                 let name=cells[0].textContent;
                 let runs=cells[2].textContent;
                 let balls=cells[3].textContent;
                 let fours=cells[5].textContent;
                 let sixes=cells[6].textContent;
               //  console.log("name:" +name,"runs:"+runs,"balls:"+balls,"fours:"+fours,"sixes:"+sixes);


               processplayer(name,runs,balls,fours,sixes);

             }
         }
          counter--;
          if (counter == 0) {
           console.log(leaderboard);
           let data = JSON.stringify(leaderboard);     // array wale data ko string mae convert karna
           fs.writeFileSync('BatsmanStats.json',data);
           let xlsx = require("json-as-xlsx")     // xlxs ko require kiya  , module ko use karenge

let dataExecl = [     // data nam ka variable aur ye ek  array of object  hae
  {
    sheet: "IPL STATS",
    columns: [
      { label: "Name", value: "Name" }, // Top level data
      { label: "Innings", value: "Innings" }, // Run functions
      { label: "Runs", value: "Runs" }, // Custom format
      { label: "Balls", value: "Balls" }, // Run functions
      { label: "Fours", value: "Fours" }, // Run functions
      { label: "Sixes", value: "Sixes" }, // Run functions
    ],
    content: leaderboard
  },
]

let settings = {    // setting ek object hae
  fileName: "IplBastmanDetail", // Name of the resulting spreadsheet
  extraLength: 3, // A bigger number means that columns will be wider
  writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
}

xlsx(dataExecl, settings) // Will download the excel file
        }
    }
}
    // processplayer('rohit',30,20,2,1);
    // processplayer('rishab',98,35,8,7);
    // processplayer('rishab',98,35,8,7);
    // processplayer('rohit',10,2,1,1);
    // console.log(leaderboard);

        
    function processplayer(name,runs,balls,fours,sixes){

        runs = Number(runs);
        balls = Number(balls);
        fours = Number(fours);
        sixes = Number(sixes);



            for (let i=0;i<leaderboard.length;i++){
                let playerobj=leaderboard[i];
                if(playerobj.Name===name){
                    playerobj.Runs+=runs;
                    playerobj.Innings+=1;
                    playerobj.Balls+=balls;
                    playerobj.Fours+=fours;
                    playerobj.Sixes+=sixes;
                    return;
                }
            }
            let obj={
                Name:name,
                Runs:runs,
                Innings:1,
                Balls:balls,
                Fours:fours,
                Sixes:sixes

            }
            leaderboard.push(obj);    // Jo cheez phele baar aaega usse push karna hoga
    }


    // code done