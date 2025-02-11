import fs from "fs";

export default function writeFile(filePath,data){
     fs.writeFileSync(filePath, JSON.stringify(data,null,2));
}