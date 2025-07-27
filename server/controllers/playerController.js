import supabase from "../DataBase/dbPlayer.js"
import { addplayer1, getusers, insertTime } from "../services/playerDAL.js"
import { bcryptpassword, checkPass } from "../function/bcrypt.js"
import jwt from "jsonwebtoken";
// import {showStat} from "../../client/classes/personclass.js"


export async function addNewplayer(req, res) {
    let user = req.body
    // console.log('user',user);
    
    const UserBcryptpaswword = await bcryptpassword(user.password)
    try {
        const userDB = await getusers(user)        
        if (userDB.userName === user.userName) {
            return res.json({ msg: "the name olredy exsist" })
        }
        user.password = UserBcryptpaswword;
        const data = await addplayer1(user)
        // console.log(user);
        res.status(201).json({ msg: "The user added" })
    }
    catch (error) {
        console.error(error.masseg);
        res.status(400).json({ error: "the user not added" })
    }
}

export async function login(req, res) {
    const user = req.body
    // console.log(user);
    try {
        const userDB = await getusers(user)
        if (userDB === false) {
            return res.json({ message: "the name not exsist" })
        }
        const check = await checkPass(user.password, userDB.password)
        if (check === true) {
            const token = jwt.sign({ name: userDB.name, role: userDB.role, }, process.env.JWT_SECRET, { expiresIn: "1d" })
            res.json({ token, success: true, user: { name: userDB.userName, role: userDB.role, bestTime: userDB.bestTime } });
        }
        else {
            res.json({ success: false, message: "Wrong password" });
        }
    }
    catch (error) {
        console.error(error.message)
        res.status(400).json({ error: "database error" })
    }
}

export async function timeFromDB(req, res) {
    const data = req.body
    console.log('time', data.newTime);
    console.log('dasss', data.currUser.name);

    try {
        const update = await insertTime(data.newTime, data.currUser.name)
        console.log('apddd', update);

        res.json({ update: "best-time update" })
    }
    catch (erorr) {
        console.error(erorr.masseg);
        res.json({ erorr: "database erorr" })
    }
}







