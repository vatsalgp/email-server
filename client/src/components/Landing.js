import React from "react";
import { connect } from "react-redux";

import history from "../history";

class Landing extends React.Component {
	checkSignedIn() {
		if (this.props.isSignedIn) history.push("/surveys");
	}
	componentDidMount() {
		this.checkSignedIn();
	}
	componentDidUpdate() {
		this.checkSignedIn();
	}
	render = () => (
		<div style={{ textAlign: "center" }}>
			<h1>Emaily</h1>
			Collect feedback from users
		</div>
	);
}

const mapStateToProps = (state) => ({ isSignedIn: state.auth.isSignedIn });
export default connect(mapStateToProps)(Landing);
