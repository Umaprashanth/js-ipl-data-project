// Top 10 economical bowlers in the year 2015

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function top10EconomicalBowlers2015(input1,input2){

    let matches = readFile(input1)
    let deliveries = readFile(input2)

    let matchId = matches.reduce((acc,ele) => {
        
        if (ele.season === "2015"){
            acc.push(ele.id)
        }

        return acc
    },[])
    
    let res = deliveries.reduce((acc, ele) => {

        if (matchId.includes(ele.match_id)){
        let bowler = ele.bowler
        acc [bowler] = acc[bowler] || { runs: 0 , balls :0};
        acc[bowler].runs += parseInt(ele.total_runs) - parseInt(ele.legbye_runs) - parseInt(ele.bye_runs);
        if (ele.wide_runs === "0" && ele.noball_runs === "0"){
            acc[bowler].balls += 1
        }}
        return acc
    }, {});

 
    

let bestBowler = Object.fromEntries(
    Object.entries(res).map(([bowler,stats]) => [
        bowler,
        parseFloat( ((stats.runs * 6) / (stats.balls)).toFixed(2))
    ]
))

    let sortList = (Object.entries(bestBowler).sort((a,b) => a[1] - b[1]))

    let ans = Object.fromEntries(sortList.slice(0,10))

    writeFile('./public/output/4-Top10EconomicalBowler2015.json', ans)    

}

top10EconomicalBowlers2015("./data/matches.json","./data/deliveries.json")