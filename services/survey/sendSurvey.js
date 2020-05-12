const sgMail = require('@sendgrid/mail');
const keys = require("../../config/keys");
const surveyTemplate = require("../../emailTemplate/survey");

sgMail.setApiKey(keys.sendGridKey);

const sendServey = async ({ body, subject, recipients }) => {
    try {
        await sgMail.sendMultiple({
            subject,
            to: recipients,
            from: 'emaily.company@gmail.com',
            html: surveyTemplate(body),
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

module.exports = sendServey;