const passport = require("passport");
require("../services/passport");

const googleAuth = passport.authenticate("google", { scope: ["profile", "email"] });

module.exports = app => {
    app.get("/", (req, res) => res.send("Hello World"));
    app.get("/auth/google", googleAuth);
    app.get("/auth/google/callback", googleAuth, (req, res) => { res.send("Logged In") });
    app.get("/api/current_user", (req, res) => { res.send(req.user) });
    app.get("/api/logout", (req, res) => {
        req.logout();
        res.send("Logged Out");
    });
};