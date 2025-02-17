// Find the highest number of times one player has been dismissed by another player

import fs, { read } from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";

function dismissalByOtherPlayer(input){

    let data = readFile(input)

    let dismissal = data.reduce((acc,delivery) => {

        if ((delivery.player_dismissed !== "") && (delivery.dismissal_kind  !== "run out")){

            if (!acc[delivery.batsman]){
                acc[delivery.batsman] = {}
            }

            if (!acc[delivery.batsman][delivery.bowler]){
                acc[delivery.batsman][delivery.bowler] = 0
            }

            acc[delivery.batsman][delivery.bowler] += 1
        
        }

        return acc

    },{})



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