import React from "react";
const types = [
    "Assault_Rifle",
    "Submachine_Gun",
    "Sniper_Rifle",
    "Handgun",
    "Shotgun",
    "Marksman_Rifle",
    "Light_Machine_Gun"
];

class StepType extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false,
            error: ""
        }
    }
    handleChange = item => {
        this.setState({ selected: true });
        this.props.updateFormType(item);
    }
    handleNext = () => {
        if (this.state.selected) {
            this.props.nextStep();
        }
        else {
            this.setState({ error: "Must make a selection before proceeding." });
        }
    }
    radioTypes = () => {
        return (
            types.map(item => {
                return (
                    <div key={item}>
                    <label>
                    <input type="radio" name="type" value={item} onChange={() => this.handleChange(item)} />
                    {item.replace(/_/g, " ")}
                    </label>
                    </div>
                )
            })
        )
    }
    render() {
        return (
            <div>
                <h5>Choose a category:</h5>
                    {this.radioTypes()}
                <div>
                    <button onClick={this.handleNext}>Next</button>
                </div>
                <p style={{color: "red", fontSize: "15px", fontStyle: "italic"}}>{this.state.error}</p>
            </div>
        )
    }
}
export default StepType;
