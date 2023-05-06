import conn from "./dbConfig.js"

var sql = "INSERT INTO users (name, movies) VALUES ('Bruno', 'Highway 37')";

conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});