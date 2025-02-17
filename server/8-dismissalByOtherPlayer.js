// Find the highest number of times one player has been dismissed by another player

import fs, { read } from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";
import { log } from "console";

function dismissalByOtherPlayer(input){

    let data = readFile(input)

    let dismissal = {}

    for (let i = 0; i<data.length; i++ ){
        let delivery = data[i]

        if ((delivery.player_dismissed !== "") && (delivery.dismissal_kind !== "run out")){
                if (!dismissal[delivery.batsman]){
                    dismissal[delivery.batsman] = {}
                }
                if (!dismissal[delivery.batsman][delivery.bowler]){
                    dismissal[delivery.batsman][delivery.bowler] = 0
                } else{
                    dismissal[delivery.batsman][delivery.bowler] += 1
                }
        }
    }


    for (let obj in dismissal){
        let bowlers = dismissal[obj]

        bowlers = Object.fromEntries([Object.entries(bowlers).sort((a,b) => b[1]-a[1])[0]])
        
        dismissal[obj] = bowlers
    }

    const result = Object.entries(dismissal).sort((a, b) => {
      
        const valueA = Object.values(a[1]);
        const valueB = Object.values(b[1]);
        return valueB - valueA; 
    });
   
    
   writeFile('./public/output/8-dismissalByOtherPlayer.json', result[0])
    
    
}

dismissalByOtherPlayer("./data/deliveries.json")