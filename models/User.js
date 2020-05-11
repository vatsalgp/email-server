const mongoose = require("mongoose");

//Create a schema
const userSchema = new mongoose.Schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    }
});

//Create a collection / Model Class
const User = mongoose.model("users", userSchema);

exports.User = User;
exports.userSchema = userSchema;