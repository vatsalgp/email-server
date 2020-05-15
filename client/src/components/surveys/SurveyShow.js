import React from "react";
import { connect } from "react-redux";
import { fetchSurvey, deleteSurvey } from "../../actions";
import FIELDS from "./formFields";
import history from "../../history";

class SurveyShow extends React.Component {
	state = { survey: {} };

	clickedOnDelete = false;

	componentDidMount() {
		const survey = this.props.surveys.find((survey) => survey._id === this.props.match.params.id);
		if (survey) this.setState({ survey });
		else this.props.fetchSurvey(this.props.match.params.id);
	}
	componentDidUpdate() {
		if (!this.state.survey._id) {
			const survey = this.props.surveys.find((survey) => survey._id === this.props.match.params.id);
			if (survey) this.setState({ survey });
		}
	}
	renderFields = () =>
		FIELDS.map(({ name, label }) => {
			if (name === "recipients") return <div key="" />;
			else
				return (
					<div key={name}>
						<label>{label}</label>
						<div>{this.state.survey[name]}</div>
					</div>
				);
		});
	renderBar = (progress) => (
		<div className="progress" style={{ height: "20px" }}>
			<div className="determinate" style={{ width: `${progress}%`, height: "200%" }} />
		</div>
	);
	renderExtraFields() {
		const { lastResponded, yes, no } = this.state.survey;
		let y = 50,
			n = 50;

		if (yes !== no) {
			y = Math.floor(98 * yes / (yes + no)) + 1;
			n = Math.floor(98 * no / (yes + no)) + 1;
		}
		return (
			<div>
				<div>
					<label>Sent On:</label>
					<div>{new Date(this.state.survey.dateSent).toLocaleDateString()}</div>
				</div>
				<div>
					<label>Last Responded On:</label>
					<div>{lastResponded ? new Date(lastResponded).toLocaleDateString() : "Never"}</div>
				</div>
				<div>
					<label>Yes:</label>
					{this.renderBar(y)}
				</div>
				<div>
					<label>No:</label>
					{this.renderBar(n)}
				</div>
			</div>
		);
	}
	onBack() {
		history.push("/surveys");
	}
	onDelete = () => {
		if (!this.clickedOnDelete) {
			this.clickedOnDelete = true;
			this.props.deleteSurvey(this.state.survey._id);
		}
	};
	render() {
		return (
			<div>
				<div>{this.renderFields()}</div>
				<div>{this.renderExtraFields()}</div>
				<button className="yellow darken-3 white-text btn-flat" onClick={this.onBack}>
					Back
				</button>
				<button className="red btn-flat right white-text" onClick={this.onDelete}>
					Delete
				</button>
			</div>
		);
	}
}

export default connect(({ surveys }) => ({ surveys }), { fetchSurvey, deleteSurvey })(SurveyShow);
