const sendSurvey = require("./sendSurvey");
const { Survey } = require("../../models/Survey");

const createSurvey = async (req, res) => {
	try {
		let { title, body, subject, recipients } = req.body;
		recipients = recipients.split(",").map((email) => email.trim());
		if (req.user.credits < recipients.length) {
			res.status(422).send("Insufficient amount of credits");
		} else {
			const survey = new Survey({
				title,
				body,
				subject,
				_user: req.user.id,
				dateSent: Date.now(),
				recipients: recipients.map((email) => ({ email }))
			});
			const { id } = survey;
			const response = await sendSurvey({ body, subject, recipients, id });

			if (response) {
				survey.save();
				req.user.credits -= recipients.length;
				const user = await req.user.save();
				res.send(user);
			} else {
				res.status(422).send("Unable to send emails");
			}
		}
	} catch (error) {
		res.status(422).send(error);
		console.log(error);
	}
};

module.exports = createSurvey;
