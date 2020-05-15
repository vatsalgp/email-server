import React from 'react';
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import SurveyShow from "./surveys/SurveyShow";
import { fetchUser } from "../actions"

class App extends React.Component {

	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<Router history={history}>
				<div>
					<Header />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/surveys" component={Dashboard} />
							<Route exact path="/surveys/new" component={SurveyNew} />
							<Route exact path="/surveys/:id" component={SurveyShow} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default connect(null, { fetchUser })(App);