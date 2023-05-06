import mysql from "mysql2";

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: 3306,
    database: "ranking_movies"
})

// conn.connect((error) => {
//     if(error) throw error;
//     console.log("CONECTADO")
// })

export default conn;