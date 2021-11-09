const mysql = require('mysql');//npm i mysql
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'edac20',
    database:'tanudb',
    multipleStatements : true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));


//Get all employees
app.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.get('/employees/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee where EmpID = ?',[req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.delete('/employees/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee where EmpID = ?',[req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('deleted successfully');
        else
            console.log(err);
    })
});

app.post('/employees', (req, res) => {
    let emp = req.body;
    var sql = "SET @empID = ?;set @Name = ?;set @emoCode = ?; set @salary = ?; call emp5(@empID, @Name,@emoCode,@salary );"
    mysqlConnection.query(sql,[emp.empID,emp.Name,emp.emoCode,emp.salary], (err, rows, fields) => {
        if (!err)
           rows.forEach(element =>{if(element.constructor == Array)
        res.send("inserted employee id" +element[0].empID)
        })
        else
            console.log(err);
    })
});

app.put('/employees', (req, res) => {
    let emp = req.body;
    var sql = "SET @empID = ?;set @Name = ?;set @emoCode = ?; set @salary = ?; call emp5(@empID, @Name,@emoCode,@salary );"
    mysqlConnection.query(sql,[emp.empID,emp.Name,emp.emoCode,emp.salary], (err, rows, fields) => {
        if (!err)
          res.send('updated successful')
        
        else
            console.log(err);
    })
});