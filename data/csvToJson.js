import fs from 'fs'
import csv from 'csv-parser'

function csvToJson(inputFile,outputFile){
    let result = []

    fs.createReadStream(inputFile)
        .pipe(csv())
        .on('data', (data)=> result.push(data))
        .on('end', ()=>{
            fs.writeFileSync(outputFile, JSON.stringify(result,null,2),'utf-8')
            console.log(`the file has been saved as ${outputFile}`)
        })
}

// csvToJson("./data/deliveries.csv", "./data/deliveries.json")
// csvToJson("./data/matches.csv","./data/matches.json")

