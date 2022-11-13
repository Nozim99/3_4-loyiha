const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    content: String,
    username: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",     // model yoziladi. Betta User moduli ishlatilgan
        required: true
    },
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;