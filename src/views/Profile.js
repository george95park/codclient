import React from "react";
import { Spinner } from "react-bootstrap";
import Loadout from "../components/loadout/Loadout";
import CreateLoadout from "../components/loadout/CreateLoadout";
import DeleteLoadout from "../components/loadout/DeleteLoadout";
import UpdateLoadout from "../components/loadout/UpdateLoadout";
import { connect } from "react-redux";
import { getLoadouts, deleteLoadout } from "../actions/loadoutsActions";
import { clearFormValues } from "../actions/formActions";
import { logout } from "../actions/authActions";

class Profile extends React.Component {
    componentDidMount() {
        this.props.getLoadouts(this.props.user_id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.new_loadout !== prevProps.new_loadout) {
            this.props.getLoadouts(this.props.user_id);
        }
    }

    logout = () => {
        // 'delete' session cookie
        this.props.logout();
        this.props.history.push("/");
    }
    radioLoadouts = () => {
        if (this.props.loading) {
            return <Spinner animation="border" variant="light" />;
        }
        if (this.props.loadouts_list.length === 0) {
            return <p style={{fontStyle: "italic", fontSize: "10px"}}>No current loadouts for this user.</p>
        }
        return (
            this.props.loadouts_list.map((item, index) => {
                return (
                    <div key={item.loadout_id}>
                        <div className="loadout-div">
                            <Loadout
                                type={item.type}
                                gun={item.gun}
                                attachments={item.attachments}
                                subattachments={item.subattachments}
                                description={item.description}
                            />
                        </div>
                        <div className="loadout-edit-update">
                            <DeleteLoadout
                                loadout_id={item.loadout_id}
                                index={index}
                                loadouts_list={this.props.loadouts_list}
                                deleteLoadout={this.props.deleteLoadout}/>
                            <UpdateLoadout
                                loadout_id={item.loadout_id}
                                user_id={item.user_id}
                                index={index}
                                loadouts_list={this.props.loadouts_list}
                                clearFormValues={this.props.clearFormValues}/>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return(
            <div className="class-container">
                <div className="header">
                    <button className="header-buttons" onClick={() => this.props.history.push("/")}>Home</button>
                    <button className="header-buttons" onClick={() => this.logout()}>Logout</button>
                </div>
            <CreateLoadout
                user_id={this.props.user_id}
                loadouts_list={this.props.loadouts_list}
                clearFormValues={this.props.clearFormValues}
                type="Create New Loadout"
                />
            {this.radioLoadouts()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loadouts_list: state.loadouts.loadouts_list,
    new_loadout: state.loadouts.new_loadout,
    loading: state.loadouts.loading,
});

export default connect(mapStateToProps, { clearFormValues, getLoadouts, deleteLoadout, logout })(Profile);
