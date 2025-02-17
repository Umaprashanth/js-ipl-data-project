// Number of matches played per year for all the years in IPL.
import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function matchesPerYear(input) {
  const data = readFile(input)

  let result = {}

  for (let i = 0; i<data.length; i++){
    let match = data[i]
    
    if (!result[match.season]){
      result[match.season] = 0
    } 
      result[match.season] += 1
    
  }
  writeFile('./public/output/1-MatchPerYear.json', result)
}
  


matchesPerYear("./data/matches.json")
