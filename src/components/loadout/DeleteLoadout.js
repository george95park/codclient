import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteLoadout extends React.Component {
    render() {
        return (
            <IconButton
                color="inherit"
                onClick={() => this.props.deleteLoadout(this.props.loadout_id, this.props.loadouts_list, this.props.index)}
            >
                <DeleteIcon />
            </IconButton>
        )
    }
}
export default DeleteLoadout;
