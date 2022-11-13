module.exports = (req, res, next) => {    // Middleware
    if (!(req.files && req.files.image) || !req.body.title || !req.body.username || !req.body.description || !req.body.content) {
        console.log("Error")
        return res.redirect("/posts/new")
    }
    next()  // next() ni yozish muhim
}