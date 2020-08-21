import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state, this.props.history);
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
                <div>
                <button className="user-buttons" type="submit">Login</button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = state => ({
    logged_in: state.auth.user.logged_in,
})

export default Login;
