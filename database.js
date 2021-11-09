const {createPool}= require('mysql');
const pool = createPool( {
    port:3306,
    host:"localhost",
    user:"root",
    password:"edac20",
    database : "test"
})

module.exports = pool;