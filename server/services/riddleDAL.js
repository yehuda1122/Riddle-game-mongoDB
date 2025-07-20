import { ObjectId } from "mongodb";
import { connect } from "../DataBase/dbRiddle.js";



async function getRiddlesFromMongoDB() {
    const db = await connect();
    const data = await db.collection("riddles").find().toArray();
    return data
}

async function writeRiddleToMongoDB(newRiddel) {
    const db = await connect();
    return await db.collection("riddles").insertOne(newRiddel)
}

async function updateRiddleImongoDB(newData) {
    const db = await connect();
    return await db.collection("riddles").updateOne({ _id: new ObjectId(newData.id) }, { $set: { [newData.itemChenge]: newData.value } })
}

async function deleteRiddleFromMongoDB(id) {
    const db = await connect();
    return await db.collection("riddles").deleteOne({_id: new ObjectId(id)})
}

export {
    getRiddlesFromMongoDB,
    writeRiddleToMongoDB,
    updateRiddleImongoDB,
    deleteRiddleFromMongoDB 
}