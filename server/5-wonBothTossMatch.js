// Find the number of times each team won the toss and also won the match

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function wonBothTossMatch(input){

    let matches = readFile(input)

    let result = matches.reduce((acc,match) => {

       if (!acc[match.team1]){
         acc[match.team1] = 0
       }

       if (acc[match.toss_winner] == acc[match.winner]){
        acc[match.winner] += 1
       }
       return acc
    },{})
    
    
        
     writeFile('./public/output/5-wonBothTossMatch.json', result)
}


wonBothTossMatch("./data/matches.json") 