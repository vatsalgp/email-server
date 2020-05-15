const requireLogin = require("../middlewares/requireLogin");
const createSurvey = require("../services/survey/createSurvey");
const surveyInput = require("../services/survey/surveyInput");
const getSurveys = require("../services/survey/getSurveys");
const getSurvey = require("../services/survey/getSurvey");
const deleteSurvey = require("../services/survey/deleteSurvey");

module.exports = (app) => {
	app.post("/api/webhooks", surveyInput);
	app.get("/api/thankyou/:id/:ans", (req, res) => res.send("Thanks for voting !"));
	app.post("/api/surveys", requireLogin, createSurvey);
	app.get("/api/surveys", requireLogin, getSurveys);
	app.get("/api/surveys/:id", requireLogin, getSurvey);
	app.patch("/api/surveys/:id", requireLogin, deleteSurvey);
};
