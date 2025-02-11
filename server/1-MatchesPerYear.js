// Number of matches played per year for all the years in IPL.
import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function matchesPerYear(input) {
  const data = readFile(input)

  let res = data.reduce((acc, num) => {
    acc[num.season] = acc[num.season] || 0;
    acc[num.season] += 1;
    
    return acc;
  }, {});

  writeFile('./public/output/1-MatchPerYear.json', res)
}

matchesPerYear("./data/matches.json");
