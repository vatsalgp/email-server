const passport = require("passport");

const googleAuth = passport.authenticate("google", { scope: ["profile", "email"] });

module.exports = app => {
    app.get("/", (req, res) => res.send("Hello World"));
    app.get("/auth/google", googleAuth);
    app.get("/auth/google/callback", googleAuth);
};