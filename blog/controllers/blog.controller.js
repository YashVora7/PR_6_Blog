const fuse = require('fuse.js');
const blog = require('../models/Blog.schema');
const user = require('../models/user.schema');

const blogUI = (req,res) => {
    res.render("blog")
}

const blogUI2 = (req,res) => {
    res.render("blogform")
}

const blogCreate = async (req, res)=>{
    let { id } = req.cookies
    let users = await user.findById(id)

    let { title, content, image, category } = req.body

    let data = await blog.create({ title, content, image, category, authorname: users.username })
    res.cookie("blogId", data.id).send(`This blog is created by ${users.username}`)
}

const blogGet = async (req, res) => {
    let { category } = req.query

    let data;

    if (category) {
        data = await blog.find({ category: category })
    }
    else {
        data = await blog.find()
    }
    res.send(data)
}

const blogDelete = async (req, res) => {
    let { id } = req.params

    let data = await blog.findByIdAndDelete(id)
    res.send(data)
}

const blogUpdate = async (req, res) => {
    let { id } = req.params

    let data = await blog.findByIdAndUpdate(id)
    res.send(data)
}

const blogSearch = async (req, res) => {

    let query = req.query.blogs;
    const blogs = await blog.find();

    const options = {
        keys: ["author", "category", "title"],
    };
    const fuse = new Fuse(blogs, options);
    const result = fuse.search(query);
    res.send(result)
}

const blogSingle = async(req , res) =>{
    let {id} = req.params

    let singleblog = await blog.findById(id)
    res.render("singleBlogPage" , {singleblog})
}

const like = async(req ,  res) =>{
    let {id} = req.cookies
    let {b_id} = req.params

    let users = await user.findById(id)

    let blogs = await blog.findById(b_id)

    blogs.likedBy.push({username : users.username})
    await blogs.save()

    res.status(200).cookie("id" , users.id)
    res.status(200).cookie("role" , users.role).send(blogs)

}

const comments = async(req , res) =>{
    let {id} = req.cookies
    let {bid} = req.params

    let users = await user.findById(id)

    let blogs = await blog.findById(bid)

    blogs.comments.push({username : users.username , text : req.body.text})
    await blogs.save()

    res.send(blogs)
}

module.exports = {blogUI, blogUI2, blogCreate, blogDelete, blogUpdate, blogGet, blogSingle, blogSearch, like, comments}