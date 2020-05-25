import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends React.Component {

    renderLogo() {
        const link = this.props.auth.isSignedIn ? "/surveys" : "/";
        return (< Link to={link} className="left brand-logo" > Emaily</Link >);
    }

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
                    <a style={{ margin: "0", marginRight: "5px" }} className="btn" href="/api/logout">Log Out</a>
                </li>
            </>
        );
    }

    renderContent() {
        switch (this.props.auth.isSignedIn) {
            case null:
                return <li></li>;
            case false:
                return <li><a className="btn red" href="/auth/google">Login with Google</a></li>;
            default:
                return this.renderSignedIn();
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    {this.renderLogo()}
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default connect(({ auth }) => ({ auth }))(Header);
