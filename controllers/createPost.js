const Post = require("../models/Post")
const path = require("path")

module.exports = (req, res) => {
    const { image } = req.files;
    image.mv(path.resolve(__dirname, "../public/posts", image.name), (err) => {    //  publick/posts ga yuklanadi. image.name ya'ni rasmni o'zini nomi bilan saqlanadi
        if (err) {
            throw err;
        } else {
            Post.create({ ...req.body, image: image.name, author: req.session.userId }, (err, post) => {
                err ? console.log(err) : console.log(post), res.redirect("/")
            })
        }
    })
}