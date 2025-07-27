import readline from "readline-sync"


export async function getBassicUser() {
    const userName = readline.question("enter your name ")
    const password = readline.question("enter your password ")
    const newUser = {
        userName,
        password
    }
    return newUser
}

