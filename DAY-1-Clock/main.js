'use strict';

var Time = React.createClass({
	displayName: 'Time',

	timeFormat: function timeFormat(t) {
		return t < 10 ? "0" + t : t;
	},
	getNowTime: function getNowTime() {
		var now = new Date();
		var hour = this.timeFormat(now.getHours());
		var min = this.timeFormat(now.getMinutes());
		var sec = this.timeFormat(now.getSeconds());

		return [hour, min, sec];
	},
	getInitialState: function getInitialState() {
		var timeArray = this.getNowTime();
		document.body.style.backgroundColor = '#' + timeArray.join('');
		return { time: timeArray.join('  :  ') };
	},
	componentDidMount: function componentDidMount() {
		setInterval(function () {
			var timeArray = this.getNowTime();
			this.setState({ time: timeArray.join('  :  ') });
			document.body.style.backgroundColor = '#' + timeArray.join('');
		}.bind(this), 1000);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'now' },
			this.state.time
		);
	}
});

ReactDOM.render(React.createElement(Time, null), document.getElementById('container'));