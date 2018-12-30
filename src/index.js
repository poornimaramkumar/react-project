import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
import App from "./components/App.js";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById("root")
);