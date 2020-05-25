const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const enforce = require("express-sslify");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const router = require("./routes");
const app = express();

//Mongoose Setup
const mongoOptions = {
	useNewUrlParser    : true,
	useUnifiedTopology : true,
	useCreateIndex     : true
};
mongoose.connect(keys.mongoURI, mongoOptions);

//App Setup
const cookieOptions = {
	maxAge : 30 * 24 * 60 * 60 * 1000, //30 days in milliseconds
	keys   : [ keys.cookieKey ]
};

//Middlewares
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(morgan("combined")); // For logging requests
app.use(bodyParser.json({ type: "*/*" })); //For req.body
app.use(cookieSession(cookieOptions));
app.use(passport.initialize());
app.use(passport.session());

//Route Handler
router(app);

if (process.env.NODE_ENV === "production") {
	//Build JS,CSS assets
	app.use(express.static("client/build"));

	//Build index.html
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(process.env.PORT || 5678);
