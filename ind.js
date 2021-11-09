const express = require('express');
var app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get('/',(req,res)=>res.send("hello world"))
app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

