import fs from "fs";

    export default function readFile(filePath){
        const data = fs.readFileSync(filePath, "utf8")
        return JSON.parse(data);
    }