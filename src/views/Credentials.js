import React from "react";
import Registration from "../components/auth/Registration";
import Login from "../components/auth/Login";
import { login, signup } from "../actions/authActions";
import { connect } from "react-redux";

class Credentials extends React.Component {
    render() {
        return (
            <div className="class-container">
                <div className="header">
                    <button className="header-buttons" onClick={() => this.props.history.push("/")}>Home</button>
                </div>
                <h2>Please Login or Register</h2>
                <div className="auth-div">
                    <p style={{fontSize: "15px"}}>* We suggest using your Call Of Duty gamertag for the username.</p>
                    <Login login={this.props.login} history={this.props.history} />
                    <Registration signup={this.props.signup} history={this.props.history}/>
                </div>
                <p style={{color: "red", fontSize: "15px", fontStyle: "italic"}}>{this.props.error.message}</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    error: state.auth.error,
});

export default connect(mapStateToProps, { login, signup })(Credentials);
