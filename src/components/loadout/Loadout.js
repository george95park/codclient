import React from "react";

class Loadout extends React.Component {
    render() {
        var count = 0;
        const attachments = this.props.attachments.map(item => {
            var str = item + " - " + this.props.subattachments[count];
            count += 1;
            return <li key={count}>{str}</li>
        })
        return(
            <div className="loadouts">
                <h2>{this.props.type.replace(/_/g, " ")}</h2>
                <h3 style={{borderTop: "1px solid", borderBottom: "1px solid"}}>{this.props.gun}</h3>
                <ul>
                {attachments}
                </ul>
                <p className="description">{this.props.description}</p>
            </div>
        )
    }
}
export default Loadout;
