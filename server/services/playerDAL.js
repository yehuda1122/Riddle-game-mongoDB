import supabase from "../DataBase/dbPlayer.js"

export async function addplayer1(userName){
    
        const {data , error} = await supabase.from("users").select("*").eq("userName", userName) 
        if(data.length === 0){
            const {data: newUser,error: erorrUser} = await supabase.from("users").insert([{userName}]).select()   
            return newUser
        }
        else{
            return false   
        }
    }
