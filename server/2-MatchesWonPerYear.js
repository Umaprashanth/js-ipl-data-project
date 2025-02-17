// Number of matches won per team per year in IPL.
import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function matchesWonPerYear(input) {
  const data = readFile(input)

  let result = data.reduce((acc,match)=>{

    if(match.winner){

        if (!acc[match.season]){
          acc[match.season] = {}
        }

        if (!acc[match.season][match.winner]){
          acc[match.season][match.winner] = 0
        }
        acc[match.season][match.winner] += 1
    }

    return acc

  },{});

    for (let obj in result){
        let arr = Object.entries(result[obj])
        arr.sort((a,b)=> b[1]-a[1])
        result[obj] = Object.fromEntries(arr)
    }

    console.log(result)


  

    writeFile('./public/output/2-MatchWonPerYear.json', result)
  }

matchesWonPerYear("./data/matches.json")