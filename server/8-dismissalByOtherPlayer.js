// Find the highest number of times one player has been dismissed by another player

import fs, { read } from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";
import { log } from "console";

function dismissalByOtherPlayer(input){

    let data = readFile(input)

    let dismissal = {}

    for (let i = 0; i<data.length; i++ ){
        let num = data[i]

        if ((num.player_dismissed !== "") && (num.dismissal_kind !== "run out")){
                dismissal[num.batsman] = dismissal[num.batsman] || {}
                dismissal[num.batsman][num.bowler] = (dismissal[num.batsman][num.bowler] || 0) + 1
        }
    }


    for (let obj in dismissal){
        let bowlers = dismissal[obj]

        bowlers = Object.fromEntries([Object.entries(bowlers).sort((a,b) => b[1]-a[1])[0]])
        
        dismissal[obj] = bowlers
    }

    const res = Object.entries(dismissal).sort((a, b) => {
      
        const valueA = Object.values(a[1]);
        const valueB = Object.values(b[1]);
        return valueB - valueA; 
    });
   
    
   writeFile('./public/output/8-dismissalByOtherPlayer.json', res[0])
    
    
}

dismissalByOtherPlayer("./data/deliveries.json")