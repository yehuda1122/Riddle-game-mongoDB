import { ObjectId } from "mongodb";
import  {connect} from "../db.js";


async function getRiddlesFromMongoDB() {
        const db = await connect();
        const data = await db.collection("riddles").find().toArray();
        console.log(data);
        return data
}

async function writeRiddleToFile(path, newData) {
    const data = await fs.readFile(path, { encoding: "utf-8" })
    const ridels = JSON.parse(data)
    ridels.push(newData)
    await fs.writeFile(path, JSON.stringify(ridels), "utf-8");
    return ridels
}

async function updateRiddleInFile(path, newData) {
    const data = await fs.readFile(path, { encoding: "utf-8" })
    const riddles = JSON.parse(data)
    let flag = true
    for (let i = 0; i < riddles.length; i++) {
        if (riddles[i].id === newData.id) {
            riddles[i][newData.field] = newData.value
            flag = false
            break
        }
    }
    if (flag)
        console.log("id not identified");
    await fs.writeFile(path, JSON.stringify(riddles), "utf-8")
    return riddles
}

async function deleteRiddleFromFile(path, id) {
    const data = await fs.readFile(path, { encoding: "utf-8" });
    const riddles = JSON.parse(data);
    const index = riddles.findIndex(riddle => riddle.id === id);
    if (index === -1) {
        return false;
    }
    riddles.splice(index, 1);
    await fs.writeFile(path, JSON.stringify(riddles), "utf-8");
    return true;
}

export {
    getRiddlesFromMongoDB,
    writeRiddleToFile,
    updateRiddleInFile,
    deleteRiddleFromFile
}