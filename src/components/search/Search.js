import React from "react";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.filterUsers(this.props.all_users, event.target.value);
    }

    render() {
        return (
            <div>
                <input
                style={{width: "40%", textAlign: "center", borderRadius: "10px"}}
                type="text"
                name="search"
                placeholder="Search for users"
                value={this.state.search}
                autoComplete="off"
                onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Search;
