// Find a player who has won the highest number of Player of the Match awards for each season

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function highestMoM(input){

    let matches = readFile(input)

    let res = matches.reduce((acc,ele) =>{

        const season = ele.season;
        const player = ele.player_of_match;

        acc[season] = acc[season] || {}
        acc[season][player] = (acc[season][player] || 0) +1
        return acc
    },{})
    

    const topPlayersPerSeason = Object.entries(res).reduce((acc, [season, players]) => {
        acc[season] = Object.entries(players).reduce((max, player) => player[1] > max[1] ? player : max);
        return acc;

    }, {});
    

    // console.log(topPlayersPerSeason);
    writeFile('./public/output/6-highestMOM.json', topPlayersPerSeason)
}

highestMoM("./data/matches.json")