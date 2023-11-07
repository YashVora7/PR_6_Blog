const check = (req , res , next) =>{
    let {title , category , image , content} = req.body

    if(title && category && image && content){
        next()
    }
    else{
        res.status(400).send("All fields are required")
    }
}


module.exports = {check}