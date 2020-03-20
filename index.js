const app = require("express")();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const keys = require("./config/keys");
const router = require("./routes/authRoutes");

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

const corsOptions = {
    origin: 'https://emaily.netlify.com',//No ending slash
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//Middlewares
if (process.env.NODE_ENV === "production")
    app.use(cors(corsOptions));
else
    app.use(cors());
app.use(cookieSession(cookieOptions));
app.use(passport.initialize());
app.use(passport.session());

//Route Handler
router(app);

app.listen(process.env.PORT || 5678);