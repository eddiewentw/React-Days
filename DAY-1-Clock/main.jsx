var Time = React.createClass({
	timeFormat: function(t) {
		return t < 10 ? "0"+t : t;
	},
	getNowTime: function() {
		var now = new Date();
		var hour = this.timeFormat( now.getHours() );
		var min = this.timeFormat( now.getMinutes() );
		var sec = this.timeFormat( now.getSeconds() );

		return [hour, min, sec];
	},
	getInitialState: function() {
		var timeArray = this.getNowTime();
		document.body.style.backgroundColor = '#'+timeArray.join('');
		return { time: timeArray.join('  :  ') }
	},
	componentDidMount: function() {
		setInterval( function() {
			var timeArray = this.getNowTime();
			this.setState({ time: timeArray.join('  :  ') });
			document.body.style.backgroundColor = '#'+timeArray.join('');
		}.bind(this), 1000);
	},
	render: function() {
		return (
			<div className="now">
				{this.state.time}
			</div>
		);
	}
});

ReactDOM.render(
	<Time />, document.getElementById('container')
);