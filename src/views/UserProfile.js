import React from "react";
import { Spinner } from "react-bootstrap";
import Loadout from "../components/loadout/Loadout";
import { connect } from "react-redux";
import { getLoadouts } from "../actions/loadoutsActions";

class UserProfile extends React.Component {
    componentDidMount() {
        this.props.getLoadouts(this.props.match.params.user_id);
    }
    radioLoadouts = () => {
        if (this.props.loading) {
            return <Spinner animation="border" variant="light" />;
        }
        if (this.props.loadouts_list.length === 0) {
            return <p style={{fontStyle: "italic", fontSize: "10px"}}>No current loadouts for this user.</p>
        }
        return (
            this.props.loadouts_list.map(item => {
                return (
                    <div key={item.loadout_id} className="user-loadout-div">
                    <Loadout
                        type={item.type}
                        gun={item.gun}
                        attachments={item.attachments}
                        subattachments={item.subattachments}
                        description={item.description}
                    />
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className="class-container">
                <div className="header">
                <button className="header-buttons" onClick={() => this.props.history.push("/")}>Home</button>
                </div>
            <h1>{this.props.match.params.username}</h1>
            {this.radioLoadouts()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loadouts_list: state.loadouts.loadouts_list,
    loading: state.loadouts.loading
});

export default connect(mapStateToProps, { getLoadouts })(UserProfile);
