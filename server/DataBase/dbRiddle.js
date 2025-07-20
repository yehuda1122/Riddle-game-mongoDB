import { config } from 'dotenv';
import { MongoClient, Db } from 'mongodb';
config();

const client = new MongoClient(process.env.DB_USERS_MONGODB)

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */
export async function connect() {
    if (!db) {
        await client.connect();
        db = client.db("riddles-game");
        console.log("Connected to MongoDB");
    }
    return db;
}

connect();
