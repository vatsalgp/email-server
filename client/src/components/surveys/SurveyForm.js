import React from "react";
import { reduxForm, Field } from "redux-form";

import SurveyField from "./SurveyField";

const SurveyForm = () => {
    return (
        <div>
            SurveyForm
            <SurveyField />
        </div>
    );
};

export default reduxForm({ form: "form" })(SurveyForm);