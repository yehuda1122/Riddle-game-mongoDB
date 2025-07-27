import readline from "readline-sync";
import { addNewplayer2, login } from "../services/servicePlayer.js";
import { getBassicUser } from "../helpFunction/helpPlayer.js";
import { play  } from "../helpFunction/helpRiddle.js";
import { runAdmin } from "../runAdmin.js"
import {runUser} from "../runUser.js";


async function runGame() {
    let start = readline.question("enter your coise per number: \n 1.sing up \n 2.login \n 3.guest \n")
    console.log();
    let currUser;
    switch (start) {
        case "1":
            const newUser = await getBassicUser()
            await addNewplayer2(newUser)
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
        if (currUser.role === "admin"){
            runAdmin()
        }
        else{
            runUser()
        }
    }
}
runGame()