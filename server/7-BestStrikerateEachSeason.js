// Find the strike rate of a batsman for each season

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";
import { log } from "console";


function bestStrikeRateEachSeason(input1, input2){


    let matches = readFile(input1)
    let deliveries = readFile(input2)

    let matchId = {}

    for (let i = 0; i<matches.length; i++){
        let num = matches[i]
        matchId[num.season] = matchId[num.season] || []
        if (!matchId[num.season].includes(num.id)){

            matchId[num.season].push(num.id)
        }
    }


    let stats = {}

    for ( let j=0; j<deliveries.length; j++ ){
        let obj = deliveries[j]

        for (let year in matchId){ 
            if (matchId[year].includes(obj.match_id)){
                stats[year] = stats[year] || {}
                stats[year][obj.batsman] = stats[year][obj.batsman] || {runs : 0, balls : 0}
                stats[year][obj.batsman].runs += parseInt(obj.batsman_runs)
                if (obj.wide_runs === "0"){
                    stats[year][obj.batsman].balls += 1
                }

            }
        }
    }

    
    

    for (let year in stats){
        for (let player in stats[year]){
            stats[year][player] = ((stats[year][player].runs / stats[year][player].balls)*100).toFixed(2) 
        }
        
        stats[year] = Object.fromEntries(
            Object.entries(stats[year]).sort((a,b) => b[1] - a[1])
            )
        
    }
    

     writeFile('./public/output/7-bestStrikeRateEachSeason.json', stats)
}

bestStrikeRateEachSeason("./data/matches.json", "./data/deliveries.json")



