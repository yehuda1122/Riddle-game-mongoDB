import supabase from "../DataBase/dbPlayer.js"

export async function addplayer1(user) {
    user.role = "admin"
    const { data: newUser, error: erorrUser } = await supabase.from("users").insert(user).select()
    return newUser
}

export async function getusers(user) {
    const { data: dbuser, error: erorrUser } = await supabase.from("users")
        .select("*")
        .eq("userName", user.userName)
        .single()
    if (dbuser) {
        return dbuser
    }
    else {
        return false
    }
}


// export async function getTime(){
//         const { data: timUser, error: erorrUser } = await supabase.from("users")
//         .select("best-time")
//         .eq("userName", user.userName)
//         .single()
//     return timUser
// }


export async function insertTime(time,user){
    const { data: newtime, error: erorrUser } = await supabase.from("users").
    update({bestTime: time}).
    eq("userName", user)
    .select()
    .single()
    return newtime
}