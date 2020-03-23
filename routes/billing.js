const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
    const createCharge = async (req, res) => {
        //req.body -> token; req.user -> user 
        const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            description: "$5 for 5 credits",
            source: req.body.id // Transaction id
        });

        req.user.credits += 5;

        const user = await req.user.save();

        res.send(user);
    };

    app.post("/api/stripe", requireLogin, createCharge);
};