"use strict";

var Time = React.createClass({
	displayName: "Time",

	timeFormat: function timeFormat(t) {
		return t < 10 ? "0" + t : t;
	},
	render: function render() {
		return React.createElement(
			"div",
			{ id: "now", className: "animated infinite" },
			this.timeFormat(this.props.min),
			"  :  ",
			this.timeFormat(this.props.sec)
		);
	}
});

var countTimer;
var options = [];
for (var i = 0; i < 60; i++) {
	options.push(React.createElement(
		"option",
		{ value: i },
		i
	));
}

var Minutes = React.createClass({
	displayName: "Minutes",

	render: function render() {
		return React.createElement(
			"select",
			{ id: "min", className: "form-control", onChange: this.props.onChange },
			options
		);
	}
});

var Seconds = React.createClass({
	displayName: "Seconds",

	render: function render() {
		return React.createElement(
			"select",
			{ id: "sec", className: "form-control", onChange: this.props.onChange },
			options
		);
	}
});

var Card = React.createClass({
	displayName: "Card",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "card", className: "animated" },
			React.createElement(
				"div",
				{ className: "title" },
				"SET TIMER"
			),
			React.createElement(
				"h5",
				null,
				"MINUTES:"
			),
			React.createElement(Minutes, { onChange: this.props.onMinutesChange }),
			React.createElement(
				"h5",
				null,
				"SECONDS:"
			),
			React.createElement(Seconds, { onChange: this.props.onSecondsChange }),
			React.createElement(
				"div",
				{ className: "btn", onClick: this.props.timerStart },
				"GO"
			)
		);
	}
});

var Timer = React.createClass({
	displayName: "Timer",

	getInitialState: function getInitialState() {
		return { minutes: 0, seconds: 0, total: 0 };
	},
	handleMinutesChange: function handleMinutesChange(e) {
		this.setState({ minutes: e.target.value });
	},
	handleSecondsChange: function handleSecondsChange(e) {
		this.setState({ seconds: e.target.value });
	},
	startTimer: function startTimer() {
		if (this.state.minutes == 0 && this.state.seconds == 0) alert('請設定時間');else {
			this.setState({ total: parseInt(this.state.minutes * 60) + parseInt(this.state.seconds) });
			countTimer = setInterval(function () {
				var newTotal = this.state.total - 1;

				this.setState({
					minutes: Math.floor(newTotal / 60),
					seconds: newTotal % 60,
					total: this.state.total - 1
				});

				if (newTotal == 0) {
					clearInterval(countTimer);
					document.getElementById('now').className += ' shake';
					setInterval(function () {
						document.body.style.backgroundColor = '#F44336';
						document.title = "Time\'s up !!";
						setTimeout(function () {
							document.body.style.backgroundColor = 'white';
							document.title = "React Timer";
						}, 500);
					}, 1000);
				}
			}.bind(this), 1000);

			document.getElementById('card').className += ' fadeOutUp';
		}
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Time, { min: this.state.minutes, sec: this.state.seconds }),
			React.createElement(Card, { onMinutesChange: this.handleMinutesChange, onSecondsChange: this.handleSecondsChange, timerStart: this.startTimer })
		);
	}
});

ReactDOM.render(React.createElement(Timer, null), document.getElementById('container'));