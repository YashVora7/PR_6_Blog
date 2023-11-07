const moongose = require("mongoose")

const blogschema = new moongose.Schema({
    title: String,
    content: String,
    image: String,
    author: String,
    category: String,
    likedBy: [{ username: String }],
    comments: [{
        text: String,
        username: String,
        date: { type: Date, default: Date.now }
    }]
})

const blog = moongose.model("blogdata" , blogschema)
module.exports = blog