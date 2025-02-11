// Number of matches won per team per year in IPL.
import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";


function matchesWonPerYear(input) {
  const data = readFile(input)

  let res = data.reduce((acc,num)=>{

    if(num.winner){
        acc[num.season] = acc[num.season] || {}
        acc[num.season][num.winner] = (acc[num.season][num.winner] || 0) + 1
    }

    return acc

  },{});

    for (let obj in res){
        let arr = Object.entries(res[obj])
        arr.sort((a,b)=> b[1]-a[1])
        res[obj] = Object.fromEntries(arr)
    }

    console.log(res)


  

    writeFile('./public/output/2-MatchWonPerYear.json', res)
  }

matchesWonPerYear("./data/matches.json")