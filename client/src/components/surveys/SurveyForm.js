import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import FIELDS from "./formFields";

class SurveyForm extends React.Component {
	renderFields = () => FIELDS.map((field, i) => <Field component={SurveyField} type="text" key={i} {...field} />);

	render = () => (
		<form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
			{this.renderFields()}
			<Link to="/surveys" className="red btn-flat left white-text">
				Cancel
			</Link>
			<button type="submit" className="teal btn-flat right white-text">
				Next
			</button>
		</form>
	);
}

//Ran on every Submit
const validate = ({ title, subject, body, recipients }) => {
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

	errors.recipients = validateEmails(recipients);

	return errors;
};

//Retain values
const reduxFormOptions = {
	validate,
	form: "surveyForm",
	destroyOnUnmount: false
};

export default reduxForm(reduxFormOptions)(SurveyForm);
