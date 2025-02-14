// Extra runs conceded per team in the year 2016

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";
import { log } from "console";


function extrasConceded(input1, input2){

    let matches = readFile(input1)
    let deliveries = readFile(input2)


    let matchesId = []

    for (let i = 0; i<matches.length; i++){
        let num = matches[i]

        if (num.season == 2016){
            matchesId.push(num.id)
        }

    }

    
    let res = {}
    for (let i = 0; i<deliveries.length; i++){
        let num = deliveries[i]
        if (matchesId.includes(num.match_id)){
            const team = num.bowling_team;
            res[team] = (res[team] || 0) + parseInt(num.extra_runs)
        }
    }
    
    writeFile('./public/output/3-extraConcededIn2016.json', res)

    
    
}


extrasConceded("./data/matches.json", "./data/deliveries.json")


