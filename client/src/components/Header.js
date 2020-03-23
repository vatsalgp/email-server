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
        switch (this.props.auth) {
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
                    <Link to="/" className="left brand-logo">Emaily</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Header);