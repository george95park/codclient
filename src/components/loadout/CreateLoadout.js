import React from "react";
import Modal from "react-bootstrap/Modal";
import CreateLoadoutForm from "../form/CreateLoadoutForm";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/AddCircleOutline';

class CreateLoadout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }
    handleOnClick = () => {
        this.setState({ showModal: true });
        this.props.clearFormValues();
    }

    render() {
        return (
            <div>
            {
                !this.props.loadout_id &&
                <IconButton
                    color="inherit"
                    onClick={this.handleOnClick}
                >
                    <AddIcon />
                </IconButton>
            }
            {
                this.props.loadout_id &&
                <IconButton
                    color="inherit"
                    onClick={this.handleOnClick}
                >
                    <EditIcon />
                </IconButton>
            }
            <Modal
            animation={false}
            show={this.state.showModal}
            onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.type}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CreateLoadoutForm
                    handleClose={this.handleClose}
                    user_id={this.props.user_id}
                    loadout_id={this.props.loadout_id}
                    index={this.props.index}
                    loadouts_list={this.props.loadouts_list}
                    />
                </Modal.Body>
            </Modal>
            </div>
        )
    }
}

export default CreateLoadout;
