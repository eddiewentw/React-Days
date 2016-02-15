"use strict";

var screenHeight = 0;
var contents = [{ id: 1, text: "Hello, there." }, { id: 2, text: "This is Eddie's React Day-7." }, { id: 3, text: "It's cool." }, { id: 4, text: "See you tomorrow." }, { id: 5, text: "End." }];

var NavigationDots = React.createClass({
	displayName: "NavigationDots",

	render: function render() {
		var dots = this.props.text.map(function (t) {
			var thisClass = t.id == this.props.currentSec ? "dot active" : "dot";
			return React.createElement("div", { className: thisClass, onClick: this.props.onClick.bind(null, t.id) });
		}.bind(this));
		return React.createElement(
			"div",
			{ className: "navigation" },
			dots
		);
	}
});

var Sections = React.createClass({
	displayName: "Sections",

	render: function render() {
		var sectionDiv = this.props.text.map(function (t) {
			return React.createElement(
				"div",
				{ className: "section", key: t.id },
				React.createElement(
					"h2",
					null,
					t.text
				)
			);
		});
		return React.createElement(
			"div",
			{ className: "section-box" },
			sectionDiv
		);
	}
});

var SectionBox = React.createClass({
	displayName: "SectionBox",

	getInitialState: function getInitialState() {
		return { currentSection: 1 };
	},
	componentDidMount: function componentDidMount() {
		window.addEventListener('scroll', this.handleWindowScroll);
		screenHeight = document.getElementsByClassName('section')[0].clientHeight;
	},
	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('scroll', this.handleWindowScroll);
	},
	handleDotClick: function handleDotClick(i) {
		this.setState({ currentSection: i });
		window.scrollTo(0, screenHeight * (i - 1));
	},
	handleWindowScroll: function handleWindowScroll() {
		var currentTop = document.body.scrollTop;

		var quotient = Math.floor(currentTop / screenHeight);
		var remainder = currentTop % screenHeight;

		var newCurrentSection = remainder > screenHeight * 0.7 ? quotient + 2 : quotient + 1;
		if (newCurrentSection <= 0) newCurrentSection = 1;

		if (newCurrentSection != this.state.currentSection) {
			this.setState({ currentSection: newCurrentSection });
		}
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Sections, { currentSec: this.state.currentSection, text: this.props.text }),
			React.createElement(NavigationDots, { currentSec: this.state.currentSection, text: this.props.text, onClick: this.handleDotClick })
		);
	}
});

ReactDOM.render(React.createElement(SectionBox, { text: contents }), document.getElementById('container'));