const passport = require("passport");
const passportGoogle = require("passport-google-oauth20");
const GoogleStrategy = passportGoogle.Strategy;
const keys = require("../config/keys");

const GSOptions = {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
};

const GS = new GoogleStrategy(GSOptions, (accessToken, refreshToken, profile, done) => {
    console.log("Profile", profile);
});

passport.use(GS);