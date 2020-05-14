const requireLogin = require("../middlewares/requireLogin");
const createCharge = require("../services/createCharge");

module.exports = app => {
    app.post("/api/stripe", requireLogin, createCharge);
};