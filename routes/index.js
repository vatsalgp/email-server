const auth = require("./auth");
const billing = require("./billing");

module.exports = app => {
    app.get("/", (req, res) => res.send("Hello World"));
    auth(app);
    billing(app);
};