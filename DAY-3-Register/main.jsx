var Btn = React.createClass({
	render: function() {
		return (
			<div className="btn" onClick={this.props.onClick}>
				<img src="done.png" />
			</div>
		);
	}
});

var FirstName = React.createClass({
	render: function() {
		return (
			<div className="first name">
				<div className="label">First Name</div>
				<input id="firstName" type="text" placeholder="Your first name" onChange={this.props.onChange} />
			</div>
		);
	}
})

var LastName = React.createClass({
	render: function() {
		return (
			<div className="last name">
				<div className="label">Last Name</div>
				<input id="lastName" type="text" placeholder="Your last name" onChange={this.props.onChange} />
			</div>
		);
	}
})

var NameRow = React.createClass({
	render: function() {
		return (
			<div className="row">
				<FirstName onChange={this.props.onChange} />
				<LastName onChange={this.props.onChange} />
			</div>
		);
	}
});

var EmailRow = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="email">
					<div className="label">E-mail</div>
					<input id="email" type="text" placeholder="E-mail address" onChange={this.props.onChange} />
				</div>
			</div>
		);
	}
});

// All in this
var WelcomeMyForm = React.createClass({
	getInitialState: function() {
		return { first: '', last: '', email: '' };
	},
	handelNameChange: function(e) {
		var target = e.target;
		if( target.id == "firstName" )
			this.setState({ first: target.value });
		else
			this.setState({ last: target.value });
	},
	handleEmailChange: function(e) {
		this.setState({ email: e.target.value });
	},
	BtnClick: function() {
		var msg = "TO BACKEND: \nFIRSTNAME: "+this.state.first+"\nLASTNAME: "+this.state.last+"\nEMAIL: "+this.state.email;
		alert(msg);
	},
	render: function() {
		return (
			<div className="myForm">
				<NameRow onChange={this.handelNameChange}/>
				<EmailRow onChange={this.handleEmailChange}/>
				<Btn onClick={this.BtnClick}/>
			</div>
		);
	}
});

ReactDOM.render(
	<WelcomeMyForm />, document.getElementById('container')
);