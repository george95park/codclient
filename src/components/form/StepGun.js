import React from "react";

class StepGun extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false,
            error: ""
        }
    }
    handleChange = item => {
        this.setState({ selected: true });
        this.props.updateFormGun(item);
    }
    handleNext = () => {
        if (this.state.selected) {
            this.props.nextStep();
        }
        else {
            this.setState({ error: "Must make a selection before proceeding." });
        }
    }
    radioGuns = () => {
        return (
            this.props.guns.map(item => {
                return (
                    <div key={item.gun_id}>
                        <label>
                        <input type="radio" name="gun_id" value={item.gun_id} onChange={() => this.handleChange(item)} />
                        {item.name}
                        </label>
                    </div>
                )
            })
        )
    }
    render() {
        return (
            <div>
            <h5>Choose your gun:</h5>
            {this.radioGuns()}
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <button onClick={this.handleNext}>Next</button>
                <button onClick={this.props.prevStep}>Previous</button>
            </div>
            <p style={{color: "red", fontSize: "15px", fontStyle: "italic"}}>{this.state.error}</p>
            </div>
        )
    }
}

export default StepGun;
