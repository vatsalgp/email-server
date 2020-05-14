import React from "react";
import { reduxForm } from "redux-form";

import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends React.Component {
    state = { showReview: false };

    render() {
        if (this.state.showReview)
            return <SurveyFormReview onCancel={() => this.setState({ showReview: false })} />
        else
            return <SurveyForm onSubmit={() => this.setState({ showReview: true })} />
    }
}

//Don't retain values 
export default reduxForm({ form: "surveyForm" })(SurveyNew);