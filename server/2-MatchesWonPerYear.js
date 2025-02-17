// Number of matches won per team per year in IPL.
import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function matchesWonPerYear(input) {
  const data = readFile(input)

    let result = {}

    for (let i = 0; i<data.length; i++){

      let match = data[i]

      if (match.winner){
        if (!result[match.season]){
          result[match.season] = {}
        }
        if (! result[match.season][match.winner]){
          (result[match.season][match.winner] = 0)
        } else{
          (result[match.season][match.winner]) += 1
        }
        
      }
    }

    for (let obj in result){
        let yearlySorted = Object.entries(result[obj])
        yearlySorted.sort((a,b)=> b[1]-a[1])
        result[obj] = Object.fromEntries(yearlySorted)
    }


  

    writeFile('./public/output/2-MatchWonPerYear.json', result)
  }

matchesWonPerYear("./data/matches.json")