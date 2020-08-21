import React from "react";

class StepAttachments extends React.Component {
    constructor() {
        super();
        this.state = {
            description: "",
            descLen: 0,
            attLength: 0,
        }
    }
    clearRadioButtons = () => {
        document.querySelectorAll("#radio_button").forEach(item => {
            item.checked = false;
            item.disabled = false;
        });
        this.props.clearAttachments();
        this.setState({ attLength: 0 });
    }
    handleChange = (att, subatt) => {
        let clone = Object.assign({}, this.props.form_attachments);
        clone[att] = subatt;
        this.props.updateAttachments(clone);
        this.setState({ attLength: Object.keys(clone).length });
        if (Object.keys(clone).length === 5) {
            document.querySelectorAll("#radio_button").forEach(item => {
                item.disabled = true;
            });
        }
    }
    handleDescriptionChange = e => {
        this.setState({ [e.target.name]: e.target.value,  descLen: e.target.value.length });
        this.props.updateDescription(e.target.value);
    }
    radioAttachments = () => {
        return (
        this.props.attachments.map(item => {
            return (
            <div key={item.attachment_id}>
                <h4>{item.name}</h4>
                {
                item.subattachments.map(item2 => {
                    return (
                    <div key={item2}>
                        <label>
                            <input
                            type="radio"
                            id="radio_button"
                            value={item2}
                            name={item.name}
                            onChange={() => this.handleChange(item.name, item2)}
                            />
                        {item2}
                        </label>
                    </div>
                    )
                })
                }
            </div>
            )
        })
        )
    }
    render() {
        return (
            <div>
            <h5>Choose your attachments (5 max):</h5>
            {this.radioAttachments()}
            <div>
                <button onClick={this.clearRadioButtons}>Clear All</button>
            </div>
            <p style={{paddingTop: "5px", fontStyle: "italic", fontSize: "15px", color: "blue"}}>{this.state.attLength} selected out of 5.</p>
            <label>
            Give your loadout a description. Ex: Fast paced, slow paced, etc.
            <textarea
                rows="4"
                cols="55"
                maxLength="100"
                name="description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                />
            <p>{this.state.descLen}/100</p>
            </label>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <button onClick={this.props.submitLoadout}>Submit</button>
                <button onClick={this.props.prevStep}>Previous</button>
            </div>
            </div>
        )
    }
}

export default StepAttachments;
