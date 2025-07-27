import supabase from "../DataBase/dbPlayer.js"

export async function addplayer1(user) {
    user.role = "user"
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


