import React from "react";

const SurveyField = ({ input, input: { name }, meta, type, label }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input
            {...input}
            id={name}
            type={type}
        />
    </div>
);

export default SurveyField;