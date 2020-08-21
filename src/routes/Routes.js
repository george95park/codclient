import React from "react";
import Home from "../views/Home";
import Credentials from "../views/Credentials";
import Profile from "../views/Profile";
import UserProfile from "../views/UserProfile";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                exact
                path={"/"}
                render={props => (
                    <Home
                        {...props}
                        username={this.props.username}
                        logged_in={this.props.logged_in}
                        user_id={this.props.user_id}/>
                )}
                />
                <Route
                exact
                path={"/profile"}
                render={props => this.props.logged_in ?
                    <Profile {...props} user_id={this.props.user_id} /> :
                    <Redirect to="/" />
                }
                />
                <Route
                exact
                path={"/credentials"}
                render={props => !this.props.logged_in ?
                    <Credentials {...props} /> :
                    <Redirect to="/" />
                }
                />
                <Route
                exact
                path={"/:user_id/:username"}
                render={props => (
                    <UserProfile {...props} />
                )}
                />
            </Switch>
        )
    }
}


const mapStateToProps = state => ({
    username: state.auth.user.username,
    user_id: state.auth.user.user_id,
    logged_in: state.auth.user.logged_in,
});

export default connect(mapStateToProps, null)(Routes);
