import React, { Component } from "react";
import { Button } from "react-bootstrap";

 import '../styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.edit = this.edit.bind(this);
		this.save = this.save.bind(this);
		this.state = {
			editing : false
		};
	}

	edit() {
		this.setState({editing: true});
	}

	save() {
		this.setState({editing: false});
	}

	remove() {
		alert("Removing the note");
	}

	// renderForm() {
	// 	return(
	// 		<div className="note">
	// 			<textarea></textarea>
	// 			<Button onClick={this.save}>SAVE</Button>
	// 		</div>
	// 	)
	// }

	// renderDisplay() {
	// 	return (
	// 		<div className="note">
	// 			<p>{this.props.children}</p>
	// 			<span>
	// 				<Button onClick={this.edit}>Edit</Button>
	// 				<Button onClick={this.remove}>X</Button>
	// 			</span>
	// 		</div>
	// 	)
	// }

	render() {
		return (
			<div>
				<div className="note" id="#mynote">
					<p>
						Hello World
					</p>
					<Button
						className="pull-right edit-btn"
						bsStyle="info"
						onClick={this.edit}
					>
						Edit
					</Button>
					<Button
						className="pull-left remove-btn"
						bsStyle="danger"
						onClick={this.remove}
					>
						X
					</Button>
				</div>
			</div>
		)

	}
}

export default App;
