const requireLogin = require("../middlewares/requireLogin");
const sendSurvey = require("../services/sendSurvey");
const { Survey } = require("../models/Survey");

module.exports = app => {
    const createSurvey = async (req, res) => {
        let { title, body, subject, recipients } = req.body;
        recipients = recipients.split(",").map(email => email.trim());
        const { user } = req;
        if (user.credits < recipients.length) {
            res.send("Insufficient amount of credits");
        } else {
            const survey = new Survey({
                title,
                body,
                subject,
                _user: user.id,
                dateSent: Date.now(),
                recipients: recipients.map(email => ({ email }))
            });

            const response = await sendSurvey({ body, subject, recipients });

            if (response) {
                user.credits -= recipients.length;
                user.save();
                survey.save();
                res.send(true);
            } else {
                res.send(false);
            }
        }
    };
    app.post("/api/surveys", requireLogin, createSurvey);
};