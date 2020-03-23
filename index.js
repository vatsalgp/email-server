const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const router = require("./routes");

//Mongoose Setup
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};
mongoose.connect(keys.mongoURI, mongoOptions);

//App Setup
const cookieOptions = {
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days in milliseconds
    keys: [keys.cookieKey]
};

//Middlewares
app.use(morgan("combined")); // For logging requests
app.use(bodyParser.json({ type: "*/*" })); //For req.body
app.use(cookieSession(cookieOptions));
app.use(passport.initialize());
app.use(passport.session());

//Route Handler
router(app);

app.listen(process.env.PORT || 5678);