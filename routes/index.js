const auth = require("./auth");
const billing = require("./billing");
const survey = require("./survey");

module.exports = app => {
    auth(app);
    billing(app);
    survey(app);
};