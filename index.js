const express = require("express");
const passport = require("passport");
const passportGoogle = require("passport-google-oauth20");
const keys = require("./config/keys");

const GoogleStrategy = passportGoogle.Strategy;
const app = express();

const OurGoogleStrategyOptions = {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
};

const OurGoogleStrategy = new GoogleStrategy(OurGoogleStrategyOptions, (accessToken, refreshToken, profile, done) => {
    // console.log("Access Token", accessToken);
    console.log("Profile", profile);
    // done(null, profile);
});

passport.use(OurGoogleStrategy);

const googleAuth = passport.authenticate("google", {
    scope: ["profile", "email"]
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/auth/google", googleAuth);

app.get("/auth/google/callback", googleAuth, (req, res) => {
    res.send("Signed In");
});

const PORT = process.env.PORT || 5678;
console.log("Listening on port", PORT);
app.listen(PORT);