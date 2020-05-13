import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

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

//Ran on every Submit
const validate = ({ title, subject, body, emails }) => {
    const errors = {};

    if (!title) {
        errors.title = "You must provide a title";
    }
    if (!subject) {
        errors.subject = "You must provide a subject";
    }
    if (!body) {
        errors.body = "You must provide a body";
    }

    errors.emails = validateEmails(emails);

    return errors;
};

export default reduxForm({ form: "surveyForm", validate })(SurveyForm);