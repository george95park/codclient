import React from "react";
import Search from "../components/search/Search";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import { filterUsers, setAllUsers } from "../actions/searchActions";

class Home extends React.Component {

    componentDidMount() {
        this.props.setAllUsers();
    }

    searchResults = () => {
        let result = this.props.search_list.length > 0 ? this.props.search_list : this.props.all_users;
        return (
            result.map(item => {
                return (
                    <div key={item.user_id}>
                    <button
                        className="user-buttons"
                        key={item.user_id}
                        onClick={() => this.props.history.push(item.user_id + "/" + item.username)}>
                        {item.username}
                    </button>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className="class-container">
                <div className="header">
                    <button
                        className="header-buttons"
                        style={{ display: this.props.logged_in ? "inline" : "none"}}
                        onClick={() => this.props.history.push("/profile")}>
                        Profile
                    </button>
                    <button
                        className="header-buttons"
                        style={{ display: this.props.logged_in ? "inline" : "none"}}
                        onClick={this.props.logout}>
                        Logout
                    </button>
                    <button
                        className="header-buttons"
                        style={{ display: this.props.logged_in ? "none" : "inline"}}
                        onClick={() => this.props.history.push("/credentials")}>
                        Login/Signup
                    </button>
                </div>
                <h1 className="welcome-sign">Welcome {this.props.username}!</h1>
                <Search history={this.props.history} all_users={this.props.all_users} filterUsers={this.props.filterUsers}/>
                <div style={{height: "500px", overflowY: "auto"}}>
                {this.searchResults()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    search_list: state.search.search_list,
    all_users: state.search.all_users,
});

// connect is a HOC (Higher Order Function), which means it returns
// a function when you call it. This returns a new (wrapped) component
export default connect(mapStateToProps, { logout, filterUsers, setAllUsers })(Home);
