// Find a player who has won the highest number of Player of the Match awards for each season

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function highestMoM(input){

    let matches = readFile(input)

    let listOfMOM = matches.reduce((acc,match) =>{

        const season = match.season;
        const player = match.player_of_match;

        if (!acc[season]){
            acc[season] = {}
        }
        if (!acc[season][player]){
            acc[season][player] = 0
        }
        acc[season][player] += 1
        return acc
    },{})
    
    // console.log(listOfMOM);
    
    const topPlayersPerSeason = Object.entries(listOfMOM).reduce((acc, [season, players]) => {

        acc[season] = Object.entries(players).reduce((max, player) => player[1] > max[1] ? player : max);

        return acc;

    }, {});
    

    // console.log(topPlayersPerSeason);
    writeFile('./public/output/6-highestMOM.json', topPlayersPerSeason)
}

highestMoM("./data/matches.json")