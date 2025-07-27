import { play } from "./helpFunction/helpRiddle.js";
import { addRidlle } from "./services/serviceriddle.js";
import readline from "readline-sync";



export async function runUser() {
    let start = readline.question("enter your coise per number: \n 1.resolve riddle. \n 2.add new ridlle. \n")
    console.log();

    switch (start) {
        case "1":
           await play()
            break;
        case "2":
            await addRidlle()
            break;
    }
}