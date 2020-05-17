const { Path } = require("path-parser");
const { URL } = require("url");
const { Survey } = require("../../models/Survey");

module.exports = (req, res) => {
	res.send("");
	let events;
	events = req.body.filter(({ event }) => event === "click");
	events = events.map(({ email, url }) => {
		const { pathname } = new URL(url);
		const p = new Path("/api/thankyou/:surveyId/:response");
		const match = p.test(pathname);
		if (match) return { ...match, email };
		else return false;
	});
	events = events.filter(event => event);
	events.forEach(({ email, surveyId, response }) => {
		const find = {
			_id        : surveyId,
			recipients : { $elemMatch: { email, responded: false } }
		};
		const update = {
			$inc : { [response]: 1 },
			$set : { "recipients.$.responded": true, lastResponded: Date.now() }
		};
		Survey.updateOne(find, update).exec();
	});
};
