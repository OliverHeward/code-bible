import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
	myFunc() {
		alert('Yeah Im good, you?.');
	}

	render() {
		return <button onClick={this.myFunc}>Click me to find out</button>;
	}
}

ReactDOM.render(
	<Button />
	document.getElementById('app'));