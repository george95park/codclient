import React from "react";
import StepType from "./StepType";
import StepGun from "./StepGun";
import StepAttachments from "./StepAttachments";
import { connect } from "react-redux";
import { createLoadout, updateLoadout } from "../../actions/loadoutsActions";
import {
    updateFormType,
    updateFormGun,
    updateAttachments,
    updateDescription,
    clearAttachments
} from "../../actions/formActions";

class CreateLoadoutForm extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1
        }
    }
    createRequest = (a, s) => {
        const data = {
            attachments: a,
            subattachments: s,
            user_id: this.props.user_id,
            type: this.props.form_values.form_type,
            gun: this.props.form_values.form_gun.name,
            description: this.props.form_values.form_description
        }
        this.props.createLoadout(data, this.props.loadouts_list);
        this.props.handleClose();
    }
    updateRequest = (a,s) => {
        const data = {
            loadout_id: this.props.loadout_id,
            attachments: a,
            subattachments: s,
            user_id: this.props.user_id,
            type: this.props.form_values.form_type,
            gun: this.props.form_values.form_gun.name,
            description: this.props.form_values.form_description
        }
        this.props.updateLoadout(data, this.props.loadouts_list, this.props.index);
        this.props.handleClose();
    }
    submitLoadout = () => {
        let attachments = [];
        let subattachments = [];
        for (let [key,value] of Object.entries(this.props.form_values.form_attachments)) {
            attachments.push(key);
            subattachments.push(value);
        }
        if (this.props.loadout_id) {
            this.updateRequest(attachments, subattachments);
        } else {
            this.createRequest(attachments, subattachments);
        }
    }
    nextStep = () => {
        this.setState({ step: this.state.step + 1 });
    }
    prevStep = () => {
        this.setState({ step: this.state.step - 1 });
    }
    render() {
        switch (this.state.step) {
            case 1:
                return (
                    <StepType
                    updateFormType={this.props.updateFormType}
                    nextStep={this.nextStep}/>
                );
            case 2:
                return (
                    <StepGun
                    guns={this.props.guns}
                    updateFormGun={this.props.updateFormGun}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />
                );
            case 3:
                return (
                    <StepAttachments
                    submitLoadout={this.submitLoadout}
                    prevStep={this.prevStep}
                    attachments={this.props.attachments}
                    form_attachments={this.props.form_values.form_attachments}
                    updateAttachments={this.props.updateAttachments}
                    updateDescription={this.props.updateDescription}
                    clearAttachments={this.props.clearAttachments}
                    />
                )
            default:
                console.log("create loadout form");
        }
    }
}

const mapStateToProps = state => ({
    guns: state.form.guns,
    attachments: state.form.attachments,
    form_values: state.form.form_values
})

export default connect(mapStateToProps, {
    createLoadout,
    updateLoadout,
    updateFormType,
    updateFormGun,
    updateAttachments,
    updateDescription,
    clearAttachments
})(CreateLoadoutForm);
