// Number of matches played per year for all the years in IPL.
import fs from "fs";
import writeFile from "../data/fileWriter.js";
import readFile from "../data/readFile.js";

function matchesPerYear(input) {
  const data = readFile(input);

  let result = data.reduce((acc, match) => {
    if (!acc[match.season]) {
      acc[match.season] = 0;
    }
    acc[match.season] += 1;

    return acc;
  }, {});

  writeFile("./public/output/1-MatchPerYear.json", result);
}

matchesPerYear("./data/matches.json");
