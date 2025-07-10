import express from "express"
import fs from "fs/promises";


async function readRiddlesFromFile(path) {
    const data = await fs.readFile("./data/allRiddle.txt", { encoding: "utf-8" })
    return JSON.parse(data)

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
    readRiddlesFromFile,
    writeRiddleToFile,
    updateRiddleInFile,
    deleteRiddleFromFile
}