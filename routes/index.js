const auth = require("./auth");
const billing = require("./billing");

module.exports = app => {
    auth(app);
    billing(app);
};