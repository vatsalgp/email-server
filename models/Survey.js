const mongoose = require("mongoose");
const { recipientSchema } = require("./Recipients.js");

//Create a schema
const surveySchema = new mongoose.Schema({
	title: String,
	body: String,
	subject: String,
	dateSent: Date,
	lastResponded: Date,
	recipients: [ recipientSchema ],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

//Create a collection / Model Class
const Survey = mongoose.model("surveys", surveySchema);

exports.Survey = Survey;
exports.surveySchema = surveySchema;
