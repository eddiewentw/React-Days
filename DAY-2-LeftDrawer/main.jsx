var drawerListData = [
	{ id: "1", text: "Eddie is me.", linkURL: "http://eddiewen.me" },
	{ id: "2", text: "Facebook", linkURL: "http://facebook.com/eddie.wen.tw/" },
	{ id: "3", text: "GitHub", linkURL: "http://github.com/EddieWen-Taiwan" },
	{ id: "4", text: "Medium", linkURL: "http://medium.com/@eddiewen" },
	{ id: "5", text: "LinkedIn", linkURL: "http://tw.linkedin.com/in/eddiewentw" }
];
var projectListData = [
	{ id: "1", text: "阿替倒數中", linkURL: "http://smscount.lol" },
	{ id: "2", text: "替代役男與他的快樂假期", linkURL: "http://github.eddiewen.me/happy-vacation/" },
	{ id: "3", text: "ColorSpeed", linkURL: "http://eddiewen.me/colorspeed/" },
	{ id: "4", text: "TypeWriting.js", linkURL: "http://github.com/EddieWen-Taiwan/TypeWriting.js" },
	{ id: "5", text: "fallwall.js", linkURL: "http://github.com/EddieWen-Taiwan/fallwall.js" },
	{ id: "6", text: "WindowSize", linkURL: "http://github.eddiewen.me/windowSize/" }
];

var NaviButton = React.createClass({
	render: function() {
		return (
			<div className="navi-btn" onClick={this.props.onClick} >
				<img src="images/detail.png" />
			</div>
		);
	}
});

var ProjectList = React.createClass({
	listStatusClass: function() {
		return this.props.listShow ? 'project-list show' : 'project-list';
	},
	render: function() {
		var rows = this.props.projectData.map( function(row) {
			return (					
				<a href={row.linkURL} target="_blank" key={row.id}>
					<div className="drawer-row">{row.text}</div>
				</a>
			);
		});
		return (
			<div className={this.listStatusClass()}>
				{rows}
			</div>
		);
	}
});

var ProjectBar = React.createClass({
	listStatusClass: function() {
		return this.props.listShow ? 'drawer-row project-bar listShow' : 'drawer-row project-bar';
	},
	render: function() {
		return (
			<div className={this.listStatusClass()} onClick={this.props.onClick}>
				<img src="images/bookmark.png" />
				Projects
			</div>
		);
	}
});

var DrawerList = React.createClass({
	getInitialState: function() {
		return { show: false };
	},
	toggleList: function() {
		this.setState({ show: this.state.show ? false : true });
	},
	render: function() {
		var rows = this.props.linkData.map( function(row) {
			return (
				<a href={row.linkURL} target="_blank" key={row.id}>
					<div className="drawer-row">{row.text}</div>
				</a>
			);
		});
		return (
			<div className="drawer-list">
				{rows}
				<ProjectBar listShow={this.state.show} onClick={this.toggleList} />
				<ProjectList listShow={this.state.show} projectData={projectListData} />
			</div>
		);
	}
});

var Drawer = React.createClass({
	getInitialState: function() {
		return { drawerShow: false };
	},
	drawerClassName: function() {
		return this.state.drawerShow ? 'leftDrawer show' : 'leftDrawer';
	},
	switchDrawerState: function() {
		this.setState({ drawerShow: this.state.drawerShow ? false : true });
	},
	render: function() {
		return (
			<div className={this.drawerClassName()} >
				<div className="top-bar">
					<NaviButton onClick={this.switchDrawerState} />
				</div>
				<DrawerList linkData={drawerListData} />
			</div>
		);
	}
});

ReactDOM.render(
	<Drawer />, document.getElementById('container')
);