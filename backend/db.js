const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bajpe");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [3, "Username must be at least 3 characters long"]
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User