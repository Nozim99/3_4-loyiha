const mongoose = require("mongoose")
const Post = require("./models/Post")

// mongoose.connect("mongodb+srv://mezes:3654811@cluster0.vccwa.mongodb.net/node-blog-test")
mongoose.connect('mongodb://localhost:27017/myapp', (err)=>{
    console.log("connect mongo")
});

// Post.create({
//     title: "2. My second blog",
//     description: "2. My second description",
//     content: "2. Lorem ipsum content"
// }, (err, post) => {
//     err ? console.log(err) : console.log(post)
// })

// Post.find({}, (err, post) => err ? console.log(err) : console.log(post))

// Post.findById("63638fe6ae2c5c68d7044f71", (err, post) => err ? console.log(err) : console.log(post))

// Post.findByIdAndUpdate("63638fe6ae2c5c68d7044f71", {
//     description: "This description updated successfully"
// }, (err, post) => err ? console.log(err) : console.log(post))
