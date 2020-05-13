import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";

class SurveyForm extends React.Component {

    FIELDS = [
        { label: "Survey Title", name: "title" },
        { label: "Subject Line", name: "subject" },
        { label: "Email Body", name: "body" },
        { label: "Recipient List", name: "emails" },
    ]

    renderFields = () => this.FIELDS.map((field, i) => (
        <Field component={SurveyField} type="text" key={i} {...field} />
    ))

    handleSubmit(values) {
        console.log(values);
    }

    render = () => (
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            {this.renderFields()}
            <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link>
            <button type="submit" className="teal btn-flat right white-text">Next</button>
        </form>
    );
}

export default reduxForm({ form: "surveyForm" })(SurveyForm);