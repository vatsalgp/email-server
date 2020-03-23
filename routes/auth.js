//For Logging in, out and current status
const passport = require("passport");
require("../services/passport");

const googleAuth = passport.authenticate("google", { scope: ["profile", "email"] });

module.exports = app => {
    app.get("/auth/google", googleAuth);
    app.get("/auth/callback", googleAuth, (req, res) => res.redirect("/surveys"));
    app.get("/api/current_user", (req, res) => res.send(req.user));
    app.get("/api/logout", (req, res) => { req.logout(); res.redirect("/"); });
};