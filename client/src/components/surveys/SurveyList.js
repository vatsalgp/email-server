import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends React.Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }
    renderSurveys = () => this.props.surveys.reverse().map(survey => (
        <div className="card darken-1" key={survey._id} >
            <div className="card-content">
                <Link to={`/surveys/${survey._id}`} className="card-title">{survey.title}</Link>
                <p>{survey.body}</p>
                <p className="right">
                    Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                </p>
            </div>
            <div className="card-action">
                <a href="/#">Yes: {survey.yes}</a>
                <a href="/#">No: {survey.no}</a>
            </div>
        </div>
    ));
    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

export default connect(({ surveys }) => ({ surveys }), { fetchSurveys })(SurveyList)