const Post = require("../models/Post")

module.exports = async (req, res) => {  //pages.html
    const post = await Post.findById(req.params.id)
    res.render("posts", { post })
}