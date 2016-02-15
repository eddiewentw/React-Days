"use strict";

var Btn = React.createClass({
	displayName: "Btn",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "btn", onClick: this.props.onClick },
			React.createElement("img", { src: "done.png" })
		);
	}
});

var FirstName = React.createClass({
	displayName: "FirstName",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "first name" },
			React.createElement(
				"div",
				{ className: "label" },
				"First Name"
			),
			React.createElement("input", { id: "firstName", type: "text", placeholder: "Your first name", onChange: this.props.onChange })
		);
	}
});

var LastName = React.createClass({
	displayName: "LastName",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "last name" },
			React.createElement(
				"div",
				{ className: "label" },
				"Last Name"
			),
			React.createElement("input", { id: "lastName", type: "text", placeholder: "Your last name", onChange: this.props.onChange })
		);
	}
});

var NameRow = React.createClass({
	displayName: "NameRow",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(FirstName, { onChange: this.props.onChange }),
			React.createElement(LastName, { onChange: this.props.onChange })
		);
	}
});

var EmailRow = React.createClass({
	displayName: "EmailRow",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "email" },
				React.createElement(
					"div",
					{ className: "label" },
					"E-mail"
				),
				React.createElement("input", { id: "email", type: "text", placeholder: "E-mail address", onChange: this.props.onChange })
			)
		);
	}
});

// All in this
var WelcomeMyForm = React.createClass({
	displayName: "WelcomeMyForm",

	getInitialState: function getInitialState() {
		return { first: '', last: '', email: '' };
	},
	handelNameChange: function handelNameChange(e) {
		var target = e.target;
		if (target.id == "firstName") this.setState({ first: target.value });else this.setState({ last: target.value });
	},
	handleEmailChange: function handleEmailChange(e) {
		this.setState({ email: e.target.value });
	},
	BtnClick: function BtnClick() {
		var msg = "TO BACKEND: \nFIRSTNAME: " + this.state.first + "\nLASTNAME: " + this.state.last + "\nEMAIL: " + this.state.email;
		alert(msg);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "myForm" },
			React.createElement(NameRow, { onChange: this.handelNameChange }),
			React.createElement(EmailRow, { onChange: this.handleEmailChange }),
			React.createElement(Btn, { onClick: this.BtnClick })
		);
	}
});

ReactDOM.render(React.createElement(WelcomeMyForm, null), document.getElementById('container'));