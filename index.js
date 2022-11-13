const express = require("express")
const app = express()
const PORT = 5000
const { config, engine } = require("express-edge")
const mongoose = require("mongoose")
const fileUpload = require("express-fileupload")
const expressSession = require("express-session")
const mongoStore = require("connect-mongo")
const connectFlash = require("connect-flash")
const edge = require("edge.js").default

const homePageController = require("./controllers/homePage")
const getPostsController = require("./controllers/getPosts")
const postsNewController = require("./controllers/postsNew")
const createPostController = require("./controllers/createPost")
const createUserController = require("./controllers/createUser")
const storeUserController = require("./controllers/userStore")
const loginController = require("./controllers/login")
const loginStoreController = require("./controllers/loginStore")
const logoutController = require("./controllers/logout")

const validateCreatePostMiddleware = require("./middleware/validationMiddleware")
const authMiddleware = require("./middleware/auth")
const redirectIfAuth = require("./middleware/redirect")

const MongoUrl = "mongodb+srv://mezes:3654811@cluster0.vccwa.mongodb.net/node-blog"
mongoose.connect(MongoUrl)

app.use(expressSession({
    secret: "mezes", 
    store: mongoStore.create({mongoUrl: MongoUrl})
}))
app.use(fileUpload())   //  fileUploaddan foydalanishi uchun
app.use(express.static("public"))   //  public folder static qilindi
app.use(engine)
app.use(express.json()) //  json faylidan foydalanish 
app.use(express.urlencoded({ extended: true }))
app.use(connectFlash())

app.set("views", `${__dirname}/views`)

app.use("*", (req, res, next)=>{
    // auth ni global qiladi. istalgan edge sahifada foydalanish mumkin bo'ladi
    app.locals.auth = req.session.userId
    next()
})

app.get("/", homePageController)
app.get("/post/:id", getPostsController)
app.get("/posts/new", authMiddleware, postsNewController)
app.get("/about", (req, res) => {    //about.html
    res.render("about")
})
app.get("/contact", (req, res) => {   //contact.html
    res.render("contact")
})

app.post("/posts/create", authMiddleware, validateCreatePostMiddleware, createPostController)
app.get("/reg", redirectIfAuth, createUserController)
app.post("/auth/reg", storeUserController)
app.get("/login", redirectIfAuth, loginController)
app.post("/auth/log", loginStoreController)
app.get("/logout", authMiddleware, logoutController)


app.listen(PORT, () => { console.log("Server has been started on Port", PORT + "...") })