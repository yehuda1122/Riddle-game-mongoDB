

export function eqwalTime(UserTime,UserTimeDB){
    if(UserTimeDB === 0 || UserTime < UserTimeDB ){
        return UserTime
    }
    return UserTimeDB
}