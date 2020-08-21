import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/configureStore";
import { authUser } from "./actions/authActions";
import Root from './containers/Root';

const target = document.getElementById("root");
store.dispatch(authUser());
const node = (
    <Root store={store} />
)
ReactDOM.render(node, target);
