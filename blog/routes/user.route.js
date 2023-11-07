const {Router} = require("express")
const { signupui, usercreate, login, loginui } = require("../controllers/user.controller")
const { userCheck } = require("../middleware/user.auth")
const user = Router()


user.get("/signup" , signupui)
user.post("/signup", userCheck ,usercreate)
user.get("/login" , loginui)
user.post("/login" , login)

module.exports = user