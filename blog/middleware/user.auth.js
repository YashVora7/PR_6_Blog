const userCheck = (req , res , next) =>{
    let {username , password , email , role} = req.body

    if(username || password || email || role){
        next()
    }
    else{
        res.send({message : "Invalid Credentials."})
    }
}

module.exports = {userCheck}