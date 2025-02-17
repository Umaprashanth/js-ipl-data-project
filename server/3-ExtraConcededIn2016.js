// Extra runs conceded per team in the year 2016

import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";
import { log } from "console";

function extrasConceded(input1, input2) {
  let matches = readFile(input1);
  let deliveries = readFile(input2);

  let matchesId = [];

  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];

    if (match.season == 2016) {
      matchesId.push(match.id);
    }
  }

  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    if (matchesId.includes(delivery.match_id)) {
      const team = delivery.bowling_team;
      if (!result[team]) {
        result[team] = 0;
      } 
      
      result[team] += parseInt(num.extra_runs);
      
    }
  }

  writeFile("./public/output/3-extraConcededIn2016.json", result);
}

extrasConceded("./data/matches.json", "./data/deliveries.json");
