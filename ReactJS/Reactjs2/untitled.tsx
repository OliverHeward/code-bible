import React from "react";
import ReactDOM from "react-dom";

export class Subscribe extends React.Document {
	
	constructor(props) {
		super(props);
		this.state = { onClick: };
		this.handleClick = this.handleClick.bind(this);
		this.onClick = this.onClick.bind(this);

	}

	handleClick() = {
		const youtube = this.state.onClick;
	}

	changeMessage(newMessage) {
		this.setState({
			message: newMessage;
		})
	}

	render() {
		return (
			<div onClick={this.handleClick} href="https://www.youtube.com/" />
			)
	}
};