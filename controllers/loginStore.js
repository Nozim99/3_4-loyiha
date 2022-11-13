const User = require("../models/User")
const bcrypt = require("bcryptjs")

module.exports = (req, res) => {
    const { password, email } = req.body
    User.findOne({ email }, async (err, user) => {
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword){
                req.session.userId = user._id   // sessionda userId yaratiladi
                res.redirect("/posts/new")
            } else {
                res.redirect("/login")
            }
        } else {
            return res.redirect("/login")
        }
    })
}
