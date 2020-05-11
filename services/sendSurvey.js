const sgMail = require('@sendgrid/mail');
const keys = require("../config/keys");

sgMail.setApiKey(keys.sendGridKey);

const sendServey = async ({ body, subject, recipients }) => {
    try {
        await sgMail.sendMultiple({
            subject,
            to: recipients,
            from: 'emaily.company@gmail.com',
            html: `<div><div>${body}</div><a>Yes</a><a>No</a></div>`,
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

module.exports = sendServey;