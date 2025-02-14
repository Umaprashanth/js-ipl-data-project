// Find the number of times each team won the toss and also won the match

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function wonBothTossMatch(input){

    let matches = readFile(input)
    
    let res = {}

    for (let i = 0; i<matches.length; i++){
      let num = matches[i]

      res[num.team1] =res[num.team1] || 0

      if (res[num.toss_winner] == res[num.winner]){
         res[num.winner] += 1
      }
    }
    
        
     writeFile('./public/output/5-wonBothTossMatch.json', res)
}


wonBothTossMatch("./data/matches.json") 