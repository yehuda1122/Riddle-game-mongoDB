import supabase from "../DataBase/dbPlayer.js"
import { addplayer1 } from "../services/playerDAL.js"

export async function addNewplayer(req, res) {
    const { userName } = req.body
    try {
        const data = await addplayer1(userName)        
        if (data === false) {
           return res.status(500).json({ msg: "The user olredy exsist" })
        }
        
            res.status(201).json({ msg: "The user added" })
        
    }
    catch (error) {
        res.status(400).json({ error: "the user not added" })
    }

}