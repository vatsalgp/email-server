const mongoose = require("mongoose");

//Create a schema
const recipientSchema = new mongoose.Schema({
	email: String,
	responded: { type: Boolean, default: false }
});

//Create a collection / Model Class
const Recipient = mongoose.model("recipients", recipientSchema);

exports.recipientSchema = recipientSchema;
exports.Recipient = Recipient;
