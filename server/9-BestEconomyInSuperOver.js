// Find the bowler with the best economy in super overs

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function bestEconomyInSuperOver(input){


    let deliveries = readFile(input)


    let superOver = []

    for (let i =0; i<deliveries.length; i++){
        let delivery = deliveries[i]

        if (delivery.is_super_over === "1"){

            superOver.push(delivery)
        }
    }

    let res= {}

    for (let j = 0; j<superOver.length; j++){
        let num = superOver[j]

        if(!res[num.bowler]){
            res[num.bowler] = {runs:0, balls:0}
        }

        res[num.bowler].runs += parseInt(num.total_runs) - parseInt(num.legbye_runs) - parseInt(num.bye_runs)

        if (num.wide_runs === "0" && num.noball_runs === "0"){
            res[num.bowler].balls += 1
        }
    }


    let bestBowler = {};

    for (let [bowler, stats] of Object.entries(res)) {
      bestBowler[bowler] = parseFloat(((stats.runs * 6) / (stats.balls)).toFixed(2));
    }

    

   let result =Object.fromEntries([(Object.entries(bestBowler).sort((a,b) => a[1] - b[1]))[0]])
    
     writeFile('./public/output/9-bestEconomyInSuperOver.json', result)
} 

bestEconomyInSuperOver("./data/deliveries.json")

