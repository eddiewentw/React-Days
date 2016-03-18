// Space area
var Space = () => <div className='space'></div>

class Test extends React.Component {

	constructor() {
		super();
		this.state = { scroll: false };
		this._handleScrollEvent = this._handleScrollEvent.bind(this);
	}

	componentDidMount() {
		window.addEventListener( 'scroll', this._handleScrollEvent );
	}

	_scrollClass() {
		let classname = 'test animated';
		if( this.state.scroll ) {
			classname += ' flipInY';
		}

		return classname;
	}

	_handleScrollEvent() {

		if( document.body.scrollTop >= document.getElementById('second').offsetTop-200 ) {
			this.setState({scroll: true});
			window.removeEventListener( 'scroll', this._handleScrollEvent );
		}

	}

	render() {
		return (
			<div id="second" className="v-mid">
				<div className={this._scrollClass()}>React Test</div>
			</div>
		);
	}

}

class Ending extends React.Component {

	constructor() {
		super();
		this.state = { scroll: false };
		this._handleScrollEvent = this._handleScrollEvent.bind(this);
	}

	componentDidMount() {
		window.addEventListener( 'scroll', this._handleScrollEvent );
	}

	_scrollClass() {
		return this.state.scroll ? 'animated rubberBand' : '';
	}

	_handleScrollEvent() {

		if( document.body.scrollTop >= document.getElementById('ending').offsetTop-200 ) {
			this.setState({ scroll: true });
			window.removeEventListener( 'scroll', this._handleScrollEvent );
		}

	}

	render() {
		return (
			<div id="ending" className="v-mid">
				<h1 className={this._scrollClass()}>Scroll Event</h1>
			</div>
		);
	}

}

class All extends React.Component {

	render() {
		return (
			<div>
				<Space />
				<Test />
				<Space />
				<Ending />
			</div>
		);
	}

}

ReactDOM.render(
	<All />, document.getElementById('container')
);