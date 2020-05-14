const { Survey } = require("../../models/Survey");

const getSurveys = async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({ recipients: false });
    res.send(surveys);
};

module.exports = getSurveys;