const passport = require("passport");
const passportGoogle = require("passport-google-oauth20");
const GoogleStrategy = passportGoogle.Strategy;
const keys = require("../config/keys");
const { User } = require("../models/User");

//Convert UserID to cookie
passport.serializeUser((user, done) => {
	const userID = user.id;
	done(null, userID); //Primary Key of user not googleId
});

passport.deserializeUser((userID, done) => {
	User.findById(userID).then((user) => done(null, user));
});

// GS -> Our Google Strategy
const GSOptions = {
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: "/auth/callback",
	proxy: true // Trusts Proxy allowing us to use https over heroku proxy server
};

const GSVerify = async (accessToken, refreshToken, profile, done) => {
	const googleId = profile.id;
	let user = await User.findOne({ googleId });
	if (!user) user = await new User({ googleId }).save();
	done(null, user);
};

const GS = new GoogleStrategy(GSOptions, GSVerify);

passport.use(GS);
