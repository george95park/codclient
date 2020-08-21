import React from "react";
import { Provider } from "react-redux";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

class Root extends React.Component {
    render() {
        return (
            <div>
                <Provider store={this.props.store}>
                <App />
                </Provider>
            </div>
        )
    }
}
export default Root;
