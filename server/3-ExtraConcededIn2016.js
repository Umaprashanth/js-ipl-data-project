// Extra runs conceded per team in the year 2016

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function extrasConceded(input1, input2){

    let matches = readFile(input1)
    let deliveries = readFile(input2)

    let matchesId = matches.filter((match) => match.season == 2016).map((match) => match.id);

    let result = deliveries.reduce((acc, match)=> {
        if (matchesId.includes(match.match_id)){
            const team = match.bowling_team;

            if (!acc[team]){
                acc[team] = 0
            }
            acc[team] += parseInt(match.extra_runs)

        }
            return acc
    },{})
    
    
    writeFile('./public/output/3-extraConcededIn2016.json', result)
    
}


extrasConceded("./data/matches.json", "./data/deliveries.json")


