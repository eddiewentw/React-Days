"use strict";

var TabRow = React.createClass({
	displayName: "TabRow",

	handleActiveTab: function handleActiveTab(tabNum) {
		var thisClass = 'tab tab-' + tabNum;
		if (tabNum == 1 && this.props.tab == 1) thisClass += " active";else if (tabNum == 2 && this.props.tab == 2) thisClass += " active";

		return thisClass;
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "tab-row" },
			React.createElement(
				"div",
				{ className: this.handleActiveTab(1), onClick: this.props.onClick.bind(null, 1) },
				"Music"
			),
			React.createElement(
				"div",
				{ className: this.handleActiveTab(2), onClick: this.props.onClick.bind(null, 2) },
				"Documents"
			),
			React.createElement(
				"div",
				{ className: "tab-plus" },
				"＋"
			)
		);
	}
});

var Content = React.createClass({
	displayName: "Content",

	handleActiveContent: function handleActiveContent(contentNum) {
		var thisClass = "";
		if (contentNum == 1) {
			thisClass = "music";
			if (this.props.tab == 1) thisClass += " active";
		} else {
			thisClass = "documents";
			if (this.props.tab == 2) thisClass += " active";
		}
		return thisClass;
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "content" },
			React.createElement(
				"div",
				{ className: this.handleActiveContent(1) },
				React.createElement("img", { src: "folder.png" })
			),
			React.createElement(
				"div",
				{ className: this.handleActiveContent(2) },
				React.createElement("img", { src: "folder.png" }),
				React.createElement("img", { src: "folder.png" })
			)
		);
	}
});

// All in this
var Finder = React.createClass({
	displayName: "Finder",

	getInitialState: function getInitialState() {
		return { tab: 1 };
	},
	handleTabClick: function handleTabClick(i) {
		if (this.state.tab != i) {
			this.setState({ tab: i });
		}
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "finder" },
			React.createElement(
				"div",
				{ className: "top-row" },
				React.createElement(
					"div",
					{ className: "title" },
					"Developer"
				),
				React.createElement("div", { className: "circle r" }),
				React.createElement("div", { className: "circle y" }),
				React.createElement("div", { className: "circle g" })
			),
			React.createElement(TabRow, { tab: this.state.tab, onClick: this.handleTabClick }),
			React.createElement(Content, { tab: this.state.tab })
		);
	}
});

ReactDOM.render(React.createElement(Finder, null), document.getElementById('container'));