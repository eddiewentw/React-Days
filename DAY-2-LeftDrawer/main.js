"use strict";

var drawerListData = [{ id: "1", text: "Eddie is me.", linkURL: "http://eddiewen.me" }, { id: "2", text: "Facebook", linkURL: "http://facebook.com/eddie.wen.tw/" }, { id: "3", text: "GitHub", linkURL: "http://github.com/EddieWen-Taiwan" }, { id: "4", text: "Medium", linkURL: "http://medium.com/@eddiewen" }, { id: "5", text: "LinkedIn", linkURL: "http://tw.linkedin.com/in/eddiewentw" }];
var projectListData = [{ id: "1", text: "阿替倒數中", linkURL: "http://smscount.lol" }, { id: "2", text: "替代役男與他的快樂假期", linkURL: "http://github.eddiewen.me/happy-vacation/" }, { id: "3", text: "ColorSpeed", linkURL: "http://eddiewen.me/colorspeed/" }, { id: "4", text: "TypeWriting.js", linkURL: "http://github.com/EddieWen-Taiwan/TypeWriting.js" }, { id: "5", text: "fallwall.js", linkURL: "http://github.com/EddieWen-Taiwan/fallwall.js" }, { id: "6", text: "WindowSize", linkURL: "http://github.eddiewen.me/windowSize/" }];

var NaviButton = React.createClass({
	displayName: "NaviButton",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "navi-btn", onClick: this.props.onClick },
			React.createElement("img", { src: "images/detail.png" })
		);
	}
});

var ProjectList = React.createClass({
	displayName: "ProjectList",

	listStatusClass: function listStatusClass() {
		return this.props.listShow ? 'project-list show' : 'project-list';
	},
	render: function render() {
		var rows = this.props.projectData.map(function (row) {
			return React.createElement(
				"a",
				{ href: row.linkURL, target: "_blank", key: row.id },
				React.createElement(
					"div",
					{ className: "drawer-row" },
					row.text
				)
			);
		});
		return React.createElement(
			"div",
			{ className: this.listStatusClass() },
			rows
		);
	}
});

var ProjectBar = React.createClass({
	displayName: "ProjectBar",

	listStatusClass: function listStatusClass() {
		return this.props.listShow ? 'drawer-row project-bar listShow' : 'drawer-row project-bar';
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: this.listStatusClass(), onClick: this.props.onClick },
			React.createElement("img", { src: "images/bookmark.png" }),
			"Projects"
		);
	}
});

var DrawerList = React.createClass({
	displayName: "DrawerList",

	getInitialState: function getInitialState() {
		return { show: false };
	},
	toggleList: function toggleList() {
		this.setState({ show: this.state.show ? false : true });
	},
	render: function render() {
		var rows = this.props.linkData.map(function (row) {
			return React.createElement(
				"a",
				{ href: row.linkURL, target: "_blank", key: row.id },
				React.createElement(
					"div",
					{ className: "drawer-row" },
					row.text
				)
			);
		});
		return React.createElement(
			"div",
			{ className: "drawer-list" },
			rows,
			React.createElement(ProjectBar, { listShow: this.state.show, onClick: this.toggleList }),
			React.createElement(ProjectList, { listShow: this.state.show, projectData: projectListData })
		);
	}
});

var Drawer = React.createClass({
	displayName: "Drawer",

	getInitialState: function getInitialState() {
		return { drawerShow: false };
	},
	drawerClassName: function drawerClassName() {
		return this.state.drawerShow ? 'leftDrawer show' : 'leftDrawer';
	},
	switchDrawerState: function switchDrawerState() {
		this.setState({ drawerShow: this.state.drawerShow ? false : true });
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: this.drawerClassName() },
			React.createElement(
				"div",
				{ className: "top-bar" },
				React.createElement(NaviButton, { onClick: this.switchDrawerState })
			),
			React.createElement(DrawerList, { linkData: drawerListData })
		);
	}
});

ReactDOM.render(React.createElement(Drawer, null), document.getElementById('container'));