// Top 10 economical bowlers in the year 2015

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function top10EconomicalBowlers2015(input1,input2){

    let matches = readFile(input1)
    let deliveries = readFile(input2)

    let matchId = []
    for (let i = 0; i<matches.length; i++){

        let match = matches[i]
        if (match.season==="2015"){
            matchId.push(match.id)
        }
    }

    let result = {}

    for(let j=0 ; j<deliveries.length; j++){
        let delivery = deliveries[j]

        if (matchId.includes(delivery.match_id)){
            

            if (!result[delivery.bowler]){
                result[delivery.bowler] = {runs:0, balls:0}
            }
            result[delivery.bowler].runs += parseInt(delivery.total_runs) - parseInt(delivery.legbye_runs) - parseInt(delivery.bye_runs);
            if (delivery.wide_runs === "0" && delivery.noball_runs === "0"){
                result[delivery.bowler].balls += 1
            }}

        }
    


    let bestBowler = {};

    for (let [bowler, stats] of Object.entries(res)) {
      bestBowler[bowler] = parseFloat(((stats.runs * 6) / (stats.balls)).toFixed(2));
    }

    

    let sortList = (Object.entries(bestBowler).sort((a,b) => a[1] - b[1]))

    let answer = Object.fromEntries(sortList.slice(0,10))

    

    writeFile('./public/output/4-Top10EconomicalBowler2015.json', answer)    
}

top10EconomicalBowlers2015("./data/matches.json","./data/deliveries.json")