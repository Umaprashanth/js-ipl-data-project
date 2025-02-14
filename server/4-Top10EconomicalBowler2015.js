// Top 10 economical bowlers in the year 2015

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function top10EconomicalBowlers2015(input1,input2){

    let matches = readFile(input1)
    let deliveries = readFile(input2)

    let matchId = []
    for (let i = 0; i<matches.length; i++){

        let obj = matches[i]
        if (obj.season==="2015"){
            matchId.push(obj.id)
        }
    }

    let res = {}

    for(let j=0 ; j<deliveries.length; j++){
        let obj = deliveries[j]

        if (matchId.includes(obj.match_id)){
            res[obj.bowler] = res[obj.bowler] || {runs:0, balls:0}
            res[obj.bowler].runs += parseInt(obj.total_runs) - parseInt(obj.legbye_runs) - parseInt(obj.bye_runs);
            if (obj.wide_runs === "0" && obj.noball_runs === "0"){
                res[obj.bowler].balls += 1
            }}

        }
    


    let bestBowler = {};

    for (let [bowler, stats] of Object.entries(res)) {
      bestBowler[bowler] = parseFloat(((stats.runs * 6) / (stats.balls)).toFixed(2));
    }

    

    let sortList = (Object.entries(bestBowler).sort((a,b) => a[1] - b[1]))

    let ans = Object.fromEntries(sortList.slice(0,10))

    

    writeFile('./public/output/4-Top10EconomicalBowler2015.json', ans)    
}

top10EconomicalBowlers2015("./data/matches.json","./data/deliveries.json")