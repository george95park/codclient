import React from "react";
import CreateLoadout from "./CreateLoadout";

class UpdateLoadout extends React.Component {
    render() {
        return (
            <CreateLoadout
                loadout_id={this.props.loadout_id}
                index={this.props.index}
                loadouts_list={this.props.loadouts_list}
                user_id={this.props.user_id}
                clearFormValues={this.props.clearFormValues}
                type="Edit"
                />
        )
    }
}

export default UpdateLoadout;
