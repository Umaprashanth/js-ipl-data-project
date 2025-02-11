// Find the number of times each team won the toss and also won the match

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function wonBothTossMatch(input){

    let matches = readFile(input)

    let res = matches.reduce((acc,ele) => {
       
       acc[ele.team1] = acc[ele.team1]||0

       if (acc[ele.toss_winner] == acc[ele.winner]){
        acc[ele.winner] += 1
       }
       return acc
    },{})
    
    
        
     writeFile('./public/output/5-wonBothTossMatch.json', res)
}


wonBothTossMatch("./data/matches.json") 