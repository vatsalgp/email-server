import React from "react";
import { connect } from "react-redux";

import FIELDS from "./formFields";
import { submitSurvey } from "../../actions";

const SurveyFormReview = ({ onCancel, values, submitSurvey }) => {
    const renderFields = () => (
        FIELDS.map(({ name, label }) => (
            <div key={name}>
                <label>{label}</label>
                <div>{values[name]}</div>
            </div>
        )));
    return (
        <div>
            <h5>Please Confirm your entries</h5>
            <div>{renderFields()}</div>
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel} >
                Back
            </button>
            <button className="green btn-flat right white-text" onClick={() => submitSurvey(values)} >
                Send Survey
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        values: state.form.surveyForm.values
    };
};

export default connect(mapStateToProps, { submitSurvey })(SurveyFormReview);