import { play } from "./helpFunction/helpRiddle.js";
import { addRidlle, updateRiddle, deletedata } from "./services/serviceriddle.js";
import readline from "readline-sync"


export async function runAdmin() {
    let start = readline.question("enter your coise per number: \n 1.resolve riddle. \n 2.add new ridlle. \n 3.update som reddle. \n 4.delete riddle:\n ")
    console.log();

    switch (start) {
        case "1":
            play()
            break;
        case "2":
            addRidlle()
            break;
        case "3":
            updateRiddle()
            break;
        case "4":
            deletedata()
            break
        default:
            break;
    }
}