const mongoose = require("mongoose");

//Create a schema
const userSchema = new mongoose.Schema({ googleId: String });

//Create a collection / Model Class
const User = mongoose.model("users", userSchema);
module.exports = User;