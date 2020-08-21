import React from "react";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            password_confirmation: ""
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        this.props.signup(this.state, this.props.history);
        event.preventDefault();
    }
    render() {
        return (
            <form className="auth-form" onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                value={this.state.username}
                onChange={this.handleChange}
                className="auth-input"
                required/>
                <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={this.state.password}
                onChange={this.handleChange}
                className="auth-input"
                required/>
                <input
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                autoComplete="off"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                className="auth-input"
                required/>
                <div>
                <button className="user-buttons" type="submit">Register</button>
                </div>
            </form>
        )
    }
}

export default Registration;
