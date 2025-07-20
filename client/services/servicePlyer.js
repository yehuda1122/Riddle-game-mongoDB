export async function addPlayer(userName) {
    try {
        const player = await fetch("http://localhost:3000/player/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({userName})
        })
        const nawUser = await player.json();    
        if (nawUser.msg)
            console.log(nawUser.msg);
        else if (nawUser.error) {
            console.log(nawUser.error);
        }
    }
    catch (error) {
        console.error(error.message)
    }
}
