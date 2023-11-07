const isAuth = (req , res , next) => {
    let {role} = req.cookies
    
    if(role == "admin"){
        next()
    }
    else if(!role){
        res.send("login first")
    }
    else{
        res.send("You are not authorized to access this page.")
    }
}

const login = (req , res , next) =>{
    let {id} = req.cookies

    if(id){
        next()
    }
    else{
        res.redirect("/user/login")
    }
}



module.exports = {isAuth , login}