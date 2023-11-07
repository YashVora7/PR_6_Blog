const {Router} = require("express")
const { blogUI, blogUI2, blogDelete, blogUpdate, like, blogSingle, blogSearch, blogCreate, comments, blogGet } = require("../controllers/blog.controller")
const { isAuth, login } = require("../middleware/authenticate")
const { check } = require("../middleware/blog.auth")
const blog = Router()

blog.get("/",blogUI)
blog.get("blogs", blogGet)
blog.get("/create", isAuth, blogUI2)
blog.post("/create",check, isAuth, blogCreate)
blog.delete("/delete/:id", isAuth, blogDelete)
blog.patch("/edit/:id", isAuth, blogUpdate)
blog.patch("/like/:b_id",login, like)
blog.patch("/comment/:b_id", login, comments)
blog.get("/singleBlog/:id", blogSingle)
blog.get("/search",blogSearch)

module.exports = blog