import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends React.Component {

    renderSignedIn() {
        return (
            <>
                <li>
                    <Payments />
                </li>
                <li style={{ margin: "0 10px" }}>
                    Credits: {this.props.auth.credits}
                </li>
                <li>
                    <a href="/api/logout">Log Out</a>
                </li>
            </>
        );
    }

    renderContent() {
        switch (this.props.auth.isSignedIn) {
            case null:
                return <li></li>;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return this.renderSignedIn();
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/surveys" className="left brand-logo">Emaily</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default connect(({ auth }) => ({ auth }))(Header);