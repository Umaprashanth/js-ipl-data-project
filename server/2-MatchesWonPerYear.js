// Number of matches won per team per year in IPL.
import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function matchesWonPerYear(input) {
  const data = readFile(input)

    let res = {}

    for (let i = 0; i<data.length; i++){

      let num = data[i]

      if (num.winner){
        if (!res[num.season]){
          res[num.season] = {}
        }
        res[num.season][num.winner] = (res[num.season][num.winner] || 0) + 1
      }
    }

    for (let obj in res){
        let arr = Object.entries(res[obj])
        arr.sort((a,b)=> b[1]-a[1])
        res[obj] = Object.fromEntries(arr)
    }


  

    writeFile('./public/output/2-MatchWonPerYear.json', res)
  }

matchesWonPerYear("./data/matches.json")