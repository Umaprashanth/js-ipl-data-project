// Find the bowler with the best economy in super overs

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function bestEconomyInSuperOver(input){


    let deliveries = readFile(input)

    let superOver = deliveries.filter(delivery => delivery.is_super_over === "1")

    let res = superOver.reduce((acc, ele) => {

        let bowler = ele.bowler
        acc [bowler] = acc[bowler] || { runs: 0 , balls :0};
        acc[bowler].runs += parseInt(ele.total_runs) - parseInt(ele.legbye_runs) - parseInt(ele.bye_runs);
        if (ele.wide_runs === "0" && ele.noball_runs === "0"){
            acc[bowler].balls += 1
        }
        return acc
    }, {});


    let bestBowler = Object.fromEntries(
        Object.entries(res).map(([bowler,stats]) => [
            bowler,
            parseFloat( ((stats.runs * 6) / (stats.balls)).toFixed(2))
        ]
    ))

    // const bestBowler = Object.entries(bowlerStats).reduce((best, [bowler, stats]) => {
    //     const economy = (stats.runs / (stats.balls / 6)).toFixed(2);
    //     return !best || economy < best.economy ? { bowler, economy } : best;
    // }, null);


   let result =Object.fromEntries([(Object.entries(bestBowler).sort((a,b) => a[1] - b[1]))[0]])
 
    console.log(result);
    
    
    
     writeFile('./public/output/9-bestEconomyInSuperOver.json', result)
} 

bestEconomyInSuperOver("./data/deliveries.json")

