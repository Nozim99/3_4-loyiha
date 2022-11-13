const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Provide your username"]
    },
    email: {
        type: String,
        required: [true, "Provide your email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Provide your password"]
    }
})

const User = mongoose.model("User", UserSchema)
module.exports = User