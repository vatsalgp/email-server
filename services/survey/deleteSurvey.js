const { Survey } = require("../../models/Survey");

const deleteSurvey = async (req, res) => {
	try {
		const survey = await Survey.findByIdAndDelete(req.params.id);
		res.send(survey);
	} catch (error) {
		res.send(error);
	}
};

module.exports = deleteSurvey;
