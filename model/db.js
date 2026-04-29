const mysql = require('mysql2');

let con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"clinic_db"
});

module.exports = con;




