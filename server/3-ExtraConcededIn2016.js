// Extra runs conceded per team in the year 2016

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function extrasConceded(input1, input2){

    let matches = readFile(input1)
    let deliveries = readFile(input2)

    let matchesId = matches.filter((ele) => ele.season == 2016).map((ele) => ele.id);

    let res = deliveries.reduce((acc, ele)=> {
        if (matchesId.includes(ele.match_id)){
            const team = ele.bowling_team;
            acc[team] = (acc[team] || 0) + parseInt(ele.extra_runs)
        }
            return acc
    },{})
    
    
    writeFile('./public/output/3-extraConcededIn2016.json', res)
    
}


extrasConceded("./data/matches.json", "./data/deliveries.json")


