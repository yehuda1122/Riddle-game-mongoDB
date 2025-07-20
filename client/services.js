import { insertRiddel, updateSomRiddle, deletedataById } from "./app.js"


export async function getRideele() {
    const response = await fetch("http://localhost:3000/riddle");
    const arrRiddle = await response.json();
    return arrRiddle
}


export async function addRidlle() {
    const nawRiddle = insertRiddel()
    try {
        const add = await fetch("http://localhost:3000/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nawRiddle)
        })
        const data = await add.json();
        if (data.msg) {
            console.log(data.msg);
        } else if (data.error) {
            console.log(data.error);
        }
    }
    catch (error) {
        console.error(error.message)
    }
}


export async function updateRiddle() {
    const newDate = await updateSomRiddle()
    try {
        const update = await fetch("http://localhost:3000/update", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newDate)
        })
        const updatedRiddle = await update.json();
        if (updatedRiddle.msg)
            console.log(updatedRiddle.msg);
        else if (updatedRiddle.error) {
            console.log(updatedRiddle.error);
        }
    }
    catch (error) {
        console.error(error.message)
    }
}

export async function deletedata() {
    const riddelId = await deletedataById()
    try {
        const delete1 = await fetch(`http://localhost:3000/${riddelId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        const data = await delete1.json()
        if (data.msg) {
            console.log(data.msg);
        }
        else if (data.error) {
            console.log(data.error);
        }
    }
    catch (error) {
        console.error(error.message)
    }
}