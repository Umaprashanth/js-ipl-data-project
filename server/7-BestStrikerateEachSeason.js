// Find the strike rate of a batsman for each season

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";
import { log } from "console";


function bestStrikeRateEachSeason(input1, input2){


    let matches = readFile(input1)
    let deliveries = readFile(input2)


    let matchId = matches.reduce((acc, match) => {
        acc[match.season] = acc[match.season] || [];
        if (!acc[match.season].includes(match.id)){
            acc[match.season].push(match.id)
        }
        return acc;
    }, {});

   
    
    let stats = deliveries.reduce((acc,delivery) => {

        for (let year in matchId){
            if (matchId[year].includes(delivery.match_id)){

                acc[year] = acc[year] || {}
                acc[year][delivery.batsman] = acc[year][delivery.batsman] || {runs : 0, balls : 0}
                acc[year][delivery.batsman].runs += parseInt(delivery.batsman_runs)
                if (delivery.wide_runs === "0"){
                    acc[year][delivery.batsman].balls += 1
                }
            }
        }
        return acc
    },{})

    
    

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



