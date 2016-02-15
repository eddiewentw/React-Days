var screenHeight = 0;
var contents = [
	{ id: 1, text: "Hello, there." },
	{ id: 2, text: "This is Eddie's React Day-7." },
	{ id: 3, text: "It's cool." },
	{ id: 4, text: "See you tomorrow." },
	{ id: 5, text: "End." }
];

var NavigationDots = React.createClass({
	render: function() {
		var dots = this.props.text.map( function(t) {
			var thisClass = t.id == this.props.currentSec ? "dot active" : "dot";
			return (
				<div className={thisClass} onClick={this.props.onClick.bind(null, t.id)}></div>
			);
		}.bind(this));
		return (
			<div className="navigation">
				{dots}
			</div>
		);
	}
});

var Sections = React.createClass({
	render: function() {
		var sectionDiv = this.props.text.map( function(t) {
			return (
				<div className="section" key={t.id}>
					<h2>{t.text}</h2>
				</div>
			);
		});
		return (
			<div className="section-box">
				{sectionDiv}
			</div>
		);
	}
})

var SectionBox = React.createClass({
	getInitialState: function() {
		return ({ currentSection: 1 });
	},
	componentDidMount: function() {
		window.addEventListener( 'scroll', this.handleWindowScroll );
		screenHeight = document.getElementsByClassName('section')[0].clientHeight;
	},
	componentWillUnmount: function() {
		window.removeEventListener( 'scroll', this.handleWindowScroll );
	},
	handleDotClick: function(i) {
		this.setState({ currentSection: i });
		window.scrollTo( 0, screenHeight*(i-1) );
	},
	handleWindowScroll: function() {
		var currentTop = document.body.scrollTop;

		var quotient = Math.floor( currentTop/screenHeight );
		var remainder = currentTop%screenHeight;

		var newCurrentSection = remainder > screenHeight*0.7 ? quotient+2 : quotient+1;
		if( newCurrentSection <= 0 ) newCurrentSection = 1;

		if( newCurrentSection != this.state.currentSection ) {
			this.setState({ currentSection: newCurrentSection });
		}
	},
	render: function() {
		return (
			<div>
				<Sections currentSec={this.state.currentSection} text={this.props.text} />
				<NavigationDots currentSec={this.state.currentSection} text={this.props.text} onClick={this.handleDotClick}/>
			</div>
		);
	}
});

ReactDOM.render(
	<SectionBox text={contents} />, document.getElementById('container')
);