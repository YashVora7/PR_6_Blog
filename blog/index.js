const express = require('express')
const connect = require('./config/db.js');
const user = require('./routes/user.route.js');
require('dotenv').config();
const app = express()
const cors = require('cors');

app.set("view engine","ejs")
app.set('views',__dirname+'/views');
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
let port = process.env.port
app.use(cors());

app.use("/user",user)
    
app.listen(port,()=>{
    connect();
    console.log("server running on" + ` ${port}`);
})