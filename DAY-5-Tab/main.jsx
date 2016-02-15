var TabRow = React.createClass({
	handleActiveTab: function(tabNum) {
		var thisClass = 'tab tab-' + tabNum;
		if( tabNum == 1 && this.props.tab == 1 )
			thisClass += " active";
		else if( tabNum == 2 && this.props.tab == 2 )
			thisClass += " active";

		return thisClass;
	},
		render: function() {
		return (
			<div className="tab-row">
				<div className={this.handleActiveTab(1)} onClick={this.props.onClick.bind(null, 1)}>Music</div>
				<div className={this.handleActiveTab(2)} onClick={this.props.onClick.bind(null, 2)}>Documents</div>
				<div className="tab-plus">＋</div>
			</div>
		);
	}
});

var Content = React.createClass({
	handleActiveContent: function(contentNum) {
		var thisClass = "";
		if( contentNum == 1 ) {
			thisClass = "music";
			if( this.props.tab == 1 ) thisClass += " active";
		} else {
			thisClass = "documents";
			if( this.props.tab == 2 ) thisClass += " active";
		}
		return thisClass;
	},
	render: function() {
		return (
			<div className="content">
				<div className={this.handleActiveContent(1)}>
					<img src="folder.png" />
				</div>
				<div className={this.handleActiveContent(2)}>
					<img src="folder.png" /><img src="folder.png" />
				</div>
			</div>
		);
	}
});

// All in this
var Finder = React.createClass({
	getInitialState: function() {
		return { tab: 1 };
	},
	handleTabClick: function(i) {
		if( this.state.tab != i ) {
			this.setState({ tab: i });
		}
	},
	render: function() {
		return (
			<div className="finder">
				<div className="top-row">
					<div className="title">Developer</div>

					<div className="circle r"></div>
					<div className="circle y"></div>
					<div className="circle g"></div>
				</div>
				<TabRow tab={this.state.tab} onClick={this.handleTabClick} />
				<Content tab={this.state.tab} />
			</div>
		);
	}
});

ReactDOM.render(
	<Finder />, document.getElementById('container')
);