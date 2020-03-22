import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {

    renderSignedIn() {
        return (
            <a href="/api/logout">Log Out</a>
        );
    }

    renderContent() {
        switch (this.props.auth) {
            case null: return;
            case false: return <a href="/auth/google">Login with Google</a>;
            default: return this.renderSignedIn();
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="left brand-logo">Emaily</Link>
                    <ul className="right">
                        <li>
                            {this.renderContent()}
                        </li>
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