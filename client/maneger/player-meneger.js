import readline from "readline-sync";
import { addNewplayer2, login } from "../services/servicePlayer.js";
import { getBassicUser } from "../helpFunction/helpPlayer.js";
import { play } from "../helpFunction/helpRiddle.js";
import { runAdmin } from "../runAdmin.js"
import { runUser } from "../runUser.js";

export let currUser;
async function runGame() {
    let start = readline.question("enter your coise per number: \n 1.sing up \n 2.login \n 3.guest \n")
    console.log();

    switch (start) {
        case "1":
            const newUser = await getBassicUser()
            const data = await addNewplayer2(newUser)
            if(!data.msg === "the name olredy exsist")
            currUser = await login(newUser)
            break;

        case "2": {
            const User = await getBassicUser()
            currUser = await login(User)
            break;
        }
        case "3": {
            play()
            break;
        }
    }
    if (currUser) {
        if (currUser.role === "admin") {
            await runAdmin()
        }
        else {
            await runUser()
        }
    }
}
runGame()