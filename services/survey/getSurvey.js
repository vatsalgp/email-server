const { Survey } = require("../../models/Survey");

const getSurvey = async (req, res) => {
	try {
		const { id } = req.params;
		const surveys = await Survey.find({ _user: req.user.id, _id: id }).select({ recipients: false });
		res.send(surveys[0]);
	} catch (error) {
		res.send(error);
	}
};

module.exports = getSurvey;
