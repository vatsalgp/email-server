import React from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends React.Component {
    render() {
        return (
            <div>
                <h1>New Survey</h1>
                <SurveyForm />
                <SurveyFormReview />
            </div>
        );
    }
}

export default SurveyNew;