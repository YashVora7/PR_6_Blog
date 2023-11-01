const Router=require('express');
const { home, login, form, image } = require('../controllers/usercontrollers');
const user=Router();

const multer=require('multer');

let storage=multer.diskStorage({
    destination:"image",
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload=multer({
    storage:storage
})

user.get('/',home); 
user.post('/image',upload.single('image'),image)
user.get('/form',form)
user.post('/login',login);


module.exports =user;