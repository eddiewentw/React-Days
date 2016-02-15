"use strict";

var Unit = React.createClass({
	displayName: "Unit",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "unit" },
			React.createElement(
				"span",
				{ className: "usd money" },
				"1"
			),
			" = ",
			React.createElement(
				"span",
				{ className: "twd money" },
				this.props.rate
			)
		);
	}
});

var InputBox = React.createClass({
	displayName: "InputBox",

	getInitialState: function getInitialState() {
		return { usd: '', twd: '' };
	},
	roundDollars: function roundDollars(dollar) {
		return Math.round(dollar * 100) / 100;
	},
	changeDollars: function changeDollars(e) {
		var target = e.target;
		if (target.id == "usd") this.setState({ usd: target.value, twd: this.roundDollars(target.value * this.props.rate) });else this.setState({ usd: this.roundDollars(target.value / this.props.rate), twd: target.value });
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "wrapper" },
			React.createElement("input", { id: "usd", type: "text", placeholder: "USD", value: this.state.usd, onChange: this.changeDollars }),
			React.createElement(
				"div",
				{ className: "mark" },
				React.createElement("img", { src: "compare_arrows.png" })
			),
			React.createElement("input", { id: "twd", type: "text", placeholder: "TWD", value: this.state.twd, onChange: this.changeDollars })
		);
	}
});

// All in this
var Exchanger = React.createClass({
	displayName: "Exchanger",

	getInitialState: function getInitialState() {
		return { rate: '' };
	},
	componentDidMount: function componentDidMount() {
		$.getJSON(this.props.url, function (data) {
			this.setState({ rate: data.query.results.rate.Rate });
		}.bind(this));
	},
	render: function render() {
		return React.createElement(
			"div",
			{ id: "exchanger" },
			React.createElement(Unit, { rate: this.state.rate }),
			React.createElement(InputBox, { rate: this.state.rate })
		);
	}
});

ReactDOM.render(React.createElement(Exchanger, { url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDTWD%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys" }), document.getElementById('container'));