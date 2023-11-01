require('dotenv').config();

let url = process.env.url

// const connect=async()=>{
//     try {
//         await mongoose.connect(url)
//         console.log("Connected to server");
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// module.exports=connect;

const mongoose = require('mongoose');

const connect =async()=>{
    await mongoose.connect(url)
    console.log("Connected to mongodb");
}

module.exports = connect