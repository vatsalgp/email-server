const sendSurvey = require("./sendSurvey");
const { Survey } = require("../../models/Survey");

const createSurvey = async (req, res) => {
    try {
        let { title, body, subject, recipients } = req.body;
        recipients = recipients.split(",").map(email => email.trim());
        if (req.user.credits < recipients.length) {
            res.send("Insufficient amount of credits");
        } else {
            const survey = new Survey({
                title,
                body,
                subject,
                _user: req.user.id,
                dateSent: Date.now(),
                recipients: recipients.map(email => ({ email }))
            });

            const response = await sendSurvey({ body, subject, recipients });

            if (response) {
                survey.save();
                req.user.credits -= recipients.length;
                const user = await req.user.save();
                res.send(user);
            } else {
                res.send(false);
            }
        }
    }
    catch (error) {
        res.status(422).send(error);
        console.log(error);
    }
};

module.exports = createSurvey;