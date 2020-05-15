import React from "react";

const SurveyField = ({ input, meta: { error, touched }, type, label, placeholder }) => {
	let textErr = "",
		inputErr = {};
	if (error && touched) {
		textErr = "red-text";
		inputErr = { borderBottom: "1px solid red", boxShadow: "0 1px 0 0 red" };
	}
	return (
		<div>
			<label htmlFor={input.name} className={"active"}>
				<div className={textErr}>{label}</div>
			</label>
			<input {...input} id={input.name} type={type} style={inputErr} placeholder={placeholder} />
			<div className={textErr}>{touched ? error : ""}</div>
		</div>
	);
};

export default SurveyField;
