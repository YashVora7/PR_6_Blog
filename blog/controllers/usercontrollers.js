const user = require("../models/user.schema.js");

const home=async(req,res)=>{
    res.send(await user.find(req.body))
}

const form=(req,res)=>{
    res.render('index')
}

const image=(req,res)=>{
    res.send("image uploaded!")
}

const login=async(req,res)=>{
    await user.create(req.body)
    res.send(req.body);
}

module.exports={home,login,form,image}