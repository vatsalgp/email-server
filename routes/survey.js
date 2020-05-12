const requireLogin = require("../middlewares/requireLogin");
const createSurvey = require("../services/survey/createSurvey");
const surveyInput = require("../services/survey/surveyInput")

module.exports = app => {
    app.post("/api/webhooks", surveyInput);
    app.get("/api/thankyou", (req, res) => res.send("Thanks for voting !"));
    app.post("/api/surveys", requireLogin, createSurvey);
};