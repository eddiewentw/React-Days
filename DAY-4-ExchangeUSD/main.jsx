var Unit = React.createClass({
	render: function() {
		return (
			<div className="unit">
				<span className="usd money">1</span> = <span className="twd money">{this.props.rate}</span>
			</div>
		);
	}
});

var InputBox = React.createClass({
	getInitialState: function() {
		return { usd: '', twd: '' };
	},
	roundDollars: function(dollar) {
		return Math.round(dollar*100)/100;
	},
	changeDollars: function(e) {
		var target = e.target;
		if( target.id == "usd" )
			this.setState({ usd: target.value, twd: this.roundDollars(target.value*this.props.rate) });
		else
			this.setState({ usd: this.roundDollars(target.value/this.props.rate), twd: target.value });
	},
	render: function() {
		return (
			<div className="wrapper">
				<input id="usd" type="text" placeholder="USD" value={this.state.usd} onChange={this.changeDollars} />
				<div className="mark">
					<img src="compare_arrows.png" />
				</div>
				<input id="twd" type="text" placeholder="TWD" value={this.state.twd} onChange={this.changeDollars} />
			</div>
		);
	}
});

// All in this
var Exchanger = React.createClass({
	getInitialState: function() {
		return { rate: '' };
	},
	componentDidMount: function() {
		$.getJSON( this.props.url, function(data) {
			this.setState({ rate: data.query.results.rate.Rate });
		}.bind(this));
	},
	render: function() {
		return (
			<div id="exchanger">
				<Unit rate={this.state.rate} />
				<InputBox rate={this.state.rate} />
			</div>
		);
	}
});

ReactDOM.render(
	<Exchanger url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDTWD%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys" />, document.getElementById('container')
);