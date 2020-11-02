module.exports={
    client:"sqlite3",
    useNullAsDefault:true,
    connection:{
        filename:"./database/Auth.db3",
    },
    migration:{
        directory:"./database/migrations",
    },
    seed:{
        directory:"./database/seeds",
    },
    //Enforcing Foreign Keys to ON
    pool:{
        afterCreate:(conn,done)=>{
            conn.run("PRAGMA Foreign_keys =ON",done)
        },
    }
}