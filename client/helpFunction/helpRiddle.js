
import person from "../classes/personclass.js";
import riddle from "../riddles/Riddle.js";
import readline from "readline-sync"
import {getRideele} from "../services/serviceriddle.js"
import { currUser } from "../maneger/player-meneger.js";
import{updateTime} from "../services/servicePlayer.js"

export async function play(){
    const allRiddel = await getRideele()
    const person1 = new person()
    for (let i = 0; i < allRiddel.length; i++) {
        let input = readline.question("Press Enter to get the next riddle or 'end' to stop: ")
        if (input === "end") {
            break;
        }
        const riddle1 = new riddle(allRiddel[i])
        person1.recordTime(() => riddle1.ask())
    }
    console.log('you average time per riddle is:',person1.average());
    const newTimeUser = person1.totalTime()
    console.log('you time for all riddles is:',newTimeUser);
    const user = currUser    
    const timeUser = user.bestTime
    const newTime = eqwalTime(newTimeUser,timeUser)        
    const update = await updateTime(newTime)
    console.log('update',update);
}




export function eqwalTime(UserTime,UserTimeDB){
    if(UserTime > UserTimeDB ){
        return UserTime
    }
    return UserTimeDB
}



export function insertRiddel() {
    console.log("enter new riddle: ");
    const name = readline.question("enter lavel: ")
    const taskDescription = readline.question(" riddle: ")
    const correctAnswer = readline.question("enter correct Answer: ")
    const newRidlle = {
        name,
        taskDescription,
        correctAnswer
    }
    return newRidlle
}


export async function updateSomRiddle() {
    const arrRiddle = await getRideele()
    console.log(arrRiddle);
    const id = readline.question("enter id: ")
    let itemChenge;
    const arr = ['name', 'taskDescription', 'correctAnswer'];
    while (true) {
        itemChenge = readline.question("enter item to chenge: " + arr + " ")
        if (arr.includes(itemChenge)) {
            break
        }
        console.log('not found try egian');
    }
    const value = readline.question("enter your chenge:")

    const newDate = {
        id,
        itemChenge,
        value
    }
    return newDate
}


export async function deletedataById() {
    const arrRiddle = await getRideele()
    console.log(arrRiddle);
    const riddleId = readline.question("enter id: ")
    return riddleId
}

