// Find the number of times each team won the toss and also won the match

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function wonBothTossMatch(input){

    let matches = readFile(input)
    
    let result = {}

    for (let i = 0; i<matches.length; i++){
      let match = matches[i]

    
      if (!result[match.team1]) {
        result[match.team1] = 0
      }

      if (result[match.toss_winner] == result[match.winner]){
         result[match.winner] += 1
      }
    }
    
        
     writeFile('./public/output/5-wonBothTossMatch.json', result)
}


wonBothTossMatch("./data/matches.json") 