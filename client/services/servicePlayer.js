// import {addnew} from "./addPlayer.js";
// import {user} from "./addPlayer.js";

import { currUser } from "../maneger/player-meneger.js";


export let token = null

export async function addNewplayer2(newUser) {
    try {
        const player = await fetch("http://localhost:3000/player/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
        const User = await player.json();        
        if (User.msg) {
            console.log(User.msg);
            return User.msg
        }
        else if (User.error) {
            console.log(User.error);
        }
    }
    catch (error) {
        console.error(error.message)
    }
}

export async function login(user) {
    try {
        const player = await fetch("http://localhost:3000/player/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        const currUser = await player.json();
        // console.log('couuurr', currUser);

        if (!currUser) {
            console.log(currUser.err);

        }
        else if (currUser.success) {
            console.log("Login success");
            token = currUser.token
            return currUser.user
        }
        else if (!currUser.success) {
            console.log(currUser.message);
            return null
        }
    }
    catch (error) {
        console.error(error.message)
        return null
    }
}

export async function updateTime(newTime) {
    try {
        setTimeout(async() => {
            const update = await fetch("http://localhost:3000/player/updateTime", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ newTime, currUser })
            })
            const data = await update.json()
            console.log('data', data)
        }, 1000);
    }
    catch (error) {
        console.error(error)
    }
}