// Number of matches played per year for all the years in IPL.
import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function matchesPerYear(input) {
  const data = readFile(input)

  let res = {}

  for (let i = 0; i<data.length; i++){
    let num = data[i]
    
    if (!res[num.season]){
      res[num.season] = 0
    } 
      res[num.season] += 1
    
  }
  writeFile('./public/output/1-MatchPerYear.json', res)
}
  


matchesPerYear("./data/matches.json")
