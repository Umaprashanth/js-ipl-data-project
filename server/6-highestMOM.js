// Find a player who has won the highest number of Player of the Match awards for each season

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function highestMoM(input){

    let matches = readFile(input)

    let res = {}

    for (let i=0; i<matches.length; i++){
        let obj = matches[i]

        res[obj.season] = res[obj.season] || {}
        res[obj.season][obj.player_of_match] = (res[obj.season][obj.player_of_match] || 0) + 1
    }

    console.log(res);
    
    
    const topPlayersPerSeason = {};

    for (const [season, players] of Object.entries(res)) {
        let maxPlayer = null;
        let maxValue = -Infinity;
        
        for (const [player, value] of Object.entries(players)) {
            if (value > maxValue) {
                maxValue = value;
                maxPlayer = player;
            }
        }
        
        topPlayersPerSeason[season] = [maxPlayer, maxValue];
    }
    

    // console.log(topPlayersPerSeason);
    writeFile('./public/output/6-highestMOM.json', topPlayersPerSeason)
}

highestMoM("./data/matches.json")