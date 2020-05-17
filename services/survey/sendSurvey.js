const sgMail = require("@sendgrid/mail");
const keys = require("../../config/keys");
const surveyTemplate = require("../../emailTemplate/survey");

sgMail.setApiKey(keys.sendGridKey);

const sendServey = async ({ body, subject, recipients, id }) => {
	try {
		await sgMail.sendMultiple({
			subject,
			to      : recipients,
			from    : "Emaily Service <emaily.company@gmail.com>",
			html    : surveyTemplate(body, id)
		});
		return true;
	} catch (error) {
		return false;
	}
};

module.exports = sendServey;
